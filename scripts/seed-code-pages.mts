/**
 * Creates the CMS pages for the hand-built page designs listed in src/lib/code-pages.ts.
 * Run scripts/codemod-editable.mts first (it writes scripts/catalog/<key>.json).
 *
 *   SEED_EMAIL=... SEED_PASSWORD=... [SEED_BASE=http://localhost:3000] npx tsx scripts/seed-code-pages.mts [key ...] [--dry-run]
 *
 * A page that already exists is left alone, so edits made in the admin are never overwritten.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

const BASE = process.env.SEED_BASE || 'http://localhost:3000'
const DRY = process.argv.includes('--dry-run')
const REPLACE = process.argv.includes('--replace') // delete and recreate: only for a page nobody has edited yet
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const BASE_COMMIT = '79f4016'

export const PAGES: Record<string, { path: string; title: string; metaTitle?: string; metaDescription?: string; metaFiles: string[] }> = {
  'accounting-module': { path: 'services/accounting-module', title: 'ERPNext Accounting and Asset Management', metaTitle: 'ERPNext Accounting & Asset Management Software in Hyderabad | TruSync', metaDescription: 'One system for financial accounting and fixed assets: chart of accounts, multi-currency, budgeting, tax compliance and asset lifecycle. ERPNext implemented by TruSync in Hyderabad.', metaFiles: ['services/accounting-module/layout.tsx', 'services/accounting-module/page.tsx'] },
  'hr-payroll-module': { path: 'services/hr-payroll-module', title: 'ERPNext HR and Payroll', metaFiles: ['services/hr-payroll-module/layout.tsx', 'services/hr-payroll-module/page.tsx'] },
  'order-management-module': { path: 'services/order-management-module', title: 'ERPNext Inventory and Order Management', metaTitle: 'ERPNext Inventory & Order Management Software in Hyderabad | TruSync', metaDescription: 'Manage stock, warehouses and items with ERPNext, integrated with procurement, accounting and sales. Implemented and customised by TruSync in Hyderabad.', metaFiles: ['services/order-management-module/layout.tsx', 'services/order-management-module/page.tsx'] },
  'ai-automation': { path: 'innovation/ai-automation', title: 'AI Automation', metaFiles: ['innovation/ai-automation/layout.tsx', 'innovation/ai-automation/page.tsx'] },
  'dpdp-compliance': { path: 'innovation/dpdp-compliance', title: 'DPDP Compliance', metaFiles: ['innovation/dpdp-compliance/layout.tsx', 'innovation/dpdp-compliance/page.tsx'] },
  'frappe-framework': { path: 'solutions/frappe-framework', title: 'Frappe Framework Development', metaFiles: ['solutions/frappe-framework/layout.tsx', 'solutions/frappe-framework/page.tsx'] },
}

const fromGit = (file: string) => {
  try { return execSync(`git show '${BASE_COMMIT}:src/app/(frontend)/${file}'`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }) } catch { return '' }
}
export const metaFrom = (files: string[]) => {
  for (const f of files) {
    const full = fromGit(f)
    const at = full.indexOf('export const metadata')
    if (at < 0) continue
    const src = full.slice(at, at + 3000) // only the metadata object, never titles that appear later in the page
    const t = src.match(/title:\s*(['"`])([\s\S]*?)\1,/)
    if (t) {
      const d = src.match(/description:\s*(['"`])([\s\S]*?)\1,?\s*\n/)
      return { title: t[2].replace(/\\'/g, "'"), description: d?.[2].replace(/\\'/g, "'") }
    }
  }
  return {} as { title?: string; description?: string }
}

export type Catalog = { key: string; sections: { id: string; label: string; texts: { key: string; kind: string; value: string }[] }[]; loose: { key: string; kind: string; value: string }[] }

async function main() {
  const keys = (only.length ? only : Object.keys(PAGES)).filter((k) => fs.existsSync(`scripts/catalog/${k}.json`))
  const headers = { 'content-type': 'application/json', origin: BASE }
  const login = await fetch(`${BASE}/api/users/login`, { method: 'POST', headers, body: JSON.stringify({ email: process.env.SEED_EMAIL, password: process.env.SEED_PASSWORD }) })
  if (!login.ok) throw new Error(`Login failed (${login.status}). Set SEED_EMAIL and SEED_PASSWORD to an admin account.`)
  const authed = { ...headers, cookie: login.headers.getSetCookie().map((c) => c.split(';')[0]).join('; ') }

  for (const key of keys) {
    const page = PAGES[key]
    const cat = JSON.parse(fs.readFileSync(`scripts/catalog/${key}.json`, 'utf8')) as Catalog
    const found = (await (await fetch(`${BASE}/api/pages?where[slug][equals]=${encodeURIComponent(page.path)}&draft=true&limit=1&depth=0`, { headers: authed })).json()) as { docs?: unknown[] }
    if (found.docs?.length && REPLACE && !DRY) {
      const id = (found.docs[0] as { id: number }).id
      await fetch(`${BASE}/api/pages/${id}`, { method: 'DELETE', headers: authed })
      console.log(`removed ${page.path} to recreate it`)
    } else if (found.docs?.length) { console.log(`skip    ${page.path} (already in the CMS)`); continue }
    const sections = [
      ...cat.sections.map((s) => ({ sectionId: s.id, label: s.label, hidden: false, texts: s.texts })),
      ...(cat.loose.length ? [{ sectionId: 'x', label: 'Other text on the page', hidden: false, texts: cat.loose }] : []),
    ]
    const meta = metaFrom(page.metaFiles)
    const count = sections.reduce((n, s) => n + s.texts.length, 0)
    if (DRY) { console.log(`would create ${page.path}: ${sections.length} sections, ${count} texts, meta: ${meta.title ?? '(none)'}`); continue }
    const res = await fetch(`${BASE}/api/pages`, {
      method: 'POST', headers: authed,
      body: JSON.stringify({
        title: page.title, slug: page.path, noindex: false,
        meta: { title: meta.title ?? page.metaTitle, description: meta.description ?? page.metaDescription },
        layout: [{ blockType: 'codePage', page: key, sections }],
        _status: 'published',
      }),
    })
    if (!res.ok) { console.error(`FAILED  ${page.path}: ${res.status} ${(await res.text()).slice(0, 500)}`); continue }
    console.log(`created ${page.path} (${sections.length} sections, ${count} texts)`)
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch((e) => { console.error(e); process.exit(1) })
