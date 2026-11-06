import type { Metadata } from 'next'

import { PageView, pageMetadata } from '@/components/cms/PageView'
import { HomeView, homeMetadata } from '@/components/home/HomeView'

// Cached HTML, rebuilt when an editor publishes (see hooks/revalidate.ts), with a five minute safety net.
export const revalidate = 300

// Nothing is built ahead of time (so the build needs no database); each page, including the home page
// at "/", is built on first visit and then cached.
export function generateStaticParams() {
  return []
}

type Props = { params: Promise<{ slug?: string[] }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return slug?.length ? pageMetadata(slug.join('/'), false) : homeMetadata(false)
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  return slug?.length ? <PageView path={slug.join('/')} preview={false} /> : <HomeView preview={false} />
}
