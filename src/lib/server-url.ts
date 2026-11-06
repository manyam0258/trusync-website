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

const split = (value?: string) => (value ?? '').split(',').map((v) => v.trim().replace(/\/+$/, '')).filter(Boolean)

/**
 * Addresses the admin may send logged-in (cookie) requests from. Anything else is treated as signed out.
 * Sources, all read at run time: NEXT_PUBLIC_SERVER_URL, PAYLOAD_ALLOWED_ORIGINS (comma separated),
 * and COOLIFY_URL, which Coolify fills in with the domains set on the application, so the list follows the domain
 * automatically. Each address is also allowed with and without "www.".
 */
export const allowedOrigins = (): string[] => {
  const env: Record<string, string | undefined> = Object.assign({}, process.env)
  const out = new Set<string>()
  for (const origin of [serverUrl(), ...split(env['PAYLOAD_ALLOWED_ORIGINS']), ...split(env['COOLIFY_URL'])]) {
    try {
      const u = new URL(origin)
      out.add(u.origin)
      out.add(`${u.protocol}//${u.hostname.startsWith('www.') ? u.hostname.slice(4) : `www.${u.hostname}`}${u.port ? `:${u.port}` : ''}`)
    } catch {
      // Not an address: ignore it.
    }
  }
  return [...out]
}
