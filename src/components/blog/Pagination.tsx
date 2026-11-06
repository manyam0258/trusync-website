import Link from 'next/link'

export function Pagination({ page, totalPages, basePath }: { page: number; totalPages: number; basePath: string }) {
  if (totalPages <= 1) return null
  const href = (n: number) => (n === 1 ? basePath : `${basePath}?page=${n}`)
  const base = 'rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition-colors'
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-between">
      {page > 1 ? (
        <Link href={href(page - 1)} rel="prev" className={`${base} text-slate-700 hover:bg-slate-50`}>
          Newer posts
        </Link>
      ) : (
        <span />
      )}
      <span className="text-sm text-slate-500">
        Page {page} of {totalPages}
      </span>
      {page < totalPages ? (
        <Link href={href(page + 1)} rel="next" className={`${base} text-slate-700 hover:bg-slate-50`}>
          Older posts
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
