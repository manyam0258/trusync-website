import { AlertTriangle, Award, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Contact } from '@/components/sections/Contact'
import JsonLd from '@/components/JsonLd'
import { isMedia, type MediaDoc } from '@/lib/cms'
import { safeHref } from '@/lib/safe-url'

import { CodePageProvider } from '@/components/code-pages/runtime'
import { CODE_PAGE_COMPONENTS } from '@/components/code-pages/registry'

import { GRADIENTS, iconFor } from './icons'
import { RichTextContent } from './RichTextContent'

type LinkValue = { label?: string | null; url?: string | null }
type Block = { id?: string | null; blockType: string } & Record<string, unknown>

const isExternal = (url: string) => /^https?:\/\//.test(url)

function CmsLink({ link, variant, className }: { link?: LinkValue; variant?: 'default' | 'outline'; className?: string }) {
  const url = safeHref(link?.url)
  if (!link?.label || !url) return null
  return (
    <Button asChild size="lg" variant={variant} className={className}>
      {isExternal(url) ? (
        <a href={url} rel="noopener noreferrer">{link.label}</a>
      ) : (
        <Link href={url}>{link.label}</Link>
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

const THEMES = {
  light: { bg: 'bg-slate-50', head: 'text-slate-900', body: 'text-slate-600', dark: false },
  white: { bg: 'bg-white', head: 'text-slate-900', body: 'text-slate-600', dark: false },
  dark: { bg: 'bg-slate-900', head: 'text-white', body: 'text-slate-300', dark: true },
} as const
type ThemeName = keyof typeof THEMES
const themeOf = (value: unknown, fallback: ThemeName): (typeof THEMES)[ThemeName] =>
  THEMES[(typeof value === 'string' && value in THEMES ? value : fallback) as ThemeName]

const COLS: Record<string, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-2 lg:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
  '6': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
}

/** Words between *asterisks* get the brand gradient, which is how the home page heading is built. */
function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <span key={i} className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

function SectionHead({ eyebrow, heading, intro, theme, h1 }: { eyebrow?: string | null; heading?: string | null; intro?: string | null; theme: (typeof THEMES)[ThemeName]; h1?: boolean }) {
  if (!eyebrow && !heading && !intro) return null
  const H = h1 ? 'h1' : 'h2'
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow && (
        <span className={`mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-primary ${theme.dark ? 'border border-primary/30 bg-primary/20' : 'bg-primary/10'}`}>
          {eyebrow}
        </span>
      )}
      {heading && <H className={`mb-4 text-3xl font-bold md:text-4xl ${theme.head}`}>{heading}</H>}
      {intro && <p className={`text-lg ${theme.body}`}>{intro}</p>}
    </div>
  )
}

type Item = { id?: string | null; title: string; description?: string | null; url?: string | null; icon?: string | null; color?: string | null }

function wrapLink(href: string | undefined, key: string | number, children: React.ReactNode) {
  if (!href) return <div key={key} className="h-full">{children}</div>
  return isExternal(href) ? (
    <a key={key} href={href} rel="noopener noreferrer" className="block h-full">{children}</a>
  ) : (
    <Link key={key} href={href} className="block h-full">{children}</Link>
  )
}

function renderBlock(block: Block, index: number) {
  const key = block.id ?? `${block.blockType}-${index}`
  const anchor = typeof block.anchor === 'string' && block.anchor ? block.anchor : undefined
  // The site header is fixed, so the first section needs room underneath it.
  const top = index === 0 ? 'pt-32 md:pt-36' : ''
  switch (block.blockType) {
    case 'hero': {
      const b = block as Block & {
        eyebrow?: string; heading: string; subheading?: string
        primaryCta?: LinkValue; secondaryCta?: LinkValue; image?: unknown
        variant?: 'split' | 'centered' | 'dark'; stats?: { id?: string; value: string; label: string }[]
      }
      const variant = b.variant ?? 'split'
      const dark = variant === 'dark'
      const H = index === 0 ? 'h1' : 'h2'
      const heading = <Highlighted text={b.heading} />
      const buttons = (
        <div className={`flex flex-wrap gap-4 ${variant === 'centered' ? 'justify-center' : ''}`}>
          <CmsLink link={b.primaryCta} />
          <CmsLink
            link={b.secondaryCta}
            variant="outline"
            className={dark ? 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white' : undefined}
          />
        </div>
      )
      const stats = b.stats?.length ? (
        <div className={`mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 ${variant === 'centered' ? 'mx-auto' : ''}`}>
          {b.stats.map((s, i) => (
            <div key={s.id ?? i} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
              <div className={`text-sm font-medium md:text-base ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{s.label}</div>
            </div>
          ))}
        </div>
      ) : null
      if (variant === 'centered') {
        return (
          <section key={key} id={anchor} className={`relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 ${index === 0 ? 'pt-28 md:pt-32' : ''}`}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 opacity-50 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 opacity-50 blur-3xl" />
            </div>
            <Container className="relative z-10 py-20">
              <div className="mx-auto max-w-5xl text-center">
                {b.eyebrow && (
                  <span className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{b.eyebrow}</span>
                )}
                <H className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">{heading}</H>
                {b.subheading && <p className="mx-auto mb-12 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">{b.subheading}</p>}
                {buttons}
                <CmsImage media={b.image} className="mx-auto mt-14 h-auto w-full rounded-2xl border border-slate-200 shadow-2xl" priority={index === 0} />
                {stats}
              </div>
            </Container>
          </section>
        )
      }
      return (
        <Section key={key} id={anchor} className={`${dark ? 'bg-slate-900 text-white' : 'bg-slate-50'} ${dark && index === 0 ? 'pt-36 pb-20 md:pt-44 lg:pt-52 lg:pb-28' : top}`}>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                {b.eyebrow && (
                  <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{b.eyebrow}</span>
                )}
                <H className={`mb-6 text-4xl font-bold md:text-5xl ${dark ? 'text-white' : 'text-slate-900'}`}>{heading}</H>
                {b.subheading && <p className={`mb-8 text-lg md:text-xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{b.subheading}</p>}
                {buttons}
                {stats}
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
        <Section key={key} id={anchor} className={`bg-white ${top}`}>
          <Container className="max-w-3xl">
            {b.heading && <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">{b.heading}</h2>}
            <RichTextContent data={b.content} />
          </Container>
        </Section>
      )
    }
    case 'features': {
      const b = block as Block & {
        eyebrow?: string; heading?: string; intro?: string; theme?: string; cardStyle?: string; columns?: string; items?: Item[]
      }
      const theme = themeOf(b.theme, 'light')
      const style = b.cardStyle ?? 'plain'
      const items = b.items ?? []
      const cols = COLS[b.columns ?? '3'] ?? COLS['3']
      const cardBase = theme.dark ? 'border border-slate-700/50 bg-slate-800/50' : 'border border-slate-200 bg-white shadow-sm'
      return (
        <Section key={key} id={anchor} className={`${theme.bg} ${top}`}>
          <Container>
            <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} theme={theme} />
            {style === 'checklist' ? (
              <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                {items.map((item, i) => (
                  <div key={item.id ?? i} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className={`mb-2 text-xl font-bold ${theme.head}`}>{item.title}</h3>
                      {item.description && <p className={`leading-relaxed ${theme.body}`}>{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid grid-cols-1 gap-6 ${cols}`}>
                {items.map((item, i) => {
                  const Icon = style === 'problem' ? AlertTriangle : iconFor(item.icon)
                  const gradient = GRADIENTS[item.color ?? 'blue'] ?? GRADIENTS.blue
                  const href = safeHref(item.url)
                  let card: React.ReactNode
                  if (style === 'tile') {
                    card = (
                      <div className={`flex h-full flex-col items-center rounded-2xl p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl ${theme.dark ? 'bg-slate-800' : 'bg-white'}`}>
                        <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                        </div>
                        <h3 className={`text-sm font-bold ${theme.head}`}>{item.title}</h3>
                      </div>
                    )
                  } else if (style === 'icon') {
                    card = (
                      <div className={`relative h-full overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl ${cardBase}`}>
                        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                        </div>
                        <h3 className={`mb-2 text-xl font-bold ${theme.head}`}>{item.title}</h3>
                        {item.description && <p className={`leading-relaxed ${theme.body}`}>{item.description}</p>}
                      </div>
                    )
                  } else if (style === 'problem') {
                    card = (
                      <div className="h-full rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Icon className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                        {item.description && <p className="leading-relaxed text-slate-600">{item.description}</p>}
                      </div>
                    )
                  } else {
                    card = (
                      <div className={`h-full rounded-2xl p-6 transition-shadow hover:shadow-md ${cardBase}`}>
                        <h3 className={`mb-2 text-xl font-semibold ${theme.head}`}>{item.title}</h3>
                        {item.description && <p className={theme.body}>{item.description}</p>}
                      </div>
                    )
                  }
                  return wrapLink(href, item.id ?? i, card)
                })}
              </div>
            )}
          </Container>
        </Section>
      )
    }
    case 'stats': {
      const b = block as Block & { items?: { id?: string; value: string; label: string; icon?: string | null }[] }
      return (
        <Section key={key} id={anchor} className={`bg-white ${top}`}>
          <Container>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {(b.items ?? []).map((s, i) => {
                const Icon = s.icon ? iconFor(s.icon) : null
                return (
                  <div key={s.id ?? i} className="text-center">
                    {Icon && (
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-lg">
                        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                    )}
                    <div className="mb-2 text-4xl font-bold text-slate-900 md:text-5xl">{s.value}</div>
                    <div className="text-sm font-medium text-slate-600 md:text-base">{s.label}</div>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>
      )
    }
    case 'imageText': {
      const b = block as Block & {
        eyebrow?: string; heading: string; body?: unknown; image?: unknown; imageSide?: 'left' | 'right'
        points?: { id?: string; text: string }[]; badgeTitle?: string; badgeText?: string; theme?: string
        items?: { id?: string; title: string; description?: string | null }[]; button?: LinkValue
      }
      const theme = themeOf(b.theme, 'white')
      const hasImage = isMedia(b.image) && !!b.image.url
      return (
        <Section key={key} id={anchor} className={`${theme.bg} ${top}`}>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className={b.imageSide === 'left' ? 'lg:order-2' : ''}>
                {b.eyebrow && (
                  <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{b.eyebrow}</span>
                )}
                <h2 className={`mb-6 text-3xl font-bold leading-tight md:text-4xl ${theme.head}`}>{b.heading}</h2>
                <RichTextContent data={b.body} className={theme.dark ? 'rich-text-dark' : ''} />
                {!!b.items?.length && (
                  <div className="mt-8 space-y-5">
                    {b.items.map((it, i) => (
                      <div key={it.id ?? i} className="flex gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </span>
                        <div>
                          <h3 className={`text-lg font-semibold ${theme.head}`}>{it.title}</h3>
                          {it.description && <p className={theme.body}>{it.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!!b.points?.length && (
                  <ul className="mt-8 space-y-4">
                    {b.points.map((p, i) => (
                      <li key={p.id ?? i} className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </span>
                        <span className={`text-lg font-semibold ${theme.dark ? 'text-slate-200' : 'text-slate-700'}`}>{p.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {b.button?.label && (
                  <div className="mt-8">
                    <CmsLink link={b.button} />
                  </div>
                )}
              </div>
              {hasImage ? (
                <CmsImage media={b.image} className="h-auto w-full rounded-2xl" />
              ) : b.badgeTitle ? (
                <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 p-12 text-center shadow-2xl">
                  <div>
                    <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-2xl">
                      <Award className="h-12 w-12 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900">{b.badgeTitle}</h3>
                    {b.badgeText && <p className="text-lg text-slate-600">{b.badgeText}</p>}
                  </div>
                </div>
              ) : null}
            </div>
          </Container>
        </Section>
      )
    }
    case 'badges': {
      const b = block as Block & { heading?: string; items?: { id?: string; label: string; icon?: string | null }[] }
      return (
        <Section key={key} id={anchor} className={`bg-slate-900 text-white ${top}`}>
          <Container className="text-center">
            {b.heading && <h2 className="mb-12 text-3xl font-bold">{b.heading}</h2>}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {(b.items ?? []).map((item, i) => {
                const Icon = iconFor(item.icon)
                return (
                  <div key={item.id ?? i} className="flex flex-col items-center gap-3">
                    <div className="rounded-full bg-white/10 p-4">
                      <Icon className="h-8 w-8 text-sky-300" />
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>
      )
    }
    case 'faq': {
      const b = block as Block & { heading?: string; items?: { id?: string; question: string; answer: string }[] }
      const items = b.items ?? []
      return (
        <Section key={key} id={anchor} className={`bg-white ${top}`}>
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
      const b = block as Block & { heading: string; body?: string; button?: LinkValue; theme?: 'dark' | 'blue' }
      const blue = b.theme === 'blue'
      return (
        <Section key={key} id={anchor} className={`${blue ? 'bg-blue-600' : 'bg-slate-900'} text-white ${top}`}>
          <Container className="max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{b.heading}</h2>
            {b.body && <p className={`mb-8 text-lg ${blue ? 'text-blue-100' : 'text-slate-300'}`}>{b.body}</p>}
            <CmsLink link={b.button} className={blue ? 'bg-white text-blue-600 hover:bg-blue-50' : undefined} />
          </Container>
        </Section>
      )
    }
    case 'codePage': {
      const b = block as Block & {
        page?: keyof typeof CODE_PAGE_COMPONENTS
        sections?: { sectionId: string; hidden?: boolean | null; texts?: { key: string; value?: string | null }[] | null }[] | null
      }
      const Page = b.page ? CODE_PAGE_COMPONENTS[b.page] : undefined
      if (!Page) return null
      const texts: Record<string, string> = {}
      const hidden: string[] = []
      for (const s of b.sections ?? []) {
        if (s.hidden) hidden.push(s.sectionId)
        for (const t of s.texts ?? []) if (t.value) texts[t.key] = t.value
      }
      return (
        <CodePageProvider key={key} texts={texts} hidden={hidden}>
          <Page />
        </CodePageProvider>
      )
    }
    case 'contactForm': {
      const b = block as Block & { heading?: string }
      return <Contact key={key} heading={b.heading} />
    }
    default:
      return null
  }
}

export function RenderBlocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks?.length) return null
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>
}
