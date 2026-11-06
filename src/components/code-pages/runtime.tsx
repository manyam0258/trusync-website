'use client'

import { createContext, useContext, useMemo, type ReactNode } from 'react'

import { isSafeUrl } from '@/lib/safe-url'

/**
 * Pages that keep their hand-built layout in code read their wording from here.
 * The original text is always the default, so a page looks exactly as before until someone changes a value in the admin.
 */
type Ctx = { texts: Record<string, string>; hidden: ReadonlySet<string> }
const CmsContext = createContext<Ctx>({ texts: {}, hidden: new Set() })

export function CodePageProvider({ texts, hidden, children }: { texts: Record<string, string>; hidden: string[]; children: ReactNode }) {
  const value = useMemo(() => ({ texts, hidden: new Set(hidden) }), [texts, hidden])
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const { texts } = useContext(CmsContext)
  return useMemo(() => {
    const pick = (key: string) => (Object.prototype.hasOwnProperty.call(texts, key) && texts[key].trim() !== '' ? texts[key] : undefined)
    return {
      /** Text. */
      t: (key: string, fallback: string) => pick(key) ?? fallback,
      /** Link target. Anything that is not a site path or an http, https, mailto or tel address is ignored. */
      u: (key: string, fallback: string) => {
        const v = pick(key)
        return v && isSafeUrl(v) ? v.trim() : fallback
      },
      /** Image path or address. Same rule as links, and never an inline data: image. */
      m: (key: string, fallback: string) => {
        const v = pick(key)
        return v && isSafeUrl(v) && !/^(mailto:|tel:)/.test(v) ? v.trim() : fallback
      },
    }
  }, [texts])
}

/** Hides a section when an editor switched it off in the admin. */
export function CmsSection({ id, children }: { id: string; children: ReactNode }) {
  const { hidden } = useContext(CmsContext)
  return hidden.has(id) ? null : <>{children}</>
}
