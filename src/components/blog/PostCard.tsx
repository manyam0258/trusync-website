import Image from 'next/image'
import Link from 'next/link'

import { isMedia } from '@/lib/cms'

export const formatDate = (value?: string | null) =>
  value ? new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

type Post = {
  id: number | string
  slug?: string | null
  title?: string | null
  excerpt?: string | null
  publishedAt?: string | null
  heroImage?: unknown
}

export function PostCard({ post }: { post: Post }) {
  const hero = isMedia(post.heroImage) ? post.heroImage : null
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {hero?.url ? (
          <Image
            src={hero.url}
            alt={hero.alt || ''}
            width={hero.width || 1200}
            height={hero.height || 630}
            className="aspect-[16/9] w-full object-cover"
          />
        ) : (
          <div className="aspect-[16/9] w-full bg-slate-100" aria-hidden="true" />
        )}
        <div className="flex flex-1 flex-col p-6">
          <time className="text-sm text-slate-500" dateTime={post.publishedAt ?? undefined}>
            {formatDate(post.publishedAt)}
          </time>
          <h2 className="mt-2 mb-3 text-xl font-semibold text-slate-900">{post.title}</h2>
          <p className="text-slate-600">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}
