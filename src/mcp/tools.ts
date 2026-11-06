import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { PayloadRequest } from 'payload'
import { z } from 'zod/v3'

import { formatSlug } from '../fields/slug'
import { isSafeUrl, URL_HELP } from '../lib/safe-url'
import { serverUrl } from '../lib/server-url'

/**
 * Tools that let an AI agent write blog posts and pages through the Payload MCP endpoint.
 *
 * Rules built into every tool:
 * - Everything is saved as a DRAFT. Nothing here can publish.
 * - They run with the permissions of the user who owns the API key (overrideAccess: false),
 *   so a key owned by an "Author" user cannot publish even if a tool were changed.
 * - Body text is plain Markdown. It is converted to the editor's format here.
 */

type ToolResult = { content: { type: 'text'; text: string }[] }
const text = (message: string): ToolResult => ({ content: [{ type: 'text', text: message }] })
const SERVER = () => serverUrl('http://localhost:3000')

const markdownToRichText = async (req: PayloadRequest, markdown: string) => {
  const editorConfig = await editorConfigFactory.default({ config: req.payload.config })
  return convertMarkdownToLexical({ editorConfig, markdown })
}

const fail = (err: unknown): ToolResult => {
  const e = err as { message?: string; data?: { errors?: { path?: string; message?: string }[] } }
  // Raw database errors can contain table names and query text. Agents only get a plain message.
  if (/Failed query|violates|constraint|drizzle|SQL|syntax error/i.test(e.message ?? '')) {
    return text('Could not save because the database rejected the change. Check that any ids you passed, such as heroImageId, exist.')
  }
  const details = e.data?.errors?.map((x) => `${x.path}: ${x.message}`).join('; ')
  return text(`Could not save. ${e.message ?? 'Unknown error.'}${details ? ` (${details})` : ''}`)
}

/** Confirms an uploaded image exists and that the key owner may use it. */
const checkImage = async (req: PayloadRequest, id: number): Promise<string | null> => {
  try {
    await req.payload.findByID({ collection: 'media', id, depth: 0, overrideAccess: false, user: req.user, req })
    return null
  } catch {
    return `No uploaded image with id ${id}. Use findMedia to list image ids.`
  }
}

/** Finds categories by slug or title. Creates the ones that do not exist yet. */
const resolveCategories = async (req: PayloadRequest, names: string[] = []) => {
  const ids: (number | string)[] = []
  for (const name of names) {
    const slug = formatSlug(name)
    const found = await req.payload.find({
      collection: 'categories',
      where: { or: [{ slug: { equals: slug } }, { title: { equals: name } }] },
      limit: 1,
      depth: 0,
      overrideAccess: false,
      user: req.user,
      req,
    })
    if (found.docs[0]) {
      ids.push(found.docs[0].id)
      continue
    }
    const made = await req.payload.create({
      collection: 'categories',
      data: { title: name },
      overrideAccess: false,
      user: req.user,
      req,
    })
    ids.push(made.id)
  }
  return [...new Set(ids)]
}

const MAX_MARKDOWN = 100_000
const safeUrl = z.string().max(2000).refine(isSafeUrl, URL_HELP)
const faqShape = z.object({ question: z.string().min(3).max(300), answer: z.string().min(3).max(3000) })

const postFields = {
  title: z.string().min(3).max(200).describe('Post title. Also becomes the H1.'),
  slug: z.string().min(2).max(120).optional().describe('Optional URL slug in lowercase English letters, digits and hyphens. Needed for titles written only in Telugu or Hindi, otherwise a short code is generated. If the slug is already used, a number is added.'),
  heroImageId: z.number().int().positive().optional().describe('Optional id of an uploaded image to use as the hero image. Find ids with findMedia.'),
  summary: z
    .string()
    .min(40)
    .max(300)
    .describe('A direct answer of about 40 to 60 words saying what the post covers. Shown in listings, search results and AI answers.'),
  bodyMarkdown: z
    .string()
    .min(50)
    .max(MAX_MARKDOWN)
    .describe('The post body in Markdown. Use ## for sections, - for bullet lists. Do not repeat the title as an H1.'),
  categories: z.array(z.string().min(2).max(80)).max(5).optional().describe('Up to 5 category names. Missing categories are created.'),
  tags: z.array(z.string().min(1).max(40)).max(15).optional(),
  faq: z.array(faqShape).max(20).optional().describe('Optional questions and answers shown at the end and published as FAQ structured data.'),
  seoTitle: z.string().max(70).optional().describe('Search title, about 50 to 60 characters. Leave empty to use the post title.'),
  seoDescription: z.string().max(170).optional().describe('Search description, about 150 to 160 characters.'),
}

const sectionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('hero'),
    eyebrow: z.string().optional(),
    heading: z.string(),
    subheading: z.string().optional(),
    buttonLabel: z.string().optional(),
    buttonUrl: safeUrl.optional().describe('A site path such as /services/consulting or a full https:// address.'),
  }),
  z.object({ type: z.literal('text'), heading: z.string().max(200).optional(), bodyMarkdown: z.string().max(MAX_MARKDOWN) }),
  z.object({
    type: z.literal('features'),
    heading: z.string().optional(),
    intro: z.string().optional(),
    items: z.array(z.object({ title: z.string().max(200), description: z.string().max(1000), url: safeUrl.optional() })).min(1).max(30),
  }),
  z.object({ type: z.literal('faq'), heading: z.string().max(200).optional(), items: z.array(faqShape).min(1).max(30) }),
  z.object({
    type: z.literal('cta'),
    heading: z.string(),
    body: z.string().optional(),
    buttonLabel: z.string().max(80).optional(),
    buttonUrl: safeUrl.optional(),
  }),
  z.object({ type: z.literal('contactForm'), heading: z.string().optional() }),
])
type Section = z.infer<typeof sectionSchema>

const toBlocks = async (req: PayloadRequest, sections: Section[]) => {
  const blocks: Record<string, unknown>[] = []
  for (const s of sections) {
    if (s.type === 'hero') {
      blocks.push({
        blockType: 'hero',
        eyebrow: s.eyebrow,
        heading: s.heading,
        subheading: s.subheading,
        primaryCta: s.buttonLabel && s.buttonUrl ? { label: s.buttonLabel, url: s.buttonUrl } : undefined,
      })
    } else if (s.type === 'text') {
      blocks.push({ blockType: 'richText', heading: s.heading, content: await markdownToRichText(req, s.bodyMarkdown) })
    } else if (s.type === 'features') {
      blocks.push({ blockType: 'features', heading: s.heading, intro: s.intro, items: s.items })
    } else if (s.type === 'faq') {
      blocks.push({ blockType: 'faq', heading: s.heading ?? 'Frequently asked questions', items: s.items })
    } else if (s.type === 'cta') {
      blocks.push({
        blockType: 'cta',
        heading: s.heading,
        body: s.body,
        button: s.buttonLabel && s.buttonUrl ? { label: s.buttonLabel, url: s.buttonUrl } : undefined,
      })
    } else {
      blocks.push({ blockType: 'contactForm', heading: s.heading })
    }
  }
  return blocks
}

const savedMessage = (kind: 'post' | 'page', id: number | string, extra: string) =>
  `Saved as a DRAFT ${kind} (id ${id}). ${extra}\nA person must review it and publish it: open ${SERVER()}/admin/collections/${kind === 'post' ? 'posts' : 'pages'}/${id} and use the Preview button.`

export const mcpTools = [
  {
    name: 'createBlogDraft',
    description:
      'Creates a blog post as a draft. Never publishes. Write the body in Markdown. Check existing posts first with the find tool to avoid duplicates.',
    parameters: postFields,
    handler: async (args: Record<string, unknown>, req: PayloadRequest): Promise<ToolResult> => {
      const a = z.object(postFields).parse(args)
      if (a.heroImageId) {
        const problem = await checkImage(req, a.heroImageId)
        if (problem) return text(problem)
      }
      try {
        const doc = await req.payload.create({
          collection: 'posts',
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
          data: {
            title: a.title,
            ...(a.slug && { slug: formatSlug(a.slug) }),
            ...(a.heroImageId && { heroImage: a.heroImageId }),
            excerpt: a.summary,
            content: await markdownToRichText(req, a.bodyMarkdown),
            categories: await resolveCategories(req, a.categories),
            tags: a.tags?.map((tag) => ({ tag })),
            faq: a.faq,
            meta: { title: a.seoTitle, description: a.seoDescription },
          },
        })
        return text(savedMessage('post', doc.id, `Slug: ${doc.slug}.`))
      } catch (err) {
        return fail(err)
      }
    },
  },
  {
    name: 'updateBlogDraft',
    description:
      'Changes an existing post by slug and saves the change as a draft version. A published post stays live until a person publishes the change. Only the fields you pass are changed.',
    parameters: {
      slug: z.string().describe('Slug of the existing post.'),
      heroImageId: postFields.heroImageId,
      title: postFields.title.optional(),
      summary: postFields.summary.optional(),
      bodyMarkdown: postFields.bodyMarkdown.optional(),
      categories: postFields.categories,
      tags: postFields.tags,
      faq: postFields.faq,
      seoTitle: postFields.seoTitle,
      seoDescription: postFields.seoDescription,
    },
    handler: async (args: Record<string, unknown>, req: PayloadRequest): Promise<ToolResult> => {
      const a = z
        .object({
          slug: z.string(),
          heroImageId: postFields.heroImageId,
          title: postFields.title.optional(),
          summary: postFields.summary.optional(),
          bodyMarkdown: postFields.bodyMarkdown.optional(),
          categories: postFields.categories,
          tags: postFields.tags,
          faq: postFields.faq,
          seoTitle: postFields.seoTitle,
          seoDescription: postFields.seoDescription,
        })
        .parse(args)
      if (a.heroImageId) {
        const problem = await checkImage(req, a.heroImageId)
        if (problem) return text(problem)
      }
      try {
        const found = await req.payload.find({
          collection: 'posts',
          where: { slug: { equals: a.slug } },
          limit: 1,
          depth: 0,
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
        })
        const current = found.docs[0]
        if (!current) return text(`No post with the slug "${a.slug}". Use createBlogDraft to make a new one.`)
        const meta = (current.meta ?? {}) as { title?: string; description?: string }
        const doc = await req.payload.update({
          collection: 'posts',
          id: current.id,
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
          data: {
            ...(a.title && { title: a.title }),
            ...(a.heroImageId && { heroImage: a.heroImageId }),
            ...(a.summary && { excerpt: a.summary }),
            ...(a.bodyMarkdown && { content: await markdownToRichText(req, a.bodyMarkdown) }),
            ...(a.categories && { categories: await resolveCategories(req, a.categories) }),
            ...(a.tags && { tags: a.tags.map((tag) => ({ tag })) }),
            ...(a.faq && { faq: a.faq }),
            ...((a.seoTitle || a.seoDescription) && {
              meta: { ...meta, ...(a.seoTitle && { title: a.seoTitle }), ...(a.seoDescription && { description: a.seoDescription }) },
            }),
          },
        })
        return text(savedMessage('post', doc.id, `Slug: ${doc.slug}. Live visitors still see the last published version.`))
      } catch (err) {
        return fail(err)
      }
    },
  },
  {
    name: 'createPageDraft',
    description:
      'Creates a website page as a draft, made of sections (hero, text, features, faq, cta, contactForm). Never publishes. The path is the URL without a leading slash, for example "services/sap-migration".',
    parameters: {
      title: z.string().min(3),
      path: z.string().min(2).describe('URL path without a leading slash. Lowercase, hyphens, slashes for nesting.'),
      sections: z.array(sectionSchema).min(1).max(30).describe('Up to 30 sections in the order they appear. Start with a hero.'),
      seoTitle: z.string().max(70).optional(),
      seoDescription: z.string().max(170).optional(),
    },
    handler: async (args: Record<string, unknown>, req: PayloadRequest): Promise<ToolResult> => {
      const a = z
        .object({
          title: z.string(),
          path: z.string(),
          sections: z.array(sectionSchema),
          seoTitle: z.string().optional(),
          seoDescription: z.string().optional(),
        })
        .parse(args)
      try {
        const doc = await req.payload.create({
          collection: 'pages',
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
          data: {
            title: a.title,
            slug: formatSlug(a.path),
            layout: await toBlocks(req, a.sections),
            meta: { title: a.seoTitle, description: a.seoDescription },
          },
        })
        return text(savedMessage('page', doc.id, `URL once published: /${doc.slug}.`))
      } catch (err) {
        return fail(err)
      }
    },
  },
  {
    name: 'updatePageDraft',
    description:
      'Replaces the sections or SEO text of an existing page by path and saves it as a draft version. A published page stays live until a person publishes the change. Sections you pass replace ALL current sections, so read the page first with the find tool.',
    parameters: {
      path: z.string().describe('Existing page path without a leading slash.'),
      title: z.string().optional(),
      sections: z.array(sectionSchema).max(30).optional(),
      seoTitle: z.string().max(70).optional(),
      seoDescription: z.string().max(170).optional(),
    },
    handler: async (args: Record<string, unknown>, req: PayloadRequest): Promise<ToolResult> => {
      const a = z
        .object({
          path: z.string(),
          title: z.string().optional(),
          sections: z.array(sectionSchema).max(30).optional(),
          seoTitle: z.string().optional(),
          seoDescription: z.string().optional(),
        })
        .parse(args)
      try {
        const found = await req.payload.find({
          collection: 'pages',
          where: { slug: { equals: formatSlug(a.path) } },
          limit: 1,
          depth: 0,
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
        })
        const current = found.docs[0]
        if (!current) return text(`No page at "${a.path}". Use createPageDraft to make a new one.`)
        const meta = (current.meta ?? {}) as { title?: string; description?: string }
        const doc = await req.payload.update({
          collection: 'pages',
          id: current.id,
          draft: true,
          overrideAccess: false,
          user: req.user,
          req,
          data: {
            ...(a.title && { title: a.title }),
            ...(a.sections && { layout: await toBlocks(req, a.sections) }),
            ...((a.seoTitle || a.seoDescription) && {
              meta: { ...meta, ...(a.seoTitle && { title: a.seoTitle }), ...(a.seoDescription && { description: a.seoDescription }) },
            }),
          },
        })
        return text(savedMessage('page', doc.id, `Path: /${doc.slug}.`))
      } catch (err) {
        return fail(err)
      }
    },
  },
]
