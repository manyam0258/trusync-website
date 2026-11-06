import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/cms'

/**
 * Search engines and AI assistants are allowed on purpose, so TruSync can be found
 * and cited in answers. Only private areas are closed to everyone.
 */
const PRIVATE = ['/api/', '/admin', '/preview']

const AI_AGENTS = [
  'GPTBot', // OpenAI training and ChatGPT
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's request
  'ClaudeBot', // Anthropic
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'Google-Extended', // Gemini and AI Overviews controls
  'Applebot-Extended', // Apple Intelligence
  'CCBot', // Common Crawl
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_AGENTS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
