import { draftMode } from 'next/headers'
import { permanentRedirect, redirect } from 'next/navigation'

import { getPayloadClient } from './payload'
import { serverUrl } from './server-url'
import { isSafeRedirectTarget } from './safe-url'

export const SITE_URL = serverUrl()
export const SITE_NAME = 'TruSync'
export const POSTS_PER_PAGE = 12

export type MediaDoc = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

export const isMedia = (value: unknown): value is MediaDoc =>
  typeof value === 'object' && value !== null && 'url' in value

export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) return path
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  return url === `${SITE_URL}/` ? SITE_URL : url.replace(/\/$/, '')
}

/** True when an editor opened the site through the admin's Preview or Live Preview button. */
export async function isPreview(): Promise<boolean> {
  try {
    return (await draftMode()).isEnabled
  } catch {
    return false
  }
}

export async function getPage(path: string, preview = false) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: preview
      ? { slug: { equals: path } }
      : { and: [{ slug: { equals: path } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
    draft: preview,
    overrideAccess: preview,
  })
  return { doc: docs[0] ?? null, preview }
}

export async function getPost(slug: string, preview = false) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: preview
      ? { slug: { equals: slug } }
      : { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
    draft: preview,
    overrideAccess: preview,
  })
  return { doc: docs[0] ?? null, preview }
}

export async function getPosts({
  page = 1,
  limit = POSTS_PER_PAGE,
  categoryId,
}: { page?: number; limit?: number; categoryId?: number | string } = {}) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: categoryId
      ? { and: [{ _status: { equals: 'published' } }, { categories: { contains: categoryId } }] }
      : { _status: { equals: 'published' } },
    sort: '-publishedAt',
    page,
    limit,
    depth: 1,
  })
  return { docs: result.docs, totalPages: result.totalPages, totalDocs: result.totalDocs, page: result.page ?? page }
}

export async function getCategories() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'categories', limit: 100, sort: 'title', depth: 0 })
  return docs
}

export async function getCategoryBySlug(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, limit: 1, depth: 0 })
  return docs[0] ?? null
}

export async function getRelatedPosts(post: { id: number | string; relatedPosts?: unknown; categories?: unknown }, max = 3) {
  const chosen = ((post.relatedPosts as unknown[]) ?? []).filter(
    (p): p is { id: number | string; _status?: string } => typeof p === 'object' && p !== null && (p as { _status?: string })._status === 'published',
  )
  if (chosen.length >= max) return chosen.slice(0, max)
  const categoryIds = ((post.categories as unknown[]) ?? []).map((c) => (typeof c === 'object' && c ? (c as { id: number | string }).id : c)).filter(Boolean)
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { _status: { equals: 'published' } },
        { id: { not_equals: post.id } },
        ...(categoryIds.length ? [{ categories: { in: categoryIds } }] : []),
      ],
    },
    sort: '-publishedAt',
    limit: max,
    depth: 1,
  })
  const seen = new Set(chosen.map((p) => String(p.id)))
  return [...chosen, ...docs.filter((d) => !seen.has(String(d.id)))].slice(0, max)
}

export type SiteSettings = {
  siteName?: string
  legalName?: string
  defaultDescription?: string
  defaultShareImage?: unknown
  blogCta?: { heading?: string; body?: string; buttonLabel?: string; buttonUrl?: string }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'site-settings', depth: 1 })) as SiteSettings
  } catch {
    return {}
  }
}

/** Minutes to read, from the words in the rich text body. */
export function readingMinutes(content: unknown): number {
  let words = 0
  const walk = (node: unknown) => {
    if (!node || typeof node !== 'object') return
    const n = node as { text?: string; children?: unknown[]; root?: unknown }
    if (typeof n.text === 'string') words += n.text.trim().split(/\s+/).filter(Boolean).length
    if (Array.isArray(n.children)) n.children.forEach(walk)
    if (n.root) walk(n.root)
  }
  walk(content)
  return Math.max(1, Math.round(words / 200))
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
  // A redirect that points at the page being requested would loop forever.
  if (!target || target === `/${path}` || target === path) return null
  if (!isSafeRedirectTarget(target)) return null
  return { target, permanent: doc.type !== '302' }
}

/** 301 rules answer with HTTP 308 and 302 rules with 307, so search engines treat them correctly. */
export function followRedirect(moved: { target: string; permanent: boolean }): never {
  if (moved.permanent) permanentRedirect(moved.target)
  redirect(moved.target)
}
