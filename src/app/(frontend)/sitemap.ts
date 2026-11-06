import type { MetadataRoute } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { SITE_URL } from '@/lib/cms'
import { CODE_ROUTES } from '@/lib/site-pages'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = CODE_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
  }))
  entries.push({ url: `${SITE_URL}/blog` })

  try {
    const payload = await getPayloadClient()
    const [pages, posts] = await Promise.all([
      payload.find({
        collection: 'pages',
        where: { and: [{ _status: { equals: 'published' } }, { noindex: { not_equals: true } }] },
        limit: 1000,
        depth: 0,
        select: { slug: true, updatedAt: true },
      }),
      payload.find({
        collection: 'posts',
        where: { _status: { equals: 'published' } },
        limit: 1000,
        depth: 0,
        select: { slug: true, updatedAt: true },
      }),
    ])
    for (const p of pages.docs) {
      entries.push({ url: `${SITE_URL}/${p.slug}`, lastModified: p.updatedAt as string })
    }
    for (const p of posts.docs) {
      entries.push({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.updatedAt as string })
    }
    const categories = await payload.find({ collection: 'categories', limit: 1000, depth: 0, select: { slug: true } })
    for (const c of categories.docs) entries.push({ url: `${SITE_URL}/blog/category/${c.slug}` })
  } catch (err) {
    console.error('Sitemap: could not read CMS content', err)
  }

  return entries
}
