'use client'

import { useAuth } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'

/** "Log out" button in the top bar of the admin, next to the account icon. */
export const LogoutButton = () => {
  const { logOut } = useAuth()
  const router = useRouter()
  return (
    <button
      type="button"
      className="btn btn--style-secondary btn--size-small"
      onClick={async () => {
        await logOut()
        router.push('/admin/login')
      }}
    >
      Log out
    </button>
  )
}
