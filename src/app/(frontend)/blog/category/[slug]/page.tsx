import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryNav } from '@/components/blog/CategoryNav'
import { Pagination } from '@/components/blog/Pagination'
import { PostCard } from '@/components/blog/PostCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { absoluteUrl, getCategories, getCategoryBySlug, getPosts } from '@/lib/cms'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }

const pageNumber = (v?: string) => Math.max(1, Number.parseInt(v ?? '1', 10) || 1)

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = pageNumber((await searchParams).page)
  const category = await getCategoryBySlug(slug)
  if (!category) return {}
  const path = `/blog/category/${slug}`
  return {
    title: `${category.title} | TruSync blog`,
    description: category.description || `Posts about ${category.title} from the TruSync team.`,
    alternates: { canonical: absoluteUrl(page > 1 ? `${path}?page=${page}` : path) },
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params
  const page = pageNumber((await searchParams).page)
  const category = await getCategoryBySlug(slug)
  if (!category) notFound()
  const [{ docs: posts, totalPages }, categories] = await Promise.all([
    getPosts({ page, categoryId: category.id }),
    getCategories(),
  ])

  return (
    <Section className="bg-white pt-32 md:pt-36">
      <Container>
        <header className="mb-10 max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{category.title}</h1>
          {category.description && <p className="text-lg text-slate-600">{category.description}</p>}
        </header>
        <CategoryNav categories={categories} activeSlug={slug} />
        {posts.length === 0 ? (
          <p className="text-slate-600">No posts in this category yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        <Pagination page={page} totalPages={totalPages} basePath={`/blog/category/${slug}`} />
      </Container>
    </Section>
  )
}
