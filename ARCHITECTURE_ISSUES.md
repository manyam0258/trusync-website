# Architecture Issues Report — trusync-website
> Generated: 2026-09-05 | Scope: Full project architecture audit (read-only inspection) | Source branch: main
> Instruction: `look into the project architecture and report back. Also find all the issues in the architecture and report back too`
> Previous DPDP-page specific report issues are included in §8 for completeness.

**Total issues catalogued: 42**
- P0 Critical / Broken: 9
- P1 High / Must-Fix: 18
- P2 Medium / Debt: 15

---

## Table of Contents
1. [Routing & Navigation (App Router)](#1-routing--navigation-app-router)
2. [Layout & Shared UI](#2-layout--shared-ui)
3. [Data Layer, API & Forms](#3-data-layer-api--forms)
4. [Security & Environment](#4-security--environment)
5. [Styling & Design System](#5-styling--design-system)
6. [SEO, Content & Discoverability](#6-seo-content--discoverability)
7. [State, Performance & Client/Server Boundary](#7-state-performance--clientserver-boundary)
8. [Page-Level Issues (DPDP + Other Pages)](#8-page-level-issues-dpdp--other-pages)
9. [DX, Testing & Build Tooling](#9-dx-testing--build-tooling)
10. [Accessibility & UX](#10-accessibility--ux)
11. [Appendix — File Inventory & Verification](#appendix)

---

## 1. Routing & Navigation (App Router)

### ARCH-01 — No error/loading/not-found boundaries
- **Location:** `src/app/` root and every `src/app/**/page.tsx` (31 pages via `glob src/app/**/page.tsx`) — only `src/app/_not-found` exists, missing `loading.tsx`, `error.tsx`, `not-found.tsx`.
- **Category:** Reliability / Next.js Convention
- **Severity:** P1
- **Description:** App Router expects per-segment `loading.tsx` (Suspense fallback) and `error.tsx` (error boundary). None exist. Any fetch failure in `SentinelPrivacyWidget.tsx:26` or `Contact.tsx:64` crashes the whole segment with Next default error overlay.
- **Impact:** Poor UX on slow networks, no graceful degradation, unhandled promise rejection surfaces to user.

### ARCH-02 — Parent nav items use invalid `href="#"`
- **Location:** `src/components/layout/Header.tsx:23`, `src/components/layout/Header.tsx:42` `href: "#"` for `Solutions` / `Innovation` dropdown parents.
- **Category:** Navigation / A11y
- **Severity:** P1
- **Description:** `#` is a no-op anchor that pushes history and scrolls to top. Parent should be `href: undefined` or button-only with `aria-haspopup`. `NavigationItem` type `href: string` forces a value.
- **Impact:** Broken semantics, keyboard users activate dead link, screen readers announce link without destination.

### ARCH-03 — Industry cards link to non-existent routes (404)
- **Location:** `src/components/sections/Industries.tsx:10-18` — 8 cards: `Healthcare → /industries/healthcare`, `Retail & Distribution → /industries/retail-distribution`, `Financial Services → /industries/financial-services` etc.
- **Category:** Routing / IA
- **Severity:** P0
- **Description:** Filesystem has `src/app/industries/{manufacturing,real-estate,agriculture,education,nbfc,textile,distribution,construction,epc,dairy,crowdfunding,hr-payroll}` — no `healthcare`, `retail-distribution`, `financial-services`. Build outputs `Route (app)` list has no such routes.
- **Impact:** 3/8 homepage industry CTAs 404 in production, hurts SEO crawl, Playwright would fail if tested.

### ARCH-04 — Hash anchors (`/#services`, `/#industries`, `/#contact`, `#contact`) break on subpages
- **Location:** `src/components/layout/Header.tsx:44-46` `href: "/#services"`, `"/#industries"`, `"/#contact"`; `src/components/layout/Header.tsx:118` `href="#contact"` (relative); `src/components/ServicePageLayout.tsx:36` `ctaLink="#contact"`; `src/components/StickyCTA.tsx:39` `href="#contact"`; `src/components/sections/Hero.tsx:64` `href="#contact"`.
- **Category:** Routing
- **Severity:** P0
- **Description:** `/#contact` only works from `/` (where `Contact` section `id="contact"` lives). From `/innovation/dpdp-compliance`, `href="#contact"` stays on same page where element doesn't exist. `href="#contact"` without leading `/` is relative to current URL. Header `"/#services"` etc. require `scrollIntoView` on home but are dead on subpages.
- **Impact:** Primary CTAs broken off-homepage, confirmed by `tests/contact-form.spec.ts:39` expecting `http://localhost:3000/#contact` from DPDP page (requires full-page nav).

### ARCH-05 — No nested layouts for `(industries|services|solutions|innovation)`
- **Location:** `src/app/industries/*`, `src/app/services/*`, `src/app/innovation/*` — no `layout.tsx` except `src/app/industries/manufacturing/layout.tsx`, `src/app/industries/epc/layout.tsx` etc. (empty?).
- **Category:** Architecture / DRY
- **Severity:** P2
- **Description:** Each vertical should have a shared `layout.tsx` with breadcrumb, sub-nav, and shared metadata. Instead every `page.tsx` re-implements long `div` trees (DPDP 474 lines, AI 266 lines), duplicating `py-20 bg-slate-50`.
- **Impact:** Inconsistent spacing, repeated code, no shared `generateMetadata` for SEO.

---

## 2. Layout & Shared UI

### ARCH-06 — `ServicePageLayout` is a client-only monolith anti-pattern
- **Location:** `src/components/ServicePageLayout.tsx:1` `'use client'` + `src/components/ServicePageLayout.tsx:29` props `title, subtitle, painPoints, features, techStack, ctaText, ctaLink`.
- **Category:** Architecture / Performance
- **Severity:** P1
- **Description:** Single component forces 4 hard-coded sections: hero `bg-slate-900` `ServicePageLayout.tsx:40`, pain grid `Why Conventional Solutions Fall Short` `ServicePageLayout.tsx:89`, features `The TruSync Advantage` `ServicePageLayout.tsx:118`, CTA `Ready to Transform Your Business?` `ServicePageLayout.tsx:178`. Forces `framer-motion` + `lucide-react` on every service page, even when page needs bespoke content (DPDP overrides hero subtitle but cannot suppress pain title). `heroImage` prop unused, `techStack` only used in commented block `ServicePageLayout.tsx:147-176`.
- **Impact:** Bundles client JS for static content, prevents RSC streaming, inflexible, ships dead code.

### ARCH-07 — Commented dead code shipped (30 lines)
- **Location:** `src/components/ServicePageLayout.tsx:147-176` commented `Tech Stack` section with `Code, Server, Database` icons; `heroImage?` prop `ServicePageLayout.tsx:21` never read.
- **Category:** DX / Bundle
- **Severity:** P2
- **Description:** Comment not removed before commit, still parsed, icons imported `ServicePageLayout.tsx:6` `Server, Code, Database` are tree-shaken but still in source. Indicates absent `eslint` `no-unused-vars` on props.
- **Impact:** Confusion, maintenance debt, slightly larger source.

### ARCH-08 — Unmounted but shipped floating UI
- **Location:** `src/components/WhatsAppFloat.tsx:6`, `src/components/StickyCTA.tsx:8`, `src/components/LeadMagnet.tsx:6` — defined, exported, never imported in `src/app/layout.tsx:32` or `src/app/page.tsx:9`.
- **Category:** Bundle / Conversion
- **Severity:** P1
- **Description:** `WhatsAppFloat` (fixed `bottom-6 right-6`), `StickyCTA` (mobile fixed CTA `StickyCTA.tsx:32`), `LeadMagnet` (checklist banner) are conversion-critical but dead. `layout.tsx` only mounts `Header` + `Footer` + AnythingLLM.
- **Impact:** Wasted code + missing conversion surfaces; if later mounted, `StickyCTA` `scrollY > 500` listener duplicates header listener.

### ARCH-09 — Hard-coded third-party script without `next/script`
- **Location:** `src/app/layout.tsx:42-47` `<script data-embed-id="3db2db9f-..." src="https://anythingllm.tridasa.cloud/embed/anythingllm-chat-widget.min.js">`.
- **Category:** Performance / Security
- **Severity:** P1
- **Description:** Raw `<script>` in `layout.tsx` blocks render. Should be `import Script from "next/script"` with `strategy="lazyOnload"` + `data-` attrs. Embed ID and base URL hard-coded, not env-driven.
- **Impact:** LCP regression, no `next/script` deduplication, CSP unsafe-inline required.

### ARCH-10 — Header scroll listener without throttle/passive
- **Location:** `src/components/layout/Header.tsx:54-60` `window.addEventListener("scroll", handleScroll)` per-pixel `setIsScrolled(window.scrollY > 10)`.
- **Category:** Performance
- **Severity:** P2
- **Description:** No `passive: true`, no `requestAnimationFrame` throttle, fires on every scroll tick causing forced re-renders. Duplicate listener would exist if `StickyCTA` mounted (`StickyCTA.tsx:20`).
- **Impact:** Jank on low-end devices, extra React work.

### ARCH-11 — Header dropdown is hover-only (no keyboard/touch)
- **Location:** `src/components/layout/Header.tsx:93` `group-hover:opacity-100 group-hover:visible` + `translate-y-2` transition.
- **Category:** A11y
- **Severity:** P1
- **Description:** No `focus-within`, no `aria-expanded`, no `aria-controls`, no click-to-toggle for desktop. `button` `Header.tsx:87` has no `onClick` on desktop. Mobile uses `mobileSubmenu` state correctly but desktop doesn't.
- **Impact:** Keyboard/touch/screen-reader users cannot open Solutions/Innovation menus.

### ARCH-12 — Footer dead links and stale copyright
- **Location:** `src/components/layout/Footer.tsx:29-31` `href="#"` for Product Engineering / Hire Team / Case Studies, `src/components/layout/Footer.tsx:42` `Privacy Policy → href="#"`, `src/components/layout/Footer.tsx:65` `© 2025`.
- **Category:** Content / SEO
- **Severity:** P2
- **Description:** Placeholders never replaced, crawl errors, copyright year lags behind disclaimer `Last Reviewed: August 2026` on DPDP page.
- **Impact:** Trust + SEO internal-link equity lost.

---

## 3. Data Layer, API & Forms

### ARCH-13 — Supabase client created at import with non-null assertion
- **Location:** `src/lib/supabase.ts:3-4` `process.env.NEXT_PUBLIC_SUPABASE_URL!` / `NEXT_PUBLIC_SUPABASE_ANON_KEY!`.
- **Category:** Reliability / DX
- **Severity:** P1
- **Description:** `!` crashes build if env missing with unhelpful `undefined`. No `if (!supabaseUrl) throw new Error(...)` guard. Client is singleton shared across server + browser (server action `src/app/actions/contact.ts:3` imports same client, which uses anon key server-side instead of service role).
- **Impact:** Build-time silent fail, RLS must allow anon `insert` into `contact`, no server-side validation.

### ARCH-14 — Sentinel proxy is open-ended (SSRF surface)
- **Location:** `src/app/api/sentinel/[...slug]/route.ts:9-12` `slug.join("/")` → `` `${FRAPPE_CLOUD_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.${endpoint}` `` `route.ts:36`.
- **Category:** Security
- **Severity:** P0
- **Description:** Any `slug` is forwarded (e.g., `.../admin.deleteAll`). No allowlist `["capture_event","get_form_policy"]`. No auth header, no rate limit, no `X-Forwarded-For` sanitization. `GET` `route.ts:14` forwards arbitrary query params.
- **Impact:** Potential unauthorized Frappe method invocation if backend allows, SSRF if `SENTINEL_BACKEND_URL` env is attacker-controlled via deployment misconfig.

### ARCH-15 — ENV drift: two different vars for same backend
- **Location:** `src/components/sections/Contact.tsx:34` `process.env.NEXT_PUBLIC_SENTINEL_URL || 'https://dev-tridasa.frappe.cloud'` vs `src/app/api/sentinel/[...slug]/route.ts:3` `process.env.SENTINEL_BACKEND_URL || "https://dev-tridasa.frappe.cloud"`.
- **Category:** Config
- **Severity:** P1
- **Description:** Client fallback and proxy fallback diverge; prod may set only one, causing mismatch (widget fetches proxy correctly but `SENTINEL_URL` constant unused — dead code `Contact.tsx:34`).
- **Impact:** Confusing ops, dev URL leaks to prod if env not set.

### ARCH-16 — Dual-write inconsistency (Sentinel → Supabase) without transaction
- **Location:** `src/components/sections/Contact.tsx:98-107` `if (result.success) { setSealedReceipt; const crmResult = await submitContactForm(formData) }`.
- **Category:** Data Consistency
- **Severity:** P1
- **Description:** Sentinel receipt persisted first (`capture_event` creates principal + consent proof). Supabase `insert` `src/app/actions/contact.ts:17` may fail (network, RLS, dup). UI sets `sealedReceipt` before CRM success, shows `Cryptographically sealed` toast `Contact.tsx:105` even if CRM fails (`crmResult.error` shows error toast but receipt remains). No rollback, no idempotency key.
- **Impact:** Compliance audit trail diverges from CRM, support confusion.

### ARCH-17 — Client-side form uses `action={handleSubmit}` with client closure (progressive enhancement broken)
- **Location:** `src/components/sections/Contact.tsx:188` `<form action={handleSubmit}>` where `handleSubmit` is client `async (formData: FormData) => { fetch... }` not a server action.
- **Category:** Architecture / A11y
- **Severity:** P1
- **Description:** Next 15 expects `action` to be Server Action (serialized). Client closure works only with JS; without JS form posts nowhere (no `method="POST"`). No `useFormState`/`useActionState`, no `pending` via `useFormStatus`. `setSubmitting` manual.
- **Impact:** No-JS users cannot submit, no native browser validation fallback, double fetch waterfall (Sentinel then Supabase) serial.

### ARCH-18 — No validation library; minimal client checks
- **Location:** `src/components/sections/Contact.tsx:55` `if (!name || !email || !message)`, `src/app/actions/contact.ts:12` same; phone `type="tel"` placeholder `+1 (555) 000-0000` `Contact.tsx:223` mismatched to IN audience `+91 81434 83438`.
- **Category:** Reliability
- **Severity:** P2
- **Description:** No `zod`, no email regex, no phone normalization, no `message` length limit, no honeypot/captcha, service `<select>` allows empty `""` `Contact.tsx:233`. Server action trusts `formData.get` strings without sanitization (Supabase `insert` may store XSS payload).
- **Impact:** Spam, bad CRM data, stored XSS risk if later rendered.

### ARCH-19 — Sentinel widget fetch has no AbortController, no error UI
- **Location:** `src/components/SentinelPrivacyWidget.tsx:22-46` `fetch(/api/sentinel/get_form_policy?form_id=contact-us&language=${selectedLang})` inside `useEffect` deps `[selectedLang]`.
- **Category:** Reliability
- **Severity:** P2
- **Description:** No `AbortController` — rapid language switches race; last response wins but earlier may overwrite. `catch` only `console.warn` `SentinelPrivacyWidget.tsx:40`, UI silently falls back to hard-coded `NOT-2026-0003` `SentinelPrivacyWidget.tsx:16` + default purpose. `loading` state `SentinelPrivacyWidget.tsx:19` never renders (no spinner).
- **Impact:** Stale policy shown, compliance risk if fallback notice version mismatched.

### ARCH-20 — Sentinel `POST` body mangling (Frappe RPC quirk)
- **Location:** `src/app/api/sentinel/[...slug]/route.ts:42-49` nested objects `JSON.stringify(val)` for each key before `JSON.stringify(formattedBody)`.
- **Category:** API Design
- **Severity:** P2
- **Description:** Required for Frappe `api/method` but undocumented in code comments beyond `Frappe RPC argument serializer` — fragile, assumes backend expects strings. No test for this branch, `debug-fetch.js` direct fetch bypasses proxy.
- **Impact:** Easy regression if backend switches to JSON.

---

## 4. Security & Environment

### ARCH-21 — No `env` validation, no `.env.example`
- **Location:** Root — no `env.ts`/`env.mjs` with `zod`, no `.env.example`; `.gitignore:34` `.env*` ignored but no template. `next.config.ts:3` empty.
- **Category:** DX / Security
- **Severity:** P1
- **Description:** Required vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SENTINEL_BACKEND_URL`, `NEXT_PUBLIC_SENTINEL_URL`, `AnythingLLM embedId`. Undocumented, onboarding requires reading `src/lib/supabase.ts:3` etc.
- **Impact:** Deploys fail silently with `!` crash, or fall back to dev URL `https://dev-tridasa.frappe.cloud`.

### ARCH-22 — `next.config.ts` missing security/performance headers
- **Location:** `next.config.ts:3-5` only `output: "standalone"`, no `images`, `headers`, `compiler`, `experimental`.
- **Category:** Security / Perf
- **Severity:** P1
- **Description:** Missing `headers: [{source: "/(.*)", headers: [{key: "X-Frame-Options", value: "DENY"}, ...]}]`, `Strict-Transport-Security`, `X-Content-Type-Options`, no `compiler.removeConsole`, no `images.remotePatterns` (if logos external), no `poweredByHeader: false`.
- **Impact:** Weaker security posture, unnecessary console logs in prod.

### ARCH-23 — No `middleware.ts` for auth/rate-limit/geofence
- **Location:** Root — no `middleware.ts`; API proxy `src/app/api/sentinel/[...slug]/route.ts:5` has no rate limit, no CSRF, no IP allowlist.
- **Category:** Security
- **Severity:** P2
- **Description:** Contact form can be spammed; Sentinel `capture_event` can be flooded to create fake principals. Should add `middleware` with `next-rate-limit` or Upstash.
- **Impact:** Abuse, cost, DB bloat.

---

## 5. Styling & Design System

### ARCH-24 — Tailwind v4 with zero config file
- **Location:** `postcss.config.mjs:3` only `"@tailwindcss/postcss": {}`, `src/app/globals.css:1` `@import "tailwindcss";` + `:root` tokens + `@theme inline`.
- **Category:** Tooling
- **Severity:** P2
- **Description:** No `tailwind.config.ts` — purge detection relies on auto; arbitrary `bg-grid-white/[0.05]` `ServicePageLayout.tsx:41` may be purged. No `content` globs for `src/components/**`. Works in v4 but opaque.
- **Impact:** Future upgrades risky, custom colors not typed.

### ARCH-25 — Mixed styling paradigms (Tailwind + inline `style={{}}`)
- **Location:** `src/components/SentinelPrivacyWidget.tsx:61-68` raw `style={{ border: '1px solid #e2e8f0', ... }}` 7 declarations, `Contact.tsx:292` receipt `bg-green-50`.
- **Category:** Maintainability
- **Severity:** P2
- **Description:** Widget breaks design token (`--border: #e2e8f0` in `globals.css:21` but widget hard-codes same). Not using `cn()` `src/lib/utils.ts:4`, not using `Button`/`Card` primitives.
- **Impact:** Inconsistent theming, dark-mode impossible, smaller bundle if unified.

### ARCH-26 — Global tokens defined but not consumed as Tailwind utilities
- **Location:** `src/app/globals.css:8-22` `--primary #008DAA` etc., mapped via `@theme inline --color-primary: var(--primary)` but components still use hard-coded `bg-blue-600` `ServicePageLayout.tsx:57`, `from-blue-500 to-cyan-500` `Services.tsx:15` instead of `bg-primary`.
- **Category:** Design Consistency
- **Severity:** P2
- **Description:** Two palettes compete (Teal `#008DAA` vs Blue `blue-600`). Hero `bg-slate-900` `ServicePageLayout.tsx:40` dark vs `Hero.tsx:11` `from-slate-50 via-white to-blue-50` light.
- **Impact:** Brand drift.

---

## 6. SEO, Content & Discoverability

### ARCH-27 — Metadata sparse: 28/31 pages missing `Metadata`
- **Location:** `src/app/layout.tsx:17` global title/description; `src/app/innovation/dpdp-compliance/page.tsx:6` and `ai-automation/page.tsx:6` have `Metadata` + now `keywords`; `trusync_pages_report.md` shows `Construction, Crowdfunding...` have meta but `manufacturing, accounting-module...` `Not specified`.
- **Category:** SEO
- **Severity:** P0
- **Description:** Missing `openGraph`, `twitter`, `alternates: { canonical }`, `robots`, `keywords` on most routes. No `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`. `knowledgebase.md:51` lists innovation as `PDPA Compliance` (typo, should be DPDP).
- **Impact:** Poor CTR, duplicate title risk, crawl inefficiency.

### ARCH-28 — Structured data only on home
- **Location:** `src/app/page.tsx:10` `JsonLd` `ProfessionalService` + `WebSite` `page.tsx:53 as any`; `src/components/JsonLd.tsx:7` `dangerouslySetInnerHTML` JSON.stringify without `__html` escape check.
- **Category:** SEO
- **Severity:** P1
- **Description:** No `BreadcrumbList` on subpages, no `FAQPage` for DPDP Key Areas, no `Product` for Sentinel. `JsonLd` `Record<string, unknown>` + `as any` bypasses type, could inject invalid schema.
- **Impact:** Rich results missed, no breadcrumb in SERP.

### ARCH-29 — No canonical / no `trailingSlash` consistency
- **Location:** `next.config.ts:3` no `trailingSlash`; links mix `/industries/manufacturing` (no slash) with `/#contact` (hash). `Header.tsx:19` `href: "/"` vs `Contact` anchor `id="contact"` duplicate.
- **Category:** SEO
- **Severity:** P2
- **Description:** Search may index `/innovation/dpdp-compliance` and `/innovation/dpdp-compliance/` as dup. No `generateMetadata` with `canonical: /innovation/dpdp-compliance`.
- **Impact:** Duplicate content dilution.

---

## 7. State, Performance & Client/Server Boundary

### ARCH-30 — Over-clientification (`'use client'` on static sections)
- **Location:** `src/components/sections/Hero.tsx:1`, `About.tsx:1`, `Services.tsx:1`, `Industries.tsx:1`, `WhyChooseUs.tsx:1`, `ServicePageLayout.tsx:1`, `Contact.tsx:1`, `SentinelPrivacyWidget.tsx:1` — 8/8 sections are client.
- **Category:** Performance
- **Severity:** P1
- **Description:** Static content (headings, cards) forced to hydrate for trivial `framer-motion` `whileInView` animations (`Hero.tsx:21` `motion.div`). Could be `server` with CSS `animate-in` or `dynamic(() => import)` for motion parts. `RSC` benefit lost, ships `framer-motion@12.23` to every page (≈ 40kb gz).
- **Impact:** Larger TTFB, worse INP, no streaming.

### ARCH-31 — Duplicate motion + duplicate stats
- **Location:** `src/components/sections/Hero.tsx:88-98` stats `64+ ERPNext Experts / 10+ Industries / 200+ Projects`, `src/components/sections/About.tsx:9-13` same numbers duplicated.
- **Category:** Maintainability
- **Severity:** P2
- **Description:** No `src/data/stats.ts` single source; counts drift. `Hero` + `About` both animate `opacity 0→1` with same `delay 0.5` but separate components.
- **Impact:** Content drift, extra motion instances.

### ARCH-32 — No data-fetching layer (no ISR, no RSC `fetch`)
- **Location:** All `page.tsx` are static imports, no `fetch`, no `revalidate`, no `cache`. `SentinelPrivacyWidget.tsx:26` client fetch inside `useEffect` instead of `async` RSC `fetch` with `next.revalidate`.
- **Category:** Architecture
- **Severity:** P2
- **Description:** Opportunity to pre-fetch `get_form_policy` server-side and pass `notice` props, avoiding waterfall. Current client waterfall: page → widget mount → fetch → setState → re-render.
- **Impact:** Slower perceived load, extra client request.

---

## 8. Page-Level Issues (DPDP + Other Pages)

### ARCH-33 — DPDP hero broken props & duplicate CTA (P0, already reported)
- **Location:** `src/app/innovation/dpdp-compliance/page.tsx:17` `subtitle="Trusync is your one-stop shop for dpdp compliance solution"` lowercase, `src/app/innovation/dpdp-compliance/page.tsx:31` `ctaLink="#assessment"` no element `id="assessment"` exists; `src/app/innovation/dpdp-compliance/page.tsx:440,444,448` 3 bottom buttons 2 with `bg-white/10` on `bg-slate-50` invisible, plus duplicate `ServicePageLayout` final CTA `src/components/ServicePageLayout.tsx:178`.
- **Severity:** P0 — tracked here, fix pending.

### ARCH-34 — DPDP content wall: 12 Key Areas as sequential `mb-8` blocks
- **Location:** `src/app/innovation/dpdp-compliance/page.tsx:124-223` wall of `h3`+`p`; `src/app/innovation/dpdp-compliance/page.tsx:415-423` malformed `Why Choose Us` list `<li><strong>...<br/>•</li>` renders word + lone bullet.
- **Severity:** P1

### ARCH-35 — DPDP lifecycle `↓` hack (a11y)
- **Location:** `src/app/innovation/dpdp-compliance/page.tsx:371-403` manual `<strong>↓</strong><br/>` text arrows, centered `max-w-xl mx-auto` paragraphs not semantic `ol` timeline.
- **Severity:** P2

### ARCH-36 — Other pages have placeholder/metadata debt
- **Location:** `trusync_pages_report.md:147` `Manufacturing` `Title: Not specified`; `src/app/industries/manufacturing/page.tsx` likely missing `Metadata`; similar for `accounting-module`, `hr-payroll-module` etc. `src/app/solutions/frappe-framework/page.tsx` has no unique components (report line 415).
- **Severity:** P1

---

## 9. DX, Testing & Build Tooling

### ARCH-37 — No test script, single brittle Playwright suite
- **Location:** `package.json:5` scripts `dev/build/start/lint` only; `playwright.config.ts:3-25` `testDir: ./tests`, `fullyParallel: true`, `use.baseURL: http://localhost:3000`, `webServer.command: npm run dev`.
- **Category:** Quality
- **Severity:** P1
- **Description:** 4 tests in `tests/contact-form.spec.ts:10,28,46,64` all assert `toHaveURL('http://localhost:3000/#contact')` — brittle hash navigation, `selectOption('#service', ...)` without value mapping. No `unit` (vitest), no `a11y` (`@axe-core/playwright`), only `chromium` `playwright.config.ts:21`.
- **Impact:** Low coverage, flaky CI if port busy, no mobile regression.

### ARCH-38 — No type-check / lint in CI, `any` escapes `strict`
- **Location:** `package.json:5` no `typecheck: tsc --noEmit`, `eslint.config.mjs:6` `...nextTs` but no `no-explicit-any`; files `src/app/actions/contact.ts:31 catch (err) → any`, `src/app/api/sentinel/[...slug]/route.ts:25 catch (err: any)`, `src/app/page.tsx:53 as any`.
- **Severity:** P2
- **Description:** `tsconfig.json:7 strict:true` undermined by `any` casts. `supabase.ts:3 !` suppresses null.
- **Impact:** Runtime errors hidden.

### ARCH-39 — No `.env.example`, no `docker`/`vercel.json` for `standalone`
- **Location:** Root — `next.config.ts:4` `output: "standalone"` implies Docker image expects `server.js` but no `Dockerfile`, no `vercel.json` headers, no `.env.example`.
- **Severity:** P2
- **Description:** Onboarding requires reading 3 files to discover envs (`src/lib/supabase.ts:3`, `route.ts:3`, `layout.tsx:43`).
- **Impact:** Deploys rely on Vercel dashboard env, not reproducible locally.

### ARCH-40 — `.gitignore` global `*.tsbuildinfo` but `tsconfig.json:33 exclude: ["node_modules"]` only — includes `.next/types` via `include: [".next/types/**/*.ts"]` `tsconfig.json:29` which is generated, should be ignored.
- **Severity:** P2 — minor but causes IDE to index generated types.

---

## 10. Accessibility & UX

### ARCH-41 — Color contrast failures & missing focus styles
- **Location:** `src/app/innovation/dpdp-compliance/page.tsx:444,448` `bg-white/10 text-white` on `bg-slate-50` (2.1:1, fails WCAG AA), `src/components/ServicePageLayout.tsx:64` `bg-white/10` on `bg-slate-900` passes but duplicate CTA `bg-blue-600 text-white` adequate. `src/components/ui/Button.tsx:7` `focus-visible:ring-2` present but header dropdown `button` `Header.tsx:87` `focus:outline-none` removes focus ring without replacement.
- **Severity:** P1
- **Description:** Invisible buttons + missing focus indicates nav keyboard trap.
- **Impact:** A11y audit fails, conversion lost for keyboard users.

### ARCH-42 — Fixed header overlaps anchor scroll
- **Location:** `src/components/layout/Header.tsx:64` `fixed top-0 ... py-4/py-6`, `<html className="scroll-smooth">` `src/app/layout.tsx:33` no `scroll-mt` on sections.
- **Category:** UX
- **Severity:** P2
- **Description:** `href="#contact"` `Section id="contact"` `src/components/sections/Contact.tsx:120` scrolls to top but header (80px) covers heading. No `className="scroll-mt-24"` or CSS `:target { scroll-margin-top: 88px }`.
- **Impact:** Users think anchor failed, heading hidden.

---

## Appendix — File Inventory & Verification

**Verified via `glob`:** 31 `page.tsx`, 10 `components/ui+layout`, 9 `components/framework`, 5 `components/sections`, `src/lib/utils.ts:4`, `src/lib/supabase.ts:6`, `src/app/api/sentinel/[...slug]/route.ts:65`, `src/components/SentinelPrivacyWidget.tsx:103`, `src/components/sections/Contact.tsx:315`.

**Build verification:** `next build` passes (35/35 pages static) `next.config.ts:4` but with warnings for `any` and unused imports (`Services.tsx:8` `HelpCircle` unused, `Industries.tsx:8` `Truck` unused, `ServicePageLayout.tsx:6` `Server/Code/Database` unused in prod).

**Recommended next plan (question for user):** Prioritize ARCH-03/04/13-14/30-31 as P0 for next sprint? Or draft `ARCHITECTURE_FIX_PLAN.md` with diffs?

---
