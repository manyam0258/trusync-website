import { getPayloadClient } from './payload'

export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://trusync.in'

export type MediaDoc = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

export const isMedia = (value: unknown): value is MediaDoc =>
  typeof value === 'object' && value !== null && 'url' in value

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/$/, '') || SITE_URL

export async function getPublishedPage(path: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: { and: [{ slug: { equals: path } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
}

export async function getPublishedPost(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
}

export async function getPublishedPosts(limit = 50) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit,
    depth: 1,
  })
  return docs
}

export async function findRedirect(path: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'redirects',
    where: { from: { in: [`/${path}`, path] } },
    limit: 1,
    depth: 1,
  })
  const doc = docs[0] as
    | { to?: { type?: string; url?: string; reference?: { value?: { slug?: string }; relationTo?: string } }; type?: string }
    | undefined
  if (!doc?.to) return null
  let target = doc.to.url
  if (doc.to.type === 'reference' && doc.to.reference?.value?.slug) {
    const slug = doc.to.reference.value.slug
    target = doc.to.reference.relationTo === 'posts' ? `/blog/${slug}` : `/${slug}`
  }
  return target ? { target, permanent: doc.type !== '302' } : null
}
