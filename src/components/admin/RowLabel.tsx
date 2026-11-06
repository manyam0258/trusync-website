'use client'

import { useRowLabel } from '@payloadcms/ui'

/** Shows the section name instead of "Item 01" in the list of a page's built-in sections. */
export const SectionRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string; hidden?: boolean }>()
  return <span>{`${(rowNumber ?? 0) + 1}. ${data?.label || 'Section'}${data?.hidden ? '  (hidden)' : ''}`}</span>
}

/** Shows the start of each text so editors can find the one they want. */
export const TextRowLabel = () => {
  const { data } = useRowLabel<{ value?: string; kind?: string }>()
  const v = (data?.value ?? '').replace(/\s+/g, ' ').trim()
  const tag = data?.kind === 'url' ? 'Link: ' : data?.kind === 'image' ? 'Image: ' : data?.kind === 'alt' ? 'Image description: ' : ''
  return <span>{tag + (v.length > 80 ? `${v.slice(0, 80)}…` : v || '(empty: original text is used)')}</span>
}
