import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mcpPlugin } from '@payloadcms/plugin-mcp'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { APIError, buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { pageDescription, pageImage, toDescription } from './lib/seo-generate'
import { mcpTools } from './mcp/tools'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const SITE_NAME = 'TruSync'

// Browsers may only send logged-in (cookie) requests from these addresses.
// Set NEXT_PUBLIC_SERVER_URL to the public address of the site, and PAYLOAD_ALLOWED_ORIGINS
// (comma separated) for any extra address, such as a staging site.
const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SERVER_URL || 'https://trusync.in',
  ...(process.env.PAYLOAD_ALLOWED_ORIGINS?.split(',').map((o) => o.trim()).filter(Boolean) ?? []),
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:3000'] : []),
]

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Posts, Categories, Media, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  csrf: ALLOWED_ORIGINS,
  cors: ALLOWED_ORIGINS,
  // The website and admin do not use GraphQL, so it is switched off to reduce what is exposed.
  graphQL: { disable: true },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => (doc?.title ? `${doc.title} | ${SITE_NAME}` : SITE_NAME),
      // Posts use their summary. Pages have no summary, so use the first text in their sections.
      generateDescription: ({ doc, collectionSlug }) =>
        collectionSlug === 'posts' ? toDescription(String(doc?.excerpt ?? '')) : pageDescription(doc),
      generateImage: ({ doc, collectionSlug }) =>
        collectionSlug === 'posts' ? doc?.heroImage : pageImage(doc),
      generateURL: ({ doc, collectionSlug }) => {
        const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://trusync.in'
        if (collectionSlug === 'posts') return `${base}/blog/${doc?.slug ?? ''}`
        return `${base}/${doc?.slug ?? ''}`
      },
    }),
    redirectsPlugin({
      collections: ['pages', 'posts'],
      redirectTypes: ['301', '302'],
      overrides: {
        admin: { group: 'Settings' },
        hooks: {
          beforeChange: [
            ({ data }) => {
              const norm = (v?: string) => (v ?? '').trim().replace(/^\/+|\/+$/g, '').toLowerCase()
              if (data?.to?.type === 'custom' && norm(data.to.url) === norm(data.from)) {
                throw new APIError('A redirect cannot point to the same address it starts from.', 400)
              }
              return data
            },
          ],
        },
      },
    }),
    // Lets AI agents (Claude, Cursor and others) work with the CMS over MCP at /api/mcp.
    // Agents authenticate with an API key that acts as its owner, so create the key while
    // signed in as a user with the "Author" role. Agents can then write drafts but never publish.
    mcpPlugin({
      collections: {
        posts: { enabled: { find: true }, description: 'Blog posts. To write or edit, use createBlogDraft and updateBlogDraft.' },
        pages: { enabled: { find: true }, description: 'Website pages made of sections. To write or edit, use createPageDraft and updatePageDraft.' },
        categories: { enabled: { find: true, create: true }, description: 'Blog categories.' },
        media: { enabled: { find: true }, description: 'Uploaded images.' },
      },
      globals: {
        'site-settings': { enabled: { find: true }, description: 'Site name, contact details and the blog call to action.' },
      },
      mcp: {
        // The plugin bundles zod 3 while the app resolves zod 4, so the declarations differ even
        // though the schemas are compatible at runtime (they use zod/v3). Behaviour is covered by an MCP call test.
        tools: mcpTools as never,
        serverOptions: { serverInfo: { name: 'TruSync CMS', version: '1.0.0' } },
      },
    }),
  ],
})
