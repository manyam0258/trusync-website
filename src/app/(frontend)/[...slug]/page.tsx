import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { RenderBlocks } from '@/components/cms/RenderBlocks'
import { absoluteUrl, findRedirect, getPublishedPage, isMedia } from '@/lib/cms'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string[] }> }

type Seo = { title?: string | null; description?: string | null; image?: unknown }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPublishedPage(slug.join('/'))
  if (!page) return {}
  const meta = (page.meta ?? {}) as Seo
  const title = meta.title || `${page.title} | TruSync`
  const description = meta.description || undefined
  const url = absoluteUrl(`/${page.slug}`)
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: page.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      images: isMedia(meta.image) && meta.image.url ? [{ url: absoluteUrl(meta.image.url) }] : undefined,
    },
  }
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  const path = slug.join('/')
  const page = await getPublishedPage(path)

  if (!page) {
    const moved = await findRedirect(path)
    if (moved) redirect(moved.target)
    notFound()
  }

  return <RenderBlocks blocks={page.layout as never} />
}
