import { absoluteUrl, getPosts, SITE_URL } from '@/lib/cms'

export const dynamic = 'force-dynamic'

const esc = (v: unknown) =>
  String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function GET() {
  const { docs: posts } = await getPosts({ limit: 50 })
  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`)
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date((post.publishedAt as string) || (post.createdAt as string)).toUTCString()}</pubDate>
      <description>${esc(post.excerpt)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TruSync blog</title>
    <link>${absoluteUrl('/blog')}</link>
    <description>Guides and notes on ERPNext, Frappe, AI automation and data protection.</description>
    <language>en-IN</language>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
