import type { CollectionAfterChangeHook } from 'payload'

/**
 * When a published document gets a new slug, the old URL would turn into a 404.
 * This adds a 301 redirect from the old URL to the document, and removes any
 * redirect that points away from the new URL so the two can never loop.
 */
export const redirectOnSlugChange =
  (collection: 'posts' | 'pages', prefix: string): CollectionAfterChangeHook =>
  async ({ doc, previousDoc, req }) => {
    if (!previousDoc?.slug || previousDoc.slug === doc.slug) return doc
    if (previousDoc._status !== 'published') return doc

    const urlFor = (slug: string) => `${prefix}/${slug}`.replace(/\/{2,}/g, '/')
    const from = urlFor(previousDoc.slug)
    const current = urlFor(doc.slug)

    try {
      await req.payload.delete({ collection: 'redirects', where: { from: { equals: current } }, req, overrideAccess: true })
      const existing = await req.payload.find({ collection: 'redirects', where: { from: { equals: from } }, limit: 1, req, overrideAccess: true })
      const data = { from, type: '301', to: { type: 'reference', reference: { relationTo: collection, value: doc.id } } }
      if (existing.docs[0]) {
        await req.payload.update({ collection: 'redirects', id: existing.docs[0].id, data, req, overrideAccess: true })
      } else {
        await req.payload.create({ collection: 'redirects', data, req, overrideAccess: true })
      }
    } catch (err) {
      req.payload.logger.error({ err, msg: 'Could not create a redirect for the old slug' })
    }
    return doc
  }
