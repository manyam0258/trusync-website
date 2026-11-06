import type { Metadata } from 'next'

import { PostView, postMetadata } from '@/components/blog/PostView'

// Cached HTML, rebuilt when an editor publishes (see hooks/revalidate.ts), with a five minute safety net.
export const revalidate = 300

// Nothing is built ahead of time (so the build needs no database); each page is built on first visit and then cached.
export function generateStaticParams() {
  return []
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return postMetadata((await params).slug, false)
}

export default async function PostPage({ params }: Props) {
  return <PostView slug={(await params).slug} preview={false} />
}
