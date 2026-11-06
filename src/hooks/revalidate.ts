import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const safeRevalidate = (paths: string[]) => {
  for (const p of paths) {
    try {
      revalidatePath(p)
    } catch {
      // Outside a Next.js request (scripts, seeding) there is nothing to revalidate.
    }
  }
}

const pathsFor = (prefix: string, slug?: string) => {
  const list = [prefix || '/', '/sitemap.xml']
  if (slug) list.push(`${prefix}/${slug}`.replace(/\/{2,}/g, '/'))
  return list
}

export const revalidateOnChange =
  (prefix: string): CollectionAfterChangeHook =>
  ({ doc, previousDoc }) => {
    if (doc._status === 'published') safeRevalidate(pathsFor(prefix, doc.slug))
    // A page that was unpublished or whose slug changed must refresh its old URL.
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      safeRevalidate(pathsFor(prefix, previousDoc.slug))
    }
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      safeRevalidate(pathsFor(prefix, previousDoc.slug))
    }
    return doc
  }

export const revalidateOnDelete =
  (prefix: string): CollectionAfterDeleteHook =>
  ({ doc }) => {
    safeRevalidate(pathsFor(prefix, doc?.slug))
    return doc
  }
