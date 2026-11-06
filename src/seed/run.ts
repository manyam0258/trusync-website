import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import type { Payload } from 'payload'

type SeedPage = { slug: string; title: string; noindex: boolean; meta: { title?: string; description?: string }; layout: unknown[] }
type MediaRef = { __media: string; alt: string }

const isMediaRef = (v: unknown): v is MediaRef => typeof v === 'object' && v !== null && '__media' in v

const globalFlag = globalThis as unknown as { __defaultPagesSeeded?: Promise<void> }

/** Images the default pages use, found under public/assets. SVG is not accepted as an upload, so it is stored as PNG. */
async function mediaId(payload: Payload, ref: MediaRef, cache: Map<string, number | string>): Promise<number | string> {
  const hit = cache.get(ref.__media)
  if (hit !== undefined) return hit
  const name = path.basename(ref.__media).replace(/\.svg$/i, '.png').replace(/[^A-Za-z0-9._-]/g, '-')
  const existing = await payload.find({ collection: 'media', where: { filename: { equals: name } }, limit: 1, depth: 0, overrideAccess: true })
  if (existing.docs.length) {
    cache.set(ref.__media, existing.docs[0].id)
    return existing.docs[0].id
  }
  const source = path.join(process.cwd(), 'public', 'assets', ref.__media)
  let filePath = source
  if (/\.svg$/i.test(ref.__media)) {
    const sharp = (await import('sharp')).default
    filePath = path.join(os.tmpdir(), name)
    await sharp(fs.readFileSync(source), { density: 192 }).png().toFile(filePath)
  }
  const doc = await payload.create({ collection: 'media', data: { alt: ref.alt }, filePath, overrideAccess: true })
  cache.set(ref.__media, doc.id)
  return doc.id
}

async function resolveMedia(payload: Payload, value: unknown, cache: Map<string, number | string>): Promise<unknown> {
  if (isMediaRef(value)) return mediaId(payload, value, cache)
  if (Array.isArray(value)) return Promise.all(value.map((v) => resolveMedia(payload, v, cache)))
  if (value && typeof value === 'object') {
    const entries = await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await resolveMedia(payload, v, cache)] as const))
    return Object.fromEntries(entries)
  }
  return value
}

async function run(payload: Payload) {
  const pages = (await import('./default-pages.json')).default as SeedPage[]
  const cache = new Map<string, number | string>()
  // Only the publish check looks at the user, and only for its role.
  const user = { id: 0, collection: 'users', role: 'admin', email: 'seed@localhost' } as never
  let created = 0

  for (const page of pages) {
    const marker = `default-page:${page.slug}`
    // A page that was seeded once is never recreated, so an editor can delete a page for good.
    if (await payload.kv.get(marker)) continue
    try {
      const found = await payload.find({ collection: 'pages', where: { slug: { equals: page.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true, select: { slug: true } })
      if (!found.docs.length) {
        await payload.create({
          collection: 'pages',
          user,
          overrideAccess: true,
          data: {
            title: page.title,
            slug: page.slug,
            noindex: page.noindex,
            meta: page.meta,
            layout: (await resolveMedia(payload, page.layout, cache)) as never,
            _status: 'published',
          } as never,
        })
        created++
      }
      await payload.kv.set(marker, true)
    } catch (err) {
      // Another instance may be creating the same page right now, or an image file is missing. Try again next start.
      payload.logger.warn(`Default page "${page.slug}" was not created: ${(err as Error).message}`)
    }
  }
  if (created) payload.logger.info(`Created ${created} default page(s).`)
}

/**
 * Creates the pages the website ships with when they are missing, so a new environment is never empty.
 * Runs when the CMS starts. Pages that exist are left alone, and a page that was deleted on purpose stays deleted.
 * Set SEED_DEFAULT_PAGES=false to switch it off.
 */
export function seedDefaultPages(payload: Payload): Promise<void> {
  globalFlag.__defaultPagesSeeded ??= run(payload).catch((err) => {
    payload.logger.error(`Seeding default pages failed: ${(err as Error).message}`)
  })
  return globalFlag.__defaultPagesSeeded
}
