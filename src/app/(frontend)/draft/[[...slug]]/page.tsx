import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageView, pageMetadata } from '@/components/cms/PageView'
import { HomeView } from '@/components/home/HomeView'
import { isPreview } from '@/lib/cms'

// Unpublished changes, opened from the admin's Preview and Live Preview buttons. Never cached, never indexed.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug?: string[] }> }

const pathOf = async (params: Props['params']) => (await params).slug?.join('/') || 'home'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!(await isPreview())) return {}
  return { ...(await pageMetadata(await pathOf(params), true)), robots: { index: false, follow: false } }
}

export default async function DraftPage({ params }: Props) {
  if (!(await isPreview())) notFound()
  const path = await pathOf(params)
  return path === 'home' ? <HomeView preview /> : <PageView path={path} preview />
}
