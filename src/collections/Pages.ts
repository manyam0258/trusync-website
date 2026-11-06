import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'

import { canPublish, editUnlessLive, isLoggedIn, publishedOrStaff, publishersOnly } from '../access'
import { pageBlocks } from '../blocks'
import { slugField } from '../fields/slug'
import { previewBreakpoints, previewUrl } from '../lib/preview'
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate'
import { redirectOnSlugChange } from '../hooks/slugRedirect'

/** First path segments that belong to the application and cannot be used for CMS pages. */
const RESERVED = ['admin', 'api', 'blog', 'preview', 'llms.txt', 'robots.txt', 'sitemap.xml', '_next']

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'slug', 'updatedAt', '_status'],
    preview: (doc) => previewUrl({ slug: doc?.slug as string | undefined, collection: 'pages' }),
    livePreview: {
      url: ({ data }) => previewUrl({ slug: data?.slug as string | undefined, collection: 'pages' }),
      breakpoints: previewBreakpoints,
    },
  },
  access: {
    read: publishedOrStaff,
    create: isLoggedIn,
    update: editUnlessLive,
    delete: publishersOnly,
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
        const first = String(data.slug ?? '').split('/')[0]
        if (RESERVED.includes(first)) {
          throw new APIError(`"${first}" is reserved by the application. Choose another path.`, 400)
        }
        return data
      },
    ],
    afterChange: [revalidateOnChange(''), redirectOnSlugChange('pages', '')],
    afterDelete: [revalidateOnDelete('')],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField({ allowSlashes: true, fallback: 'page' }),
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
