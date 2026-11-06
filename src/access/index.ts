import type { Access, FieldAccess, Where } from 'payload'

type Role = 'admin' | 'editor' | 'author'

/**
 * Only people in the `users` collection count as staff. An MCP API key can also sign in to the
 * REST API, but as a document of another collection, so it must never pass these checks.
 */
export const isStaff = (user: unknown): boolean =>
  (user as { collection?: string } | null | undefined)?.collection === 'users'

const roleOf = (user: unknown): Role | undefined =>
  isStaff(user) ? (user as { role?: Role }).role : undefined

export const isLoggedIn: Access = ({ req: { user } }) => isStaff(user)

export const isAdmin: Access = ({ req: { user } }) => roleOf(user) === 'admin'

export const isAdminField: FieldAccess = ({ req: { user } }) => roleOf(user) === 'admin'

/** Anyone can read published content. Logged-in staff can also read drafts. */
export const publishedOrStaff: Access = ({ req: { user } }) => {
  if (isStaff(user)) return true
  return { _status: { equals: 'published' } }
}

export const canPublish = (user: unknown): boolean => {
  const role = roleOf(user)
  return role === 'admin' || role === 'editor'
}

export const publishersOnly: Access = ({ req: { user } }) => canPublish(user)

/** Editors and admins may change anything. Authors may only change documents that are not live yet. */
export const editUnlessLive: Access = ({ req: { user } }): boolean | Where => {
  if (canPublish(user)) return true
  if (roleOf(user) === 'author') return { _status: { not_equals: 'published' } }
  return false
}
