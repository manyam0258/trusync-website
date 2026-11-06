import type { Field } from 'payload'

export const formatSlug = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9/\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/\/{2,}/g, '/')
    .replace(/^[-/]+|[-/]+$/g, '')

/**
 * URL slug. Generated from the title when left empty.
 * Set allowSlashes for page paths such as "services/consulting".
 */
export const slugField = (opts: { allowSlashes?: boolean; source?: string } = {}): Field => {
  const source = opts.source ?? 'title'
  return {
    name: 'slug',
    type: 'text',
    required: true,
    unique: true,
    index: true,
    admin: {
      position: 'sidebar',
      description: opts.allowSlashes
        ? 'URL path without a leading slash, for example services/consulting. Leave empty to generate it from the title.'
        : 'Part of the URL. Leave empty to generate it from the title.',
    },
    hooks: {
      beforeValidate: [
        ({ value, data }) => {
          const raw = typeof value === 'string' && value.trim() ? value : (data?.[source] as string | undefined)
          if (!raw) return value
          const slug = formatSlug(raw)
          return opts.allowSlashes ? slug : slug.replace(/\//g, '-')
        },
      ],
    },
  }
}
