import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DraftBanner } from '@/components/cms/DraftBanner'
import { RenderBlocks } from '@/components/cms/RenderBlocks'
import { absoluteUrl, findRedirect, followRedirect, getPage, isMedia, SITE_NAME } from '@/lib/cms'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string[] }> }
type Seo = { title?: string | null; description?: string | null; image?: unknown }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { doc: page, preview } = await getPage(slug.join('/'))
  if (!page) return {}
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

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  const path = slug.join('/')
  const { doc: page, preview } = await getPage(path)

  if (!page) {
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
