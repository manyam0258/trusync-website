/** Builds the admin Preview URL. Returns null until the document has a slug. */
export const previewUrl = ({ slug, collection }: { slug?: string | null; collection: 'posts' | 'pages' }) => {
  if (!slug) return null
  // The page with the path "home" is the front page.
  // Drafts open under /draft so the public pages can stay cached.
  const path = collection === 'posts' ? `/draft/blog/${slug}` : slug === 'home' ? '/draft' : `/draft/${slug}`
  const params = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })
  return `/preview?${params.toString()}`
}

export const previewBreakpoints = [
  { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
  { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
  { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
]
