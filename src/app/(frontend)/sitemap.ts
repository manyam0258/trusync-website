import type { MetadataRoute } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { SITE_URL } from '@/lib/cms'

export const dynamic = 'force-dynamic'

/**
 * Pages that still live in code. Remove an entry once the page is moved to the CMS,
 * because CMS pages are added below automatically. Placeholder pages with no real
 * content yet are left out on purpose.
 */
const CODE_ROUTES = [
  '/',
  '/solutions/frappe-framework',
  '/solutions/frappe-insights',
  '/solutions/frappe-lms',
  '/services/accounting-module',
  '/services/asset-management-module',
  '/services/crm-module',
  '/services/helpdesk-module',
  '/services/hr-payroll-module',
  '/services/order-management-module',
  '/services/website-module',
  '/innovation/ai-automation',
  '/innovation/dpdp-compliance',
  '/innovation/open-source-integrations',
  '/industries/construction',
  '/industries/crowdfunding',
  '/industries/dairy',
  '/industries/distribution',
  '/industries/education',
  '/industries/epc',
  '/industries/hr-payroll',
  '/industries/manufacturing',
  '/industries/nbfc',
  '/industries/textile',
  '/blog',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = CODE_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
  }))

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
  } catch (err) {
    console.error('Sitemap: could not read CMS content', err)
  }

  return entries
}
