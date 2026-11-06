import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PostView, postMetadata } from '@/components/blog/PostView'
import { isPreview } from '@/lib/cms'

// Unpublished changes to a post, opened from the admin's Preview and Live Preview buttons. Never cached, never indexed.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!(await isPreview())) return {}
  return { ...(await postMetadata((await params).slug, true)), robots: { index: false, follow: false } }
}

export default async function DraftPost({ params }: Props) {
  if (!(await isPreview())) notFound()
  return <PostView slug={(await params).slug} preview />
}
