import type { GlobalConfig } from 'payload'

import { isAdmin } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: { group: 'Settings' },
  access: { read: () => true, update: isAdmin },
  fields: [
    { name: 'siteName', type: 'text', required: true, defaultValue: 'TruSync' },
    { name: 'legalName', type: 'text', defaultValue: 'TruSync Technologies LLP' },
    {
      name: 'defaultDescription',
      type: 'textarea',
      admin: { description: 'Used when a page or post has no description of its own.' },
    },
    {
      name: 'defaultShareImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Used for social sharing when a page or post has no image.' },
    },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'address', type: 'textarea' },
    { name: 'linkedin', type: 'text' },
  ],
}
