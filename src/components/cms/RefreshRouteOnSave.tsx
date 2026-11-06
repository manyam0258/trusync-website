'use client'

import { RefreshRouteOnSave as PayloadRefresh } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

/** Re-renders the page whenever an editor saves or autosaves in the admin's Live Preview panel. */
export function RefreshRouteOnSave() {
  const router = useRouter()
  return (
    <PayloadRefresh
      refresh={() => router.refresh()}
      // Live Preview runs inside the admin, on the same address as this page.
      serverURL={typeof window !== 'undefined' ? window.location.origin : ''}
    />
  )
}
