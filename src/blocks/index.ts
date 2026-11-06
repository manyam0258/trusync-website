import type { Block, Field } from 'payload'

import { CODE_PAGES } from '../lib/code-pages'
import { URL_HELP, validateOptionalUrl } from '../lib/safe-url'

const linkFields = (name: string, label: string): Field => ({
  name,
  type: 'group',
  label,
  fields: [
    { name: 'label', type: 'text' },
    {
      name: 'url',
      type: 'text',
      validate: validateOptionalUrl,
      admin: { description: URL_HELP },
    },
  ],
})

export const ICON_OPTIONS = [
  'Award', 'Banknote', 'Briefcase', 'Building2', 'CheckCircle2', 'Clock', 'Cloud', 'Code', 'Cpu', 'Database',
  'Factory', 'FileText', 'Globe', 'GraduationCap', 'HardHat', 'Headphones', 'Layout', 'LineChart', 'Lock', 'Phone',
  'Settings', 'ShieldCheck', 'ShoppingCart', 'Sliders', 'Smartphone', 'Star', 'Stethoscope', 'Truck', 'TrendingUp', 'UserCheck', 'Users', 'Wheat', 'Zap',
].map((value) => ({ label: value, value }))

export const COLOR_OPTIONS = [
  { label: 'Blue', value: 'blue' },
  { label: 'Purple', value: 'purple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Green', value: 'green' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Teal', value: 'teal' },
  { label: 'Red', value: 'red' },
  { label: 'Pink', value: 'pink' },
  { label: 'Yellow', value: 'yellow' },
]

const themeField: Field = {
  name: 'theme',
  type: 'select',
  defaultValue: 'light',
  options: [
    { label: 'Light grey background', value: 'light' },
    { label: 'White background', value: 'white' },
    { label: 'Dark background', value: 'dark' },
  ],
}

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the heading.' } },
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    linkFields('primaryCta', 'Primary button'),
    linkFields('secondaryCta', 'Secondary button'),
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'split',
      options: [
        { label: 'Text left, image right (light)', value: 'split' },
        { label: 'Centered with soft background (home page style)', value: 'centered' },
        { label: 'Dark banner', value: 'dark' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: { description: 'Optional row of figures under the buttons, for example 200+ Projects delivered.' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
}

export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Text', plural: 'Text sections' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'content', type: 'richText', required: true },
  ],
}

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Cards and lists', plural: 'Cards and lists sections' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the heading.' } },
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    themeField,
    {
      name: 'cardStyle',
      type: 'select',
      defaultValue: 'plain',
      options: [
        { label: 'Simple cards', value: 'plain' },
        { label: 'Cards with coloured icon', value: 'icon' },
        { label: 'Small icon tiles (title only)', value: 'tile' },
        { label: 'Problem cards (warning icon)', value: 'problem' },
        { label: 'Checklist (two columns)', value: 'checklist' },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: ['2', '3', '4', '6'].map((value) => ({ label: `${value} per row`, value })),
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', admin: { description: 'Not needed for small icon tiles.' } },
        { name: 'icon', type: 'select', options: ICON_OPTIONS, admin: { description: 'Used by the icon and tile styles.' } },
        { name: 'color', type: 'select', options: COLOR_OPTIONS, defaultValue: 'blue' },
        {
          name: 'url',
          type: 'text',
          validate: validateOptionalUrl,
          admin: { description: 'Optional. Makes the whole card a link. ' + URL_HELP },
        },
      ],
    },
  ],
}

export const ImageTextBlock: Block = {
  slug: 'imageText',
  labels: { singular: 'Image and text', plural: 'Image and text sections' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the heading.' } },
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'richText', required: true },
    {
      name: 'points',
      type: 'array',
      admin: { description: 'Optional ticked list shown under the text.' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'items',
      type: 'array',
      admin: { description: 'Optional short points with a title and one line of detail.' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    linkFields('button', 'Button (optional)'),
    { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Leave empty to show the badge below instead.' } },
    { name: 'badgeTitle', type: 'text', admin: { description: 'Shown instead of an image, for example "Certified Partner".' } },
    { name: 'badgeText', type: 'text' },
    { ...themeField, defaultValue: 'white' },
    {
      name: 'imageSide',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Image on the right', value: 'right' },
        { label: 'Image on the left', value: 'left' },
      ],
    },
  ],
}

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Frequently asked questions' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    linkFields('button', 'Button'),
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Blue', value: 'blue' },
      ],
    },
  ],
}

export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Figures', plural: 'Figures rows' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'For example 200+' } },
        { name: 'label', type: 'text', required: true },
        { name: 'icon', type: 'select', options: ICON_OPTIONS },
      ],
    },
  ],
}

export const BadgesBlock: Block = {
  slug: 'badges',
  labels: { singular: 'Technology badges', plural: 'Technology badge rows' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Built on robust open source technologies' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'icon', type: 'select', options: ICON_OPTIONS, defaultValue: 'Code' },
      ],
    },
  ],
}

export const ContactBlock: Block = {
  slug: 'contactForm',
  labels: { singular: 'Contact form', plural: 'Contact forms' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      admin: { description: 'Optional. The form itself, with the privacy notice, is added automatically.' },
    },
  ],
}

export const CodePageBlock: Block = {
  slug: 'codePage',
  labels: { singular: 'Built-in page design', plural: 'Built-in page designs' },
  fields: [
    {
      name: 'page',
      type: 'select',
      required: true,
      options: CODE_PAGES.map((p) => ({ label: p.label, value: p.key })),
      admin: { description: 'This page keeps its hand-built design. Change its wording, links and sections below. Add your own sections above or below it.' },
    },
    {
      name: 'sections',
      type: 'array',
      admin: {
        initCollapsed: true,
        description: 'Each row is one section of the page, in page order. Tick "Hide this section" to remove it from the page, or open a row to edit its text. Clear a text to go back to the original wording.',
        components: { RowLabel: '/components/admin/RowLabel#SectionRowLabel' },
      },
      fields: [
        { name: 'sectionId', type: 'text', required: true, admin: { readOnly: true, hidden: true } },
        { name: 'label', type: 'text', admin: { readOnly: true } },
        { name: 'hidden', type: 'checkbox', label: 'Hide this section', defaultValue: false },
        {
          name: 'texts',
          type: 'array',
          admin: { initCollapsed: true, components: { RowLabel: '/components/admin/RowLabel#TextRowLabel' } },
          fields: [
            { name: 'key', type: 'text', required: true, admin: { readOnly: true, hidden: true } },
            { name: 'kind', type: 'text', admin: { readOnly: true, hidden: true } },
            {
              name: 'value',
              type: 'textarea',
              validate: (value: unknown, { siblingData }: { siblingData?: unknown }) => {
                const kind = (siblingData as { kind?: string } | undefined)?.kind
                if ((kind === 'url' || kind === 'image') && value && validateOptionalUrl(value) !== true) return URL_HELP
                return true
              },
            },
          ],
        },
      ],
    },
  ],
}

const rawBlocks: Block[] = [
  HeroBlock,
  RichTextBlock,
  FeaturesBlock,
  StatsBlock,
  ImageTextBlock,
  BadgesBlock,
  FaqBlock,
  CtaBlock,
  ContactBlock,
]

const anchorField: Field = {
  name: 'anchor',
  type: 'text',
  admin: {
    description: 'Optional. Lets links jump to this section, for example "services" makes /page#services work. Lowercase letters, numbers and dashes.',
  },
  validate: (value: unknown) =>
    value === undefined || value === null || value === '' || (typeof value === 'string' && /^[a-z0-9-]+$/.test(value)) || 'Use lowercase letters, numbers and dashes only.',
}

export const pageBlocks: Block[] = [...rawBlocks.map((block) => ({ ...block, fields: [...block.fields, anchorField] })), CodePageBlock]
