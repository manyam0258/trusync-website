/**
 * The public address of the site, read when the server starts.
 *
 * Next.js copies `process.env.NEXT_PUBLIC_...` into the build, and its bundler also resolves a lookup such as
 * `process.env[NAME]` when NAME is a constant. That would freeze the address at build time: a site built without
 * it, or with a different one, then refuses logged-in saves from its real address. Copying the whole environment
 * first keeps this a run-time value.
 */
export const serverUrl = (fallback = 'https://trusync.in'): string => {
  const env: Record<string, string | undefined> = Object.assign({}, process.env)
  return (env['NEXT_PUBLIC_SERVER_URL'] || fallback).replace(/\/+$/, '')
}
