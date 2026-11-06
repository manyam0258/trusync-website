import type { CollectionConfig } from 'payload'

import { isLoggedIn } from '../access'
import { slugField } from '../fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title', group: 'Content' },
  access: {
    read: () => true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'One or two sentences. Used on the category page.' },
    },
  ],
}
