import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import { RichTextContent } from '@/components/cms/RichTextContent'
import JsonLd from '@/components/JsonLd'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { absoluteUrl, findRedirect, getPublishedPost, isMedia, SITE_URL } from '@/lib/cms'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

type Seo = { title?: string | null; description?: string | null; image?: unknown }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) return {}
  const meta = (post.meta ?? {}) as Seo
  const title = meta.title || `${post.title} | TruSync`
  const description = meta.description || post.excerpt
  const image = isMedia(meta.image) ? meta.image : isMedia(post.heroImage) ? post.heroImage : null
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      publishedTime: post.publishedAt ?? undefined,
      images: image?.url ? [{ url: absoluteUrl(image.url) }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const formatDate = (value?: string | null) =>
  value
    ? new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedPost(slug)

  if (!post) {
    const moved = await findRedirect(`blog/${slug}`)
    if (moved) redirect(moved.target)
    notFound()
  }

  const hero = isMedia(post.heroImage) ? post.heroImage : null
  const author = typeof post.author === 'object' && post.author ? post.author : null
  const categories = (post.categories ?? []).filter((c: unknown) => typeof c === 'object' && c !== null) as {
    id: string; title: string
  }[]
  const faq = (post.faq ?? []) as { id?: string; question: string; answer: string }[]
  const url = absoluteUrl(`/blog/${post.slug}`)

  return (
    <article>
      <Section className="bg-white pt-32 pb-8">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
          </nav>
          {categories.length > 0 && (
            <p className="mb-3 text-sm font-semibold text-primary">
              {categories.map((c) => c.title).join(' · ')}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">{post.title}</h1>
          <p className="mb-6 text-lg text-slate-600">{post.excerpt}</p>
          <p className="text-sm text-slate-500">
            {author?.name ? `By ${author.name}` : 'By the TruSync team'}
            {post.publishedAt ? ` · Published ${formatDate(post.publishedAt)}` : ''}
            {post.updatedAt && post.updatedAt !== post.createdAt ? ` · Updated ${formatDate(post.updatedAt)}` : ''}
          </p>
        </Container>
      </Section>

      {hero?.url && (
        <Container className="max-w-4xl">
          <Image
            src={hero.url}
            alt={hero.alt || ''}
            width={hero.width || 1600}
            height={hero.height || 900}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </Container>
      )}

      <Section className="bg-white pt-10">
        <Container className="max-w-3xl">
          <RichTextContent data={post.content} />

          {faq.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Frequently asked questions</h2>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={item.id ?? i} className="rounded-xl border border-slate-200 p-5">
                    <summary className="cursor-pointer text-lg font-semibold text-slate-900">{item.question}</summary>
                    <p className="mt-3 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {author?.bio && (
            <aside className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{author.name || 'About the author'}</h2>
              <p className="text-slate-600">{author.bio}</p>
            </aside>
          )}
        </Container>
      </Section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.publishedAt ?? post.createdAt,
              dateModified: post.updatedAt,
              mainEntityOfPage: url,
              image: hero?.url ? [absoluteUrl(hero.url)] : undefined,
              author: { '@type': 'Person', name: author?.name || 'TruSync team' },
              publisher: { '@id': `${SITE_URL}/#organization` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
                { '@type': 'ListItem', position: 3, name: post.title, item: url },
              ],
            },
            ...(faq.length
              ? [{
                  '@type': 'FAQPage',
                  mainEntity: faq.map((f) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: { '@type': 'Answer', text: f.answer },
                  })),
                }]
              : []),
          ],
        }}
      />
    </article>
  )
}
