import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'

import { CodePageProvider } from '@/components/code-pages/runtime'
import { CODE_PAGE_COMPONENTS } from '@/components/code-pages/registry'
import { CODE_PAGES } from '@/lib/code-pages'
import { absoluteUrl, findRedirect, followRedirect, getPage, isMedia, SITE_NAME } from '@/lib/cms'
import { getPayloadClient } from '@/lib/payload'

import { DraftBanner } from './DraftBanner'
import { RenderBlocks } from './RenderBlocks'

type Seo = { title?: string | null; description?: string | null; image?: unknown }

/** The hand-built design for an address, used only when the database has no page row for it at all. */
const codeFallback = async (path: string) => {
  const entry = CODE_PAGES.find((p) => p.path === path)
  if (!entry) return null
  try {
    const payload = await getPayloadClient()
    const any = await payload.find({ collection: 'pages', where: { slug: { equals: path } }, limit: 1, depth: 0, draft: true, overrideAccess: true, select: { slug: true } })
    // A page that exists but is unpublished must stay hidden, so only a missing row falls back.
    if (any.docs.length) return null
  } catch {
    // The database cannot be reached: still show the page rather than an error.
  }
  return entry
}

export async function pageMetadata(path: string, preview: boolean): Promise<Metadata> {
  if (path === 'home') return {}
  const { doc: page } = await getPage(path, preview)
  if (!page) {
    const fallback = await codeFallback(path)
    return fallback
      ? { title: fallback.title, description: fallback.description, alternates: { canonical: absoluteUrl(`/${path}`) } }
      : {}
  }
  const meta = (page.meta ?? {}) as Seo
  const title = meta.title || `${page.title} | ${SITE_NAME}`
  const description = meta.description || undefined
  const url = absoluteUrl(`/${page.slug}`)
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: preview || page.noindex ? { index: false, follow: !preview } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: isMedia(meta.image) && meta.image.url ? [{ url: absoluteUrl(meta.image.url) }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export async function PageView({ path, preview }: { path: string; preview: boolean }) {
  // The CMS page called "home" is the front page, so /home is only a second address for it.
  if (path === 'home' && !preview) permanentRedirect('/')
  const { doc: page } = await getPage(path, preview)

  if (!page) {
    const fallback = await codeFallback(path)
    const Fallback = fallback ? CODE_PAGE_COMPONENTS[fallback.key] : undefined
    if (Fallback) {
      return (
        <CodePageProvider texts={{}} hidden={[]}>
          <Fallback />
        </CodePageProvider>
      )
    }
    const moved = await findRedirect(path)
    if (moved) followRedirect(moved)
    notFound()
  }

  return (
    <>
      {preview && <DraftBanner status={page._status} />}
      <RenderBlocks blocks={page.layout as never} />
    </>
  )
}
