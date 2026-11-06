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
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'


// Talks to a running site over its REST API, signed in as an admin:
//   SEED_BASE=http://localhost:3000 SEED_EMAIL=you@example.com SEED_PASSWORD=... npx tsx scripts/seed-pages.mts
const BASE = process.env.SEED_BASE || 'http://localhost:3000'

const DRY = process.argv.includes('--dry-run')
const BASE_COMMIT = '79f4016' // the last commit that still has the old route files

type Block = Record<string, unknown> & { blockType: string }
type Ctx = { md: (t: string) => Promise<unknown>; media: (file: string, alt: string) => Promise<number> }
export type Seed = { slug: string; title: string; metaTitle?: string; metaDescription?: string; noindex?: boolean; layout: (ctx: Ctx) => Promise<Block[]> }

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
export const paragraphs = (text: string) => ({
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


// ---- Larger hand-built pages: CRM, manufacturing, education ----------------------------------------------

const crmSeed: Seed = {
  slug: 'services/crm-module',
  title: 'Frappe CRM Implementation',
  metaTitle: 'ERPNext CRM Module Customization & Setup in Hyderabad | TruSync',
  metaDescription: 'Enhance customer relationships and automate sales workflows. Get custom ERPNext CRM consulting & implementation from TruSync in Hyderabad.',
  layout: async ({ md, media }) => [
    { blockType: 'hero', variant: 'centered', eyebrow: 'Modern. Open Source. Frictionless.',
      heading: 'Customer relationships that last.',
      subheading: 'Frappe CRM helps you work, not slow you down. Open-source, intuitive, and free from extra costs.',
      primaryCta: { label: 'Book a free CRM demo', url: '#contact' }, secondaryCta: { label: 'See what it does', url: '#features' },
      image: await media('crm/hero-dashboard.png', 'Frappe CRM dashboard showing deals, activity and sales performance') },
    { blockType: 'imageText', anchor: 'features', theme: 'white', imageSide: 'right',
      heading: 'Never miss out on follow-ups for new leads.',
      body: await md('A lead shows interest, but without the right follow-up, they move on. Frappe CRM captures them all in a single queue, tracking every call, email, and note.'),
      items: [
        { title: 'Unified Pipeline', description: 'Visualize your sales pipeline with the Kanban view. Move deals through customizable stages.' },
        { title: 'Products & Pricing', description: "Add products, adjust prices, and apply discounts directly in the deal. Know exactly what's being sold." },
        { title: 'Central Hub', description: 'Link every contact to their deals. Access full history of interactions for Organizations.' },
      ],
      image: await media('crm/Deals.webp', 'Frappe CRM Deals Pipeline Visualization') },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Link with email and save time.',
      body: await md('Sales conversations are dynamic. Frappe CRM keeps every email linked to the right lead or deal, so you never lose context.'),
      items: [
        { title: 'Email Templates', description: 'Save common responses as templates to respond efficiently while keeping communications personalized.' },
        { title: 'Log Calls & Notes', description: 'Automatically track calls via Exotel/Twilio or log manually. Link notes directly to interactions.' },
        { title: 'Team Collaboration', description: 'Tag teammates directly on deals to get quick input. Notifications keep you in the loop.' },
      ],
      image: await media('crm/screen3.png', 'Unified Communications Hub') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right',
      heading: 'Save your views with a click.',
      body: await md('Stop reapplying the same filters every day. Create Saved Views with your preferred details so you can pull up the exact list you need instantly.'),
      items: [
        { title: 'Shared & Pinned Views', description: 'Share views with your team or keep them private. Pin frequency used lists to the sidebar.' },
        { title: 'Forecasting', description: 'Use deal values and probabilities to get a realistic estimate of expected revenue.' },
        { title: 'Insightful Dashboards', description: 'See top deals, team performance, and monthly trends at a glance.' },
      ],
      image: await media('crm/dashboards.webp', 'Analytics Dashboard') },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Make it your own.',
      body: await md('The underlying platform for Frappe CRM is the powerful Frappe Framework. It allows you to rapidly build new data models or extend pre-existing ones.\n\nAdding custom fields or tables is a breeze, and you can add quick automation using pluggable Python scripts. Frappe CRM offers a unified product experience out of the box, but with zero limits on customization.'),
      button: { label: 'Talk to us about customization', url: '#contact' },
      image: await media('crm/AddCustomField.webp', 'Frappe Framework Customization Interface') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right', eyebrow: 'WhatsApp Integration',
      heading: 'Move faster with WhatsApp.',
      body: await md('Sales happens across different channels. Frappe CRM works with the tools you already use, so your leads, deals, and conversations stay linked without extra effort.'),
      points: [{ text: 'Direct Access: Message directly from the Deal page.' }, { text: 'Templates: Send pre-approved templates for instant engagement.' }, { text: 'Unified History: Chat logs saved to the CRM timeline.' }],
      badgeTitle: 'Connect Directly', badgeText: 'Seamlessly integrated with WhatsApp Business API' },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Automatically pull leads from Facebook & Instagram.',
      body: await md("Managing leads inside Meta's dashboard feels disconnected. Downloading CSVs or manually copying details allows leads to slip through the cracks.\n\nFrappe CRM pulls every Meta lead straight into your pipeline with all the details filled in. Your team sees every lead right inside the CRM, exactly where it belongs.\n\nAnd it doesn't stop there. Frappe CRM also supports Exotel and Twilio CTI & SMS integrations to ensure you are connected with your customers on every channel."),
      image: await media('crm/integration.PNG', 'Omni-channel Integrations with Meta, Exotel, and Twilio') },
    { blockType: 'richText', heading: 'Sharp, modern, and minimal.',
      content: await md('We invested in making a beautiful and powerful design system called Espresso. It blends modernism and minimalism so that it helps the user focus on their core activity without being distracted by annoying design inconsistencies.') },
    { blockType: 'imageText', theme: 'dark', imageSide: 'right',
      heading: 'Access your CRM from any device.',
      body: await md('Fast, app-like experience right from your browser. Managing your profile, leaves, and deals on the go has never been easier.'),
      items: [{ title: 'PWA Ready', description: 'Installable on iOS and Android.' }, { title: 'Responsive Design', description: 'Adapts to any screen size seamlessly.' }],
      image: await media('crm/mobile_app.webp', 'Frappe CRM Mobile View') },
    { blockType: 'features', theme: 'light', cardStyle: 'icon', columns: '2',
      items: [
        { title: 'Not just a product, but a community.', description: 'Frappe CRM is fully open source and backed by a vibrant, global community. You are never locked into one vendor. Join a global community where people help each other.', icon: 'Users', color: 'blue' },
        { title: "Don't pay per user.", description: "Most CRM products charge per user. We don't think that's fair. Frappe products are priced based on compute, allowing you to start low and scale without per-seat penalties.", icon: 'Banknote', color: 'green' },
      ] },
    { blockType: 'faq', heading: 'Frappe CRM: common questions',
      items: [
        { question: 'Is Frappe CRM open source?', answer: 'Yes. Frappe CRM is fully open source and backed by a global community, so you are never locked into a single vendor.' },
        { question: 'Do I pay per user?', answer: "No. Frappe products are priced on compute rather than per seat, so you can start small and add users without per-seat penalties." },
        { question: 'Can it connect to WhatsApp, Facebook, Instagram, Exotel and Twilio?', answer: 'Yes. Frappe CRM works with WhatsApp Business API, pulls leads from Facebook and Instagram, and supports Exotel and Twilio for calls and SMS.' },
        { question: 'Can the CRM be customised for our sales process?', answer: 'Yes. It is built on the Frappe Framework, so you can add custom fields, new data models and Python automations. TruSync, a Frappe partner in Hyderabad, can set this up for you.' },
        { question: 'Does it work on mobile?', answer: 'Yes. It is a progressive web app that can be installed on iOS and Android and adapts to any screen size.' },
      ] },
    { blockType: 'cta', theme: 'blue', heading: 'Start your CRM implementation',
      body: 'Existing CRMs were too basic, too expensive, or closed source. So the Frappe team built their own, and now it is open for everyone. TruSync will set it up around your sales process.',
      button: { label: 'Talk to our CRM team', url: '#contact' } },
    { blockType: 'contactForm', heading: 'Get a free CRM demo' },
  ],
}

const manufacturingSeed: Seed = {
  slug: 'industries/manufacturing',
  title: 'ERPNext for Manufacturing',
  metaTitle: 'ERPNext for Manufacturing in Hyderabad | TruSync',
  metaDescription: 'Boost shop floor efficiency and scale production. Custom ERPNext Manufacturing suites implemented by certified Frappe experts in Hyderabad, Telangana.',
  layout: async ({ md, media }) => [
    { blockType: 'hero', variant: 'split', eyebrow: 'Next-Gen Manufacturing ERP',
      heading: 'Precision *in Production*',
      subheading: 'From Bill of Materials to Finished Goods. Gain complete visibility and control over your entire manufacturing process.',
      primaryCta: { label: 'Book a manufacturing demo', url: '#contact' }, secondaryCta: { label: 'Explore features', url: '#features' },
      image: await media('manufacturing/hero-drone.gif', 'Advanced drone manufacturing') },
    { blockType: 'features', theme: 'white', cardStyle: 'problem', columns: '2', anchor: 'features',
      heading: 'Eliminate Factory Blind Spots',
      intro: 'Manufacturing is chaos management. Stop juggling disconnected spreadsheets and start orchestrating your shop floor with a centralized brain.',
      items: [
        { title: 'Disconnected data silos', description: 'Inventory and accounting that never agree.' },
        { title: 'Unpredictable machine downtime', description: 'Breakdowns you only learn about when output drops.' },
        { title: 'Material shortages', description: 'Missing parts that halt production.' },
        { title: 'Inaccurate costing', description: 'Margin analysis you cannot trust.' },
      ] },
    { blockType: 'cta', theme: 'dark', heading: 'The ERPNext solution',
      body: 'A unified platform where a change in inventory instantly reflects in accounting, and a sales order triggers production planning.',
      button: { label: 'See it for your factory', url: '#contact' } },
    { blockType: 'imageText', theme: 'dark', imageSide: 'right',
      heading: 'Defining the Product: BOM',
      body: await md('Multi-level Bills of Materials that handle complex structures, sub-assemblies, and scrap management with ease.'),
      items: [{ title: 'Data-Driven Manufacturing', description: 'Every component is tracked. Scrap rates are calculated automatically. Versions are managed with change logs.' }],
      image: await media('manufacturing/BOM-3.jpg', 'Exploded view of a drone showing its bill of materials') },
    { blockType: 'features', theme: 'light', cardStyle: 'icon', columns: '3',
      heading: 'Strategic Planning & MRP',
      intro: 'From sales forecast to production schedule in one click. Prevent stockouts and overproduction.',
      items: [
        { title: 'Sales Order', description: 'Customer places order for 50 Drones.', icon: 'FileText', color: 'blue' },
        { title: 'MRP Engine', description: 'System checks inventory & calculates shortages.', icon: 'Cpu', color: 'purple' },
        { title: 'Production Plan', description: 'Work orders & Material Requests created.', icon: 'Factory', color: 'green' },
      ] },
    { blockType: 'imageText', theme: 'white', imageSide: 'right', heading: 'MRP process in detail',
      body: await md('See how demand, stock and purchasing connect so the right materials arrive before production starts.'),
      image: await media('manufacturing/mrp-flow.svg', 'MRP process flow') },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Execution: The Work Order',
      body: await md('The central document that signals the warehouse to release materials and the floor to begin work.'),
      items: [
        { title: 'The Conductor', description: 'Signals the warehouse to release materials and the floor to begin work.' },
        { title: 'Stock Reservation', description: 'Reserve specific batches (e.g., Lithium Cells) against a Work Order.' },
        { title: 'Back-Flushing', description: 'Upon completion, the system automatically consumes raw materials based on the BOM.' },
      ],
      image: await media('manufacturing/work-order-card.svg', 'Work order card') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right',
      heading: 'Granular Control: Job Cards',
      body: await md('Track actual time spent by specific employees or machines with precision.'),
      items: [
        { title: 'Real-Time Tracking', description: 'Track actual time spent on specific operations like "Precision Milling".' },
        { title: 'Efficiency Analysis', description: 'Compare Planned Time vs. Actual Time to identify training needs.' },
        { title: 'Operational Costing', description: 'Actual labor costs are captured and added to the final product valuation.' },
      ],
      image: await media('manufacturing/job-card-mobile.svg', 'Job card on a mobile phone') },
    { blockType: 'imageText', theme: 'dark', imageSide: 'left',
      heading: 'Integrated Quality Inspection',
      body: await md("Don't let defects leave the floor. Enforce checks at incoming receipt, WIP, or finished goods."),
      items: [
        { title: 'Gatekeeping', description: 'Mandatory stops in the workflow for quality verification.' },
        { title: 'Standardized Templates', description: 'Define acceptance criteria (e.g., Variance < 0.5%) for consistency.' },
        { title: 'Block Non-Conformance', description: 'Automatically block inventory that fails inspection from being shipped.' },
      ],
      image: await media('manufacturing/quality-tablet.svg', 'Quality inspection on a tablet') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right',
      heading: 'Traceability: Serial & Batch Management',
      body: await md('Full lifecycle tracking from procurement to sale. Know exactly which batch of batteries went into which drone.'),
      items: [
        { title: 'Serialized Inventory', description: 'Assign unique IDs to high-value goods for warranty tracking and individual history.' },
        { title: 'Batch Control', description: 'Prevent expired materials (like chemicals or batteries) from being used in production.' },
        { title: 'Full Lifecycle', description: "Track every component from the supplier's dock to the customer's hands." },
      ],
      image: await media('manufacturing/traceability-scan.svg', 'Serial and batch scanning') },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Extended Supply Chain: Subcontracting',
      body: await md('Seamlessly handle tasks like painting or galvanizing sent to external partners.'),
      items: [
        { title: 'Core Competencies', description: 'Focus on what you do best and outsource the rest without losing visibility.' },
        { title: 'Material Transfer', description: 'Track raw materials supplied to the vendor via Subcontracting Orders.' },
        { title: 'Auto-Reconciliation', description: 'Automatically consume supplied raw materials and record service charges upon receipt.' },
      ],
      image: await media('manufacturing/subcontracting-flow.svg', 'Factory to vendor subcontracting flow') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right',
      heading: 'Real-Time Financial Integration',
      body: await md('Every stock movement creates a corresponding accounting entry in real-time. No more end-of-month surprises.'),
      items: [
        { title: 'Perpetual Inventory', description: 'Stock accounts are updated instantly upon receipt, delivery, or production.' },
        { title: 'True Costing', description: 'Valuation includes Material Cost + Landed Costs (Freight/Customs) + Operational Costs (Labor/Power).' },
        { title: 'Valuation Methods', description: 'Supports FIFO (First-In, First-Out) and Moving Average for precise profit calculation.' },
      ],
      image: await media('manufacturing/financial-integration.svg', 'Real-time financial integration T-account') },
    { blockType: 'imageText', theme: 'light', imageSide: 'left',
      heading: 'Data-Driven Decision Making',
      body: await md('Turn shop floor actions into actionable insights.'),
      items: [
        { title: 'Production Analytics', description: 'Visualize trends in production volume and identify delay rates over time.' },
        { title: 'Downtime Analysis', description: 'Identify exactly which machines or workstations are causing bottlenecks.' },
        { title: 'BOM Stock Reports', description: 'Instantly see if you have enough raw materials to build a specific batch before starting.' },
      ],
      image: await media('manufacturing/analytics-dashboard.svg', 'Production analytics dashboard') },
    { blockType: 'imageText', theme: 'white', imageSide: 'right',
      heading: 'The Unified Ecosystem',
      body: await md("Manufacturing doesn't happen in a silo. Connect your floor to HR, Maintenance, and Support."),
      items: [
        { title: 'Asset Management', description: 'Track depreciation and schedule maintenance for your high-value machinery.' },
        { title: 'HR & Payroll', description: 'Link employee timesheets from the Job Cards directly to payroll processing.' },
        { title: 'Helpdesk Support', description: 'Convert customer issues into tickets linked directly to the specific serialized item they purchased.' },
      ],
      image: await media('manufacturing/ecosystem-connect.jpg', 'Unified ecosystem diagram') },
    { blockType: 'faq', heading: 'ERPNext for manufacturing: common questions',
      items: [
        { question: 'Can ERPNext handle multi-level bills of materials?', answer: 'Yes. ERPNext supports multi-level BOMs with sub-assemblies and scrap management, and keeps versions with change logs.' },
        { question: 'Does ERPNext plan materials automatically?', answer: 'Yes. The MRP engine checks inventory against sales orders, calculates shortages and creates work orders and material requests.' },
        { question: 'Can we track serial numbers and batches?', answer: 'Yes. You can assign serial numbers for warranty tracking and control batches so expired materials are not used in production.' },
        { question: 'How is product cost calculated?', answer: 'Valuation includes material cost, landed costs such as freight and customs, and operational costs such as labour and power, using FIFO or moving average.' },
        { question: 'Can you implement ERPNext Manufacturing in Hyderabad?', answer: 'Yes. TruSync is a Frappe and ERPNext partner in Hyderabad and implements and customises ERPNext Manufacturing for factories across India.' },
      ] },
    { blockType: 'cta', theme: 'blue', heading: 'Streamline your shop floor today',
      body: 'Complete visibility. Total control. ERPNext: the operating system for modern manufacturers.',
      button: { label: 'Schedule a demo', url: '#contact' } },
    { blockType: 'contactForm', heading: 'Talk to our manufacturing ERP team' },
  ],
}

const educationSeed: Seed = {
  slug: 'industries/education',
  title: 'ERPNext for Educational Institutions',
  metaTitle: 'ERPNext for Schools, Colleges & Universities in Hyderabad | TruSync',
  metaDescription: 'Tailored ERPNext solutions to manage academic, administrative and financial operations: students, fees, attendance, exams, library and HR for educational institutions.',
  layout: async () => [
    { blockType: 'hero', variant: 'dark', eyebrow: 'Education Solutions',
      heading: 'ERPNext for Educational Institutions',
      subheading: 'Tailored ERPNext solutions to manage academic, administrative, and financial operations seamlessly.',
      primaryCta: { label: 'Book a free demo', url: '#contact' }, secondaryCta: { label: 'See key features', url: '#features' } },
    { blockType: 'features', anchor: 'features', theme: 'white', cardStyle: 'checklist',
      heading: 'Key Features', intro: 'Everything an institution needs, in one system.',
      items: [
        { title: 'Student Information Management', description: 'Admissions, records and student profiles in one place.' },
        { title: 'Attendance and Timetable Scheduling', description: 'Track attendance and plan timetables.' },
        { title: 'Fee Billing and Payment Processing', description: 'Raise fee invoices and collect payments without manual reconciliation.' },
        { title: 'Examination and Grade Management', description: 'Schedule exams and record results.' },
        { title: 'Library and Inventory Management', description: 'Manage books, stock and assets.' },
        { title: 'HR and Payroll for Staff', description: 'Run staff records, leave and payroll from the same system.' },
        { title: 'Alumni and Donation Management', description: 'Stay connected with alumni and track donations.' },
      ] },
    { blockType: 'features', theme: 'light', cardStyle: 'icon', columns: '3',
      heading: 'Benefits',
      items: [
        { title: 'Improved operational efficiency', description: 'Less paperwork and fewer manual hand-offs.', icon: 'Zap', color: 'blue' },
        { title: 'Enhanced communication', description: 'Between administration, faculty, students and parents.', icon: 'Users', color: 'purple' },
        { title: 'Data-driven decision making', description: 'Reports across academics and finances.', icon: 'LineChart', color: 'green' },
        { title: 'Regulatory compliance and reporting', description: 'Keep the records you need ready for audits.', icon: 'ShieldCheck', color: 'orange' },
        { title: 'Scalable for institutions of all sizes', description: 'From a single school to a multi-campus university.', icon: 'GraduationCap', color: 'teal' },
      ] },
    { blockType: 'faq', heading: 'ERPNext for education: common questions',
      items: [
        { question: 'Can ERPNext manage student fees?', answer: 'Yes. You can raise fee invoices, collect payments and keep the accounts in sync, so fee collection and accounting are in one place.' },
        { question: 'Does it cover both academic and administrative work?', answer: 'Yes. Student records, attendance, timetables and exams sit alongside accounting, HR, payroll, library and inventory.' },
        { question: 'Is it suitable for a small school as well as a university?', answer: 'Yes. It scales from small schools to larger institutions, and you only switch on the parts you need.' },
        { question: 'Who can implement it in Hyderabad?', answer: 'TruSync is a Frappe and ERPNext partner in Hyderabad and can configure, customise and support it for your institution.' },
      ] },
    { blockType: 'cta', theme: 'blue', heading: 'Ready to modernise your institution?',
      body: 'Talk to our ERP experts about ERPNext for your school, college or university.',
      button: { label: 'Book a free consultation', url: '#contact' } },
    { blockType: 'contactForm' },
  ],
}

const LARGE_PAGES: Seed[] = [crmSeed, manufacturingSeed, educationSeed]

/** Uploads a file from public/assets into the media library once. SVG is not accepted as an upload, so it is saved as PNG. */
const uploadMedia = (authed: Record<string, string>) => {
  const cache = new Map<string, number>()
  return async (file: string, alt: string): Promise<number> => {
    if (cache.has(file)) return cache.get(file)!
    const full = path.join('public/assets', file)
    const isSvg = file.endsWith('.svg')
    const name = path.basename(file).replace(/\.svg$/i, '.png').replace(/[^A-Za-z0-9._-]/g, '-')
    const existing = (await (await fetch(`${BASE}/api/media?where[filename][equals]=${encodeURIComponent(name)}&limit=1&depth=0`, { headers: authed })).json()) as { docs?: { id: number }[] }
    if (existing.docs?.length) { cache.set(file, existing.docs[0].id); return existing.docs[0].id }
    let bytes: Buffer = readFileSync(full)
    let type = ({ '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' } as Record<string, string>)[path.extname(name).toLowerCase()] ?? 'application/octet-stream'
    if (isSvg) { const sharp = (await import('sharp')).default; bytes = await sharp(bytes, { density: 192 }).png().toBuffer(); type = 'image/png' }
    const form = new FormData()
    form.append('_payload', JSON.stringify({ alt }))
    form.append('file', new Blob([new Uint8Array(bytes)], { type }), name)
    const { 'content-type': _ct, ...noType } = authed
    const res = await fetch(`${BASE}/api/media`, { method: 'POST', headers: noType, body: form })
    if (!res.ok) throw new Error(`Upload of ${file} failed: ${res.status} ${(await res.text()).slice(0, 200)}`)
    const id = ((await res.json()) as { doc: { id: number } }).doc.id
    cache.set(file, id)
    return id
  }
}

export const allSeeds = (): Seed[] => [homeSeed, ...SERVICE_TEMPLATE_PAGES.map(serviceSeed).filter((s): s is Seed => !!s), ...STUBS.map(stubSeed), ...LARGE_PAGES]

async function main() {
  const seeds: Seed[] = allSeeds()
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
  const media = uploadMedia(authed)

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
        layout: await seed.layout({ md: async (t) => paragraphs(t), media }),
        _status: 'published',
      }),
    })
    if (!res.ok) { console.error(`FAILED  ${seed.slug}: ${res.status} ${(await res.text()).slice(0, 400)}`); continue }
    created++
    console.log(`created ${seed.slug}`)
  }
  console.log(`Done. ${created} page(s) created.`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch((err) => { console.error(err); process.exit(1) })
