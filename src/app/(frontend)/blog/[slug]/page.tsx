import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PostCard, formatDate } from '@/components/blog/PostCard'
import { DraftBanner } from '@/components/cms/DraftBanner'
import { RichTextContent } from '@/components/cms/RichTextContent'
import JsonLd from '@/components/JsonLd'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import {
  absoluteUrl,
  findRedirect,
  followRedirect,
  getPost,
  getRelatedPosts,
  getSiteSettings,
  isMedia,
  readingMinutes,
  SITE_NAME,
  SITE_URL,
} from '@/lib/cms'
import { safeHref } from '@/lib/safe-url'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }
type Seo = { title?: string | null; description?: string | null; image?: unknown }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { doc: post, preview } = await getPost(slug)
  if (!post) return {}
  const settings = await getSiteSettings()
  const meta = (post.meta ?? {}) as Seo
  const title = meta.title || `${post.title} | ${SITE_NAME}`
  const description = meta.description || post.excerpt
  const image = [meta.image, post.heroImage, settings.defaultShareImage].find((m) => isMedia(m) && m.url) as
    | { url: string; alt?: string }
    | undefined
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: preview ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      title,
      description,
      url,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt ?? undefined,
      images: image ? [{ url: absoluteUrl(image.url), alt: image.alt || post.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const { doc: post, preview } = await getPost(slug)

  if (!post) {
    const moved = await findRedirect(`blog/${slug}`)
    if (moved) followRedirect(moved)
    notFound()
  }

  const [related, settings] = await Promise.all([getRelatedPosts(post), getSiteSettings()])
  const hero = isMedia(post.heroImage) ? post.heroImage : null
  const author = typeof post.author === 'object' && post.author ? post.author : null
  const categories = (post.categories ?? []).filter((c: unknown) => typeof c === 'object' && c !== null) as {
    id: string; title: string; slug: string
  }[]
  const faq = (post.faq ?? []) as { id?: string; question: string; answer: string }[]
  const url = absoluteUrl(`/blog/${post.slug}`)
  const minutes = readingMinutes(post.content)
  const cta = settings.blogCta
  const updatedDay = post.updatedAt ? new Date(post.updatedAt).toDateString() : ''
  const publishedDay = post.publishedAt ? new Date(post.publishedAt).toDateString() : ''
  const ctaUrl = safeHref(cta?.buttonUrl) || '/#contact'

  return (
    <article>
      {preview && <DraftBanner status={post._status} />}

      <Section className="bg-white pt-32 pb-8 md:pt-36 md:pb-8">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
          </nav>
          {categories.length > 0 && (
            <p className="mb-3 text-sm font-semibold">
              {categories.map((c, i) => (
                <span key={c.id}>
                  {i > 0 && <span className="text-slate-400"> · </span>}
                  <Link href={`/blog/category/${c.slug}`} className="text-primary hover:underline">{c.title}</Link>
                </span>
              ))}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">{post.title}</h1>
          <p className="mb-6 text-lg text-slate-600">{post.excerpt}</p>
          <p className="text-sm text-slate-500">
            {author?.name ? `By ${author.name}` : 'By the TruSync team'}
            {post.publishedAt ? ` · Published ${formatDate(post.publishedAt)}` : ' · Draft'}
            {updatedDay && publishedDay && updatedDay !== publishedDay ? ` · Updated ${formatDate(post.updatedAt)}` : ''}
            {` · ${minutes} min read`}
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

      <Section className="bg-white pt-10 md:pt-10">
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

          {cta?.heading && (
            <aside className="mt-16 rounded-2xl bg-slate-900 p-8 text-white">
              <h2 className="mb-3 text-2xl font-bold">{cta.heading}</h2>
              {cta.body && <p className="mb-6 text-slate-300">{cta.body}</p>}
              <Button asChild size="lg">
                <Link href={ctaUrl}>{cta.buttonLabel || 'Contact us'}</Link>
              </Button>
            </aside>
          )}

          {author?.bio && (
            <aside className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{author.name || 'About the author'}</h2>
              <p className="text-slate-600">{author.bio}</p>
            </aside>
          )}
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-slate-50">
          <Container>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Keep reading</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.id} post={p as never} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {!preview && (
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
                articleSection: categories.map((c) => c.title),
                keywords: ((post.tags ?? []) as { tag: string }[]).map((t) => t.tag).join(', ') || undefined,
                author: author?.name
                  ? { '@type': 'Person', name: author.name }
                  : { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
                publisher: {
                  '@type': 'Organization',
                  name: settings.legalName || 'TruSync Technologies LLP',
                  url: SITE_URL,
                  logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
                },
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
      )}
    </article>
  )
}
