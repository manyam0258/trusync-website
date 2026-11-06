import type { GlobalConfig } from 'payload'

import { revalidatePath } from 'next/cache'

import { isAdmin } from '../access'
import { validateOptionalUrl } from '../lib/safe-url'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: { group: 'Settings' },
  access: { read: () => true, update: isAdmin },
  hooks: {
    // Site-wide details appear on cached pages, so refresh them all when the settings change.
    afterChange: [
      ({ doc }) => {
        try {
          revalidatePath('/', 'layout')
        } catch {
          // Not inside a Next.js request (for example a script): nothing cached to refresh.
        }
        return doc
      },
    ],
  },
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
    {
      name: 'blogCta',
      type: 'group',
      label: 'Blog call to action',
      admin: { description: 'Shown at the end of every blog post. Point it at your contact form or a booking page.' },
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Talk to the TruSync team about your ERPNext project' },
        {
          name: 'body',
          type: 'textarea',
          defaultValue: 'Tell us what you want to improve and we will suggest where to start.',
        },
        { name: 'buttonLabel', type: 'text', defaultValue: 'Contact us' },
        { name: 'buttonUrl', type: 'text', defaultValue: '/#contact', validate: validateOptionalUrl },
      ],
    },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'address', type: 'textarea' },
    { name: 'linkedin', type: 'text' },
  ],
}
