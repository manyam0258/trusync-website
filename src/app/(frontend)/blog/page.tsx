import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { absoluteUrl, getPublishedPosts, isMedia } from '@/lib/cms'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ERPNext and Frappe Blog | TruSync',
  description:
    'Practical guides on ERPNext, Frappe, AI automation and DPDP compliance for growing businesses, from the TruSync team in Hyderabad.',
  alternates: { canonical: absoluteUrl('/blog') },
}

const formatDate = (value?: string | null) =>
  value
    ? new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

export default async function BlogIndex() {
  const posts = await getPublishedPosts()

  return (
    <Section className="bg-white pt-32">
      <Container>
        <header className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Blog</h1>
          <p className="text-lg text-slate-600">
            Guides and notes on ERPNext, Frappe, AI automation and data protection.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">No posts yet</h2>
            <p className="text-slate-600">Published posts will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const hero = isMedia(post.heroImage) ? post.heroImage : null
              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    {hero?.url && (
                      <Image
                        src={hero.url}
                        alt={hero.alt || ''}
                        width={hero.width || 1200}
                        height={hero.height || 630}
                        className="aspect-[16/9] w-full object-cover"
                      />
                    )}
                    <div className="p-6">
                      <time className="text-sm text-slate-500">{formatDate(post.publishedAt)}</time>
                      <h2 className="mt-2 mb-3 text-xl font-semibold text-slate-900">{post.title}</h2>
                      <p className="text-slate-600">{post.excerpt}</p>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        )}
      </Container>
    </Section>
  )
}
