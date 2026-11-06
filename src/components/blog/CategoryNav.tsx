import Link from 'next/link'

type Cat = { id: number | string; title?: string | null; slug?: string | null }

export function CategoryNav({ categories, activeSlug }: { categories: Cat[]; activeSlug?: string }) {
  if (!categories.length) return null
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active ? 'border-primary bg-primary text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
    }`
  return (
    <nav aria-label="Blog categories" className="mb-10 flex flex-wrap gap-3">
      <Link href="/blog" className={chip(!activeSlug)}>All posts</Link>
      {categories.map((c) => (
        <Link key={c.id} href={`/blog/category/${c.slug}`} className={chip(c.slug === activeSlug)}>
          {c.title}
        </Link>
      ))}
    </nav>
  )
}
