/**
 * Turns a hand-built page component into one whose text can be managed from the CMS, without changing how it looks.
 *
 *   npx tsx scripts/codemod-editable.mts <source.tsx> <key> [--out src/components/code-pages/<key>.tsx]
 *
 * What it does to the component:
 *  - wraps every top-level <section> in <CmsSection id="sN"> so a section can be hidden from the admin,
 *  - replaces visible text, link targets, image paths and alt text with t("key", "original"),
 *    so the original wording stays the default and the CMS only stores what it overrides,
 *  - writes scripts/catalog/<key>.json listing every section and text, which the seed script loads into the admin.
 * Text that lives in constants outside the component stays in code (reported at the end).
 */
import fs from 'node:fs'
import path from 'node:path'

import ts from 'typescript'

const [, , srcArg, key, ...rest] = process.argv
if (!srcArg || !key) throw new Error('Usage: codemod-editable.mts <source.tsx> <key> [--out file] [--prefix p]')
const outArg = rest.includes('--out') ? rest[rest.indexOf('--out') + 1] : `src/components/code-pages/${key}.tsx`
const prefix = rest.includes('--prefix') ? rest[rest.indexOf('--prefix') + 1] : ''
const importDepth = rest.includes('--import') ? rest[rest.indexOf('--import') + 1] : '@/components/code-pages/runtime'

import { execSync } from 'node:child_process'
// "git:<path>" reads the file as it was before the page moved into the CMS (commit 79f4016).
const text = srcArg.startsWith('git:')
  ? execSync(`git show '79f4016:${srcArg.slice(4)}'`, { encoding: 'utf8' })
  : fs.readFileSync(srcArg, 'utf8')
const sf = ts.createSourceFile(srcArg, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)

type Edit = { start: number; end: number; replacement: string }
const edits: Edit[] = []
type Entry = { key: string; kind: 'text' | 'url' | 'image' | 'alt'; value: string }
const sections: { id: string; label: string; texts: Entry[] }[] = []
const loose: Entry[] = []
let skippedModuleScope = 0

const TEXT_PROPS = new Set([
  'title', 'description', 'label', 'text', 'name', 'desc', 'subtitle', 'heading', 'question', 'answer', 'content', 'role',
  'quote', 'tagline', 'badge', 'note', 'detail', 'details', 'body', 'summary', 'caption', 'cta', 'value', 'benefit', 'result',
  'before', 'after', 'problem', 'solution', 'feature', 'subheading', 'intro',
])
// Often compared in code, so only treated as text when the value is a phrase.
const RISKY_PROPS = new Set(['name', 'value', 'role', 'step'])
const ATTR_TEXT = new Set(['alt', 'title', 'placeholder', 'aria-label', 'subtitle', 'heading', 'description', 'label', 'ctaText', 'buttonText', 'text'])
const ATTR_URL = new Set(['href', 'ctaLink', 'link'])
const ENTITIES: Record<string, string> = { quot: '"', amp: '&', lt: '<', gt: '>', apos: "'", nbsp: '\u00a0', ndash: '\u2013', mdash: '\u2014', rsquo: '\u2019', lsquo: '\u2018', ldquo: '\u201c', rdquo: '\u201d', hellip: '\u2026', copy: '\u00a9', reg: '\u00ae', times: '\u00d7', rarr: '\u2192', larr: '\u2190', bull: '\u2022', middot: '\u00b7' }
/** JSX decodes HTML entities in text, so the stored default has to be the decoded text. */
const decode = (s: string) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
  if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10))
  return ENTITIES[e] ?? m
})
const hasLetter = (s: string) => /[A-Za-zÀ-ɏऀ-෿]/.test(s)

const isComponentFn = (n: ts.Node): n is ts.FunctionLikeDeclaration => {
  if (!(ts.isFunctionDeclaration(n) || ts.isArrowFunction(n) || ts.isFunctionExpression(n))) return false
  let name: string | undefined
  if (ts.isFunctionDeclaration(n)) name = n.name?.text
  else if (ts.isVariableDeclaration(n.parent) && ts.isIdentifier(n.parent.name)) name = n.parent.name.text
  else if (ts.isCallExpression(n.parent) && ts.isVariableDeclaration(n.parent.parent) && ts.isIdentifier(n.parent.parent.name)) name = n.parent.parent.name.text
  return !!name && /^[A-Z]/.test(name) && containsJsx(n)
}
const containsJsx = (n: ts.Node): boolean => {
  let found = false
  const walk = (x: ts.Node) => { if (found) return; if (ts.isJsxElement(x) || ts.isJsxSelfClosingElement(x) || ts.isJsxFragment(x)) { found = true; return } ts.forEachChild(x, walk) }
  walk(n)
  return found
}
const enclosingComponent = (n: ts.Node): ts.FunctionLikeDeclaration | undefined => {
  for (let p: ts.Node | undefined = n.parent; p; p = p.parent) if (isComponentFn(p)) return p
  return undefined
}

// 1. Top-level <section> elements (not nested in another section), in document order.
const sectionNodes: (ts.JsxElement)[] = []
const findSections = (n: ts.Node, inside: boolean) => {
  if (ts.isJsxElement(n) && n.openingElement.tagName.getText(sf) === 'section' && !inside) {
    sectionNodes.push(n)
    inside = true
  }
  ts.forEachChild(n, (c) => findSections(c, inside))
}
findSections(sf, false)
const sectionOf = (n: ts.Node): number => sectionNodes.findIndex((s) => n.pos >= s.pos && n.end <= s.end)

const jsxHeading = (s: ts.JsxElement): string => {
  let label = ''
  const walk = (n: ts.Node) => {
    if (label) return
    if ((ts.isJsxElement(n) && /^h[1-3]$/.test(n.openingElement.tagName.getText(sf)))) {
      label = n.getText(sf).replace(/<[^>]+>/g, ' ').replace(/\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim()
      return
    }
    ts.forEachChild(n, walk)
  }
  walk(s)
  return label.slice(0, 80)
}
sectionNodes.forEach((s, i) => sections.push({ id: `${prefix}s${i + 1}`, label: jsxHeading(s) || `Section ${i + 1}`, texts: [] }))

const counters = new Map<string, number>()
const nextKey = (secIdx: number) => {
  const id = secIdx >= 0 ? sections[secIdx].id : `${prefix}x`
  const n = (counters.get(id) ?? 0) + 1
  counters.set(id, n)
  return `${id}.${n}`
}
const addEntry = (secIdx: number, e: Entry) => (secIdx >= 0 ? sections[secIdx].texts : loose).push(e)
const q = (s: string) => JSON.stringify(s)

const needsT = new Set<ts.FunctionLikeDeclaration>()
const record = (node: ts.Node, kind: Entry['kind'], value: string): string | null => {
  const comp = enclosingComponent(node)
  if (!comp) { skippedModuleScope++; return null }
  needsT.add(comp)
  const secIdx = sectionOf(node)
  const k = nextKey(secIdx)
  addEntry(secIdx, { key: k, kind, value })
  return k
}
const fn = (kind: Entry['kind']) => (kind === 'url' ? '__u' : kind === 'image' ? '__m' : '__t')

// 2. Text, attributes and object properties.
const visit = (n: ts.Node) => {
  if (ts.isJsxText(n)) {
    const raw = text.slice(n.pos, n.end)
    if (/\S/.test(raw)) {
      // Same normalisation JSX itself applies: lines are trimmed and joined with a single space.
      const lines = raw.split(/\r\n|\n|\r/)
      let value = lines.map((l, i) => {
        let line = l.replace(/\t/g, ' ')
        if (i !== 0) line = line.replace(/^ +/, '')
        if (i !== lines.length - 1) line = line.replace(/ +$/, '')
        return line
      }).filter(Boolean).join(' ').trim()
      value = decode(value)
      const lead = /^[ \t]+\S/.test(raw) && !/^\s*\n/.test(raw) ? '{" "}' : ''
      const trail = /\S[ \t]+$/.test(raw) && !/\n\s*$/.test(raw) ? '{" "}' : ''
      if (hasLetter(value)) {
        const k = record(n, 'text', value)
        if (k) edits.push({ start: n.getStart(sf, false) === n.pos ? n.pos : n.pos, end: n.end, replacement: `${lead}{__t(${q(k)}, ${q(value)})}${trail}` })
      }
    }
  } else if (ts.isJsxAttribute(n) && n.initializer && ts.isStringLiteral(n.initializer)) {
    const name = n.name.getText(sf)
    const val = n.initializer.text
    const tag = ts.isJsxOpeningElement(n.parent.parent) || ts.isJsxSelfClosingElement(n.parent.parent) ? n.parent.parent.tagName.getText(sf) : ''
    let kind: Entry['kind'] | null = null
    if (ATTR_TEXT.has(name) && hasLetter(val)) kind = name === 'alt' ? 'alt' : 'text'
    else if (ATTR_URL.has(name) && (name !== 'href' || /^(Link|a)$/.test(tag)) && /^(\/|#|https?:)/.test(val) && val.length > 1) kind = 'url'
    else if (name === 'src' && /^(img|Image|motion\.img)$/.test(tag) && val.startsWith('/')) kind = 'image'
    if (kind) {
      const k = record(n, kind, val)
      if (k) edits.push({ start: n.initializer.getStart(sf), end: n.initializer.end, replacement: `{${fn(kind)}(${q(k)}, ${q(val)})}` })
    }
  } else if (ts.isPropertyAssignment(n) && (ts.isStringLiteral(n.initializer) || ts.isNoSubstitutionTemplateLiteral(n.initializer))) {
    const pname = ts.isIdentifier(n.name) || ts.isStringLiteral(n.name) ? n.name.text : ''
    const val = n.initializer.text
    if ((TEXT_PROPS.has(pname) || (RISKY_PROPS.has(pname) && /\s/.test(val.trim()))) && hasLetter(val) && val.length > 1 && !ts.isJsxAttribute(n.parent) && !/^[a-z][a-z-]*(\s[a-z-]+)*$/.test(val.trim())) {
      const k = record(n, 'text', val)
      if (k) edits.push({ start: n.initializer.getStart(sf), end: n.initializer.end, replacement: `__t(${q(k)}, ${q(val)})` })
    }
  }
  ts.forEachChild(n, visit)
}
visit(sf)

// 3. Wrap sections.
sectionNodes.forEach((s, i) => {
  edits.push({ start: s.getStart(sf), end: s.getStart(sf), replacement: `<CmsSection id=${q(sections[i].id)}>` })
  edits.push({ start: s.end, end: s.end, replacement: '</CmsSection>' })
})

// 4. Give every component that uses t/u/m its helpers.
const helperLine = 'const { t: __t, u: __u, m: __m } = useCms();'
for (const comp of needsT) {
  if (!comp.body) continue
  if (ts.isBlock(comp.body)) {
    edits.push({ start: comp.body.getStart(sf) + 1, end: comp.body.getStart(sf) + 1, replacement: `\n    ${helperLine}` })
  } else {
    edits.push({ start: comp.body.getStart(sf), end: comp.body.getStart(sf), replacement: `{ ${helperLine} return ` })
    edits.push({ start: comp.body.end, end: comp.body.end, replacement: '; }' })
  }
}

// 5. Imports.
const importInsertAt = (() => {
  let last = 0
  sf.statements.forEach((s) => { if (ts.isImportDeclaration(s)) last = s.end })
  return last
})()
edits.push({ start: importInsertAt, end: importInsertAt, replacement: `\nimport { CmsSection, useCms } from '${importDepth}';` })

// Apply from the end so offsets stay valid. Edits at the same start keep insertion order (wrap before text).
let out = text
edits
  .map((e, i) => ({ ...e, i }))
  .sort((a, b) => b.start - a.start || b.end - a.end || b.i - a.i)
  .forEach((e) => { out = out.slice(0, e.start) + e.replacement + out.slice(e.end) })

// Server pages that become client components need the directive.
if (!/^\s*['"]use client['"]/.test(out)) out = `'use client';\n\n${out}`
// A page that exported metadata keeps it in the CMS instead (SEO tab).
out = out.replace(/export const metadata[^=]*=\s*\{[\s\S]*?\n\};?\n/, '')

fs.mkdirSync(path.dirname(outArg), { recursive: true })
fs.writeFileSync(outArg, out)

const catalogFile = `scripts/catalog/${key}.json`
fs.mkdirSync(path.dirname(catalogFile), { recursive: true })
fs.writeFileSync(catalogFile, JSON.stringify({ key, sections: sections.map((s) => ({ ...s })), loose }, null, 1))

const total = sections.reduce((n, s) => n + s.texts.length, 0) + loose.length
console.log(`${key}: ${sections.length} sections, ${total} editable texts (${loose.length} outside sections), ${skippedModuleScope} left in code (outside components). -> ${outArg}`)
