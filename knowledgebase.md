# TruSync Website

**A modern marketing website for TruSync, showcasing industry‑specific ERP/CRM solutions built on the Frappe Framework.**

## Table of Contents
- [Project Progress](#project-progress)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
  - [Architecture Overview](#architecture-overview)
  - [Data Flow & State Management](#data-flow--state-management)
  - [Styling & UI Components](#styling--ui-components)
- [Components Overview](#components-overview)
- [Utilities](#utilities)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Project Progress
*Last updated: 2026-11-06. Branch: `redesign-ui-visual-design-kept` (local commits, not pushed).*

**Direction decided:** build on this branch with Payload CMS inside the same Next.js app. A `prod` branch will be created later. The WordPress pages that `origin/master` serves through rewrites (`wp.trusync.in`) are ignored on this branch. PostHog will be added later, after the CMS is working.

### Done
| Phase | What | Commit |
| --- | --- | --- |
| 0 | Removed committed `.backup` files, `debug-fetch.js` and Playwright reports (now git-ignored). Added `metadataBase`, canonical, Yandex verification and the new site icon. Added `src/proxy.ts` (www to apex, lowercase paths; skips `/api`, `/_next` and any path with a file extension so uppercase static files like `integration.PNG` keep working). Fixed the "ERPNext Implementation" and "Mobile App Development" card titles. Pointed the Retail & Distribution and Financial Services tiles to existing pages. | `53800a4` |
| 1 | Installed Payload CMS 3.93.0 (Postgres adapter, Lexical editor, SEO and redirects plugins). Moved all routes into `src/app/(frontend)/` (URLs unchanged) and added the Payload admin and API routes in `src/app/(payload)/`. Pinned Next.js 16.4.3 and `graphql` 16.15.0. Added `.npmrc` (`legacy-peer-deps`), `.nvmrc` (Node 22.23.4) and `.env.example`. | `7a02984` |
| 2 | Content model: collections Pages (block builder), Posts (drafts, autosave, versions, FAQ), Categories, Media, Users (admin, editor and author roles); global Site settings. Authors can only save drafts; editors and admins publish. | `7a02984` |
| 3 | Public blog: `/blog` and `/blog/[slug]` with SEO metadata, canonical URLs and `Article`, `BreadcrumbList` and `FAQPage` JSON-LD. A catch-all route renders CMS pages at any new path and looks up redirects on a miss. Generated `sitemap.xml` and `robots.txt` replace the static files. Blog link added to the header. | `7a02984` |

The production build (`npm run build`) passes and lint is clean on the new code. **A passing build did not catch the broken admin:** the Payload import map was stale, so the rich-text editor and SEO fields did not render until it was regenerated (see [QA results](#qa-results-2026-11-06)). The regenerated `src/app/(payload)/admin/importMap.js` is **modified but not committed**.

### Not done yet
- **Existing pages are still code, not CMS content.** They are not editable in the admin, and their titles and descriptions still come from code. Plan: convert the homepage first, then the roughly 16 pages built on `ServicePageLayout` (they already take props), then the large hand-built pages (`accounting-module`, `order-management-module`, `manufacturing`, `crm-module`, `frappe-framework`). A CMS page at a path that still has a code route is shadowed by the code route until that route is deleted.
- Live preview for drafts, and scheduled publishing (needs Payload's job runner; unverified on Coolify).
- PostHog and a consent banner. Google Analytics and Clarity from `origin/master` were deliberately not brought over; they belong behind the same consent gate.
- Contact flow fixes (see known issues).
- Production deployment on Coolify: Postgres service, S3-compatible media storage, migrations instead of dev schema push, `NEXT_PUBLIC_*` values as build arguments.
- Real content for the placeholder service pages (`consulting`, `development`, `migrations`, `training-support`, `mobile-app-development`, `erpnext-implementation`) and for `agriculture` and `real-estate`.
- Privacy policy and terms pages (footer links are still `#`) and a custom 404 page.
- **Review the rest of this knowledgebase.** Only the sections touched by the CMS work were corrected on 2026-11-06 (progress, overview, features, tech stack, folder structure, setup, usage, deployment, environment variables). Components Overview, How It Works, the Features list for industries and services, and the license note were not audited and may be out of date.

### Known issues
1. **Contact form loses leads when Sentinel is down.** `Contact.tsx` calls the Sentinel consent API first and only saves to Supabase if that succeeds. Set `SENTINEL_BACKEND_URL`, and change the flow to save the lead first.
2. **Sentinel proxy is open.** `api/sentinel/[...slug]` forwards any path to the backend. It should allow only the policy fetch. Locally it returns 500 because `SENTINEL_BACKEND_URL` is unset (the fallback is `127.0.0.1:8001`).
3. **Privacy widget:** a policy-load failure falls back to hard-coded English text and a made-up `marketing` consent key; switching language clears ticked boxes; there is no stale-response guard; no double-submit guard on the form.
4. **Telegram alert** sends unescaped text with `parse_mode: Markdown`, so some messages are rejected.
5. **Healthcare tile** on the homepage still links to `/industries/healthcare`, which has no page.
6. **Hero** ships at `opacity: 0` in the server HTML (framer-motion `initial`), which can delay the largest paint.
7. **Payload CLI** (`payload generate:types`, `generate:importmap`) crashes in `undici` ("Illegal constructor") under `tsx` on Node 22.23.4 and 24.20, so CMS data is loosely typed in code. **Correction to an earlier note:** the admin did *not* work without it. Dev did not regenerate the import map, and the editor and SEO fields were broken until it was generated by calling `generateImportMap(config, { force: true })` from inside the Next.js server (a temporary route, since deleted). Re-do this whenever a plugin or editor feature is added. The docs say the import map is never regenerated after a production build, so the committed file must be correct.
8. **Password-reset emails** are printed to the console; no email adapter is configured.
9. **Stale local `master`** is 19 commits behind `origin/master`. Compare against `origin/master`.

### QA results (2026-11-06)
Browser tests (Playwright) against the local admin and site, about 90 checks, test records prefixed `QA` and removed afterwards. Scripts were written to a temporary scratchpad folder and are **not in the repo yet**; moving them to `tests/` (credentials from environment variables, never committed) is an open task.

**Works:** login, logout, wrong-password handling, account lockout, role gating (authors cannot publish, create users or change roles); post workflow draft to publish to unpublish with correct SEO tags, canonical, Open Graph, `Article`/`BreadcrumbList`/`FAQPage` JSON-LD, sitemap and `robots.txt`; drafts never public in the site, REST API or sitemap; page builder (Hero added in the admin; all 7 block types render); nested paths, `noindex`, reserved paths, duplicate slug and email rejection; media served through `next/image`.

**Issues** (status: open unless noted):
| # | Severity | Issue | Fix direction |
| --- | --- | --- | --- |
| 1 | Critical | Stale import map broke the editor and SEO fields. **Fixed locally, not committed.** | Commit `importMap.js`; regenerate after adding plugins or editor features. |
| 2 | High | A request with the admin cookie from a foreign `Origin` was accepted. | Set `serverURL` and a `csrf` allowlist in `buildConfig`. |
| 3 | High | Redirects always return 307 (the 301/302 type is ignored); a redirect to itself is accepted; redirects cannot apply to pages still in code. | Use `permanentRedirect()` for 301 in `src/lib/cms.ts` callers; validate `from != to`. |
| 4 | High | Changing a published slug breaks the old URL (404). | `afterChange` hook that creates a redirect. |
| 5 | High | Media accepts any file type; a `.txt` shows in the hero picker. | `upload.mimeTypes: ['image/*']`. |
| 6 | High | Contact block heading is ignored; the fixed header overlaps the first block on CMS pages. | Fix in `RenderBlocks.tsx`. |
| 7 | Medium | Opening Create immediately saves an empty draft (autosave), so junk drafts accumulate. | Accept and add cleanup, or turn autosave off. |
| 8 | Medium | No "Save Draft" button. | `autosave: { showSaveDraftButton: true }`. |
| 9 | Medium | Two "Content" tab bars (SEO plugin wraps the tabs). | Rename the inner tab. |
| 10 | Medium | No image sizes generated. | `imageSizes`, `adminThumbnail`, `formatOptions`. |
| 11 | Medium | GraphQL introspection and playground open to anonymous users. | Disable GraphQL if unused (confirm the option in the docs). |
| 12 | Medium | No email adapter; password-reset emails only print to the console. | Configure an email adapter. |
| 13 | Medium | Auth cookie has no `Secure` flag (expected on http). | `auth.cookies.secure: true` in production. |
| 14 | Low | "Add Faq" label, Media and Redirects outside the Content and Settings groups, admin user has no name, nav collapsed by default. | `labels`, `admin.group`, set a name. |
| 15 | Low | No draft preview or live preview. | Configure `admin.preview` with a draft-mode route. |
| 16 | Low | Public pages never reach network idle (slow chat widget); contact widget logs a 500 locally. | Set `SENTINEL_BACKEND_URL`; revisit the widget. |

**Not tested:** bulk delete, duplicating documents, restoring versions, locked documents, rich-text images and links, email verification, avatar upload, scheduled publishing (not configured), keyboard and screen-reader use, performance.

**Data note:** during testing, two empty auto-created page drafts (ids 1 and 2) that existed before the tests were deleted. The server log shows no saved edits to them. The user's own data (post `test_title`, category `AI_updates`, media `shadnagar-layout.png`, the admin account) was not touched.

### Draft preview and SEO work (uncommitted, paused 2026-11-06)
**Built, not yet committed:** admin Preview and Live Preview for posts and pages (`/preview` and `/preview/exit` routes, draft-aware queries in `src/lib/cms.ts`, `DraftBanner`, `RefreshRouteOnSave`; needs `PREVIEW_SECRET` in `.env.local`); a visible Save Draft button; automatic 301 redirect when a published slug changes (`src/hooks/slugRedirect.ts`); 301 answered with HTTP 308 and 302 with 307; self-redirects rejected; images-only media library; blog pagination, category pages (`/blog/category/[slug]`), RSS (`/blog/rss.xml`), related posts, reading time and an editable end-of-post call to action (Site settings > Blog call to action); explicit AI-crawler rules in `robots.ts`; generated `/llms.txt`; shared page list in `src/lib/site-pages.ts` used by the sitemap and `llms.txt`; first block on CMS pages clears the fixed header; Contact block heading is shown. New dependency: `@payloadcms/live-preview-react` 3.93.0.

**Verified in a browser:** draft is hidden from visitors, the RSS feed, the sitemap and `llms.txt`; the preview route refuses a missing login, a wrong secret and external redirect targets; preview mode shows the draft and exiting preview hides it; published posts appear on the blog, category page, RSS, `llms.txt` and sitemap; slug change gives a 308 from the old URL; 302 gives 307; self-redirect rejected; first-block padding 144px.

**Still to check (test or setup problems, not confirmed bugs):**
- The admin editor shows two icons next to Save Draft (an eye and an arrow). The test did not find a button labelled "Preview", so check these by hand: the eye should open Live Preview and the arrow the draft in a new tab. Live Preview was not confirmed to load.
- Related posts ("Keep reading") did not show in the test. The second test post was probably still a draft; re-test with two published posts.
- The images-only check was inconclusive: the PNG test upload failed for lack of `alt` (multipart upload needs the fields in a `_payload` JSON part), so the `.txt` rejection could have been the same error.
- Open Graph image fallback: with no hero image the post has no `og:image`. Set a default share image in Site settings.
- Local `NEXT_PUBLIC_SERVER_URL=http://localhost:3000` makes canonical URLs and `llms.txt` point at localhost. In production set it to `https://trusync.in` as a build argument.
- Open items from the QA table: CSRF allowlist (#2), GraphQL exposure (#11), email adapter (#12), cookie `Secure` flag (#13).

**To resume:** start Postgres (`docker start trusync-postgres`), use Node 22.23.4 (`PATH` first), run `npm run dev`, then <http://localhost:3000/admin>. The work from this session was committed in three commits on this branch after `bd9278f`.

### SEO auto-generate and AI agent access (MCP), 2026-11-07
**SEO auto-generate fix.** On Pages the description button returned nothing because the config read `doc.excerpt`, which pages do not have, and there was no image generator. `src/lib/seo-generate.ts` now builds the page description from the first text in its sections (hero subheading, intro, body, first FAQ answer, cut to about 155 characters) and takes the first section image as the share image. Posts still use their summary and hero image. Verified in a browser (title, description and image buttons).

**MCP (`@payloadcms/plugin-mcp` 3.93.0, endpoint `/api/mcp`).** Lets AI agents such as Claude Code or Cursor write posts and pages. Built so that agents can only save drafts:
- Custom tools in `src/mcp/tools.ts`: `createBlogDraft`, `updateBlogDraft`, `createPageDraft`, `updatePageDraft`. Body text is plain Markdown, converted to editor content. Categories are matched by name and created if missing.
- Built-in read tools: find for posts, pages, categories, media and site settings, and create for categories. There are no delete tools, and the plugin's file-writing schema and config tools stay off (they only exist in development and only when explicitly enabled).
- Safety: a key acts as its owner, so create it while signed in as a user with the **Author** role (authors cannot publish). Posts and pages also refuse `_status: published` from MCP, and updates are saved as draft versions, so a live page stays live until a person publishes.
- The tools import `zod/v3` because the plugin bundles zod 3 while the app resolves zod 4; the tool list is cast at that boundary in `payload.config.ts`.
- Verified with real MCP calls: no key or a wrong key gives 401; drafts created and edited; visitors get 404 for them; the author cannot publish through REST or MCP; duplicate and reserved paths give clear errors; Markdown became headings, list and link.

**To connect an agent:** (1) in the admin create a user "AI Agent" with role Author; (2) sign in as that user, open MCP > API Keys, create a key, tick the permissions (posts find, pages find, categories find and create, media find, site settings find) and copy the key; (3) `claude mcp add --transport http trusync-cms http://localhost:3000/api/mcp --header "Authorization: Bearer <key>"`. In production use `https://trusync.in/api/mcp`. A key is revoked by turning off "Enable API Key" or deleting it. The agent's drafts appear in Posts and Pages; review each with the Preview button, then publish.

### Security hardening and review, 2026-11-07
**Done and verified** (regression and MCP end-to-end scripts, browser admin test):
- JSON-LD output escapes `<`, `>`, `&` (stored XSS via `</script>`); `src/lib/safe-url.ts` rejects `javascript:` and similar links in CMS URL fields and the blog call to action.
- Preview route: timing-safe secret check, logged-in user required, only site paths accepted (no open redirect).
- Sentinel proxy: allow-list of two endpoints, 20 KB limit, 10 s timeout, generic errors.
- Security headers (nosniff, SAMEORIGIN, referrer, permissions, HSTS in production); GraphQL and its playground are off; CSRF and CORS use an explicit origin list; passwords need 12+ characters.
- MCP: caps on sizes and counts, database errors hidden, `proxy.ts` returns 400/413 for empty or malformed bodies (the plugin otherwise hangs).
- Checks run: `tsc` clean, eslint clean on changed files (52 older errors remain in untouched files), `npm run build` succeeds.

**Security review findings, now FIXED (2026-11-07)** and verified with an authorization test (22 checks) plus the regression suite (44 checks):
1. **Key to admin takeover.** `src/access/index.ts` now treats only documents of the `users` collection as staff (`isStaff`). An MCP key signing in over REST is a document of `payload-mcp-api-keys`, so it is refused everywhere: no user list, no user edits, no page, post or redirect writes. MCP tools still work because the plugin sets the key owner as `req.user` with `collection: 'users'`.
2. **Publish guard bypass.** Pages and posts: `update` uses `editUnlessLive` and `delete` is for editors and admins only (`publishersOnly`). Authors can create drafts and edit documents that are not live yet. Changing a live page or post needs an editor or admin. Categories and media: create for staff, update and delete for editors and admins.
3. **Open redirect.** Redirects: create, update and delete need an editor or admin, and `to.url` must be a site path or a `trusync.in` address (`isSafeRedirectTarget` in `src/lib/safe-url.ts`). `findRedirect` also refuses unsafe targets already stored.

**Effect on agents:** an agent key owned by an Author can write new drafts and edit its own unpublished drafts, but cannot edit an already published post or page (even as a draft). Ask an editor to make that change, or create the key under an Editor user (editors still cannot be made to publish by MCP, because the tools refuse `published`).

**Test scripts** (kept outside the repo): authorization test, MCP end-to-end, regression. Tests that call the REST API with a cookie must send an `Origin` header, or the CSRF allowlist treats the call as anonymous. The MCP end-to-end script still lists 4 outdated expectations (the optional `slug` argument, slug cleaning of `llms.txt` and dotted paths, and a one-character path); the behaviour itself is correct.

**Before go-live:** rotate the MCP key and admin password that were shared in chat; create the key under an Author user; add a CSP (report-only first) and rate limiting at the reverse proxy; run `npm audit` and review the high transitive items.

**Code map note:** `LeadMagnet`, `StickyCTA` and `WhatsAppFloat` components are unused.

### Branches
| Branch | State |
| --- | --- |
| `origin/master` | Production line from a teammate (PRs #5 to #14): Google Analytics, Clarity, Yandex, `middleware.ts`, a new sitemap, a new logo (`trusync-logo.png`), and rewrites that serve about 9 pages from WordPress. This branch has none of the WordPress rewrites. |
| `redesign-ui-visual-design-kept` | This branch: the DPDP and contact work plus the redesign, performance fixes and the Payload CMS. |
| `feat1`, `vara` | Fully merged into `origin/master`. Stale. |

### Local development
- Node **22.23.4 or later** is required by Payload. In this environment a shim at `~/.local/bin/node` points to 22.23.2, so put `~/.nvm/versions/node/v22.23.4/bin` first on `PATH`.
- Local Postgres runs in Docker as `trusync-postgres` on `127.0.0.1:54329` (database `trusync_cms`, volume `trusync_pgdata`). Connection values are in `.env.local`, which is git-ignored.
- `npm run dev` starts the site at <http://localhost:3000> and the admin at <http://localhost:3000/admin>. Create the first admin user on first visit.
- `npm install` can hang in peer-dependency resolution; `.npmrc` sets `legacy-peer-deps=true` to prevent that.
- Uploaded media is stored in `./media/` locally (git-ignored).

### Editable pages (migrated from code to the CMS)
Done on 2026-11-07, on this branch.

- **What moved:** the home page (path `home`, shown at `/`), 14 template-based pages (industries dairy, distribution, construction, EPC, textile, NBFC, crowdfunding, HR and payroll; solutions Frappe Insights and Frappe LMS; open-source integrations; website, helpdesk and asset-management modules) and 8 placeholder pages (consulting, implementation, development, migrations, mobile apps, training, agriculture, real estate). Their old route files were deleted; the URLs are unchanged. The 8 placeholders are published with "noindex" until real content is written, and are left out of the sitemap.
- **Still in code (not yet editable):** the big hand-built pages: CRM, accounting, HR and payroll module, order management, manufacturing, education, AI automation, DPDP compliance and Frappe Framework. They hold diagrams, animations and long data tables, so each needs its own conversion.
- **How an editor works:** Admin > Pages > open a page > add, remove or reorder sections, edit text, replace images from the media library, then Publish. Preview and Live Preview show drafts first. Authors can only edit unpublished pages; editors and admins publish.
- **Section types:** Hero (split, centered with figures, or dark), Text, Cards and lists (simple, icon, tiles, problem cards, checklist; 2 to 6 per row; light, white or dark background), Figures, Image and text (with ticked points, or a badge when there is no image), Technology badges, FAQ (adds FAQ structured data), Call to action (dark or blue), Contact form. Every section has an optional "anchor" so links like `#services` work. In a heading, words between `*asterisks*` get the brand gradient.
- **Home page:** `src/app/(frontend)/page.tsx` shows the CMS page `home`. If it is deleted or unpublished it falls back to the original code version, so the front page is never blank. `/home` redirects to `/`.
- **Seed script:** `scripts/seed-pages.mts` created these pages from the original files in git commit 79f4016. It only creates missing pages, so edits are never overwritten. Run it against a running site with `SEED_EMAIL`, `SEED_PASSWORD` and optionally `SEED_BASE` (use it again on the production site after deploy; the pages live in the database, not in git).
- **Blocks and icons** are defined in `src/blocks/index.ts` and rendered in `src/components/cms/RenderBlocks.tsx`. To offer a new icon, add it to `ICON_OPTIONS` and to `src/components/cms/icons.tsx`.
- **Known gap:** the home page "Healthcare" tile has no link because no healthcare page exists yet.
- **Production note:** database content is not in git. The seed script must be run once on the production database, or the production database copied, otherwise these URLs would 404 there.

### Decisions and cautions
- Payload and `@payloadcms/*` packages must all be the same exact version (currently 3.93.0). Do not use caret ranges.
- `images.localPatterns` in `next.config.ts` blocks every local image that is not listed. Add a pattern for any new folder that `next/image` must serve.
- `middleware.ts` is deprecated in Next.js 16 and renamed `proxy.ts` (see `node_modules/next/dist/docs`).
- `robots.ts` only registers at the app root (`src/app/robots.ts`), not inside the `(frontend)` route group.
- DB-backed pages use `export const dynamic = 'force-dynamic'` so the build does not need a database. Revisit with ISR once Coolify provides `DATABASE_URL` at build time.
- Reserved CMS paths: `admin`, `api`, `blog`, `_next`.

---

## Overview
The TruSync website is a Next.js 16 (App Router) application built with TypeScript and Tailwind CSS, with Payload CMS 3 embedded in the same app for editable pages and a blog. It serves as a public‑facing site that presents TruSync’s industry solutions, services, and innovative offerings. The site uses the `output: "standalone"` configuration for deployment.

## Features
- **Industry‑specific pages** – dedicated sections for Construction, Crowdfunding, Dairy, Distribution, EPC, HR/Payroll, Manufacturing, NBFC, Textile.
- **Service modules** – detailed pages for Accounting, Asset Management, CRM, Helpdesk, HR/Payroll, Order Management, Website.
- **Solution showcases** – Frappe Framework, Frappe Insights, Frappe LMS.
- **Innovation highlights** – AI Automation, PDPA Compliance, Open‑Source Integrations.
- **Reusable UI component library** – Button, Card, Container, Section, Toast, etc.
- **Section‑based layout** – Hero, Features, About, Services, Why Choose Us, Contact, etc.
- **Lead capture & WhatsApp float** – LeadMagnet and WhatsAppFloat components for conversions.
- **SEO‑ready** – JSON‑LD schema via `JsonLd.tsx`, per-page canonical URLs, generated `sitemap.xml` and `robots.txt`.
- **Optimized font handling** – uses `next/font` with Inter and JetBrains Mono.
- **Content management** – Payload CMS admin at `/admin` for a blog (drafts, versions, FAQ, categories, authors), block-based pages, redirects and site settings.
- **DPDP consent** – Sentinel privacy widget on the contact form, routed through `/api/sentinel/*`.

## Tech Stack
- **Framework:** Next.js 16.4.3 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **CMS:** Payload 3.93.0 (Lexical rich text, SEO plugin, redirects plugin)
- **Database:** Postgres for the CMS; Supabase for contact submissions
- **UI Components:** Custom reusable primitives (Button, Card, etc.)
- **State Management:** React Context / `useState`/`useEffect` (no global state library)
- **Deploy:** Coolify (`output: "standalone"`)
- **Runtime:** Node 22.23.4 or later
- **Linting:** ESLint (eslint-config-next)

## Folder Structure
```
trusync-website/
├─ src/
│  ├─ proxy.ts                      ← www→apex and lowercase redirects (Next 16 "proxy")
│  ├─ payload.config.ts             ← Payload config (collections, plugins, database)
│  ├─ app/
│  │  ├─ robots.ts                  ← generated robots.txt (must stay at app root)
│  │  ├─ actions/contact.ts         ← contact form server action (Supabase, Telegram, n8n)
│  │  ├─ (frontend)/                ← the public website (URLs do not include "(frontend)")
│  │  │  ├─ layout.tsx, page.tsx, globals.css
│  │  │  ├─ blog/page.tsx, blog/[slug]/page.tsx
│  │  │  ├─ [...slug]/page.tsx      ← renders CMS pages at any path without a code route
│  │  │  ├─ sitemap.ts              ← code routes plus published CMS pages and posts
│  │  │  ├─ api/sentinel/[...slug]/ ← DPDP consent proxy
│  │  │  ├─ industries/, services/, solutions/, innovation/   ← pages still in code
│  │  ├─ (payload)/                 ← Payload admin and API (generated; do not edit)
│  │  │  ├─ admin/, api/[...slug]/, api/graphql/
│  ├─ collections/                  ← Pages, Posts, Categories, Media, Users
│  ├─ globals/SiteSettings.ts
│  ├─ blocks/index.ts               ← page builder blocks (hero, text, features, FAQ, CTA, ...)
│  ├─ access/, fields/, hooks/      ← role checks, slug field, cache revalidation
│  ├─ components/
│  │  ├─ layout/ (Header, Footer)
│  │  ├─ sections/ (Hero, About, Services, Industries, WhyChooseUs, Contact, framework/...)
│  │  ├─ cms/ (RenderBlocks, RichTextContent)
│  │  ├─ ui/ (Button, Card, Container, Section, Toast)
│  │  ├─ crm/, JsonLd.tsx, SentinelPrivacyWidget.tsx, ServicePageLayout.tsx, ...
│  ├─ lib/ (utils.ts, supabase.ts, payload.ts, cms.ts)
├─ public/ (assets/, logo.png, Trusync-icon-tinified.png)
├─ media/                           ← local CMS uploads (git-ignored)
├─ next.config.ts, tsconfig.json, package.json, .npmrc, .nvmrc, .env.example
└─ knowledgebase.md, ARCHITECTURE_ISSUES.md, README.md
```

## Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone <repo-url>
   cd trusync-website
   ```
2. **Use Node 22.23.4 or later** (see `.nvmrc`)  
   ```bash
   nvm use
   ```
3. **Start a local Postgres** for the CMS  
   ```bash
   docker run -d --name trusync-postgres -e POSTGRES_USER=trusync -e POSTGRES_PASSWORD=<choose-a-password> \
     -e POSTGRES_DB=trusync_cms -p 127.0.0.1:54329:5432 -v trusync_pgdata:/var/lib/postgresql/data postgres:17-alpine
   ```
4. **Install dependencies** (`.npmrc` enables `legacy-peer-deps`, which avoids a peer-resolution loop)  
   ```bash
   npm install
   ```
5. **Set up environment variables** (copy `.env.example` to `.env.local`; see [Environment Variables](#environment-variables))
6. **Run the development server**  
   ```bash
   npm run dev
   ```
7. Open <http://localhost:3000> for the site and <http://localhost:3000/admin> for the CMS. The first visit to `/admin` creates the first admin user.

## Usage
- **Blog posts and new pages:** write them in the admin at `/admin`. A post needs a title, a summary, a body and the status **Published**. A page needs a path (for example `about-us`) and at least one block.
- **Existing pages** still live in code under `src/app/(frontend)/` until they are converted to CMS blocks (see [Project Progress](#project-progress)). Changes hot‑reload via Next.js fast refresh.
- To move a code page into the CMS: create the page in the admin at the same path, publish it, then delete its code route.
- Reuse UI components from `src/components/ui/` and section components from `src/components/sections/`.
- Update SEO for CMS content in each page or post's SEO tab. Code pages use `metadata` exports and `JsonLd.tsx`.

## How It Works

### Architecture Overview
- **Next.js App Router** handles routing via the `app/` directory.
- Each route (`page.tsx`) acts as a route segment; layout is shared via `layout.tsx`.
- No custom server; all logic lives in React Server Components (by default) or Client Components where needed (marked with `"use client"`).

### Data Flow & State Management
- Data fetching occurs in Server Components using `fetch` or the Supabase client (`src/lib/supabase.ts`).
- Minimal client‑side state: form states, UI toggles (mobile menu, modals) handled with React `useState`.
- No global store; context is used only where needed (e.g., theme, if added later).

### Styling & UI Components
- Tailwind CSS provides utility‑first classes; custom components encapsulate recurring patterns.
- `globals.css` imports Tailwind base/utilities and may contain global overrides.
- Component hierarchy:  
  `layout.tsx` → `<Header/>`, `<main>` (page content), `<Footer/>`.
- Sections (`Hero.tsx`, `About.tsx`, etc.) are assembled inside page files to build landing‑page style layouts.

## Components Overview
| Category | Components |
|----------|------------|
| **UI Primitives** | `Button`, `Card`, `Container`, `Section`, `Toast` |
| **Layout** | `Header`, `Footer` |
| **Sections** | `Hero`, `About`, `Services`, `Industries`, `WhyChooseUs`, `Contact`, `LeadMagnet`, `WhatsAppFloat`, `StickyCTA`, `ServicePageLayout` |
| **Framework Sections** (used on solution/industry pages) | `FrameworkHero`, `ArchitectureSection`, `BuilderSection`, `ComparisonSection`, `CRMHelpdeskSection`, `ERPFlowSection`, `ERPNextSection`, `HRSection`, `InsightsSection`, `POSSection`, `PricingSection`, `VerticalsSection` |
| **CRM‑specific** | `HeroImage`, `CRMImage` |
| **Utility** | `JsonLd` (SEO schema) |
| **Lib** | `utils.ts` (helpers), `supabase.ts` (Supabase client) |

## Deployment
Production runs on **Coolify** (commit history refers to Coolify builds). `next.config.ts` sets `output: "standalone"` for a minimal Node output.

Before the first production deploy with the CMS:
1. Create a Postgres service in Coolify with daily backups, and set `DATABASE_URL`.
2. Set `PAYLOAD_SECRET` to a long random value (`openssl rand -hex 32`).
3. Configure S3-compatible storage for media (local files are lost on redeploy).
4. Use Payload migrations in production; the automatic schema push used in development is not safe there.
5. Set `NEXT_PUBLIC_*` values as **build arguments**, because Next.js inlines them at build time.
6. Use Node 22.23.4 or later in the build image.

This section is a checklist, not a record of a completed deployment.

## Environment Variables
| Variable | Description | Required? |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes (if using Supabase) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon‑public key | Yes |
| `DATABASE_URL` | Postgres connection string for the CMS | Yes |
| `PAYLOAD_SECRET` | Secret used by Payload to sign sessions | Yes |
| `NEXT_PUBLIC_SERVER_URL` | Public site URL, used for canonical links (defaults to `https://trusync.in`) | No |
| `SENTINEL_BACKEND_URL` | Base URL of the Sentinel DPDP backend used by `/api/sentinel/*` | Yes for the contact form consent step |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Contact form notifications | No |
| `N8N_WEBHOOK_URL` | Contact form webhook | No |
| `NEXT_PUBLIC_GA_ID` (optional) | Google Analytics measurement ID (not wired up on this branch) | No |

Add them to `.env.local` (never commit this file).

## License
This project is licensed under the **MIT License** – see the `LICENSE` file in the repository root for details.

---  

*Documentation generated using the **application‑documentation** skill, based on source code inspection of the TruSync website.*