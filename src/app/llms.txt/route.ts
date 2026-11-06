import { absoluteUrl, getPosts, SITE_URL } from '@/lib/cms'
import { getPayloadClient } from '@/lib/payload'
import { CODE_PAGE_GROUPS } from '@/lib/site-pages'

export const dynamic = 'force-dynamic'

const clean = (text: unknown) => String(text ?? '').replace(/\s+/g, ' ').trim()

/** A plain-text guide for AI assistants: what the site is and where the useful pages are. */
export async function GET() {
  const lines: string[] = [
    '# TruSync',
    '',
    '> TruSync is a certified Frappe and ERPNext partner in Hyderabad, Telangana. We deliver custom ERP implementation, CRM integrations, and smart AI workflow automation for SMEs.',
    '',
    `Website: ${SITE_URL}`,
    `Contact: ${absoluteUrl('/#contact')}`,
    '',
  ]

  for (const { group, pages } of CODE_PAGE_GROUPS) {
    lines.push(`## ${group}`, '')
    for (const p of pages) lines.push(`- [${p.label}](${absoluteUrl(p.path)})`)
    lines.push('')
  }

  try {
    const payload = await getPayloadClient()
    const pages = await payload.find({
      collection: 'pages',
      where: { and: [{ _status: { equals: 'published' } }, { noindex: { not_equals: true } }] },
      limit: 200,
      depth: 0,
      select: { title: true, slug: true },
    })
    if (pages.docs.length) {
      lines.push('## More pages', '')
      for (const p of pages.docs) lines.push(`- [${clean(p.title)}](${absoluteUrl(`/${p.slug}`)})`)
      lines.push('')
    }
    const { docs: posts } = await getPosts({ limit: 50 })
    if (posts.length) {
      lines.push('## Blog', '', `Feed: ${absoluteUrl('/blog/rss.xml')}`, '')
      for (const post of posts) {
        lines.push(`- [${clean(post.title)}](${absoluteUrl(`/blog/${post.slug}`)}): ${clean(post.excerpt)}`)
      }
      lines.push('')
    }
  } catch (err) {
    console.error('llms.txt: could not read CMS content', err)
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=3600' },
  })
}
