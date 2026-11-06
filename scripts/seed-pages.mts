/**
 * One-time migration: copies pages that used to live in code into the CMS so they can be edited in /admin.
 *
 *   SEED_EMAIL=... SEED_PASSWORD=... npx tsx scripts/seed-pages.mts            # create the pages that do not exist yet
 *   npx tsx scripts/seed-pages.mts --dry-run  # list what would be created
 *
 * Safe to run again: a page that already exists is never touched, so edits made in the admin are kept.
 * Content for template-based pages is read from the original page files in git history
 * (see PAGE_SOURCES), so the old route files can be deleted afterwards.
 */
import { execSync } from 'node:child_process'


// Talks to a running site over its REST API, signed in as an admin:
//   SEED_BASE=http://localhost:3000 SEED_EMAIL=you@example.com SEED_PASSWORD=... npx tsx scripts/seed-pages.mts
const BASE = process.env.SEED_BASE || 'http://localhost:3000'

const DRY = process.argv.includes('--dry-run')
const BASE_COMMIT = '79f4016' // the last commit that still has the old route files

type Block = Record<string, unknown> & { blockType: string }
type Seed = { slug: string; title: string; metaTitle?: string; metaDescription?: string; noindex?: boolean; layout: (md: (t: string) => Promise<unknown>) => Promise<Block[]> }

const fromGit = (file: string): string => {
  try {
    return execSync(`git show '${BASE_COMMIT}:${file}'`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
  } catch {
    return ''
  }
}

/** Evaluates an array literal written in one of our own page files, for example painPoints = [ ... ]. */
const arrayLiteral = (src: string, name: string): { title: string; description: string }[] => {
  const m = src.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\s*\\]);`))
  return m ? (new Function(`return ${m[1]}`)() as never) : []
}
const stringProp = (src: string, name: string) => src.match(new RegExp(`${name}="([^"]*)"`))?.[1] ?? ''
const metaFrom = (...sources: string[]) => {
  for (const src of sources) {
    const t = src.match(/title:\s*(['"`])([\s\S]*?)\1,/)
    const d = src.match(/description:\s*(['"`])([\s\S]*?)\1,?\s*\n/)
    if (t) return { title: t[2].replace(/\\'/g, "'"), description: d?.[2].replace(/\\'/g, "'") }
  }
  return {}
}

/** Plain paragraphs as rich text (blank line between paragraphs). Editors can format them in the admin afterwards. */
const paragraphs = (text: string) => ({
  root: {
    type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
    children: text.split(/\n\s*\n/).map((t) => ({
      type: 'paragraph', format: '', indent: 0, version: 1, direction: 'ltr', textFormat: 0, textStyle: '',
      children: [{ type: 'text', text: t.trim(), format: 0, detail: 0, mode: 'normal', style: '', version: 1 }],
    })),
  },
})

const PAGE_ROUTE_DIR = 'src/app/(frontend)'

/** Pages that used ServicePageLayout: a dark banner, problem cards, a checklist, technology badges and a call to action. */
const SERVICE_TEMPLATE_PAGES = [
  'industries/crowdfunding', 'industries/construction', 'industries/nbfc', 'industries/hr-payroll', 'industries/epc',
  'industries/dairy', 'industries/textile', 'industries/distribution', 'solutions/frappe-insights', 'solutions/frappe-lms',
  'innovation/open-source-integrations', 'services/website-module', 'services/helpdesk-module', 'services/asset-management-module',
]
const BADGE_ICONS = ['Code', 'Cpu', 'Database', 'Cloud']

const serviceSeed = (slug: string): Seed | null => {
  const page = fromGit(`${PAGE_ROUTE_DIR}/${slug}/page.tsx`)
  if (!page) return null
  const layoutSrc = fromGit(`${PAGE_ROUTE_DIR}/${slug}/layout.tsx`)
  const meta = metaFrom(layoutSrc, page)
  const painPoints = arrayLiteral(page, 'painPoints')
  const features = arrayLiteral(page, 'features')
  const techStack = (page.match(/techStack=\{(\[[^\]]*\])\}/)?.[1] && (new Function(`return ${page.match(/techStack=\{(\[[^\]]*\])\}/)![1]}`)() as string[])) || []
  const title = stringProp(page, 'title')
  return {
    slug,
    title,
    metaTitle: meta.title,
    metaDescription: meta.description,
    layout: async () => [
      { blockType: 'hero', variant: 'dark', heading: title, subheading: stringProp(page, 'subtitle'),
        primaryCta: { label: 'Book a Free Consultation', url: '#contact' }, secondaryCta: { label: 'Explore Solutions', url: '#features' } },
      { blockType: 'features', cardStyle: 'problem', theme: 'light', columns: '3',
        heading: 'Why Conventional Solutions Fall Short',
        intro: 'Generic software often creates more problems than it solves. We address specific industry challenges head-on.',
        items: painPoints },
      { blockType: 'features', cardStyle: 'checklist', theme: 'white', anchor: 'features',
        heading: 'The TruSync Advantage',
        intro: 'Purpose-built solutions designed for scalability, performance, and real-world results.',
        items: features },
      { blockType: 'badges', heading: 'Built on Robust Open Source Technologies',
        items: techStack.map((label, i) => ({ label, icon: BADGE_ICONS[i % BADGE_ICONS.length] })) },
      { blockType: 'cta', theme: 'blue', heading: 'Ready to Transform Your Business?',
        body: "Don't let outdated software hold you back. Schedule a free discovery call with our ERP experts today.",
        button: { label: 'Book Free Consultation', url: '#contact' } },
      { blockType: 'contactForm' },
    ],
  }
}

/** Placeholder pages that only had a heading and one line. Published as "noindex" until real content is written. */
const STUBS: { slug: string; title: string; subtitle: string }[] = [
  { slug: 'services/consulting', title: 'ERPNext Consulting Services', subtitle: 'Expert guidance to optimize your business processes with ERPNext' },
  { slug: 'services/erpnext-implementation', title: 'ERPNext Implementation', subtitle: 'Complete ERPNext implementation tailored to your business requirements.' },
  { slug: 'services/development', title: 'ERPNext Development', subtitle: 'Custom ERPNext development and module creation.' },
  { slug: 'services/migrations', title: 'Data Migration to ERPNext', subtitle: 'Seamless data migration from legacy systems to ERPNext.' },
  { slug: 'services/mobile-app-development', title: 'Mobile App Development', subtitle: 'Custom mobile applications integrated with ERPNext.' },
  { slug: 'services/training-support', title: 'Training and Support', subtitle: 'Comprehensive training and ongoing support for ERPNext users.' },
  { slug: 'industries/agriculture', title: 'Agriculture Solutions', subtitle: 'Specialized ERPNext solutions for agricultural businesses powered by DS Agro' },
  { slug: 'industries/real-estate', title: 'ERPNext for Real Estate', subtitle: 'Manage projects, inventory, sales and accounts for real estate developers.' },
]
const stubSeed = (s: (typeof STUBS)[number]): Seed => ({
  slug: s.slug,
  title: s.title,
  metaDescription: s.subtitle,
  noindex: true,
  layout: async () => [
    { blockType: 'hero', variant: 'dark', heading: s.title, subheading: s.subtitle,
      primaryCta: { label: 'Book a Free Consultation', url: '#contact' } },
    { blockType: 'contactForm' },
  ],
})

const homeSeed: Seed = {
  slug: 'home',
  title: 'Home',
  metaTitle: 'ERPNext Services & Frappe Partner in Hyderabad | TruSync',
  metaDescription: 'TruSync is a certified Frappe and ERPNext partner in Hyderabad, Telangana. We deliver custom ERP implementation, CRM integrations, and smart AI workflow automation for SMEs.',
  layout: async () => [
    { blockType: 'hero', variant: 'centered',
      eyebrow: '✨ Your trusted ERPNext partner in Hyderabad',
      heading: 'The Leading *ERPNext & Frappe* Company in Hyderabad! Transform Your Business',
      subheading: 'TruSync is an ERPNext consulting firm and Frappe partner in Hyderabad, Telangana. We specialize in custom ERP implementation, module customization, integration, and AI workflow automation to optimize your business processes.',
      primaryCta: { label: 'Book A Free Demo', url: '#contact' }, secondaryCta: { label: 'View Case Studies', url: '#services' },
      stats: [
        { value: '64+', label: 'ERPNext Experts' }, { value: '10+', label: 'Industries' },
        { value: '200+', label: 'Projects Delivered' }, { value: '98%', label: 'Client Satisfaction' },
      ] },
    { blockType: 'stats', anchor: 'about', items: [
      { value: '64+', label: 'ERPNext Experts', icon: 'Users' }, { value: '10+', label: 'Industries', icon: 'Globe' },
      { value: '200+', label: 'Projects', icon: 'TrendingUp' }, { value: '5+', label: 'Years Experience', icon: 'Award' },
    ] },
    { blockType: 'imageText', theme: 'white', eyebrow: 'About Us', imageSide: 'right',
      heading: 'An ERPNext consulting firm with expertise in enterprise resource planning software.',
      body: paragraphs('Optimize your business processes, satisfy your customers, and ultimately boost your revenues by leveraging the best-in-class platform, such as ERPNext, and a trusted implementation partner.\n\nERPNext is the feature-rich, all-in-one enterprise resource planning (ERP) solution that empowers businesses to streamline and optimize their operations.'),
      points: ['Streamlined Management', 'Better Customer Satisfaction', 'Higher Revenues', 'Certified Frappe Partners'].map((text) => ({ text })),
      badgeTitle: 'Certified Partner', badgeText: 'Official Frappe & ERPNext Partner' },
    { blockType: 'features', anchor: 'services', theme: 'white', cardStyle: 'icon', columns: '4',
      eyebrow: 'Our Services', heading: 'Our Services',
      intro: 'Comprehensive solutions to drive your business forward with technology and innovation.',
      items: [
        { title: 'Consulting', description: 'Expert ERPNext consulting services to optimize your business processes.', icon: 'Settings', color: 'blue', url: '/services/consulting' },
        { title: 'ERPNext Implementation', description: 'Complete ERPNext implementation tailored to your business requirements.', icon: 'Briefcase', color: 'purple', url: '/services/erpnext-implementation' },
        { title: 'Development', description: 'Custom ERPNext development and module creation.', icon: 'Cpu', color: 'orange', url: '/services/development' },
        { title: 'Migrations', description: 'Seamless data migration from legacy systems to ERPNext.', icon: 'Settings', color: 'green', url: '/services/migrations' },
        { title: 'Mobile App Development', description: 'Custom mobile applications integrated with ERPNext.', icon: 'Phone', color: 'indigo', url: '/services/mobile-app-development' },
        { title: 'Training and Support', description: 'Comprehensive training and ongoing support for ERPNext users.', icon: 'Users', color: 'teal', url: '/services/training-support' },
        { title: 'Website', description: 'Build and manage your website directly within ERPNext.', icon: 'Layout', color: 'teal', url: '/services/website-module' },
      ] },
    { blockType: 'features', anchor: 'industries', theme: 'light', cardStyle: 'tile', columns: '6',
      eyebrow: 'Industries', heading: 'Industries We Serve',
      intro: 'Tailored ERP + AI solutions for your specific business needs across various sectors.',
      items: [
        { title: 'Manufacturing', icon: 'Factory', color: 'blue', url: '/industries/manufacturing' },
        { title: 'Healthcare', icon: 'Stethoscope', color: 'red' }, // no page exists yet, so no link
        { title: 'Retail & Distribution', icon: 'ShoppingCart', color: 'green', url: '/industries/distribution' },
        { title: 'Construction', icon: 'HardHat', color: 'orange', url: '/industries/construction' },
        { title: 'Real Estate', icon: 'Building2', color: 'pink', url: '/industries/real-estate' },
        { title: 'Agriculture', icon: 'Wheat', color: 'yellow', url: '/industries/agriculture' },
        { title: 'Education', icon: 'GraduationCap', color: 'teal', url: '/industries/education' },
        { title: 'Financial Services', icon: 'Banknote', color: 'indigo', url: '/industries/nbfc' },
      ] },
    { blockType: 'features', theme: 'dark', cardStyle: 'icon', columns: '3',
      eyebrow: 'Why Choose Us', heading: 'Why Choose Us As ERPNext Partner?',
      intro: 'We combine the power of open-source ERP with advanced AI automation to deliver solutions that are not just robust, but intelligent and tailored.',
      items: [
        { title: 'Industry-rich expertise', description: 'Extensive experience across various industries to meet unique requirements.', icon: 'Star', color: 'blue' },
        { title: 'Cost savings', description: 'Cost-effective rates without compromising quality.', icon: 'ShieldCheck', color: 'blue' },
        { title: 'Best development practices', description: 'Latest methodologies for robust, adaptable, and future-proof solutions.', icon: 'Sliders', color: 'blue' },
        { title: 'Timely delivery', description: 'Efficient project management and clear communication for on-time completion.', icon: 'Clock', color: 'blue' },
        { title: 'Dedicated project manager', description: 'Personalized attention, streamlined communication, and efficient coordination.', icon: 'UserCheck', color: 'blue' },
        { title: 'Post-project support', description: 'Comprehensive assistance after project completion for smooth operations.', icon: 'Headphones', color: 'blue' },
      ] },
    { blockType: 'contactForm' },
  ],
}

async function main() {
  const seeds: Seed[] = [homeSeed, ...SERVICE_TEMPLATE_PAGES.map(serviceSeed).filter((s): s is Seed => !!s), ...STUBS.map(stubSeed)]
  const missing = SERVICE_TEMPLATE_PAGES.filter((s) => !fromGit(`${PAGE_ROUTE_DIR}/${s}/page.tsx`))
  if (missing.length) console.warn('Original files not found in git for:', missing.join(', '))

  const headers = { 'content-type': 'application/json', origin: BASE }
  const login = await fetch(`${BASE}/api/users/login`, {
    method: 'POST', headers,
    body: JSON.stringify({ email: process.env.SEED_EMAIL, password: process.env.SEED_PASSWORD }),
  })
  if (!login.ok) throw new Error(`Login failed (${login.status}). Set SEED_EMAIL and SEED_PASSWORD to an admin account.`)
  const cookie = login.headers.getSetCookie().map((c) => c.split(';')[0]).join('; ')
  const authed = { ...headers, cookie }

  let created = 0
  for (const seed of seeds) {
    const found = await fetch(`${BASE}/api/pages?where[slug][equals]=${encodeURIComponent(seed.slug)}&draft=true&limit=1&depth=0`, { headers: authed })
    const body = (await found.json()) as { docs?: unknown[] }
    if (body.docs?.length) { console.log(`skip    ${seed.slug} (already in the CMS)`); continue }
    if (DRY) { console.log(`would create ${seed.slug}`); continue }
    const res = await fetch(`${BASE}/api/pages`, {
      method: 'POST', headers: authed,
      body: JSON.stringify({
        title: seed.title, slug: seed.slug, noindex: seed.noindex ?? false,
        meta: { title: seed.metaTitle, description: seed.metaDescription },
        layout: await seed.layout(async (t) => paragraphs(t)),
        _status: 'published',
      }),
    })
    if (!res.ok) { console.error(`FAILED  ${seed.slug}: ${res.status} ${(await res.text()).slice(0, 400)}`); continue }
    created++
    console.log(`created ${seed.slug}`)
  }
  console.log(`Done. ${created} page(s) created.`)
}

main().catch((err) => { console.error(err); process.exit(1) })
