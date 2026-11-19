import type { CollectionConfig } from 'payload'

import { isAdmin, isLoggedIn } from '../access'

/**
 * Contact-form enquiries from the website.
 * Created only by the contact form's server action (Payload local API), never through the public API.
 * The same enquiry is also written to Supabase; see src/app/actions/contact.ts.
 */
export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  admin: {
    useAsTitle: 'name',
    group: 'Leads',
    defaultColumns: ['name', 'email', 'service', 'status', 'createdAt'],
    description: 'Enquiries sent from the website contact form.',
  },
  access: {
    read: isLoggedIn,
    create: () => false,
    update: isLoggedIn,
    delete: isAdmin,
  },
  defaultSort: '-createdAt',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, access: { update: () => false } },
        { name: 'email', type: 'email', required: true, access: { update: () => false } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text', access: { update: () => false } },
        { name: 'service', type: 'text', access: { update: () => false } },
      ],
    },
    { name: 'message', type: 'textarea', required: true, access: { update: () => false } },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      required: true,
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
        { label: 'Spam', value: 'spam' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: { position: 'sidebar', description: 'Internal follow-up notes. Not shared with the visitor.' },
    },
    {
      name: 'consent',
      type: 'group',
      label: 'DPDP consent',
      admin: { description: 'Recorded when the enquiry was sent.' },
      access: { update: () => false },
      fields: [
        { name: 'language', type: 'text', admin: { description: 'Language the privacy notice was shown in.' } },
        { name: 'marketing', type: 'checkbox', defaultValue: false, label: 'Agreed to marketing updates' },
        { name: 'sealed', type: 'checkbox', defaultValue: false, label: 'Sealed by Sentinel DPDP' },
        { name: 'proofHash', type: 'text', label: 'Sentinel proof hash' },
      ],
    },
    {
      name: 'savedToSupabase',
      type: 'checkbox',
      defaultValue: false,
      access: { update: () => false },
      admin: { position: 'sidebar', readOnly: true, description: 'Whether the Supabase copy was saved too.' },
    },
  ],
}
