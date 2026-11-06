import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Contact } from '@/components/sections/Contact'
import JsonLd from '@/components/JsonLd'
import { isMedia, type MediaDoc } from '@/lib/cms'

import { RichTextContent } from './RichTextContent'

type LinkValue = { label?: string | null; url?: string | null }
type Block = { id?: string | null; blockType: string } & Record<string, unknown>

const isExternal = (url: string) => /^https?:\/\//.test(url)

function CmsLink({ link, variant }: { link?: LinkValue; variant?: 'default' | 'outline' }) {
  if (!link?.label || !link.url) return null
  return (
    <Button asChild size="lg" variant={variant}>
      {isExternal(link.url) ? (
        <a href={link.url} rel="noopener">{link.label}</a>
      ) : (
        <Link href={link.url}>{link.label}</Link>
      )}
    </Button>
  )
}

function CmsImage({ media, className, priority }: { media: unknown; className?: string; priority?: boolean }) {
  if (!isMedia(media) || !media.url) return null
  const m = media as MediaDoc
  return (
    <Image
      src={m.url as string}
      alt={m.alt || ''}
      width={m.width || 1200}
      height={m.height || 800}
      className={className}
      priority={priority}
    />
  )
}

function renderBlock(block: Block, index: number) {
  const key = block.id ?? `${block.blockType}-${index}`
  switch (block.blockType) {
    case 'hero': {
      const b = block as Block & {
        eyebrow?: string; heading: string; subheading?: string
        primaryCta?: LinkValue; secondaryCta?: LinkValue; image?: unknown
      }
      return (
        <Section key={key} className="bg-slate-50">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                {b.eyebrow && (
                  <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    {b.eyebrow}
                  </span>
                )}
                {index === 0 ? (
                  <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">{b.heading}</h1>
                ) : (
                  <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">{b.heading}</h2>
                )}
                {b.subheading && <p className="mb-8 text-lg text-slate-600 md:text-xl">{b.subheading}</p>}
                <div className="flex flex-wrap gap-4">
                  <CmsLink link={b.primaryCta} />
                  <CmsLink link={b.secondaryCta} variant="outline" />
                </div>
              </div>
              <CmsImage media={b.image} className="h-auto w-full rounded-2xl" priority={index === 0} />
            </div>
          </Container>
        </Section>
      )
    }
    case 'richText': {
      const b = block as Block & { heading?: string; content?: unknown }
      return (
        <Section key={key} className="bg-white">
          <Container className="max-w-3xl">
            {b.heading && <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">{b.heading}</h2>}
            <RichTextContent data={b.content} />
          </Container>
        </Section>
      )
    }
    case 'features': {
      const b = block as Block & {
        heading?: string; intro?: string
        items?: { id?: string; title: string; description: string; url?: string | null }[]
      }
      return (
        <Section key={key} className="bg-slate-50">
          <Container>
            {(b.heading || b.intro) && (
              <div className="mx-auto mb-12 max-w-3xl text-center">
                {b.heading && <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">{b.heading}</h2>}
                {b.intro && <p className="text-lg text-slate-600">{b.intro}</p>}
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(b.items ?? []).map((item, i) => {
                const card = (
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                )
                const k = item.id ?? i
                if (!item.url) return <div key={k}>{card}</div>
                return isExternal(item.url) ? (
                  <a key={k} href={item.url} rel="noopener" className="block h-full">{card}</a>
                ) : (
                  <Link key={k} href={item.url} className="block h-full">{card}</Link>
                )
              })}
            </div>
          </Container>
        </Section>
      )
    }
    case 'imageText': {
      const b = block as Block & { heading: string; body?: unknown; image?: unknown; imageSide?: 'left' | 'right' }
      return (
        <Section key={key} className="bg-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={b.imageSide === 'left' ? 'lg:order-2' : ''}>
                <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">{b.heading}</h2>
                <RichTextContent data={b.body} />
              </div>
              <CmsImage media={b.image} className="h-auto w-full rounded-2xl" />
            </div>
          </Container>
        </Section>
      )
    }
    case 'faq': {
      const b = block as Block & { heading?: string; items?: { id?: string; question: string; answer: string }[] }
      const items = b.items ?? []
      return (
        <Section key={key} className="bg-white">
          <Container className="max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">{b.heading}</h2>
            <div className="space-y-4">
              {items.map((item, i) => (
                <details key={item.id ?? i} className="rounded-xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
            <JsonLd
              data={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: items.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: { '@type': 'Answer', text: item.answer },
                })),
              }}
            />
          </Container>
        </Section>
      )
    }
    case 'cta': {
      const b = block as Block & { heading: string; body?: string; button?: LinkValue }
      return (
        <Section key={key} className="bg-slate-900 text-white">
          <Container className="max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{b.heading}</h2>
            {b.body && <p className="mb-8 text-lg text-slate-300">{b.body}</p>}
            <CmsLink link={b.button} />
          </Container>
        </Section>
      )
    }
    case 'contactForm':
      return <Contact key={key} />
    default:
      return null
  }
}

export function RenderBlocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks?.length) return null
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>
}
