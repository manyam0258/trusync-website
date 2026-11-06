import { timingSafeEqual } from 'crypto'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

import { getPayloadClient } from '@/lib/payload'

const sameSecret = (given: string | null, expected: string | undefined) => {
  if (!given || !expected) return false
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

/**
 * Only plain site paths. Anything that could point to another host is refused,
 * including "//host", "/\\host" and encoded variants.
 */
const isSitePath = (path: string | null): path is string =>
  !!path && /^\/(?![/\\])[A-Za-z0-9\-._~%/]*$/.test(path) && !path.includes('//') && !/%(2f|5c)/i.test(path)

/**
 * Entry point of the admin's Preview and Live Preview buttons.
 * It only turns on draft mode for a signed-in editor who holds the preview secret.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')

  if (!sameSecret(searchParams.get('previewSecret'), process.env.PREVIEW_SECRET)) {
    return new Response('You are not allowed to preview this page', { status: 403 })
  }
  if (!isSitePath(path)) {
    return new Response('No path provided', { status: 404 })
  }

  const payload = await getPayloadClient()
  let user: unknown = null
  try {
    user = (await payload.auth({ headers: req.headers })).user
  } catch {
    user = null
  }

  const draft = await draftMode()
  if (!user) {
    draft.disable()
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  draft.enable()
  redirect(path)
}
