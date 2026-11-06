import type { Access, FieldAccess } from 'payload'

type Role = 'admin' | 'editor' | 'author'

const roleOf = (user: unknown): Role | undefined =>
  (user as { role?: Role } | null | undefined)?.role

export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user)

export const isAdmin: Access = ({ req: { user } }) => roleOf(user) === 'admin'

export const isAdminField: FieldAccess = ({ req: { user } }) => roleOf(user) === 'admin'

/** Anyone can read published content. Logged-in staff can also read drafts. */
export const publishedOrStaff: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}

export const canPublish = (user: unknown): boolean => {
  const role = roleOf(user)
  return role === 'admin' || role === 'editor'
}
