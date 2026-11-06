'use client'

import { RefreshRouteOnSave as PayloadRefresh } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

/** Re-renders the page whenever an editor saves or autosaves in the admin's Live Preview panel. */
export function RefreshRouteOnSave() {
  const router = useRouter()
  return (
    <PayloadRefresh
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}
    />
  )
}
