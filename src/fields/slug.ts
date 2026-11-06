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
 * - Titles with no Latin letters (for example only Telugu or Hindi) get a short generated slug
 *   instead of an empty one. Set the slug by hand for a readable address.
 * - When a generated slug is already taken, "-2", "-3" and so on is added.
 * Set allowSlashes for page paths such as "services/consulting".
 */
export const slugField = (opts: { allowSlashes?: boolean; source?: string; fallback?: string } = {}): Field => {
  const source = opts.source ?? 'title'
  const fallback = opts.fallback ?? 'item'
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
        async ({ value, data, req, operation, originalDoc, collection }) => {
          const supplied = typeof value === 'string' && value.trim() !== ''
          const raw = supplied ? (value as string) : (data?.[source] as string | undefined)
          if (!raw) return value

          let slug = formatSlug(raw)
          if (!opts.allowSlashes) slug = slug.replace(/\//g, '-')
          if (!slug) slug = `${fallback}-${Date.now().toString(36)}`

          // A slug someone typed is theirs to manage. Only generated ones are made unique here.
          if (supplied || operation !== 'create' || !collection?.slug) return slug

          let candidate = slug
          for (let n = 2; n < 50; n++) {
            const taken = await req.payload.find({
              collection: collection.slug as never,
              where: { slug: { equals: candidate } },
              limit: 1,
              depth: 0,
              pagination: false,
              req,
              overrideAccess: true,
              select: { slug: true } as never,
            })
            if (!taken.docs.length || (originalDoc && (taken.docs[0] as { id: number | string }).id === originalDoc.id)) return candidate
            candidate = `${slug}-${n}`
          }
          return candidate
        },
      ],
    },
  }
}
