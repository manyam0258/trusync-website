import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminField, isLoggedIn } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Settings',
    defaultColumns: ['name', 'email', 'role'],
  },
  auth: true,
  access: {
    read: isLoggedIn,
    create: isAdmin,
    update: ({ req: { user }, id }) => {
      if (!user) return false
      if ((user as { role?: string }).role === 'admin') return true
      return user.id === id
    },
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        { label: 'Admin (everything)', value: 'admin' },
        { label: 'Editor (edit and publish)', value: 'editor' },
        { label: 'Author (write drafts)', value: 'author' },
      ],
      access: {
        create: isAdminField,
        update: isAdminField,
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      admin: { description: 'Shown on blog posts. Real author details help search and AI citations.' },
    },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
  ],
}
