import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Content' },
  access: {
    read: () => true,
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
