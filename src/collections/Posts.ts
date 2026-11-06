import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'

import { canPublish, isLoggedIn, publishedOrStaff } from '../access'
import { slugField } from '../fields/slug'
import { previewBreakpoints, previewUrl } from '../lib/preview'
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate'
import { redirectOnSlugChange } from '../hooks/slugRedirect'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'author', 'publishedAt', '_status'],
    preview: (doc) => previewUrl({ slug: doc?.slug as string | undefined, collection: 'posts' }),
    livePreview: {
      url: ({ data }) => previewUrl({ slug: data?.slug as string | undefined, collection: 'posts' }),
      breakpoints: previewBreakpoints,
    },
  },
  access: {
    read: publishedOrStaff,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  versions: {
    maxPerDoc: 25,
    drafts: { autosave: { interval: 2000, showSaveDraftButton: true } },
  },
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Agents connected over MCP may only save drafts.
        if ((req.payloadAPI as string) === 'MCP' && data._status === 'published') {
          throw new APIError('AI agents cannot publish. Save as a draft and ask a person to publish.', 403)
        }
        if (data._status === 'published' && !canPublish(req.user)) {
          throw new APIError('Only editors and admins can publish. Save as draft instead.', 403)
        }
        if (['category', 'rss'].includes(String(data.slug ?? ''))) {
          throw new APIError('"category" and "rss" are reserved for blog features. Choose another slug.', 400)
        }
        if (data._status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        if (!data.author && req.user) data.author = req.user.id
        return data
      },
    ],
    afterChange: [revalidateOnChange('/blog'), redirectOnSlugChange('posts', '/blog')],
    afterDelete: [revalidateOnDelete('/blog')],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 300,
              label: 'Summary',
              admin: {
                description:
                  'A direct 40 to 60 word answer to what the post covers. Shown in the post list, search results and AI answers.',
              },
            },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'content', type: 'richText', required: true },
            {
              name: 'faq',
              type: 'array',
              label: 'FAQ',
              labels: { singular: 'question', plural: 'questions' },
              admin: { description: 'Optional. Rendered at the end of the post and published as FAQ structured data.' },
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Related',
          fields: [
            { name: 'relatedPosts', type: 'relationship', relationTo: 'posts', hasMany: true },
          ],
        },
      ],
    },
    slugField({ fallback: 'post' }),
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'tags',
      type: 'array',
      admin: { position: 'sidebar' },
      fields: [{ name: 'tag', type: 'text', required: true }],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
