import { createHash } from 'node:crypto'
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

/**
 * What the seed remembers about each default page, stored in the key-value store:
 * - true: created by an older version of this code (content version unknown);
 * - { hash, updatedAt }: the default content last written, and the page's updatedAt right after that write;
 * - { hash, edited: true }: an editor has changed the page, so the seed never touches it again.
 */
type Marker = true | { hash: string; updatedAt?: string; edited?: boolean }

const hashOf = (page: SeedPage) =>
  createHash('sha256').update(JSON.stringify({ title: page.title, noindex: page.noindex, meta: page.meta, layout: page.layout })).digest('hex').slice(0, 20)

const ms = (value: unknown) => new Date(String(value)).getTime()

/** True when nobody has saved the page (published or draft) since the seed last wrote it. */
function untouched(doc: { createdAt: string; updatedAt: string }, marker: Marker | null): boolean {
  if (marker && marker !== true) return !!marker.updatedAt && Math.abs(ms(doc.updatedAt) - ms(marker.updatedAt)) < 2000
  // Older marker or none: the page is untouched only if it was never saved after it was created.
  return Math.abs(ms(doc.updatedAt) - ms(doc.createdAt)) < 60_000
}

async function run(payload: Payload) {
  const pages = (await import('./default-pages.json')).default as SeedPage[]
  const cache = new Map<string, number | string>()
  // Only the publish check looks at the user, and only for its role.
  const user = { id: 0, collection: 'users', role: 'admin', email: 'seed@localhost' } as never
  const updatesOn = process.env.SEED_UPDATE_DEFAULT_PAGES !== 'false'
  let created = 0
  let updated = 0

  for (const page of pages) {
    const key = `default-page:${page.slug}`
    const hash = hashOf(page)
    try {
      const marker = ((await payload.kv.get(key)) ?? null) as Marker | null
      if (marker && marker !== true && (marker.hash === hash || marker.edited)) continue
      if (marker && !updatesOn) continue

      const found = await payload.find({
        collection: 'pages', where: { slug: { equals: page.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true,
        select: { slug: true, createdAt: true, updatedAt: true },
      })
      const doc = found.docs[0] as unknown as { id: number | string; createdAt: string; updatedAt: string } | undefined
      const data = {
        title: page.title, noindex: page.noindex, meta: page.meta,
        layout: undefined as unknown, _status: 'published',
      }

      if (!doc) {
        // A page that was seeded once and then deleted stays deleted.
        if (marker) continue
        data.layout = await resolveMedia(payload, page.layout, cache)
        const made = await payload.create({ collection: 'pages', user, overrideAccess: true, data: { ...data, slug: page.slug } as never })
        await payload.kv.set(key, { hash, updatedAt: (made as unknown as { updatedAt: string }).updatedAt })
        created++
        continue
      }

      // The default content changed (or was never recorded). Update the page only if no editor has saved it.
      if (!untouched(doc, marker)) {
        await payload.kv.set(key, { hash, edited: true })
        continue
      }
      if (marker === null) {
        // Created before this seed tracked content: record it, and update it on the next content change.
        await payload.kv.set(key, { hash: 'unknown', updatedAt: doc.updatedAt })
        continue
      }
      data.layout = await resolveMedia(payload, page.layout, cache)
      const saved = await payload.update({ collection: 'pages', id: doc.id, user, overrideAccess: true, data: data as never })
      await payload.kv.set(key, { hash, updatedAt: (saved as unknown as { updatedAt: string }).updatedAt })
      updated++
    } catch (err) {
      // Another instance may be writing the same page right now, or an image file is missing. Try again next start.
      payload.logger.warn(`Default page "${page.slug}" was not created or updated: ${(err as Error).message}`)
    }
  }
  if (created) payload.logger.info(`Created ${created} default page(s).`)
  if (updated) payload.logger.info(`Updated ${updated} default page(s) to the latest default content.`)
}

/**
 * Keeps the pages the website ships with in step with the code, without overwriting anyone's work:
 * - a missing page is created, so a new environment is never empty;
 * - when the default content in src/seed/default-pages.json changes, a page nobody has saved in the admin
 *   is updated to it; a page an editor has saved is never touched again;
 * - a page that was deleted on purpose stays deleted.
 * Runs when the CMS starts. Set SEED_DEFAULT_PAGES=false to switch it off,
 * or SEED_UPDATE_DEFAULT_PAGES=false to only create missing pages.
 */
export function seedDefaultPages(payload: Payload): Promise<void> {
  globalFlag.__defaultPagesSeeded ??= run(payload).catch((err) => {
    payload.logger.error(`Seeding default pages failed: ${(err as Error).message}`)
  })
  return globalFlag.__defaultPagesSeeded
}
