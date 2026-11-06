/** Helpers behind the SEO tab's "Auto-generate" buttons for pages and posts. */

type Node = { text?: string; children?: Node[]; root?: Node }

const lexicalText = (node: unknown): string => {
  if (!node || typeof node !== 'object') return ''
  const n = node as Node
  const own = typeof n.text === 'string' ? n.text : ''
  const kids = Array.isArray(n.children) ? n.children.map(lexicalText).join(' ') : ''
  const root = n.root ? lexicalText(n.root) : ''
  return `${own} ${kids} ${root}`
}

const clean = (value: unknown): string => {
  const text = typeof value === 'string' ? value : lexicalText(value)
  return text.replace(/\s+/g, ' ').trim()
}

/** About 155 characters, cut at a word boundary, which is what search results usually show. */
export const toDescription = (text: string, max = 155): string => {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`
}

type Block = Record<string, unknown> & { blockType?: string }

/** First sentence-like text found in the page's sections, in the order they appear. */
export const pageDescription = (doc: { layout?: Block[] } | undefined): string => {
  for (const block of doc?.layout ?? []) {
    const items = Array.isArray(block.items) ? (block.items as Record<string, unknown>[]) : []
    const candidates = [
      block.subheading,
      block.intro,
      block.body,
      block.content,
      items[0]?.answer,
      items[0]?.description,
    ]
    for (const c of candidates) {
      const text = clean(c)
      if (text) return toDescription(text)
    }
  }
  return ''
}

/** The first image used by a section, so shared links show a picture. */
export const pageImage = (doc: { layout?: Block[] } | undefined): unknown => {
  for (const block of doc?.layout ?? []) {
    if (block.image) return block.image
  }
  return undefined
}
