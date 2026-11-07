'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * Cookie consent and PostHog analytics.
 * Nothing is loaded and no cookie is set for analytics until the visitor accepts.
 * The choice is stored in a cookie named trusync_consent for 180 days. Declining keeps analytics off.
 */
const COOKIE = 'trusync_consent'
type Choice = 'granted' | 'denied'

const readChoice = (): Choice | null => {
  const m = document.cookie.match(/(?:^|;\s*)trusync_consent=(granted|denied)/)
  return m ? (m[1] as Choice) : null
}

const writeChoice = (value: Choice) => {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${COOKIE}=${value}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`
}

type PostHogClient = typeof import('posthog-js').default
let client: PostHogClient | null = null
let starting: Promise<PostHogClient> | null = null

async function startPostHog(key: string, host: string): Promise<PostHogClient> {
  if (client) return client
  starting ??= import('posthog-js').then(({ default: posthog }) => {
    posthog.init(key, {
      api_host: host,
      capture_pageview: false, // page views are sent by hand below, so route changes count too
      autocapture: false,
      disable_session_recording: true,
      person_profiles: 'identified_only',
    })
    client = posthog
    return posthog
  })
  return starting
}

/** Opens the banner again from anywhere, for example the footer's "Cookie settings" link. */
export const COOKIE_SETTINGS_EVENT = 'trusync:cookie-settings'

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}>
      Cookie settings
    </button>
  )
}

export function Analytics({ posthogKey, posthogHost }: { posthogKey: string; posthogHost: string }) {
  const [choice, setChoice] = useState<Choice | null>(null)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!posthogKey) return
    const saved = readChoice()
    setChoice(saved)
    setOpen(saved === null)
    const reopen = () => setOpen(true)
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen)
  }, [posthogKey])

  // Start analytics after consent, and send one page view for every page the visitor opens.
  useEffect(() => {
    if (!posthogKey || choice !== 'granted') return
    startPostHog(posthogKey, posthogHost).then((ph) => {
      ph.capture('$pageview', { $current_url: window.location.href })
    })
  }, [choice, pathname, posthogKey, posthogHost])

  if (!posthogKey || !open) return null

  const decide = (value: Choice) => {
    writeChoice(value)
    setChoice(value)
    setOpen(false)
    if (value === 'denied' && client) client.opt_out_capturing()
    if (value === 'granted' && client) client.opt_in_capturing()
  }

  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-2xl md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <p className="mb-4 leading-relaxed">
        We would like to use analytics cookies to see which pages help visitors most. They stay off unless you accept. You can change your choice at any time from the footer.
      </p>
      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={() => decide('denied')}
          className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => decide('granted')}
          className="rounded-full bg-primary px-5 py-2 font-semibold text-white hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
