import type { Metadata } from 'next'

import JsonLd from '@/components/JsonLd'
import { CategoryNav } from '@/components/blog/CategoryNav'
import { Pagination } from '@/components/blog/Pagination'
import { PostCard } from '@/components/blog/PostCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { absoluteUrl, getCategories, getPosts, SITE_URL } from '@/lib/cms'

export const dynamic = 'force-dynamic'

type Props = { searchParams: Promise<{ page?: string }> }

const pageNumber = (v?: string) => Math.max(1, Number.parseInt(v ?? '1', 10) || 1)

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = pageNumber((await searchParams).page)
  return {
    title: page > 1 ? `ERPNext and Frappe Blog, page ${page} | TruSync` : 'ERPNext and Frappe Blog | TruSync',
    description:
      'Practical guides on ERPNext, Frappe, AI automation and DPDP compliance for growing businesses, from the TruSync team in Hyderabad.',
    alternates: {
      canonical: absoluteUrl(page > 1 ? `/blog?page=${page}` : '/blog'),
      types: { 'application/rss+xml': absoluteUrl('/blog/rss.xml') },
    },
  }
}

export default async function BlogIndex({ searchParams }: Props) {
  const page = pageNumber((await searchParams).page)
  const [{ docs: posts, totalPages }, categories] = await Promise.all([getPosts({ page }), getCategories()])

  return (
    <Section className="bg-white pt-32 md:pt-36">
      <Container>
        <header className="mb-10 max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Blog</h1>
          <p className="text-lg text-slate-600">
            Guides and notes on ERPNext, Frappe, AI automation and data protection.
          </p>
        </header>

        <CategoryNav categories={categories} />

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">No posts yet</h2>
            <p className="text-slate-600">Published posts will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} basePath="/blog" />
      </Container>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'TruSync blog',
          url: absoluteUrl('/blog'),
          isPartOf: { '@type': 'WebSite', name: 'TruSync', url: SITE_URL },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: posts.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: absoluteUrl(`/blog/${post.slug}`),
              name: post.title,
            })),
          },
        }}
      />
    </Section>
  )
}
