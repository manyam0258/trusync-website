/**
 * Writes src/seed/default-pages.json: every page the website ships with, as plain data.
 * The site reads this file on start to create any page that is missing from a fresh database (src/seed/run.ts).
 * Images are written as { __media: "<file under public/assets>", alt } and uploaded when the page is created.
 *
 *   npx tsx scripts/build-seed-data.mts
 *
 * Run it again only when the default content in scripts/seed-pages.mts or scripts/catalog changes, and commit the result.
 */
import fs from 'node:fs'

import { PAGES, metaFrom, type Catalog } from './seed-code-pages.mjs'
import { allSeeds, paragraphs } from './seed-pages.mjs'

type Out = { slug: string; title: string; noindex: boolean; meta: { title?: string; description?: string }; layout: unknown[] }
const out: Out[] = []

for (const seed of allSeeds()) {
  out.push({
    slug: seed.slug,
    title: seed.title,
    noindex: seed.noindex ?? false,
    meta: { title: seed.metaTitle, description: seed.metaDescription },
    layout: await seed.layout({ md: async (t) => paragraphs(t), media: async (file, alt) => ({ __media: file, alt }) as never }),
  })
}

for (const [key, page] of Object.entries(PAGES)) {
  const file = `scripts/catalog/${key}.json`
  if (!fs.existsSync(file)) continue
  const cat = JSON.parse(fs.readFileSync(file, 'utf8')) as Catalog
  const meta = metaFrom(page.metaFiles)
  out.push({
    slug: page.path,
    title: page.title,
    noindex: false,
    meta: { title: meta.title ?? page.metaTitle, description: meta.description ?? page.metaDescription },
    layout: [{
      blockType: 'codePage',
      page: key,
      sections: [
        ...cat.sections.map((s) => ({ sectionId: s.id, label: s.label, hidden: false, texts: s.texts })),
        ...(cat.loose.length ? [{ sectionId: 'x', label: 'Other text on the page', hidden: false, texts: cat.loose }] : []),
      ],
    }],
  })
}

fs.mkdirSync('src/seed', { recursive: true })
fs.writeFileSync('src/seed/default-pages.json', JSON.stringify(out))
console.log(`Wrote ${out.length} pages to src/seed/default-pages.json (${Math.round(fs.statSync('src/seed/default-pages.json').size / 1024)} KB)`)
