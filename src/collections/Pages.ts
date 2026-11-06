import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'

import { canPublish, isLoggedIn, publishedOrStaff } from '../access'
import { pageBlocks } from '../blocks'
import { slugField } from '../fields/slug'
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate'

/** First path segments that belong to the application and cannot be used for CMS pages. */
const RESERVED = ['admin', 'api', 'blog', '_next']

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'slug', 'updatedAt', '_status'],
  },
  access: {
    read: publishedOrStaff,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  versions: {
    maxPerDoc: 25,
    drafts: { autosave: { interval: 2000 } },
  },
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (data._status === 'published' && !canPublish(req.user)) {
          throw new APIError('Only editors and admins can publish. Save as draft instead.', 403)
        }
        const first = String(data.slug ?? '').split('/')[0]
        if (RESERVED.includes(first)) {
          throw new APIError(`"${first}" is reserved by the application. Choose another path.`, 400)
        }
        return data
      },
    ],
    afterChange: [revalidateOnChange('')],
    afterDelete: [revalidateOnDelete('')],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField({ allowSlashes: true }),
    {
      name: 'noindex',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Ask search engines not to list this page.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      minRows: 1,
      blocks: pageBlocks,
      admin: { description: 'Add, remove and reorder sections.' },
    },
  ],
}
