import { getSiteSettings, isMedia, type MediaDoc } from './cms'

/** A logo or icon chosen in the admin (Site settings), ready for next/image. */
export type BrandImage = { url: string; alt: string; width: number; height: number }

const toImage = (value: unknown, alt: string): BrandImage | null => {
  if (!isMedia(value) || !value.url) return null
  const m = value as MediaDoc
  return { url: m.url as string, alt: m.alt || alt, width: m.width || 240, height: m.height || 80 }
}

/**
 * Logo for the navigation bar and footer, and the browser icon, all set in the admin under Site settings.
 * Empty fields fall back to the files shipped with the site.
 */
export async function siteBranding() {
  const s = (await getSiteSettings()) as Record<string, unknown>
  const logo = toImage(s.logo, 'TruSync logo')
  const favicon = isMedia(s.favicon) && s.favicon.url ? (s.favicon.url as string) : null
  return {
    logo,
    footerLogo: toImage(s.footerLogo, 'TruSync logo') ?? logo,
    favicon,
  }
}
