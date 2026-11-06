import type { Block, Field } from 'payload'

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
  labels: { singular: 'Feature cards', plural: 'Feature card sections' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
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
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'richText', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
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

export const pageBlocks: Block[] = [
  HeroBlock,
  RichTextBlock,
  FeaturesBlock,
  ImageTextBlock,
  FaqBlock,
  CtaBlock,
  ContactBlock,
]
