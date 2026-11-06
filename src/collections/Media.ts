import type { CollectionConfig } from 'payload'

import { isLoggedIn, publishersOnly } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Content' },
  access: {
    read: () => true,
    create: isLoggedIn,
    update: publishersOnly,
    delete: publishersOnly,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Images only. Other file types are rejected at upload time.
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif'],
  },
}
