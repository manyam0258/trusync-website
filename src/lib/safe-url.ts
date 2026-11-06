/**
 * Links typed into the CMS or sent by an AI agent are untrusted. Only site paths and
 * these schemes may become a clickable link: javascript:, data:, vbscript: and the like are refused.
 */
const ALLOWED_SCHEMES = ['http:', 'https:', 'mailto:', 'tel:']

export const isSafeUrl = (value: unknown): boolean => {
  if (typeof value !== 'string') return false
  const url = value.trim()
  if (!url) return false
  // Site paths, anchors and query strings. A second slash or a backslash would mean another host.
  if (/^[/#?]/.test(url)) return !/^\/[/\\]/.test(url) && !/[\u0000-\u001f]/.test(url)
  try {
    return ALLOWED_SCHEMES.includes(new URL(url).protocol)
  } catch {
    return false
  }
}

/** The URL if it is safe to link to, otherwise undefined. */
export const safeHref = (value: unknown): string | undefined => (isSafeUrl(value) ? String(value).trim() : undefined)

export const URL_HELP = 'Use a site path such as /services/crm-module, or an address starting with https://, mailto: or tel:'

/** Payload field validator for optional link fields. */
export const validateOptionalUrl = (value: unknown): true | string => {
  if (value === undefined || value === null || value === '') return true
  return isSafeUrl(value) || URL_HELP
}

/** Redirects may only lead to a path on this site or to one of the site's own hosts. */
export const isSafeRedirectTarget = (value: unknown): boolean => {
  if (typeof value !== 'string') return false
  const url = value.trim()
  if (/^\/(?![/\\])/.test(url)) return !/[\u0000-\u001f]/.test(url)
  try {
    const parsed = new URL(url)
    const own = new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://trusync.in').hostname
    return parsed.protocol === 'https:' && [own, 'trusync.in', 'www.trusync.in'].includes(parsed.hostname)
  } catch {
    return false
  }
}
