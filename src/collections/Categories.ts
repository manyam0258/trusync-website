import type { CollectionConfig } from 'payload'

import { isLoggedIn, publishersOnly } from '../access'
import { slugField } from '../fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title', group: 'Content' },
  access: {
    read: () => true,
    create: isLoggedIn,
    update: publishersOnly,
    delete: publishersOnly,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField({ fallback: 'category' }),
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'One or two sentences. Used on the category page.' },
    },
  ],
}
