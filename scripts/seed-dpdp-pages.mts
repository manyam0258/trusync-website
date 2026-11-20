/**
 * Default content for the Sentinel DPDP product section of the website (pages under /dpdp).
 * Every page is built from the Sentinel DPDP section library (src/blocks/dpdp.ts), so editors can change all of it,
 * and the product pages keep their own look: drawn product screens, tabbed walkthroughs, timelines and checklists.
 * build-seed-data.mts writes these into src/seed/default-pages.json; the site creates any that are missing on start.
 *
 * Legal references are to the Digital Personal Data Protection Act, 2023 (No. 22 of 2023) and the
 * Digital Personal Data Protection Rules, 2025 (notified November 2025). Keep claims factual: no figures,
 * certifications or customer names that TruSync cannot back up. Numbers inside drawn product screens are sample data.
 */
import { DP_ICONS } from '../src/blocks/dpdp'

type Link = { label: string; url: string }
type Block = Record<string, unknown> & { blockType: string }
export type DpdpSeed = { slug: string; title: string; noindex: boolean; meta: { title: string; description: string }; layout: Block[] }

const PRODUCT = 'Sentinel DPDP'
const DEMO: Link = { label: 'Book a demo', url: '/dpdp/book-demo' }
const PLATFORM: Link = { label: 'Explore the platform', url: '/dpdp/platform' }
const BASE = 'dpdp'

// ---------- icons and colours ----------
const ICON_SET = new Set<string>(DP_ICONS)
const ICON_ALIAS: Record<string, string> = {
  CheckCircle2: 'CircleCheck', Layout: 'Globe', LineChart: 'ChartLine', Phone: 'Smartphone', Sliders: 'Settings',
  Stethoscope: 'HeartPulse', TrendingUp: 'ChartLine', Wheat: 'Utensils',
}
/** An icon name the DPDP sections accept. Unknown names fall back so a typo never breaks page creation. */
const ic = (name?: string, fallback = 'ShieldCheck'): string => {
  const n = name ? (ICON_ALIAS[name] ?? name) : fallback
  return ICON_SET.has(n) ? n : fallback
}
const TONE_OF: Record<string, string> = { blue: 'sky', purple: 'violet', orange: 'amber', red: 'rose', green: 'emerald', pink: 'rose', yellow: 'amber', teal: 'teal', indigo: 'indigo' }
const tone = (color?: string) => (color ? TONE_OF[color] : undefined)
const THEME_OF: Record<string, string> = { light: 'soft', white: 'white', dark: 'dark' }
const labels = (xs: string[]) => xs.map((label) => ({ label }))

/** Picks an icon for a workflow step from the words in its title. */
const STEP_ICONS: [RegExp, string][] = [
  [/connect|link|import|list|trigger|receive/i, 'Link2'], [/scan|discover|detect|find|search|identify/i, 'Search'],
  [/classif|tag|tier|categor|itemis|describe|enrich/i, 'Layers'], [/review|assess|approv|validat|verif|score|check/i, 'ClipboardCheck'],
  [/map|route|sync|assign/i, 'Network'], [/notif|publish|send|respond|show/i, 'Send'], [/captur|record|answer|seal|log/i, 'PenLine'],
  [/contain|block|secur|protect|enforce/i, 'Lock'], [/report|export|prove|proof/i, 'FileText'], [/translat|language/i, 'Languages'],
  [/contract/i, 'Handshake'], [/design|choose|template|scope|set/i, 'Settings'], [/store|archive/i, 'Archive'],
  [/monitor|keep|rescan|re-?assess|track|prioriti|fulfil/i, 'RefreshCw'],
]
const stepIcon = (title: string) => STEP_ICONS.find(([re]) => re.test(title))?.[1] ?? 'Workflow'

// ---------- section helpers (all emit Sentinel DPDP sections) ----------
type Row = [label: string, meta: string, status?: string]
type Visual = { kind: 'toggles' | 'record' | 'dashboard'; title: string; subtitle?: string; rows: Row[]; stat?: [string, string]; toast?: string }
const hero = (o: { eyebrow: string; heading: string; sub: string; note?: string; primary?: Link; secondary?: Link; variant?: 'split' | 'centered' | 'dark'; visual?: Visual; chips?: string[] }): Block => ({
  blockType: 'dpHero', layout: o.visual ? 'split' : 'centered', eyebrow: o.eyebrow, heading: o.heading, subheading: o.sub, note: o.note,
  primary: o.primary ?? DEMO, secondary: o.secondary ?? PLATFORM, chips: labels(o.chips ?? []),
  visual: o.visual?.kind ?? 'none', visualTitle: o.visual?.title, visualSubtitle: o.visual?.subtitle,
  visualRows: (o.visual?.rows ?? []).map(([label, meta, status]) => ({ label, meta, status })),
  statValue: o.visual?.stat?.[0], statLabel: o.visual?.stat?.[1], toast: o.visual?.toast,
})
type Item = { title: string; description?: string; icon?: string; color?: string; url?: string; tag?: string; points?: string[] }
/** Card grids. The old style names map onto the DPDP card variants. */
const cards = (o: { eyebrow?: string; heading: string; intro?: string; style: 'plain' | 'icon' | 'tile' | 'problem' | 'checklist' | 'points' | 'tagged'; columns?: '2' | '3' | '4' | '6'; theme?: 'light' | 'white' | 'dark' | 'soft'; items: Item[]; note?: string; anchor?: string }): Block => {
  const variant = ({ icon: 'numbered', plain: 'numbered', tile: 'compact', problem: 'compact', checklist: 'compact', points: 'points', tagged: 'tagged' } as const)[o.style]
  const fallback = o.style === 'problem' ? 'TriangleAlert' : o.style === 'checklist' ? 'CircleCheck' : undefined
  return {
    blockType: 'dpCards', eyebrow: o.eyebrow, heading: o.heading, intro: o.intro, variant, note: o.note,
    columns: o.columns === '6' ? '4' : (o.columns ?? '3'), theme: THEME_OF[o.theme ?? 'white'] ?? o.theme,
    items: o.items.map((it) => ({
      title: it.title.replace(/^\d{2}\s+/, ''), text: it.description, url: it.url, tag: it.tag, points: labels(it.points ?? []),
      icon: ic(it.icon ?? fallback, fallback ?? stepIcon(it.title)),
      tone: o.style === 'problem' ? 'rose' : o.style === 'checklist' ? 'teal' : tone(it.color),
    })),
    ...(o.anchor ? { anchor: o.anchor } : {}),
  }
}
/** A statement with its legal anchor: dark key-point card, optional second card and a row of chips. */
const split = (o: { eyebrow?: string; heading: string; body: string; points?: string[]; badgeTitle: string; badgeText: string; theme?: string; side?: string; second?: [label: string, title: string, text: string]; pointsTitle?: string }): Block => ({
  blockType: 'dpRoles', eyebrow: o.eyebrow, heading: o.heading, intro: o.body,
  primaryLabel: 'Key point', primaryTitle: o.badgeTitle, primaryText: o.badgeText,
  secondaryLabel: o.second?.[0], secondaryTitle: o.second?.[1], secondaryText: o.second?.[2],
  chipsTitle: o.pointsTitle, chips: labels(o.points ?? []),
})
const text = (heading: string, body: string): Block => ({ blockType: 'dpCards', heading, intro: body, theme: 'white', variant: 'numbered', items: [] })
const faq = (items: [string, string][], heading = 'Frequently asked questions', link: Link | null = { label: 'All DPDP questions', url: '/dpdp/faq' }): Block => ({
  blockType: 'dpFaq', eyebrow: 'FAQ', heading, items: items.map(([question, answer]) => ({ question, answer })), ...(link ? { link } : {}),
})
const cta = (heading = 'Get DPDP-ready before enforcement', body = `See how ${PRODUCT} captures, enforces and proves consent across your website, apps, CRM and stores.`, button: Link = DEMO): Block => ({
  blockType: 'dpCta', heading, text: body, primary: button, secondary: button.url === PLATFORM.url ? undefined : PLATFORM,
})
const resources = (heading = 'Guides to help you *get compliant*'): Block => ({
  blockType: 'dpResources', eyebrow: 'Resources', heading,
  items: [
    { kind: 'Guide', title: 'The DPDP Act explained', text: 'Scope, obligations, rights, the Board and penalties in plain language.', meta: 'Act and Rules, with section references', url: '/dpdp/act' },
    { kind: 'Checklist', title: 'DPDP compliance checklist', text: 'Twenty practical steps, in order, to be ready before enforcement.', meta: 'Self-assessment', url: '/dpdp/compliance-checklist' },
    { kind: 'Comparison', title: 'DPDP vs GDPR', text: 'What carries over from a GDPR programme and what is different in India.', meta: 'For teams with a GDPR programme', url: '/dpdp/dpdp-vs-gdpr' },
  ],
  link: { label: 'All DPDP resources', url: '/dpdp/act' },
})
const PHASE_DATES = [
  { date: '2025-11-13', label: 'Nov 2025', title: 'Rules notified; Board provisions apply' },
  { date: '2026-11-13', label: 'Nov 2026', title: 'Consent Manager provisions apply' },
  { date: '2027-05-13', label: 'May 2027', title: 'Remaining obligations and penalties apply' },
]
const timeline = (heading = 'When DPDP obligations *apply*'): Block => ({ blockType: 'dpTimeline', eyebrow: 'Timeline', heading, items: PHASE_DATES, showToday: true })

const SECTION_LABEL: Record<string, Link> = { platform: { label: 'Platform', url: '/dpdp/platform' }, industries: { label: 'Solutions', url: '/dpdp/industries' } }
/** Adds a breadcrumb to the page's hero: Sentinel DPDP › section › page. */
const withCrumbs = (slug: string, title: string, layout: Block[]): Block[] => {
  if (!slug || layout[0]?.blockType !== 'dpHero') return layout
  const parts = slug.split('/')
  const crumbs = [{ label: PRODUCT, url: '/dpdp' }, ...(parts.length > 1 && SECTION_LABEL[parts[0]] ? [SECTION_LABEL[parts[0]]] : []), { label: title }]
  return [{ ...layout[0], breadcrumb: crumbs }, ...layout.slice(1)]
}
const page = (slug: string, title: string, metaTitle: string, description: string, layout: Block[]): DpdpSeed => ({
  slug: slug ? `${BASE}/${slug}` : BASE, title, noindex: false, meta: { title: metaTitle, description }, layout: withCrumbs(slug, title, layout),
})

// ---------- platform modules ----------
type Module = {
  slug: string; name: string; short: string; icon: string; color: string
  eyebrow: string; heading: string; sub: string
  capabilities: [string, string, string][] // title, description, icon
  law: { heading: string; body: string; points: string[]; badgeTitle: string; badgeText: string }
  steps: [string, string][]
  useCases: string[]
  faqs: [string, string][]
}

export const MODULES: Module[] = [
  {
    slug: 'data-discovery', name: 'Data Discovery & Mapping', short: 'Find and classify personal data across every system.', icon: 'Database', color: 'blue',
    eyebrow: 'Data Discovery & Mapping', heading: 'Find the personal data *hiding in your systems*',
    sub: 'Scan databases, applications and file stores, classify the personal data you find, and keep a live map of how it flows between teams, systems and vendors.',
    capabilities: [
      ['Connected scanning', 'Scan structured and unstructured sources, from ERP and CRM databases to shared drives, without moving the data.', 'Cpu'],
      ['Automatic classification', 'Tag identifiers such as names, phone numbers, PAN, Aadhaar numbers and account details, with confidence scores you can review.', 'Sliders'],
      ['Data flow map', 'See which system collects each data element, where it is copied, and which processors receive it.', 'Globe'],
      ['Ownership and purpose', 'Assign an owner and a purpose to every data store so the map stays useful for notices, RoPA and audits.', 'UserCheck'],
    ],
    law: {
      heading: 'You cannot protect, notify or erase what you cannot find',
      body: 'The DPDP Act expects a Data Fiduciary to describe the personal data it collects in its notice (Section 5), to keep that data accurate when it is used to make decisions (Section 8(3)), to protect it with reasonable security safeguards (Section 8(5)), and to erase it when the purpose is served (Section 8(7)). Each of these depends on an inventory that is complete and current.',
      points: ['Itemised description of personal data for notices (Rule 3)', 'Scope for security safeguards and breach impact assessment', 'Input for retention and erasure schedules'],
      badgeTitle: 'Sections 5 and 8', badgeText: 'Notice, accuracy, safeguards and erasure all start with a data inventory.',
    },
    steps: [['Connect sources', 'Link databases, SaaS apps and file stores with read-only access.'], ['Scan', 'Sample and scan records on a schedule you control.'], ['Classify', 'Tag data elements by category and sensitivity.'], ['Review', 'Confirm or correct the findings with data owners.'], ['Map flows', 'Link stores to purposes, systems and processors.'], ['Keep current', 'Rescan on schedule and flag new or changed data.']],
    useCases: ['Build the first personal data inventory for DPDP', 'Find customer data copied into spreadsheets and shared drives', 'Prepare an itemised data list for consent notices', 'Identify which vendors receive which data', 'Scope a breach investigation quickly', 'Spot data held past its retention period'],
    faqs: [
      ['Does the data leave our environment during a scan?', 'No. Scanning reads samples in place with read-only credentials and stores only the classification results and metadata, not copies of the records.'],
      ['Which systems can be scanned?', 'Relational databases, common SaaS applications through their APIs, and file stores. ERPNext and other Frappe applications are supported natively because TruSync builds on that platform.'],
      ['How does this help with DPDP compliance?', 'The map feeds your notices, your record of processing, your retention schedule and your breach response, so each of those is based on the data you actually hold.'],
    ],
  },
  {
    slug: 'gap-assessment', name: 'Gap Assessment', short: 'Benchmark current practices against DPDP obligations.', icon: 'LineChart', color: 'purple',
    eyebrow: 'Gap Assessment', heading: 'See exactly where you stand against the *DPDP Act*',
    sub: 'A structured assessment of your notices, consent flows, rights handling, security, vendors and governance, with a scored gap list and a prioritised plan to close it.',
    capabilities: [
      ['Obligation-mapped questionnaire', 'Questions mapped to each obligation in the Act and the 2025 Rules, grouped by function so the right owner answers.', 'FileText'],
      ['Evidence collection', 'Attach policies, screenshots and contracts to each answer so the assessment is backed by proof.', 'CheckCircle2'],
      ['Scoring and heat map', 'See readiness by obligation and by business unit, and where the largest penalty exposure sits.', 'LineChart'],
      ['Remediation plan', 'Turn every gap into an owned task with a due date, tracked until it is closed.', 'Clock'],
    ],
    law: {
      heading: 'Enforcement is phased. Your preparation should not be.',
      body: 'The DPDP Rules, 2025 were notified in November 2025. Provisions on the Data Protection Board applied immediately, Consent Manager registration applies after twelve months, and most Data Fiduciary obligations apply eighteen months after notification. A gap assessment tells you how much of that window you need.',
      points: ['Covers notice, consent, legitimate uses, rights, security, breach, retention, children, vendors and governance', 'Separates quick fixes from system changes', 'Re-run to show progress to leadership'],
      badgeTitle: 'DPDP Rules, 2025', badgeText: 'Phased commencement: immediate, 12 months and 18 months after notification.',
    },
    steps: [['Scope', 'Choose entities, business units and systems.'], ['Assign', 'Send each section to its owner.'], ['Answer', 'Respond with evidence attached.'], ['Score', 'See readiness by obligation.'], ['Prioritise', 'Rank gaps by risk and effort.'], ['Track', 'Close gaps and re-assess.']],
    useCases: ['Board-level readiness report', 'Pre-implementation baseline', 'Assess a newly acquired business', 'Compare readiness across subsidiaries', 'Prepare for an independent data audit', 'Quarterly compliance review'],
    faqs: [
      ['How long does an assessment take?', 'A focused assessment of one business unit usually takes two to four weeks, depending on how quickly owners answer and share evidence.'],
      ['Can TruSync run the assessment for us?', 'Yes. Our consultants can run interviews and fill the assessment with you, or your team can run it self-serve in the platform.'],
      ['Is this legal advice?', 'No. The assessment maps your practices to the published Act and Rules. For legal opinions on specific situations, work with your legal counsel.'],
    ],
  },
  {
    slug: 'ropa', name: 'Records of Processing (RoPA)', short: 'Maintain a living register of processing activities.', icon: 'FileText', color: 'indigo',
    eyebrow: 'Records of Processing Activities', heading: 'A living register of *every processing activity*',
    sub: 'Record what personal data you process, why, on which ground, for how long and with whom, and keep that record in step with your systems instead of a spreadsheet.',
    capabilities: [
      ['Activity register', 'One record per processing activity: purpose, data categories, Data Principals, ground, retention and recipients.', 'FileText'],
      ['Linked to discovery', 'Pre-fill records from the data map and flag activities whose data has changed.', 'Database'],
      ['Ground of processing', 'Record whether each activity relies on consent or on a legitimate use under Section 7.', 'ShieldCheck'],
      ['Version history', 'Every change is kept with who made it and when, ready for an auditor.', 'Clock'],
    ],
    law: {
      heading: 'One source of truth for notices, audits and rights requests',
      body: 'The Act does not use the term RoPA, but its obligations assume one. Notices must itemise the data and purposes, Data Principals can ask for a summary of their data and the processing done on it (Section 11), and Significant Data Fiduciaries must undergo periodic audits and impact assessments (Section 10). A current register answers all three.',
      points: ['Purpose and ground recorded for each activity', 'Feeds access request responses under Section 11', 'Evidence for audits and DPIAs'],
      badgeTitle: 'Sections 5, 10 and 11', badgeText: 'Notices, audits and access requests all draw on your processing records.',
    },
    steps: [['Import', 'Start from the data map or a template.'], ['Describe', 'Add purpose, data and recipients.'], ['Set ground', 'Consent or legitimate use.'], ['Set retention', 'Link to the erasure schedule.'], ['Approve', 'Owner and DPO sign off.'], ['Review', 'Scheduled reviews keep it current.']],
    useCases: ['Replace RoPA spreadsheets', 'Answer "what do you do with my data" requests', 'Support a DPIA', 'Show processing records to auditors', 'Plan retention and erasure', 'Onboard a new product line'],
    faqs: [
      ['Is a RoPA mandatory under the DPDP Act?', 'There is no clause titled RoPA, but the notice, access and audit obligations are practical to meet only with an up-to-date record of processing. Most organisations treat it as essential.'],
      ['Can we import our GDPR records?', 'Yes. Existing records can be imported and then adjusted, for example to replace GDPR legal bases with DPDP grounds.'],
    ],
  },
  {
    slug: 'notice-management', name: 'Notice Creation & Management', short: 'Draft, version and publish DPDP-compliant notices.', icon: 'Globe', color: 'teal',
    eyebrow: 'Notice Creation & Management', heading: 'Clear notices, in *every language* your customers read',
    sub: 'Write notices that stand on their own, itemise the data and purposes, explain how to withdraw and complain, and publish them in English or any language in the Eighth Schedule.',
    capabilities: [
      ['Guided notice builder', 'Templates that prompt for every element the Rules require, so nothing is left out.', 'FileText'],
      ['Multilingual versions', 'Maintain each notice in English and Indian languages, reviewed and published together.', 'Globe'],
      ['Versioning', 'Every notice version is kept, and every consent record points to the exact version that was shown.', 'Clock'],
      ['Publish anywhere', 'Show notices on web forms, in apps, at store counters and in WhatsApp journeys from one source.', 'Smartphone'],
    ],
    law: {
      heading: 'Every request for consent must come with a notice',
      body: 'Section 5 requires a notice with or before every request for consent, describing the personal data and the purpose, how to withdraw consent and exercise rights, and how to complain to the Board. Rule 3 adds that the notice must be understandable on its own, in clear and plain language, with an itemised description of the data. Data Principals may ask for the notice in English or in any of the 22 languages of the Eighth Schedule to the Constitution.',
      points: ['Standalone notice, independent of other information (Rule 3)', 'Itemised personal data and specified purposes', 'Link to withdraw consent, exercise rights and complain to the Board', 'Notice for consents taken before the Act commenced (Section 5(2))'],
      badgeTitle: 'Section 5 and Rule 3', badgeText: 'Notice in English or any of the 22 Eighth Schedule languages.',
    },
    steps: [['Choose template', 'By channel and purpose.'], ['Itemise', 'Pick data elements from the data map.'], ['Translate', 'Add language versions.'], ['Review', 'Legal and DPO approval.'], ['Publish', 'Push to every channel.'], ['Track', 'Each consent records the version shown.']],
    useCases: ['Website and app sign-up notices', 'Store and counter notices on tablets', 'WhatsApp opt-in notices', 'Re-notice existing customers before enforcement', 'Employee and candidate notices', 'Notices for loyalty programmes'],
    faqs: [
      ['Is a privacy policy enough?', 'No. A privacy policy is general. The Act requires a specific notice with each request for consent that itemises the data and purpose for that request.'],
      ['Do we need to notify customers whose consent we took before the Act?', 'Yes. Section 5(2) requires a notice to such Data Principals as soon as reasonably practicable, and processing can continue until they withdraw consent.'],
      ['Which languages are supported?', 'English and the Indian languages you choose. The Act lets a Data Principal ask for the notice in English or any language in the Eighth Schedule.'],
    ],
  },
  {
    slug: 'consent-management', name: 'Consent & Preference Management', short: 'Capture purpose-wise consent and honour it in real time.', icon: 'UserCheck', color: 'green',
    eyebrow: 'Consent & Preference Management', heading: 'Consent that *every system* respects',
    sub: 'Capture purpose-wise consent on every channel, keep a verifiable record of each choice, and make every connected system check consent before it uses the data.',
    capabilities: [
      ['Purpose-wise capture', 'Separate, unbundled choices for each purpose, never a single "I agree" to everything.', 'CheckCircle2'],
      ['Complete consent record', 'Who, what, when, where, which notice version and through which channel, for every event.', 'FileText'],
      ['Withdrawal as easy as giving', 'Customers change or withdraw consent from the same channels, in as few steps as it took to give it.', 'Sliders'],
      ['Real-time propagation', 'Consent changes reach your CRM, marketing tools and data warehouse through APIs and webhooks.', 'Zap'],
    ],
    law: {
      heading: 'Consent must be free, specific, informed, unconditional and unambiguous',
      body: 'Section 6 sets the standard for valid consent: a clear affirmative action, limited to the data necessary for the specified purpose. Consent can be withdrawn at any time, as easily as it was given, after which the Data Fiduciary and its processors must stop processing within a reasonable time. The burden of proving that notice was given and consent was obtained rests on the Data Fiduciary (Section 6(10)).',
      points: ['Unbundled consent per purpose', 'No pre-ticked boxes or consent buried in terms', 'Withdrawal with comparable ease (Section 6(4))', 'Proof of consent on demand (Section 6(10))'],
      badgeTitle: 'Section 6', badgeText: 'The Data Fiduciary must be able to prove consent was given.',
    },
    steps: [['Show notice', 'A versioned notice for the purpose.'], ['Capture choice', 'One choice per purpose.'], ['Record', 'Store a tamper-evident consent record.'], ['Sync', 'Push the status to connected systems.'], ['Enforce', 'Systems check consent before use.'], ['Withdraw', 'Honour changes everywhere.']],
    useCases: ['Marketing consent during onboarding', 'Loyalty programme enrolment', 'Check consent before a campaign is sent', 'Process withdrawal requests across systems', 'Preference centre for customers', 'Consent at the store counter or call centre'],
    faqs: [
      ['What does purpose-wise consent mean?', 'Consent given for one clearly stated purpose, such as marketing emails, separately from other purposes such as order updates. The Act requires consent to be specific to the purpose.'],
      ['Can we use one checkbox for marketing, analytics and service messages?', 'No. Bundling purposes into one choice makes consent neither specific nor free. Service messages needed to deliver what the customer asked for may rely on a legitimate use instead of consent.'],
      ['How do other systems know a customer withdrew consent?', `${PRODUCT} sends the change to connected systems through APIs and webhooks, and those systems can also look up consent status before they use the data.`],
    ],
  },
  {
    slug: 'cookie-consent', name: 'Cookie Consent Management', short: 'Configurable cookie banners with granular controls.', icon: 'Layout', color: 'orange',
    eyebrow: 'Cookie Consent Management', heading: 'Cookie banners that *actually* control tracking',
    sub: 'Scan your sites for cookies and trackers, group them by purpose, show a clear banner, and block non-essential scripts until the visitor says yes.',
    capabilities: [
      ['Cookie and tracker scan', 'Find first and third-party cookies, pixels and tags across your domains.', 'Cpu'],
      ['Purpose categories', 'Group trackers into necessary, analytics, personalisation and advertising, each with its own choice.', 'Sliders'],
      ['Script blocking', 'Non-essential tags load only after consent, not before.', 'Lock'],
      ['Branded, multilingual banner', 'Match your site design and show the banner in the visitor\'s language.', 'Globe'],
    ],
    law: {
      heading: 'Tracking identifiers are personal data when they relate to a person',
      body: 'Cookies, device identifiers and pixels that can be linked to an individual are personal data under the DPDP Act. Where they are used for analytics, personalisation or advertising, the ordinary rules on notice and consent apply. For children, Section 9(3) prohibits tracking, behavioural monitoring and targeted advertising altogether.',
      points: ['Necessary cookies separated from optional ones', 'Equal prominence for accept and reject', 'Choices recorded as consent events', 'No tracking of children'],
      badgeTitle: 'Sections 6 and 9', badgeText: 'Consent rules apply to identifiers used for tracking.',
    },
    steps: [['Scan', 'Discover cookies and tags.'], ['Categorise', 'Assign each to a purpose.'], ['Design', 'Configure the banner.'], ['Block', 'Hold scripts until consent.'], ['Record', 'Log each visitor\'s choice.'], ['Rescan', 'Catch new trackers.']],
    useCases: ['Corporate and product websites', 'E-commerce storefronts', 'Marketing landing pages', 'Web apps and portals', 'Multi-brand, multi-domain setups', 'Tag manager governance'],
    faqs: [
      ['Is a cookie banner enough for DPDP compliance?', 'No. It covers tracking on your website. Personal data collected through forms, apps, stores, call centres and WhatsApp needs its own notices and consent records.'],
      ['Do strictly necessary cookies need consent?', 'Cookies needed to deliver the service the visitor asked for, such as a shopping cart, can generally rely on that request. Optional analytics and advertising cookies need consent.'],
    ],
  },
  {
    slug: 'data-principal-rights', name: 'Data Principal Rights', short: 'Handle access, correction, erasure and nomination requests.', icon: 'Users', color: 'pink',
    eyebrow: 'Data Principal Rights', heading: 'Respond to every *rights request* on time, with proof',
    sub: 'Give customers one place to ask for their data, correct it, erase it, nominate someone, or complain, and route every request to the right team with deadlines and an audit trail.',
    capabilities: [
      ['Self-service request portal', 'Customers submit and track requests from your website or app, after identity verification.', 'Users'],
      ['Workflow and SLAs', 'Requests are routed to owners with due dates, reminders and escalation.', 'Clock'],
      ['Data assembly', 'Pull the customer\'s data and processing summary from connected systems for access requests.', 'Database'],
      ['Grievance tracking', 'Complaints are logged, answered and closed with a record of every step.', 'Headphones'],
    ],
    law: {
      heading: 'Four rights, a grievance mechanism and a deadline',
      body: 'Data Principals have the right to a summary of their personal data and the processing done on it, including who it was shared with (Section 11); to correction, completion, updating and erasure (Section 12); to grievance redressal (Section 13); and to nominate another person to exercise their rights on death or incapacity (Section 14). Under Rule 14, grievances must be answered within a period that may not exceed 90 days. A Data Principal must use your grievance mechanism before approaching the Board.',
      points: ['Access: summary of data, processing and recipients', 'Correction, completion, updating and erasure', 'Nomination, unique to the DPDP Act', 'Grievance response within 90 days (Rule 14)'],
      badgeTitle: 'Sections 11 to 14', badgeText: 'Grievances must be answered within 90 days.',
    },
    steps: [['Receive', 'Request through portal, email or store.'], ['Verify', 'Confirm the requester\'s identity.'], ['Route', 'Assign to data owners.'], ['Fulfil', 'Collect, correct or erase the data.'], ['Respond', 'Send the outcome to the customer.'], ['Record', 'Keep evidence for the Board.']],
    useCases: ['"What data do you hold about me?" requests', 'Correct a wrong address or phone number', 'Erase an account after closure', 'Register a nominee', 'Log and resolve complaints', 'Report request volumes to the DPO'],
    faqs: [
      ['Can we keep data after an erasure request?', 'Only where retention is required by law, for example tax or banking records. Data kept for internal analytics does not qualify and must be erased.'],
      ['Can someone else make a request on a customer\'s behalf?', 'Yes, a nominee appointed under Section 14 can exercise the Data Principal\'s rights in the event of death or incapacity, and a parent or lawful guardian acts for a child or a person with disability.'],
      ['What happens if we ignore requests?', 'The Data Principal can complain to the Data Protection Board after using your grievance mechanism. Breach of obligations not covered by a specific penalty can attract a penalty of up to ₹50 crore.'],
    ],
  },
  {
    slug: 'consent-audit-trail', name: 'Consent Audit Trail', short: 'Tamper-evident logs of every consent event.', icon: 'ShieldCheck', color: 'blue',
    eyebrow: 'Consent Audit Trail', heading: 'Proof of consent that *stands up* to scrutiny',
    sub: 'Every consent, change and withdrawal is written to an append-only log, sealed with a cryptographic hash, and ready to export for a customer, an auditor or the Board.',
    capabilities: [
      ['Append-only log', 'Consent events are added, never edited or deleted, so the history cannot be rewritten.', 'Lock'],
      ['Cryptographic sealing', 'Each record carries a hash linked to the previous one, so any tampering is detectable.', 'ShieldCheck'],
      ['Full context', 'Notice version, language, channel, timestamp and purpose stored with each event.', 'FileText'],
      ['Evidence export', 'Export a customer\'s consent history or an audit sample in one step.', 'TrendingUp'],
    ],
    law: {
      heading: 'The burden of proof is on you',
      body: 'Section 6(10) places the burden of proving that notice was given and consent was obtained on the Data Fiduciary, in any proceeding. Rule 6 also expects logs and monitoring of access to personal data, retained for at least one year. A tamper-evident trail turns that burden into a report you can produce on demand.',
      points: ['Who consented, to what, when and how', 'Notice version and language shown', 'Change and withdrawal history', 'Retention of logs for at least one year (Rule 6)'],
      badgeTitle: 'Section 6(10)', badgeText: 'The Data Fiduciary must prove notice and consent.',
    },
    steps: [['Capture', 'A consent event occurs.'], ['Enrich', 'Add notice, channel and purpose.'], ['Seal', 'Hash and chain the record.'], ['Store', 'Append to the log.'], ['Verify', 'Check integrity at any time.'], ['Export', 'Produce evidence on demand.']],
    useCases: ['Respond to a Board inquiry', 'Answer a customer dispute about consent', 'Internal and external audits', 'Prove withdrawal was honoured', 'Support due diligence in a transaction', 'Monitor consent rates by channel'],
    faqs: [
      ['What makes the trail tamper-evident?', 'Each record is hashed together with the previous record\'s hash. Changing any past record breaks the chain, which verification detects.'],
      ['How long are consent records kept?', 'For as long as you rely on the consent, and after withdrawal for the period your legal and audit needs require. Retention periods are configurable.'],
    ],
  },
  {
    slug: 'dpia', name: 'Data Protection Impact Assessment', short: 'Assess and document high-risk processing.', icon: 'Award', color: 'purple',
    eyebrow: 'Data Protection Impact Assessment', heading: 'Assess *high-risk processing* before it goes live',
    sub: 'Run structured impact assessments for new products, systems and vendors: describe the processing, rate the risks to Data Principals, record the safeguards and get sign-off.',
    capabilities: [
      ['Assessment templates', 'Templates for new products, AI and analytics, vendor onboarding and data sharing.', 'FileText'],
      ['Risk scoring', 'Rate likelihood and impact on Data Principals\' rights and record the reasoning.', 'LineChart'],
      ['Safeguard tracking', 'Link each risk to a control and track it until implemented.', 'CheckCircle2'],
      ['Approval workflow', 'DPO and business owner sign-off with a full history.', 'UserCheck'],
    ],
    law: {
      heading: 'Mandatory for Significant Data Fiduciaries, good practice for everyone',
      body: 'Section 10 requires a Significant Data Fiduciary to carry out periodic Data Protection Impact Assessments, which describe the rights of Data Principals and the purpose of processing and assess and manage the risks. Rule 13 requires an impact assessment and an audit every twelve months, with the significant findings reported to the Board, and due diligence on algorithmic software used to process personal data.',
      points: ['Annual DPIA and audit for SDFs (Rule 13)', 'Report of significant observations to the Board', 'Due diligence on algorithms that process personal data', 'Useful for any high-risk launch'],
      badgeTitle: 'Section 10 and Rule 13', badgeText: 'SDFs: impact assessment and audit every twelve months.',
    },
    steps: [['Trigger', 'Start from a new project or change.'], ['Describe', 'Data, purpose and systems.'], ['Assess', 'Score risks to Data Principals.'], ['Mitigate', 'Assign safeguards.'], ['Approve', 'DPO sign-off.'], ['Review', 'Re-assess annually.']],
    useCases: ['Launch of a new app or feature', 'AI and machine learning on customer data', 'Large-scale profiling or analytics', 'New data-sharing partnership', 'Processing children\'s data', 'Annual SDF assessment'],
    faqs: [
      ['Do we need a DPIA if we are not a Significant Data Fiduciary?', 'It is not mandatory, but it is the clearest way to show you considered risks and applied reasonable safeguards, which every Data Fiduciary must do.'],
      ['Who becomes a Significant Data Fiduciary?', 'Data Fiduciaries notified by the Central Government based on factors such as the volume and sensitivity of data, risk to Data Principals and impact on the sovereignty of India, electoral democracy, state security and public order.'],
    ],
  },
  {
    slug: 'breach-management', name: 'Breach Management', short: 'Detect, assess and report breaches within mandated timelines.', icon: 'Zap', color: 'red',
    eyebrow: 'Breach Management', heading: 'Respond to a breach in *hours*, not weeks',
    sub: 'Log incidents, assess which data and which people are affected, notify the Board and every affected Data Principal, and keep the record of what you did.',
    capabilities: [
      ['Incident register', 'Record incidents from security tools, staff and vendors in one place.', 'FileText'],
      ['Impact assessment', 'Use the data map to see which data elements and how many people are affected.', 'Database'],
      ['Notification templates', 'Board intimation and Data Principal notices with every element the Rules require.', 'Phone'],
      ['Deadline tracking', 'Countdown to the 72-hour detailed report, with tasks for each team.', 'Clock'],
    ],
    law: {
      heading: 'Every breach must be reported, to the Board and to each affected person',
      body: 'Section 8(6) requires a Data Fiduciary to intimate the Board and each affected Data Principal of a personal data breach. Under Rule 7, affected Data Principals must be told without delay, in clear language, what happened, the likely consequences, the mitigation steps and what they can do. The Board must be informed without delay, with a detailed report within 72 hours of becoming aware of the breach. Failing to notify can attract a penalty of up to ₹200 crore; failing to take reasonable security safeguards, up to ₹250 crore.',
      points: ['Intimation to the Board without delay', 'Detailed report to the Board within 72 hours (Rule 7)', 'Notice to each affected Data Principal', 'No materiality threshold: every breach is reportable'],
      badgeTitle: 'Section 8(6) and Rule 7', badgeText: 'Detailed report to the Board within 72 hours.',
    },
    steps: [['Detect', 'Log the incident.'], ['Contain', 'Stop the breach and preserve evidence.'], ['Assess', 'Identify data and people affected.'], ['Notify', 'Board and Data Principals.'], ['Report', 'Detailed report within 72 hours.'], ['Learn', 'Fix the root cause and record it.']],
    useCases: ['Ransomware or system compromise', 'Misdirected email or file share', 'Breach at a vendor or processor', 'Lost device with customer data', 'Breach simulation and drills', 'Board reporting on incidents'],
    faqs: [
      ['Is there a minimum size for a reportable breach?', 'No. Unlike some laws, the DPDP Act has no materiality threshold. Every personal data breach must be intimated to the Board and the affected Data Principals.'],
      ['Are we responsible if the breach happened at a vendor?', 'Yes. Under Section 8(1) the Data Fiduciary remains responsible for processing done on its behalf by a Data Processor. Your contracts should require vendors to tell you about breaches immediately.'],
    ],
  },
  {
    slug: 'third-party-risk', name: 'Third-Party Risk Management', short: 'Evaluate and monitor vendors that handle personal data.', icon: 'Truck', color: 'teal',
    eyebrow: 'Third-Party Risk Management', heading: 'Your vendors process your data. *You* stay accountable.',
    sub: 'Inventory every processor, assess their safeguards before onboarding, track contract clauses and breach duties, and review them on a schedule.',
    capabilities: [
      ['Vendor inventory', 'Every processor, the data they receive and the purpose, linked to the data map.', 'Building2'],
      ['Security questionnaires', 'Risk-tiered questionnaires with evidence and scoring.', 'FileText'],
      ['Contract tracking', 'Track DPDP clauses: purpose limits, safeguards, breach reporting, erasure and sub-processing.', 'Briefcase'],
      ['Ongoing monitoring', 'Scheduled reassessment and alerts when a vendor\'s risk changes.', 'TrendingUp'],
    ],
    law: {
      heading: 'Processors only under a valid contract, and you answer for them',
      body: 'Section 8(1) makes the Data Fiduciary responsible for compliance even for processing done by a Data Processor on its behalf, and Section 8(2) allows engaging a processor only under a valid contract. Rule 6 expects that contract to require reasonable security safeguards. When consent is withdrawn or the purpose is served, the Data Fiduciary must also make its processors erase the data (Section 8(7)).',
      points: ['Valid contract before sharing data (Section 8(2))', 'Security safeguards required by contract (Rule 6)', 'Breach reporting obligations on vendors', 'Erasure by processors when purpose ends'],
      badgeTitle: 'Section 8(1) and 8(2)', badgeText: 'The Data Fiduciary remains responsible for its processors.',
    },
    steps: [['List', 'Inventory vendors and data shared.'], ['Tier', 'Rank by data sensitivity and volume.'], ['Assess', 'Send questionnaires.'], ['Contract', 'Confirm DPDP clauses.'], ['Approve', 'Onboard with conditions.'], ['Monitor', 'Reassess on schedule.']],
    useCases: ['SMS, email and WhatsApp providers', 'CRM, CDP and marketing tools', 'Cloud hosting and IT outsourcing', 'Payment and logistics partners', 'Call centres and field agencies', 'Analytics and AI vendors'],
    faqs: [
      ['Do we need new contracts with existing vendors?', 'Review existing contracts for purpose limits, safeguards, breach reporting and erasure. Many will need an addendum before the obligations take effect.'],
      ['Can we transfer data to vendors outside India?', 'Yes, unless the Central Government restricts transfers to a particular country by notification under Section 16. Stricter sector rules, for example from the RBI, still apply.'],
    ],
  },
]

const moduleUrl = (m: Module) => `/dpdp/platform/${m.slug}`

/** Sharper icons for the modules than the ones the generic site sections used. */
const MODULE_ICON: Record<string, string> = {
  'data-discovery': 'ScanSearch', 'gap-assessment': 'ChartColumn', ropa: 'ClipboardCheck', 'notice-management': 'FileText',
  'consent-management': 'UserCheck', 'cookie-consent': 'Cookie', 'data-principal-rights': 'Users', 'consent-audit-trail': 'Fingerprint',
  dpia: 'FileSearch', 'breach-management': 'Siren', 'third-party-risk': 'Handshake',
}
const modIcon = (m: Module) => MODULE_ICON[m.slug] ?? ic(m.icon)

/** The product screen drawn in each module's hero. Sample data, not customer figures. */
const MODULE_SCREEN: Record<string, Visual> = {
  'data-discovery': { kind: 'dashboard', title: 'sentinel / data-map', rows: [['Data stores scanned', '48'], ['Personal data fields', '1,284'], ['Owners assigned', '92%'], ['ERPNext · Customer.mobile_no', '', 'info'], ['Shared drive · leads-2023.xlsx', '', 'pending'], ['CRM · contacts.email', '', 'info']], toast: 'Scan complete' },
  'gap-assessment': { kind: 'dashboard', title: 'sentinel / readiness', rows: [['Readiness', '64%'], ['Open gaps', '23'], ['Owners replied', '9 / 12'], ['Notice (Section 5)', '', 'partial'], ['Breach intimation (Rule 7)', '', 'pending'], ['Grievance redressal (Section 13)', '', 'info']] },
  ropa: { kind: 'record', title: 'Processing activity PA-014', subtitle: 'Loyalty programme · owner: CRM team', rows: [['Purpose', 'Points, rewards and member offers', 'info'], ['Ground', 'Consent · Section 6', 'granted'], ['Retention', '3 years after last purchase', 'info'], ['Recipients', '2 processors under contract', 'info']], toast: 'Record approved' },
  'notice-management': { kind: 'record', title: 'Notice NTC-004 · v2.1', subtitle: 'Marketing communications · itemised', rows: [['English', 'Published to web, app, POS', 'on'], ['हिन्दी', 'Published to web, app, POS', 'on'], ['తెలుగు', 'Awaiting legal review', 'pending'], ['தமிழ்', 'Translation in progress', 'pending']], toast: 'Version 2.1 live' },
  'consent-management': { kind: 'toggles', title: 'Preference centre', subtitle: 'Customer · +91 98xxx xx210', rows: [['Order and delivery updates', 'Needed for your order', 'on'], ['Offers on WhatsApp', 'Consent · NTC-004 v2.1', 'on'], ['Personalised recommendations', 'Consent · NTC-004 v2.1', 'off'], ['Partner offers', 'Consent · NTC-006 v1.0', 'off']], toast: 'Preferences saved' },
  'cookie-consent': { kind: 'toggles', title: 'Cookie preferences', subtitle: 'yourbrand.in · banner v3', rows: [['Strictly necessary', 'Always active', 'on'], ['Analytics', 'Measure site usage', 'on'], ['Advertising', 'Ads and retargeting', 'off'], ['Personalisation', 'Tailored content', 'off']], toast: 'Choice recorded' },
  'data-principal-rights': { kind: 'record', title: 'Request DPR-2291', subtitle: 'Erasure · received via portal', rows: [['Identity verified', 'OTP to registered mobile', 'granted'], ['Routed to systems', 'CRM, marketing, loyalty, helpdesk', 'info'], ['CRM record erased', 'Owner: CX team', 'granted'], ['Marketing tool', 'Owner: Growth team', 'pending']], stat: ['90 days', 'Longest time allowed to resolve a grievance'] },
  'consent-audit-trail': { kind: 'record', title: 'Consent record CR-10482', subtitle: 'sha256 · chained to CR-10481', rows: [['Notice shown', 'NTC-004 v2.1 · English', 'info'], ['Offers on WhatsApp', 'Store POS · 18 Nov, 14:02', 'granted'], ['Offers on WhatsApp', 'App · 2 Dec, 09:41', 'withdrawn'], ['Integrity check', 'Hash chain intact', 'granted']], toast: 'Chain verified' },
  dpia: { kind: 'dashboard', title: 'sentinel / dpia / loyalty-ai', rows: [['Risk level', 'Medium'], ['Mitigations', '7 / 9'], ['DPO review', 'Pending'], ['Children\'s data in scope', '', 'pending'], ['Profiling for offers', '', 'partial'], ['Encryption at rest', '', 'granted']] },
  'breach-management': { kind: 'record', title: 'Incident INC-031', subtitle: 'Detected 09:12 IST · 72-hour clock running', rows: [['Contained', 'Access keys rotated', 'granted'], ['People affected', 'Identification in progress', 'partial'], ['Board informed', 'Sent without delay', 'granted'], ['Detailed report', 'Due within 72 hours', 'pending']], stat: ['72 hrs', 'Detailed breach report to the Board'] },
  'third-party-risk': { kind: 'dashboard', title: 'sentinel / vendors', rows: [['Vendors', '64'], ['High risk', '6'], ['Contracts updated', '71%'], ['SMS gateway · questionnaire', '', 'pending'], ['Cloud hosting · DPDP clauses', '', 'granted'], ['Collection agency · reassess', '', 'partial']] },
}

/** Sample rows for the consent records table on the consent modules. */
const CONSENT_ROWS = [
  { ref: 'CR-10482', purpose: 'Marketing', detail: 'Offers on WhatsApp', channel: 'Store POS', status: 'granted', source: 'Billing counter', version: 'NTC-004 v2.1', time: '18 Nov 14:02' },
  { ref: 'CR-10483', purpose: 'Analytics', detail: 'Product improvement', channel: 'Web', status: 'withdrawn', source: 'Cookie banner', version: 'CKB v3', time: '18 Nov 14:09' },
  { ref: 'CR-10484', purpose: 'Personalisation', detail: 'Tailored offers', channel: 'App', status: 'partial', source: 'Preference centre', version: 'NTC-004 v2.1', time: '18 Nov 14:15' },
  { ref: 'CR-10485', purpose: 'Order updates', detail: 'Delivery messages', channel: 'Web', status: 'granted', source: 'Checkout', version: 'NTC-002 v1.3', time: '18 Nov 14:21' },
  { ref: 'CR-10486', purpose: 'Partner offers', detail: 'Co-branded offers', channel: 'WhatsApp', status: 'pending', source: 'Opt-in message', version: 'NTC-006 v1.0', time: '18 Nov 14:30' },
]
const RECORD_MODULES = ['consent-management', 'consent-audit-trail']

const modulePage = (m: Module): DpdpSeed => {
  const i = MODULES.indexOf(m)
  const related = [1, 2, 3, 4].map((k) => MODULES[(i + k) % MODULES.length])
  const capabilities = m.capabilities.map(([title, description, icon], k) => ({ title, description, icon, color: ['blue', 'purple', 'teal', 'orange'][k % 4] }))
  return page(`platform/${m.slug}`, m.name, `${m.name} for DPDP Compliance | ${PRODUCT}`, `${m.short} ${PRODUCT} by TruSync helps Indian businesses meet the Digital Personal Data Protection Act, 2023.`, [
    hero({ eyebrow: m.eyebrow, heading: m.heading, sub: m.sub, primary: DEMO, secondary: { label: 'See all modules', url: '/dpdp/platform' }, visual: MODULE_SCREEN[m.slug] }),
    RECORD_MODULES.includes(m.slug)
      ? {
          blockType: 'dpRecords', eyebrow: 'Core capabilities', heading: 'Every choice captured, kept and *honoured*',
          capabilities: capabilities.map((c) => ({ title: c.title, text: c.description, icon: ic(c.icon), tone: tone(c.color) })),
          tableTitle: 'Customer consent records', tableSubtitle: 'Status, time, source and notice version on every record', tableButton: 'Export evidence', rows: CONSENT_ROWS,
        }
      : cards({ eyebrow: 'Core capabilities', heading: `What ${m.name} *does for you*`, style: 'icon', columns: '4', theme: 'white', items: capabilities }),
    split({
      eyebrow: 'What the DPDP Act requires', heading: m.law.heading, body: m.law.body, badgeTitle: m.law.badgeTitle, badgeText: m.law.badgeText,
      second: [`How ${PRODUCT} helps`, m.name, m.sub], pointsTitle: 'What you will be able to show', points: m.law.points,
    }),
    { blockType: 'dpWorkflow', eyebrow: 'How it works', heading: 'From first step to *proof*', steps: m.steps.map(([title, text]) => ({ title, text, icon: stepIcon(title) })) },
    cards({ eyebrow: 'Use cases', heading: 'Built for the work you *already do*', style: 'tile', columns: '3', theme: 'soft', items: m.useCases.map((title) => ({ title, icon: modIcon(m) })) }),
    cards({ eyebrow: 'Works with', heading: 'Part of one *connected platform*', intro: `${m.name} shares one data map, one consent record and one audit trail with the rest of ${PRODUCT}.`, style: 'tile', columns: '4', theme: 'white', items: related.map((x) => ({ title: x.name, description: x.short, icon: modIcon(x), color: x.color, url: moduleUrl(x) })) }),
    resources(),
    faq(m.faqs, `${m.name}: *frequently asked questions*`),
    cta(`Put ${m.name.replace(/ \(.*\)$/, '')} to work`, `See how ${PRODUCT} handles ${m.short.charAt(0).toLowerCase()}${m.short.slice(1).replace(/\.$/, '')}, on your own channels and systems.`),
  ])
}

// ---------- industries ----------
type Industry = {
  slug: string; name: string; icon: string; color: string; heading: string; sub: string
  data: string[]; challenges: [string, string][]; solutions: [string, string, string][] // title, description, module slug
  journeys: string[]; faqs: [string, string][]
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'retail', name: 'Retail', icon: 'ShoppingCart', color: 'orange', heading: 'DPDP compliance for *retail* and loyalty',
    sub: 'Capture consent at the billing counter, in the app and on WhatsApp, keep loyalty and CRM data in line with what customers agreed to, and prove it.',
    data: ['Mobile numbers and names at billing', 'Loyalty and purchase history', 'Store CCTV and visitor logs', 'Delivery addresses', 'App and website behaviour', 'Feedback and survey responses'],
    challenges: [['Consent at the counter', 'Phone numbers are collected at billing for invoices and then reused for marketing without a separate choice.'], ['Loyalty data sprawl', 'Purchase history sits in the POS, loyalty platform, CRM and marketing tools, each with its own copy.'], ['Campaign enforcement', 'Withdrawn customers keep receiving SMS and WhatsApp campaigns because tools are not in sync.'], ['Historic databases', 'Years of customer data were collected without DPDP-style notices.']],
    solutions: [['Counter and app consent', 'Purpose-wise consent on POS tablets, apps and WhatsApp, recorded with the notice version.', 'consent-management'], ['Re-notice existing customers', 'Send notices to past customers in their language before enforcement.', 'notice-management'], ['Consent check before campaigns', 'Marketing tools check consent status before every send.', 'consent-management'], ['Customer rights portal', 'Customers see, correct or delete their loyalty data themselves.', 'data-principal-rights']],
    journeys: ['Billing and e-invoice by phone number', 'Loyalty enrolment and points', 'SMS, email and WhatsApp promotions', 'Store feedback and surveys', 'Home delivery', 'Omnichannel customer profiles'],
    faqs: [['Can we use the phone number taken at billing for marketing?', 'Not without separate consent for marketing. Sending the invoice can rely on the customer\'s request, but promotions are a different purpose.'], ['Does loyalty data need consent?', 'Running the programme the customer joined can rely on their request, but profiling and targeted offers beyond that need clear notice and consent.']],
  },
  {
    slug: 'ecommerce', name: 'E-commerce', icon: 'Smartphone', color: 'blue', heading: 'DPDP compliance for *e-commerce* platforms',
    sub: 'From sign-up to checkout to cart reminders, capture consent cleanly, govern tracking, and honour withdrawal everywhere your customer data goes.',
    data: ['Account and login details', 'Addresses and contact numbers', 'Order and payment history', 'Browsing and cart behaviour', 'Device and cookie identifiers', 'Reviews and support chats'],
    challenges: [['Tracking and personalisation', 'Pixels and recommendation engines process behaviour data without clear consent.'], ['Abandoned cart messages', 'Reminder emails and WhatsApp messages are sent without a marketing consent.'], ['Inactive accounts', 'Large platforms must erase data of users inactive for three years, after notice (Third Schedule to the Rules).'], ['Many processors', 'Payment, logistics, marketing and analytics vendors all receive customer data.']],
    solutions: [['Cookie and tracker control', 'Block optional tags until the shopper consents.', 'cookie-consent'], ['Checkout consent', 'Separate choices for order updates and promotions.', 'consent-management'], ['Retention automation', 'Find inactive accounts and run the notice-and-erase process.', 'data-discovery'], ['Vendor governance', 'Assess and contract every processor.', 'third-party-risk']],
    journeys: ['Account sign-up', 'Checkout and payment', 'Cart abandonment reminders', 'Personalised recommendations', 'Returns and support', 'Account deletion'],
    faqs: [['Do cart reminder emails need consent?', 'They are marketing communications, so they need consent unless they are strictly part of a transaction the customer asked for.'], ['What does the three-year erasure rule mean?', 'The Rules set retention limits for large e-commerce, gaming and social media platforms: data of users who have not engaged for three years must be erased, after a 48-hour notice to the user.']],
  },
  {
    slug: 'food-and-beverage', name: 'Food & Beverage', icon: 'Wheat', color: 'yellow', heading: 'DPDP compliance for *food & beverage* brands',
    sub: 'Restaurants, QSR chains and cloud kitchens collect phone numbers at every order. Turn that into consented, trusted customer relationships.',
    data: ['Phone numbers for orders and table bookings', 'Delivery addresses', 'Order preferences and history', 'Feedback and ratings', 'Wi-Fi login details', 'Loyalty memberships'],
    challenges: [['Many touchpoints', 'Dine-in, takeaway, own app, aggregators and Wi-Fi each collect data differently.'], ['Franchise networks', 'Outlets run by franchisees collect data under your brand.'], ['Promotional SMS and WhatsApp', 'Offers are sent to everyone who ever ordered.'], ['Feedback forms', 'Feedback tablets collect contact details without a notice.']],
    solutions: [['Consent at every touchpoint', 'One consent layer for app, outlet, Wi-Fi and feedback.', 'consent-management'], ['Notices in local languages', 'Show notices in the languages your customers read.', 'notice-management'], ['Franchise governance', 'Treat franchise partners as processors with contracts and checks.', 'third-party-risk'], ['Proof of consent', 'Show when and where each customer opted in.', 'consent-audit-trail']],
    journeys: ['Table reservations', 'Online ordering and delivery', 'Guest Wi-Fi login', 'Loyalty and offers', 'Feedback and reviews', 'Catering enquiries'],
    faqs: [['Can we send offers to customers who ordered online?', 'Only to those who consented to promotional messages. Order updates can rely on the order itself.']],
  },
  {
    slug: 'real-estate', name: 'Real Estate', icon: 'Building2', color: 'indigo', heading: 'DPDP compliance for *real estate* developers',
    sub: 'Leads arrive from portals, site visits, channel partners and call centres. Know where every lead came from, what they agreed to, and when to stop calling.',
    data: ['Lead names, numbers and emails', 'Site visit records', 'KYC documents for bookings', 'Loan and payment details', 'Channel partner referrals', 'Resident and society records'],
    challenges: [['Purchased and shared leads', 'Leads from portals and brokers arrive without proof of consent.'], ['Aggressive follow-up', 'Prospects who said no keep getting calls from many teams.'], ['KYC documents', 'Identity and financial documents are stored long after the sale closes.'], ['Channel partners', 'Brokers handle customer data with no contract terms on its use.']],
    solutions: [['Lead source and consent records', 'Record the source and consent of every lead.', 'consent-audit-trail'], ['Suppression across teams', 'Withdrawal stops calls from sales, partners and call centres alike.', 'consent-management'], ['Retention for KYC', 'Keep documents only as long as law requires.', 'ropa'], ['Partner contracts', 'Govern brokers as processors.', 'third-party-risk']],
    journeys: ['Portal and website enquiries', 'Site visits', 'Booking and KYC', 'Home loan coordination', 'Possession and handover', 'Society management'],
    faqs: [['Can we call leads bought from a property portal?', 'Only within the consent the lead gave, and you must be able to show it. Ask portals for consent records with every lead.']],
  },
  {
    slug: 'manufacturing', name: 'Manufacturing', icon: 'Factory', color: 'green', heading: 'DPDP compliance for *manufacturing*',
    sub: 'Manufacturers hold more personal data than they think: employees, contract workers, dealers, service customers and visitors. Bring it under one governance model.',
    data: ['Employee and contract worker records', 'Biometric attendance', 'Dealer and distributor contacts', 'Warranty and service customers', 'Visitor and gate logs', 'CCTV footage'],
    challenges: [['Workforce data', 'Large volumes of employee and contract worker data, including biometrics.'], ['Dealer networks', 'Dealers and distributors collect end-customer data for warranty and service.'], ['Legacy systems', 'Personal data is spread across ERP, HRMS, spreadsheets and paper registers later digitised.'], ['Visitor management', 'Gate registers and CCTV collect data with no notice.']],
    solutions: [['Data discovery in ERP and HRMS', 'Find personal data across ERPNext and other systems.', 'data-discovery'], ['Employment legitimate use', 'Document where Section 7(i) applies and where consent is still needed.', 'ropa'], ['Dealer governance', 'Contracts and checks for dealers handling customer data.', 'third-party-risk'], ['Visitor notices', 'Notices for gate and visitor systems.', 'notice-management']],
    journeys: ['Hiring and onboarding', 'Attendance and payroll', 'Warranty registration', 'Service requests', 'Visitor entry', 'Dealer onboarding'],
    faqs: [['Do we need consent to process employee data?', 'Processing for the purposes of employment can rely on the legitimate use in Section 7(i). Uses beyond employment, such as marketing to employees, need consent.']],
  },
  {
    slug: 'insurance', name: 'Insurance', icon: 'ShieldCheck', color: 'teal', heading: 'DPDP compliance for *insurance*',
    sub: 'Policyholders share health, financial and family data. Handle it with purpose-wise consent, sector-aware retention and fast breach response.',
    data: ['Proposal and KYC data', 'Health and medical records', 'Nominee and family details', 'Claims documents', 'Agent and broker leads', 'Call recordings'],
    challenges: [['Sensitive data', 'Health and financial data raise the stakes of any breach.'], ['Agents and intermediaries', 'Agents, brokers and TPAs process policyholder data on your behalf.'], ['Overlapping rules', 'IRDAI requirements apply alongside the DPDP Act.'], ['Long retention', 'Policy records must be kept for long periods, but not for every purpose.']],
    solutions: [['Purpose-wise consent', 'Separate consent for underwriting, cross-sell and marketing.', 'consent-management'], ['Intermediary governance', 'Contracts and assessments for agents, brokers and TPAs.', 'third-party-risk'], ['Breach readiness', 'Board and policyholder notification within the timelines.', 'breach-management'], ['Retention schedules', 'Retain what law requires, erase the rest.', 'ropa']],
    journeys: ['Proposal and underwriting', 'Policy issuance', 'Claims processing', 'Renewals', 'Cross-sell campaigns', 'Grievance handling'],
    faqs: [['Do sector regulations override the DPDP Act?', 'Both apply. Where a sector law requires retention or disclosure, that is a legal obligation the DPDP Act respects, while its other obligations still apply.']],
  },
  {
    slug: 'edtech', name: 'Ed-Tech', icon: 'GraduationCap', color: 'purple', heading: 'DPDP compliance for *ed-tech* and education',
    sub: 'Most learners are under eighteen. Verifiable parental consent, no tracking of children and careful use of learning data are not optional.',
    data: ['Student names and ages', 'Parent and guardian contacts', 'Learning progress and assessments', 'Video and proctoring data', 'Payment details', 'App usage behaviour'],
    challenges: [['Children\'s data', 'Every user under eighteen is a child under the Act.'], ['Parental consent', 'Consent must be verifiable as coming from a parent (Rule 10).'], ['No behavioural tracking', 'Tracking, behavioural monitoring and targeted ads aimed at children are prohibited (Section 9(3)).'], ['Learning analytics', 'Analytics on student data must not cause them harm.']],
    solutions: [['Verifiable parental consent', 'Age gating and parental verification flows.', 'consent-management'], ['Tracker governance', 'Switch off tracking for child users.', 'cookie-consent'], ['Impact assessments', 'Assess analytics and AI features before launch.', 'dpia'], ['Parent rights portal', 'Parents can view, correct and erase their child\'s data.', 'data-principal-rights']],
    journeys: ['Student sign-up', 'Parental verification', 'Live and recorded classes', 'Tests and proctoring', 'Progress reports', 'Course marketing to parents'],
    faqs: [['Who counts as a child?', 'Anyone under eighteen. The Act requires verifiable consent of a parent or lawful guardian before processing a child\'s personal data.'], ['Are educational institutions exempt?', 'The Rules exempt certain processing by educational institutions from some child-specific conditions, limited to educational activities and safety. Marketing and analytics are not covered by that exemption.']],
  },
  {
    slug: 'bfsi-nbfc', name: 'BFSI & NBFC', icon: 'Banknote', color: 'blue', heading: 'DPDP compliance for *banks, NBFCs and fintechs*',
    sub: 'Align consent, retention and vendor governance with both the DPDP Act and RBI expectations, across branches, apps, DSAs and collection agencies.',
    data: ['KYC and identity documents', 'Account and transaction data', 'Credit bureau data', 'Loan application details', 'Collection call records', 'Device and app data'],
    challenges: [['Regulatory overlap', 'RBI directions on KYC, outsourcing and data storage apply alongside the Act.'], ['DSAs and agencies', 'Sourcing and collection partners handle large volumes of borrower data.'], ['Cross-sell', 'Customer data from one product is reused to sell another.'], ['Likely SDF status', 'Large lenders may be notified as Significant Data Fiduciaries.']],
    solutions: [['Consent for cross-sell', 'Separate consent for each product and channel.', 'consent-management'], ['Partner governance', 'Assess and contract DSAs, agencies and fintech partners.', 'third-party-risk'], ['Annual DPIA and audit', 'Ready for SDF obligations.', 'dpia'], ['Retention aligned with RBI', 'Keep what regulation requires, erase the rest.', 'ropa']],
    journeys: ['Account opening and KYC', 'Loan origination', 'Collections', 'Cross-sell and campaigns', 'Grievance redressal', 'Account closure'],
    faqs: [['Do RBI retention rules conflict with erasure requests?', 'No. Data that must be kept under RBI or other laws can be retained for that purpose. It must not be used for other purposes, such as marketing, after consent is withdrawn.']],
  },
  {
    slug: 'travel-hospitality', name: 'Travel & Hospitality', icon: 'Globe', color: 'pink', heading: 'DPDP compliance for *travel and hospitality*',
    sub: 'Guests share identity documents, travel plans and preferences. Keep guest data safe, use it as agreed, and make every stay a reason to trust you.',
    data: ['Guest identity documents', 'Booking and travel itineraries', 'Payment details', 'Stay preferences', 'Loyalty memberships', 'Wi-Fi and CCTV data'],
    challenges: [['ID documents', 'Passport and ID copies are collected at check-in and kept indefinitely.'], ['OTAs and partners', 'Bookings arrive through online travel agents and partners.'], ['International guests', 'Data of foreign guests is processed in India and abroad.'], ['Marketing after the stay', 'Guests receive offers they never agreed to.']],
    solutions: [['Check-in notices', 'Clear notices at booking and check-in.', 'notice-management'], ['ID retention', 'Retain IDs only as long as law requires.', 'ropa'], ['Partner governance', 'Assess OTAs, channel managers and vendors.', 'third-party-risk'], ['Guest preference centre', 'Guests control marketing and preferences.', 'consent-management']],
    journeys: ['Booking and reservations', 'Check-in and ID capture', 'In-stay services', 'Loyalty programmes', 'Post-stay marketing', 'Guest feedback'],
    faqs: [['Can we keep guest ID copies?', 'Keep them for the period required by law, for example police reporting rules for foreign guests, and erase them after. Do not reuse them for marketing.']],
  },
  {
    slug: 'healthcare', name: 'Healthcare', icon: 'Stethoscope', color: 'red', heading: 'DPDP compliance for *healthcare*',
    sub: 'Hospitals, clinics, diagnostics and health-tech handle some of the most sensitive data there is. Protect it, use it only as agreed, and respond fast when something goes wrong.',
    data: ['Patient registration details', 'Medical records and reports', 'Prescriptions', 'Insurance and billing data', 'Teleconsultation recordings', 'Wearable and app health data'],
    challenges: [['Highly sensitive data', 'A breach of health data causes serious harm and draws attention.'], ['Many systems', 'HIS, LIS, PACS, billing and apps each hold patient data.'], ['Emergency care', 'Treatment in emergencies cannot wait for consent.'], ['Research and analytics', 'Using patient data for research needs a clear ground.']],
    solutions: [['Medical emergency legitimate use', 'Document Section 7 grounds for emergency treatment.', 'ropa'], ['Patient consent', 'Consent for teleconsultation, reports and follow-up messages.', 'consent-management'], ['Security and breach response', 'Safeguards and 72-hour Board reporting.', 'breach-management'], ['Patient rights', 'Patients access and correct their records.', 'data-principal-rights']],
    journeys: ['Registration and admission', 'Diagnostics and reports', 'Teleconsultation', 'Billing and insurance claims', 'Follow-up reminders', 'Health app and wearables'],
    faqs: [['Do we need consent to treat a patient in an emergency?', 'No. Section 7 allows processing to respond to a medical emergency involving a threat to life or immediate threat to health.']],
  },
]

/** "BFSI & NBFC" stays as written; "Food & Beverage" becomes "food & beverage" mid-sentence. */
const lc = (name: string) => (/[A-Z]{2}/.test(name) ? name : name.toLowerCase())

/** The DPDP provisions every industry page maps, tagged with their section of the Act. */
const PROVISIONS: [tag: string, title: string, text: (n: string) => string, color: string][] = [
  ['Section 4', 'A lawful ground', () => 'Rely on consent or a listed legitimate use for every processing activity, and record which one.', 'purple'],
  ['Section 5', 'Notice', (n) => `Give an itemised notice wherever ${n} customer data is collected, and re-notice existing customers.`, 'rose'],
  ['Section 6', 'Consent', () => 'Collect consent purpose by purpose, and make withdrawal as easy as giving it.', 'emerald'],
  ['Section 7', 'Legitimate uses', () => 'Document where you process without consent, for example for a transaction the customer asked for.', 'teal'],
  ['Section 8', 'Fiduciary duties', () => 'Security safeguards, breach notification, erasure when the purpose ends and valid processor contracts.', 'indigo'],
  ['Section 9', 'Children\'s data', () => 'Verifiable parental consent, and no tracking or targeted advertising aimed at children.', 'rose'],
  ['Section 10', 'Significant Data Fiduciaries', () => 'If notified, appoint a DPO in India and run annual impact assessments and audits.', 'violet'],
  ['Sections 11 to 14', 'Data Principal rights', () => 'Access, correction, erasure, grievance redressal and nomination, answered on time.', 'sky'],
]
const STAGES = [
  { name: 'Map', text: 'List the channels where you collect personal data, the systems that use it, and the vendors who receive it.', output: 'A personal data inventory and system map' },
  { name: 'Assess', text: 'Compare current notices, consent flows, retention and vendor terms with what the Act and Rules require.', output: 'A gap register ranked by risk' },
  { name: 'Design', text: 'Decide purposes, grounds, notices, consent journeys and retention periods for each processing activity.', output: 'Approved notices and a record of processing' },
  { name: 'Build', text: `Deploy ${PRODUCT}, connect your channels and systems, and set up rights and breach workflows.`, output: 'Consent captured and checked in live systems' },
  { name: 'Test', text: 'Run withdrawal, erasure and breach drills end to end and fix what does not propagate.', output: 'Evidence that controls work across systems' },
  { name: 'Run', text: 'Review notices, vendors and retention on a schedule, and report to leadership and the Board.', output: 'An audit-ready evidence log, kept current' },
]
const READINESS = [
  { icon: 'Landmark', title: 'Governance', items: ['Name an owner for DPDP compliance', 'Decide where you are a Data Fiduciary or a Processor', 'Publish a contact for privacy questions'] },
  { icon: 'Database', title: 'Data inventory', items: ['List personal data across stores, apps and systems', 'Map where it flows inside and outside', 'Set a retention period for each data set'] },
  { icon: 'FileText', title: 'Notice and consent', items: ['Review notices at every collection point', 'Separate optional purposes from essential ones', 'Check that withdrawal reaches every system'] },
  { icon: 'Users', title: 'Rights and vendors', items: ['Set up a way to receive and verify requests', 'Review processor contracts for DPDP terms', 'Prepare a breach response and notification plan'] },
]
const DOWNSTREAM = ['Email, SMS and WhatsApp', 'Marketing automation', 'Analytics and reporting', 'ERP and billing', 'Payment and delivery partners', 'Cloud and data platforms']

const industryPage = (ind: Industry): DpdpSeed => {
  const n = lc(ind.name)
  const sols = ind.solutions.map(([title, description, mod]) => ({ title, description, m: MODULES.find((x) => x.slug === mod)! }))
  return page(`industries/${ind.slug}`, `${ind.name} DPDP Compliance`, `DPDP Compliance for ${ind.name} | ${PRODUCT}`, `How ${n} businesses in India can meet the DPDP Act, 2023: consent, notices, rights, vendors and breach response with ${PRODUCT} by TruSync.`, [
    hero({
      eyebrow: `Solutions · ${ind.name}`, heading: ind.heading, sub: ind.sub,
      note: `Does the Act apply? Yes, if you process digital personal data of customers, employees or partners in India. For your own customers you are usually the Data Fiduciary.`,
      secondary: { label: 'See all industries', url: '/dpdp/industries' },
      visual: { kind: 'toggles', title: `${ind.name} customer preferences`, subtitle: 'Purpose-wise consent · synced to CRM', rows: ind.journeys.slice(0, 4).map((j, k): Row => [j, k === 0 ? 'Needed for the service' : 'Consent · notice v2.1', k === 2 ? 'off' : 'on']), toast: 'Consent recorded' },
    }),
    cards({ eyebrow: 'In brief', heading: `Key takeaways for *${n}*`, style: 'icon', columns: '4', theme: 'soft', items: [
      { title: 'You are the Data Fiduciary', description: `For the customers you serve, you decide why their data is used, so the main obligations sit with you.`, icon: 'ShieldCheck', color: 'purple' },
      { title: 'One purpose, one choice', description: 'Essential service messages and optional marketing need separate grounds. Do not bundle them.', icon: 'GitBranch', color: 'red' },
      { title: 'Withdrawal must travel', description: 'A customer who opts out in one channel must stop hearing from every system that holds their data.', icon: 'RefreshCw', color: 'teal' },
      { title: 'Rights need a route', description: 'Customers can ask to see, correct or erase their data. You need a way to receive, verify and answer.', icon: 'Users', color: 'blue' },
    ] }),
    timeline(),
    split({
      eyebrow: 'Applicability', heading: `Why the DPDP Act applies to *${n}*`, body: `Most ${n} businesses play two roles at once: they decide how their own customers' data is used, and they hand parts of that work to vendors. The Act gives each role different duties.`,
      badgeTitle: 'Data Fiduciary', badgeText: `You, the ${n} business. You decide why and how customer, member and employee data is processed, and you answer for it.`,
      second: ['Your vendors', 'Data Processor', 'CRM, messaging, hosting, delivery and analytics providers that process data on your behalf, under a contract you control.'],
      pointsTitle: 'Activities in scope', points: ind.journeys,
    }),
    cards({ eyebrow: 'Data landscape', heading: `Personal data *${n}* businesses hold`, intro: 'Start from what you collect, where it comes from and why you keep it.', style: 'tile', columns: '3', theme: 'white', items: ind.data.map((title) => ({ title, icon: ic(ind.icon), color: ind.color })),
      note: 'Payment details, precise location and identity documents deserve extra care even though the Act does not define a separate category of sensitive personal data.' }),
    {
      blockType: 'dpCompare', eyebrow: 'Challenges and capabilities', heading: `${ind.name} DPDP challenges, and *how ${PRODUCT} answers them*`,
      leftLabel: `${ind.name} challenge`, rightLabel: `${PRODUCT} capability`,
      rows: ind.challenges.map(([problem, problemText], k) => ({ problem, problemText, solution: sols[k]?.title ?? sols[0].title, solutionText: sols[k]?.description ?? sols[0].description, url: moduleUrl((sols[k] ?? sols[0]).m) })),
      note: `${PRODUCT} is an enabling platform. It does not replace your legal assessment, your security controls, or your accountability as a Data Fiduciary.`,
    },
    cards({ eyebrow: 'Obligations', heading: `DPDP provisions mapped to *${n}* operations`, style: 'tagged', columns: '4', theme: 'soft', items: PROVISIONS.map(([tag, title, txt, color]) => ({ tag, title, description: txt(n), color })),
      note: 'A practical mapping, not legal advice. Check applicability, exemptions and commencement dates against the Act, the notified Rules and official guidance.' }),
    { blockType: 'dpStepper', eyebrow: 'Compliance journey', heading: 'How to become DPDP-ready in *six stages*', stages: STAGES },
    { blockType: 'dpUseCases', eyebrow: 'Use cases', heading: `${ind.name} use cases with *${PRODUCT}*`, items: sols.map((s, k) => ({
      icon: modIcon(s.m), title: s.title, scenario: ind.challenges[k]?.[1], approach: s.description, panelTitle: s.m.name,
      panelRows: [{ label: ind.journeys[k % ind.journeys.length], status: 'granted' }, { label: 'Notice version recorded', status: 'info' }, { label: 'Synced to connected systems', status: 'on' }],
    })) },
    {
      blockType: 'dpStack', eyebrow: 'Application ecosystem', heading: `Where ${PRODUCT} fits in your *${n} stack*`,
      intro: `${PRODUCT} connects to your collection points and systems through APIs, webhooks and a web widget. Each downstream system is configured to respect the customer's choices.`,
      leftLabel: 'Upstream · collection', left: labels(ind.journeys),
      coreTitle: PRODUCT, coreSubtitle: 'Privacy governance layer', coreLabel: 'Modules in use', core: labels([...new Set(sols.map((s) => s.m.name))]),
      rightLabel: 'Downstream · usage', right: labels(DOWNSTREAM),
    },
    { blockType: 'dpChecklist', eyebrow: 'Readiness checklist', heading: `DPDP readiness checklist for *${n}*`, intro: 'A first self-assessment. Tick what is already in place.', groups: READINESS.map((g) => ({ icon: g.icon, title: g.title, items: g.items.map((text) => ({ text })) })) },
    faq([...ind.faqs, ['When do DPDP obligations take effect?', 'Most obligations apply from May 2027, eighteen months after the Rules were notified in November 2025. Consent Manager provisions apply from November 2026.'], [`How does ${PRODUCT} help ${n} businesses comply?`, `It captures purpose-wise consent with the notice version, keeps your systems in sync when choices change, routes rights requests, and keeps the evidence you need for audits and the Board.`]], `DPDP compliance for ${n}: *frequently asked questions*`),
    cta(`Check your ${n} privacy readiness`, `Bring consent, notices, purposes and data principal rights together across your ${n} channels and systems.`),
  ])
}

// ---------- hub and resource pages ----------
const PHASES = [
  { title: 'November 2025: Rules notified', description: 'The Data Protection Board is constituted and its provisions apply immediately.' },
  { title: 'November 2026: Consent Managers', description: 'Consent Managers can register with the Board and operate (Rule 4).' },
  { title: 'May 2027: Full obligations', description: 'Notice, consent, rights, security, breach, retention, children and SDF obligations apply, and penalties can be imposed.' },
]

const PENALTIES: [string, string][] = [
  ['Up to ₹250 crore', 'Failure to take reasonable security safeguards to prevent a personal data breach (Section 8(5)).'],
  ['Up to ₹200 crore', 'Failure to notify the Board or affected Data Principals of a breach (Section 8(6)).'],
  ['Up to ₹200 crore', 'Breach of the additional obligations for children\'s data (Section 9).'],
  ['Up to ₹150 crore', 'Breach of the additional obligations of a Significant Data Fiduciary (Section 10).'],
  ['Up to ₹50 crore', 'Breach of any other provision of the Act or Rules.'],
  ['Up to ₹10,000', 'Breach of the duties of a Data Principal, such as a false or frivolous complaint (Section 15).'],
]

const productHome = page('', PRODUCT, `${PRODUCT}: DPDP Act Compliance & Consent Management Platform | TruSync`, `${PRODUCT} is a DPDP Act compliance platform by TruSync: consent and notice management, data discovery, rights requests, breach response and vendor risk for Indian businesses.`, [
  hero({
    eyebrow: 'DPDP Act compliance platform', heading: 'Run *consent, data and privacy* from one place',
    sub: `${PRODUCT} helps Indian businesses meet the Digital Personal Data Protection Act, 2023: map personal data, capture and honour consent, answer rights requests, respond to breaches, and prove all of it.`,
    secondary: { label: 'Check your readiness', url: '/dpdp/compliance-checklist' },
    chips: ['Built for the DPDP Act, 2023 and Rules, 2025', 'Native ERPNext connector', 'Notices in English and Indian languages'],
  }),
  {
    blockType: 'dpShowcase', eyebrow: 'Product tour', heading: 'Know your data. Honour every choice. *Control the risk.*',
    tabs: [
      { icon: 'ScanSearch', title: 'Data Discovery & Mapping', subtitle: 'Know your data', panelHeading: 'Find every place personal data lives', text: 'Scan databases, apps and file stores, classify the personal data you find, and map how it moves between teams, systems and vendors.', chips: labels(['Source discovery', 'Classification', 'Data-flow map', 'ERPNext connector']), visual: 'bars', visualTitle: 'Personal data found, by category (sample)', data: [['Contact details', 42], ['Identifiers', 31], ['Financial', 18], ['Location', 12], ['Employment', 9], ['Children', 4]].map(([label, value]) => ({ label, value })), link: { label: 'Explore Data Discovery', url: '/dpdp/platform/data-discovery' } },
      { icon: 'ChartColumn', title: 'Gap Assessment', subtitle: 'Know your gaps', panelHeading: 'See how ready you are, obligation by obligation', text: 'Send each part of the assessment to the team that owns it, collect answers with evidence, and get a ranked list of what to fix first.', chips: labels(['Owner questionnaires', 'Evidence upload', 'Readiness score', 'Remediation plan']), visual: 'meters', visualTitle: 'Readiness by obligation (sample)', data: [['Notice', 72], ['Consent', 58], ['Rights', 40], ['Security', 81], ['Breach response', 35], ['Vendors', 47]].map(([label, value]) => ({ label, value })), link: { label: 'Explore Gap Assessment', url: '/dpdp/platform/gap-assessment' } },
      { icon: 'UserCheck', title: 'Consent & Preferences', subtitle: 'Honour every choice', panelHeading: 'Capture a choice once, honour it everywhere', text: 'Purpose-wise consent on web, app, store and WhatsApp, stored with the notice version and pushed to every system that uses the data.', chips: labels(['Purpose-wise consent', 'Preference centre', 'Withdrawal sync', 'Notice versions']), visual: 'records', visualTitle: 'Latest consent events (sample)', data: [['Offers on WhatsApp · Store POS', 'granted'], ['Analytics cookies · Web', 'withdrawn'], ['Tailored offers · App', 'partial'], ['Partner offers · WhatsApp', 'pending']].map(([label, status]) => ({ label, status })), link: { label: 'Explore Consent Management', url: '/dpdp/platform/consent-management' } },
      { icon: 'Users', title: 'Data Principal Rights', subtitle: 'Answer requests', panelHeading: 'Answer every request on time', text: 'Take requests through a portal, email or the store, verify the requester, route the work to data owners, and keep the clock visible.', chips: labels(['Request portal', 'Identity check', 'Owner routing', 'Deadline tracking']), visual: 'records', visualTitle: 'Open requests (sample)', data: [['DPR-2291 · Erasure', 'pending'], ['DPR-2288 · Access', 'granted'], ['DPR-2285 · Correction', 'granted'], ['DPR-2279 · Grievance', 'partial']].map(([label, status]) => ({ label, status })), link: { label: 'Explore Data Principal Rights', url: '/dpdp/platform/data-principal-rights' } },
      { icon: 'Siren', title: 'Breach Management', subtitle: 'Control the risk', panelHeading: 'Respond to a breach inside the deadlines', text: 'Log an incident, contain it, work out who is affected, and send the Board and Data Principals what the Rules require, with the 72-hour report on track.', chips: labels(['Incident log', 'Impact assessment', 'Board intimation', '72-hour report']), visual: 'meters', visualTitle: 'Incident INC-031 progress (sample)', data: [['Containment', 100], ['Impact assessment', 60], ['Notifications', 50], ['Detailed report', 20]].map(([label, value]) => ({ label, value })), link: { label: 'Explore Breach Management', url: '/dpdp/platform/breach-management' } },
    ],
  },
  {
    blockType: 'dpHub', eyebrow: 'One consent layer', heading: 'Between the channels that collect data *and the systems that use it*',
    topLabel: 'Where choices are made', top: [['Globe', 'Website'], ['Smartphone', 'Mobile app'], ['Store', 'Store POS'], ['MessageCircle', 'WhatsApp'], ['Headphones', 'Call centre']].map(([icon, label]) => ({ icon, label })),
    coreName: PRODUCT, coreStatus: 'consent · notices · rights',
    bottomLabel: 'Where choices are honoured', bottom: [['Database', 'ERPNext'], ['Users', 'CRM'], ['Megaphone', 'Marketing'], ['Server', 'Data warehouse'], ['Inbox', 'Helpdesk']].map(([icon, label]) => ({ icon, label })),
    points: [
      { icon: 'PenLine', title: 'Record once', text: 'Every channel writes to the same consent record, with the notice the customer saw.' },
      { icon: 'Search', title: 'Check before use', text: 'Systems look up the current choice before they send, share or analyse.' },
      { icon: 'RefreshCw', title: 'Withdraw everywhere', text: 'A withdrawal in one place reaches every connected system.' },
    ],
  },
  cards({ eyebrow: 'Governance and security', heading: 'Consent, governance and security, *working together*', intro: `${PRODUCT} brings the parts of a privacy programme into one system, so nothing depends on a spreadsheet someone forgot to update.`, style: 'icon', columns: '4', theme: 'soft', items: [
    { title: 'Governance', description: 'Owners, policies and approvals for every processing activity, across entities.', icon: 'Landmark', color: 'purple' },
    { title: 'Security', description: 'Access control, encryption and logging around the consent and request data itself.', icon: 'Lock', color: 'teal' },
    { title: 'Compliance', description: 'Each workflow maps to a section of the Act or a Rule, so you know what it covers.', icon: 'Scale', color: 'blue' },
    { title: 'Evidence', description: 'Tamper-evident records and exports ready for audits and the Data Protection Board.', icon: 'FileLock2', color: 'green' },
  ] }),
  cards({ eyebrow: 'Built for every sector', heading: 'See how it works *for your industry*', intro: 'Consent rules differ by sector, from RBI expectations in lending to children\'s data in education. Pick yours.', style: 'points', columns: '4', theme: 'white',
    items: INDUSTRIES.slice(0, 8).map((ind) => ({ title: ind.name, description: ind.challenges[0][1], icon: ind.icon, color: ind.color, points: ind.solutions.slice(0, 2).map(([title]) => title), url: `/dpdp/industries/${ind.slug}` })) }),
  {
    blockType: 'dpToggle', eyebrow: 'The compliance shift', heading: 'What DPDP changes *for consumer brands*', offLabel: `Without ${PRODUCT}`, onLabel: `With ${PRODUCT}`,
    without: [
      { title: 'Consent scattered across tools', text: 'Each channel keeps its own list, and nobody knows which one is right.' },
      { title: 'Opt-outs that do not travel', text: 'A customer who unsubscribed by email still gets WhatsApp offers.' },
      { title: 'No proof on demand', text: 'When asked, you cannot show which notice a customer saw or when they agreed.' },
      { title: 'Requests answered by hand', text: 'Access and erasure requests sit in inboxes with no owner or deadline.' },
    ],
    with: [
      { title: 'One consent record per customer', text: 'Web, app, store and WhatsApp all write to the same place.' },
      { title: 'Withdrawal enforced everywhere', text: 'Connected systems check the current choice before every send.' },
      { title: 'Evidence in one click', text: 'Who, when, which purpose and which notice version, sealed in the log.' },
      { title: 'Rights handled on a clock', text: 'Requests are verified, routed to owners and tracked to completion.' },
    ],
  },
  cards({ eyebrow: 'The missing piece', heading: 'Consent management, *without the gaps*', intro: 'Most consent problems are not about the banner. They are about what happens after the customer clicks.', style: 'icon', columns: '3', theme: 'soft', items: [
    { title: 'Choices that stay on the form', description: 'Consent captured in one tool never reaches the CRM or the campaign platform that uses the data.', icon: 'Inbox', color: 'orange' },
    { title: 'Systems that drift apart', description: 'The same customer shows different preferences in billing, loyalty and marketing.', icon: 'GitBranch', color: 'purple' },
    { title: 'Proof nobody can find', description: 'Records exist, but without notice versions or timestamps they cannot answer an auditor.', icon: 'FileSearch', color: 'red' },
  ] }),
  timeline('The DPDP clock is *already running*'),
  resources('Learn the law *before it applies*'),
  faq([
    ['What does a consent management platform do?', 'It is software that captures consent with a notice, records it as evidence, shares the consent status with the systems that use personal data, and handles changes and withdrawals. Under the DPDP Act, it is how a business proves its consent is valid.'],
    ['Who does the DPDP Act apply to?', 'Any organisation processing digital personal data in India, and organisations outside India processing data of people in India in connection with offering them goods or services. Size does not matter: small businesses are covered too.'],
    ['When do we need to be compliant?', 'Most obligations apply from May 2027, eighteen months after the Rules were notified in November 2025. System changes, vendor contracts and re-notices take months, so start now.'],
    ['Does Sentinel DPDP work with ERPNext and our existing systems?', 'Yes. It is built by TruSync on the Frappe framework, connects natively to ERPNext, and integrates with other CRMs, websites, apps and messaging tools through APIs and webhooks.'],
  ]),
  cta(),
])

const platformHub = page('platform', 'Platform', `DPDP Compliance Platform Modules | ${PRODUCT}`, `Explore the ${PRODUCT} platform: data discovery, gap assessment, RoPA, notices, consent, cookies, rights, audit trail, DPIA, breach management and vendor risk.`, [
  hero({ eyebrow: 'Platform', heading: 'Every DPDP obligation, *mapped to a module*', sub: 'Start with the module for your most urgent gap and add the rest as you go. They all work from the same data map and evidence log.', secondary: { label: 'See integrations', url: '/dpdp/integrations' } }),
  cards({ eyebrow: 'Foundations', heading: 'Discover and document', style: 'icon', columns: '3', theme: 'white', items: MODULES.filter((m) => ['data-discovery', 'gap-assessment', 'ropa'].includes(m.slug)).map((m) => ({ title: m.name, description: m.short, icon: m.icon, color: m.color, url: moduleUrl(m) })) }),
  cards({ eyebrow: 'Day-to-day', heading: 'Notify, capture and enforce', style: 'icon', columns: '3', theme: 'light', items: MODULES.filter((m) => ['notice-management', 'consent-management', 'cookie-consent', 'data-principal-rights', 'consent-audit-trail'].includes(m.slug)).map((m) => ({ title: m.name, description: m.short, icon: m.icon, color: m.color, url: moduleUrl(m) })) }),
  cards({ eyebrow: 'Oversight', heading: 'Assess, respond and oversee', style: 'icon', columns: '3', theme: 'white', items: MODULES.filter((m) => ['dpia', 'breach-management', 'third-party-risk'].includes(m.slug)).map((m) => ({ title: m.name, description: m.short, icon: m.icon, color: m.color, url: moduleUrl(m) })) }),
  cards({ eyebrow: 'The life of a consent', heading: 'Ask, prove, honour, review', style: 'plain', columns: '4', theme: 'dark', items: [
    { title: 'Ask', description: 'Show a clear notice and let the person choose, purpose by purpose.' },
    { title: 'Prove', description: 'Keep sealed evidence of each choice and the notice behind it.' },
    { title: 'Honour', description: 'Systems look up the choice before using data and stop when it changes.' },
    { title: 'Review', description: 'Report on choices, withdrawals and requests for audits and the Board.' },
  ] }),
  split({ eyebrow: 'For developers', heading: 'Built for your engineers', body: 'REST APIs to record and check consent, webhooks that announce every change, a drop-in web widget for forms, and native connectors for ERPNext and other Frappe applications.', points: ['Consent check API before any processing', 'Webhooks for consent changes and withdrawals', 'Embeddable notice and consent widget', 'Multilingual notices served by API'], badgeTitle: 'APIs and webhooks', badgeText: 'Connect websites, apps, CRMs and data platforms.', theme: 'white' }),
  cta(),
])

const integrations = page('integrations', 'Integrations', `Integrations | ${PRODUCT}`, `Connect ${PRODUCT} to your website, mobile apps, CRM, ERP, marketing and messaging tools so consent is enforced everywhere customer data is used.`, [
  hero({ eyebrow: 'Integrations', heading: 'Consent that follows your data *everywhere*', sub: 'Connect the channels where you collect personal data and the systems where you use it, so every system acts on the same consent.' }),
  cards({ eyebrow: 'Collect', heading: 'Where consent is captured', style: 'icon', columns: '3', theme: 'white', items: [
    { title: 'Websites and forms', description: 'Embed the notice and consent widget in any web form.', icon: 'Layout', color: 'blue' },
    { title: 'Mobile apps', description: 'Capture and update consent in Android and iOS apps through the API.', icon: 'Smartphone', color: 'purple' },
    { title: 'Stores and counters', description: 'Tablet and POS flows for billing counters and front desks.', icon: 'ShoppingCart', color: 'orange' },
    { title: 'WhatsApp and SMS', description: 'Opt-in and opt-out journeys on messaging channels.', icon: 'Phone', color: 'green' },
    { title: 'Call centres', description: 'Record verbal consent with the script version used.', icon: 'Headphones', color: 'teal' },
    { title: 'Events and field teams', description: 'Offline capture that syncs when back online.', icon: 'Users', color: 'pink' },
  ] }),
  cards({ eyebrow: 'Enforce', heading: 'Where consent is checked', style: 'icon', columns: '3', theme: 'light', items: [
    { title: 'ERPNext and Frappe apps', description: 'Native connector for customers, leads, employees and suppliers.', icon: 'Database', color: 'blue' },
    { title: 'CRM and CDP', description: 'Sync consent status to customer profiles and segments.', icon: 'Users', color: 'purple' },
    { title: 'Marketing automation', description: 'Check consent before email, SMS and WhatsApp campaigns.', icon: 'Zap', color: 'orange' },
    { title: 'Data warehouse', description: 'Expose consent tables for analytics and AI pipelines.', icon: 'Cloud', color: 'teal' },
    { title: 'Ticketing and support', description: 'Route rights requests into your helpdesk.', icon: 'Headphones', color: 'green' },
    { title: 'Identity and SSO', description: 'Verify requesters before fulfilling rights requests.', icon: 'Lock', color: 'red' },
  ] }),
  split({ eyebrow: 'How integration works', heading: 'APIs, webhooks and a web widget', body: 'Every integration uses the same three pieces: an API to record and look up consent, webhooks that notify your systems when consent changes, and a widget that shows notices and captures choices on web pages. TruSync\'s team can build connectors for systems that are not covered yet.', points: ['REST API with API keys per system', 'Signed webhooks for consent events', 'Same-origin proxy pattern for websites', 'Custom connectors by TruSync engineers'], badgeTitle: 'Built on Frappe', badgeText: 'Open, extensible and deployable on your cloud.', theme: 'white' }),
  cta('Tell us what you need to connect'),
])

const services = page('services', 'DPDP Implementation Services', `DPDP Implementation Services | TruSync`, 'From gap assessment to platform deployment and adoption, TruSync helps Indian businesses implement the DPDP Act, 2023.', [
  hero({ eyebrow: 'Services', heading: 'Compliance that *keeps running* after go-live', sub: 'Software alone does not make you compliant. TruSync\'s team helps you assess, design, deploy and run DPDP compliance alongside the platform.', secondary: { label: 'See the platform', url: '/dpdp/platform' } }),
  cards({ eyebrow: 'How we work', heading: 'Assess, implement, operate', style: 'icon', columns: '3', theme: 'white', items: [
    { title: 'Assess', description: 'Workshops to map your data, a gap assessment and a roadmap ranked by risk.', icon: 'LineChart', color: 'blue' },
    { title: 'Implement', description: 'Notices, consent flows, system connectors, rights workflows and breach playbooks, set up and tested.', icon: 'Settings', color: 'purple' },
    { title: 'Operate', description: 'Staff training, re-notice campaigns, vendor reviews and support through your first audit.', icon: 'Award', color: 'green' },
  ] }),
  cards({ eyebrow: 'Who we work with', heading: 'From one entity to many', style: 'icon', columns: '3', theme: 'light', items: [
    { title: 'Groups with many entities', description: 'Shared policies and evidence, with each company keeping its own records.', icon: 'Building2', color: 'indigo' },
    { title: 'Consumer brands', description: 'Large volumes of customer choices across outlets, apps and campaigns.', icon: 'ShoppingCart', color: 'orange' },
    { title: 'Mid-sized businesses on ERPNext', description: 'A practical rollout that fits the systems and team you already have.', icon: 'Database', color: 'teal' },
  ] }),
  split({ eyebrow: 'Cost and exposure', heading: 'Compliance cost is predictable. Penalties are not.', body: 'A single failure to protect personal data can attract a penalty of up to ₹250 crore. Implementation cost depends on the number of channels, systems and entities in scope, and is usually a small fraction of that exposure. We scope it with you after discovery.', points: ['Fixed-scope discovery engagement', 'Phased rollout by channel or business unit', 'Optional managed service after go-live'], badgeTitle: 'TruSync', badgeText: 'Frappe and ERPNext partner, Hyderabad.', theme: 'white' }),
  cta('Plan your DPDP rollout with us'),
])

const industriesHub = page('industries', 'Industries', `DPDP Compliance by Industry | ${PRODUCT}`, `How the DPDP Act applies to retail, e-commerce, F&B, real estate, manufacturing, insurance, ed-tech, BFSI, travel and healthcare, and how ${PRODUCT} helps.`, [
  hero({ eyebrow: 'Solutions', heading: 'DPDP compliance for *your* industry', sub: 'Every industry collects personal data differently. See the data, the challenges and the controls that matter for yours.', secondary: { label: 'DPDP by your role', url: '/dpdp/by-role' } }),
  cards({ heading: 'Choose your industry', style: 'icon', columns: '3', theme: 'white', items: INDUSTRIES.map((i) => ({ title: i.name, description: i.sub, icon: i.icon, color: i.color, url: `/dpdp/industries/${i.slug}` })) }),
  cards({ eyebrow: 'Other ways to look at it', heading: 'How DPDP applies to you', style: 'icon', columns: '2', theme: 'light', items: [
    { title: 'By your role', description: 'Data Fiduciary, Data Processor, Significant Data Fiduciary or Consent Manager.', icon: 'Briefcase', color: 'blue', url: '/dpdp/by-role' },
    { title: 'By your Data Principals', description: 'Customers, leads, employees, children, patients and vendors.', icon: 'Users', color: 'purple', url: '/dpdp/by-data-principal' },
  ] }),
  cta(),
])

const byRole = page('by-role', 'DPDP by Role', `DPDP Roles: Data Fiduciary, Processor, SDF and Consent Manager | ${PRODUCT}`, 'Understand your role under the DPDP Act, 2023: Data Fiduciary, Data Processor, Significant Data Fiduciary or Consent Manager, and the obligations that come with it.', [
  hero({ eyebrow: 'DPDP by role', heading: 'Your obligations depend on *your role*', sub: 'The DPDP Act assigns different duties to the organisations that decide why data is processed, those that process it for others, and those that help people manage consent.', secondary: { label: 'Read the Act explained', url: '/dpdp/act' } }),
  cards({ heading: 'The roles under the Act', style: 'icon', columns: '2', theme: 'white', items: [
    { title: 'Data Fiduciary', description: 'Decides the purpose and means of processing (Section 2(i)). Carries the main obligations: notice, consent or legitimate use, accuracy, security, breach notification, erasure, a contact person and grievance redressal (Sections 4 to 8).', icon: 'Building2', color: 'blue' },
    { title: 'Data Processor', description: 'Processes personal data on behalf of a Data Fiduciary (Section 2(k)). Has no direct obligations in the Act; it is bound through a valid contract, and the Data Fiduciary remains responsible for its work (Section 8(1) and 8(2)).', icon: 'Cpu', color: 'purple' },
    { title: 'Significant Data Fiduciary', description: 'A Data Fiduciary notified by the Government based on volume and sensitivity of data and risk (Section 10). Must appoint a Data Protection Officer based in India, an independent data auditor, and carry out an annual DPIA and audit (Rule 13).', icon: 'ShieldCheck', color: 'red' },
    { title: 'Consent Manager', description: 'A person registered with the Board that lets Data Principals give, manage, review and withdraw consent through an accessible, transparent and interoperable platform (Section 6(7) to 6(9), Rule 4). Accountable to the Data Principal.', icon: 'UserCheck', color: 'green' },
  ] }),
  cards({ eyebrow: 'By function', heading: 'What each team needs to do', style: 'icon', columns: '3', theme: 'light', items: [
    { title: 'Leadership and board', description: 'Own the programme, approve budget, and treat privacy risk as business risk.', icon: 'Award', color: 'indigo' },
    { title: 'Legal and compliance', description: 'Interpret obligations, own notices, contracts and the grievance process.', icon: 'FileText', color: 'blue' },
    { title: 'IT and security', description: 'Reasonable security safeguards, logging, access control and breach response.', icon: 'Lock', color: 'red' },
    { title: 'Marketing and CX', description: 'Purpose-wise consent, campaign suppression and preference centres.', icon: 'TrendingUp', color: 'orange' },
    { title: 'HR', description: 'Employee notices, employment legitimate uses and retention of staff records.', icon: 'Users', color: 'green' },
    { title: 'Procurement', description: 'Vendor assessments and DPDP clauses in processor contracts.', icon: 'Briefcase', color: 'teal' },
  ] }),
  faq([
    ['Can a company be both a Data Fiduciary and a Data Processor?', 'Yes. A company is a Data Fiduciary for its own customers and employees, and a Data Processor when it processes data for a client under contract.'],
    ['Who can be a Data Protection Officer?', 'For a Significant Data Fiduciary, the DPO must be based in India, represent the SDF under the Act, and report to the board or a similar governing body (Section 10(2)). Other Data Fiduciaries must publish the contact of a person who can answer questions about processing (Section 8(9)).'],
  ]),
  cta(),
])

const byPrincipal = page('by-data-principal', 'DPDP by Data Principal', `DPDP Compliance by Data Principal | ${PRODUCT}`, 'How the DPDP Act applies to the different people whose data you hold: customers, leads, employees, children, patients, persons with disability and vendor contacts.', [
  hero({ eyebrow: 'DPDP by data principal', heading: 'Different people, *different rules*', sub: 'The Act protects every individual whose data you process. Some groups, like children and persons with disability, come with extra conditions.', secondary: { label: 'DPDP by your role', url: '/dpdp/by-role' } }),
  cards({ heading: 'Whose data do you hold?', style: 'icon', columns: '3', theme: 'white', items: [
    { title: 'Customers', description: 'Notice and consent for each purpose beyond what they asked for; full rights to access, correct, erase and nominate.', icon: 'ShoppingCart', color: 'blue' },
    { title: 'Leads and prospects', description: 'Leads are Data Principals too. Bought or shared leads must come with proof of consent for the purpose you use them for.', icon: 'TrendingUp', color: 'orange' },
    { title: 'Employees and candidates', description: 'Processing for employment purposes can rely on Section 7(i); anything beyond employment needs consent.', icon: 'Users', color: 'green' },
    { title: 'Children (under 18)', description: 'Verifiable parental consent (Rule 10); no tracking, behavioural monitoring or targeted advertising (Section 9).', icon: 'GraduationCap', color: 'purple' },
    { title: 'Persons with disability', description: 'Consent from a lawful guardian, verified as appointed under the applicable law (Rule 11).', icon: 'UserCheck', color: 'teal' },
    { title: 'Patients', description: 'Medical emergencies can rely on Section 7; ongoing care and follow-up need notice and consent.', icon: 'Stethoscope', color: 'red' },
    { title: 'Vendor and partner contacts', description: 'Business contacts are personal data; process them for the business relationship and keep them accurate.', icon: 'Briefcase', color: 'indigo' },
    { title: 'Visitors', description: 'Gate registers, Wi-Fi and CCTV collect personal data and need a notice.', icon: 'Building2', color: 'pink' },
    { title: 'Past customers', description: 'Consent given before the Act needs a fresh notice (Section 5(2)); data no longer needed must be erased.', icon: 'Clock', color: 'yellow' },
  ] }),
  cta(),
])

const actPage = page('act', 'The DPDP Act Explained', 'DPDP Act 2023 Explained: Scope, Obligations, Rights and Penalties', 'A plain-language guide to India\'s Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025: who it applies to, consent, legitimate uses, obligations, rights, the Board and penalties.', [
  hero({ eyebrow: 'DPDP Act overview', heading: 'The *Digital Personal Data Protection Act*, 2023 explained', sub: 'India\'s first comprehensive data protection law, passed in August 2023 and made operational by the DPDP Rules, 2025. Here is what it requires, in plain language.', secondary: { label: 'Get the checklist', url: '/dpdp/compliance-checklist' } }),
  text('Scope: who and what it covers', 'The Act applies to the processing of digital personal data in India, whether collected digitally or collected on paper and digitised later. It also applies to processing outside India if it is connected to offering goods or services to Data Principals in India (Section 3).\n\nIt does not apply to personal data processed by an individual for personal or domestic purposes, or to personal data made publicly available by the Data Principal or under a legal obligation.\n\nPersonal data means any data about an individual who is identifiable by or in relation to that data. Unlike GDPR, the Act does not create special categories of sensitive data: all personal data gets the same protection, with extra rules for children.'),
  cards({ eyebrow: 'Grounds for processing', heading: 'Consent, or a legitimate use', intro: 'Section 4 allows processing for a lawful purpose only with consent or for a legitimate use listed in Section 7.', style: 'icon', columns: '2', theme: 'light', items: [
    { title: 'Consent (Section 6)', description: 'Free, specific, informed, unconditional and unambiguous, by a clear affirmative action, limited to the data necessary for the purpose, and withdrawable as easily as it was given.', icon: 'CheckCircle2', color: 'green' },
    { title: 'Legitimate uses (Section 7)', description: 'A specified purpose for which the person voluntarily gave the data and did not object; State functions; legal obligations and court orders; medical emergencies; epidemics and disasters; and employment purposes.', icon: 'ShieldCheck', color: 'blue' },
  ] }),
  cards({ eyebrow: 'Obligations of a Data Fiduciary', heading: 'What every business must do', style: 'checklist', columns: '2', theme: 'white', items: [
    { title: 'Give a clear, itemised notice with every request for consent (Section 5, Rule 3)' },
    { title: 'Obtain valid consent or rely on a listed legitimate use (Sections 6 and 7)' },
    { title: 'Remain responsible for processing by your processors (Section 8(1))' },
    { title: 'Engage processors only under a valid contract (Section 8(2))' },
    { title: 'Keep data complete, accurate and consistent when it is used for decisions (Section 8(3))' },
    { title: 'Implement technical and organisational measures (Section 8(4))' },
    { title: 'Protect data with reasonable security safeguards (Section 8(5), Rule 6)' },
    { title: 'Notify the Board and affected people of every breach (Section 8(6), Rule 7)' },
    { title: 'Erase data when consent is withdrawn or the purpose is served (Section 8(7), Rule 8)' },
    { title: 'Publish the contact of a DPO or responsible person (Section 8(9))' },
    { title: 'Run an effective grievance redressal mechanism (Section 8(10))' },
    { title: 'Follow additional rules for children and persons with disability (Section 9)' },
  ] }),
  cards({ eyebrow: 'Rights of Data Principals', heading: 'What individuals can ask for', style: 'icon', columns: '4', theme: 'dark', items: [
    { title: 'Access', description: 'A summary of their data, the processing done and who it was shared with (Section 11).', icon: 'FileText', color: 'blue' },
    { title: 'Correction and erasure', description: 'Correct, complete, update or erase their data (Section 12).', icon: 'Sliders', color: 'purple' },
    { title: 'Grievance redressal', description: 'A readily available way to complain, answered within 90 days (Section 13, Rule 14).', icon: 'Headphones', color: 'teal' },
    { title: 'Nomination', description: 'Nominate someone to exercise their rights on death or incapacity (Section 14).', icon: 'UserCheck', color: 'green' },
  ] }),
  split({ eyebrow: 'Children', heading: 'Extra protection for anyone under 18', body: 'Before processing a child\'s personal data, a Data Fiduciary must obtain verifiable consent of a parent or lawful guardian (Section 9(1), Rule 10). It must not process data in a way likely to harm a child, and must not track, behaviourally monitor or target advertising at children (Section 9(3)). The Rules exempt some classes of Data Fiduciaries and purposes, such as healthcare and education providers, for limited activities.', points: ['Verifiable parental consent', 'No tracking or targeted advertising', 'Penalty up to ₹200 crore'], badgeTitle: 'Section 9', badgeText: 'Children are anyone under eighteen.', theme: 'light' }),
  split({ eyebrow: 'Significant Data Fiduciaries', heading: 'Higher duties for higher risk', body: 'The Government can notify any Data Fiduciary or class as a Significant Data Fiduciary, based on the volume and sensitivity of data, risk to Data Principals, impact on the sovereignty and integrity of India, electoral democracy, state security and public order (Section 10). An SDF must appoint a Data Protection Officer based in India, appoint an independent data auditor, and carry out a DPIA and audit every twelve months (Rule 13). The Rules also allow restrictions on transferring specified data outside India for SDFs.', points: ['DPO based in India', 'Independent data auditor', 'Annual DPIA and audit', 'Algorithmic due diligence'], badgeTitle: 'Section 10', badgeText: 'Penalty up to ₹150 crore for breach of SDF obligations.', theme: 'white', side: 'left' }),
  text('Cross-border transfers and exemptions', 'Personal data can be transferred outside India except to countries the Government restricts by notification (Section 16). Stricter sector rules, such as RBI data storage directions, continue to apply.\n\nSection 17 exempts certain processing from most obligations, including processing to enforce legal rights, by courts and tribunals, to prevent or investigate offences, in mergers and schemes approved by a court, and for research, archiving or statistics where the data is not used for decisions about a specific person.'),
  split({ eyebrow: 'Enforcement', heading: 'The Data Protection Board of India', body: 'The Board is an independent, digital-first body that inquires into breaches and complaints, directs remedies and imposes penalties (Sections 18 to 28). A Data Principal must first use the Data Fiduciary\'s grievance mechanism. Appeals against the Board\'s orders go to the Telecom Disputes Settlement and Appellate Tribunal within sixty days (Section 29). The Board can also accept a voluntary undertaking from a Data Fiduciary (Section 32).', points: ['Digital-first proceedings', 'Mediation and voluntary undertakings', 'Appeal to TDSAT within 60 days'], badgeTitle: 'Sections 18 to 32', badgeText: 'The Board was constituted when the Rules were notified.', theme: 'light' }),
  cards({ eyebrow: 'Penalties (Section 33 and the Schedule)', heading: 'Up to ₹250 crore per instance', style: 'problem', columns: '3', theme: 'white', items: PENALTIES.map(([title, description]) => ({ title, description })) }),
  cards({ eyebrow: 'Timeline', heading: 'Phased commencement of the Rules', style: 'icon', columns: '3', theme: 'light', items: PHASES.map((p, i) => ({ ...p, icon: ['FileText', 'UserCheck', 'Clock'][i], color: ['blue', 'purple', 'red'][i] })) }),
  faq([
    ['Does the DPDP Act apply to small businesses?', 'Yes. There is no size threshold. The Government can exempt certain classes of Data Fiduciaries, including startups, from some provisions by notification, but the core duties apply to all.'],
    ['Does it apply to data on paper?', 'Only once it is digitised. Personal data collected on paper and later entered into a system is covered from that point.'],
    ['Do individuals get compensation?', 'No. Penalties under the Act go to the Government. The Act does not provide compensation to affected individuals, unlike GDPR.'],
    ['Is this legal advice?', 'No. This page summarises the Act and Rules for general understanding. Consult your legal counsel for advice on your situation.'],
  ]),
  cta('Turn the Act into a plan', 'We map each obligation to your systems and teams, then help you implement it.'),
])

const vsGdpr = page('dpdp-vs-gdpr', 'DPDP vs GDPR', 'DPDP Act vs GDPR: Key Similarities and Differences', 'How India\'s DPDP Act, 2023 compares with the EU GDPR: scope, legal bases, sensitive data, children, breach notification, rights, cross-border transfers and penalties.', [
  hero({ eyebrow: 'Resources · Comparison', heading: '*DPDP* vs GDPR: what changes for India', sub: 'If you have a GDPR programme, much of it carries over. These are the differences that matter.', secondary: { label: 'The DPDP Act explained', url: '/dpdp/act' } }),
  cards({ eyebrow: 'Similar', heading: 'What carries over', style: 'checklist', columns: '2', theme: 'white', items: [
    { title: 'Notice and transparency before collection' }, { title: 'Consent that is specific, informed and withdrawable' }, { title: 'Purpose and storage limitation' },
    { title: 'Rights to access, correction and erasure' }, { title: 'Security safeguards and breach notification' }, { title: 'Controller and processor (Fiduciary and Processor) roles' },
  ] }),
  cards({ eyebrow: 'Different', heading: 'What is new or stricter in India', style: 'icon', columns: '2', theme: 'light', items: [
    { title: 'Grounds for processing', description: 'GDPR has six legal bases including legitimate interests. DPDP has consent and a closed list of legitimate uses, with no general legitimate interests ground.', icon: 'Sliders', color: 'blue' },
    { title: 'Sensitive data', description: 'GDPR has special categories. DPDP treats all personal data alike, with extra rules for children.', icon: 'Database', color: 'purple' },
    { title: 'Children', description: 'GDPR lets member states set an age between 13 and 16. DPDP covers everyone under 18, with verifiable parental consent and a ban on tracking and targeted ads.', icon: 'GraduationCap', color: 'orange' },
    { title: 'Breach notification', description: 'GDPR notifies the authority within 72 hours when there is a risk. DPDP requires notice of every breach to the Board and to each affected person, with no risk threshold.', icon: 'Zap', color: 'red' },
    { title: 'Scope', description: 'GDPR covers all personal data. DPDP covers digital personal data, and excludes data made public by the person.', icon: 'Globe', color: 'teal' },
    { title: 'Rights', description: 'DPDP adds the right to nominate, but has no data portability right and no right against automated decisions.', icon: 'Users', color: 'green' },
    { title: 'Consent Managers', description: 'A new class of registered intermediaries that let people manage consent across fiduciaries. GDPR has no equivalent.', icon: 'UserCheck', color: 'indigo' },
    { title: 'Penalties', description: 'GDPR fines reach 4% of global turnover and individuals can claim compensation. DPDP sets fixed caps up to ₹250 crore per instance, with no compensation to individuals.', icon: 'Banknote', color: 'pink' },
    { title: 'Cross-border transfers', description: 'GDPR needs adequacy or safeguards. DPDP allows transfers except to countries the Government restricts.', icon: 'Cloud', color: 'yellow' },
  ] }),
  split({ eyebrow: 'Practical advice', heading: 'Reusing your GDPR programme', body: 'Your data map, RoPA, vendor contracts and breach process are good starting points. Review every processing activity that relies on legitimate interests and find a DPDP ground for it, extend children\'s protections to everyone under 18, lower your breach reporting threshold to zero, and add Indian language notices and the right to nominate.', points: ['Replace legitimate interests with consent or a Section 7 use', 'Treat every breach as reportable', 'Add nomination to your rights workflow', 'Offer notices in Indian languages'], badgeTitle: 'Reuse, then adapt', badgeText: 'Most GDPR artefacts need changes, not replacement.', theme: 'white' }),
  cta(),
])

const checklist = page('compliance-checklist', 'DPDP Compliance Checklist', 'DPDP Compliance Checklist: 20 Steps Before Enforcement', 'A practical 20-step checklist to prepare for the DPDP Act, 2023 and DPDP Rules, 2025: governance, data mapping, notices, consent, rights, security, breach, vendors and children.', [
  hero({ eyebrow: 'Resources · Checklist', heading: 'The *DPDP compliance* checklist', sub: 'Twenty steps, in the order most organisations take them, to be ready before the full obligations apply in May 2027.', secondary: { label: 'Take the readiness check', url: '/dpdp/sdf-assessment' } }),
  cards({ eyebrow: 'Govern', heading: '1 to 4: Set up the programme', style: 'checklist', columns: '2', theme: 'white', items: [{ title: '1. Appoint an owner and, if needed, a Data Protection Officer' }, { title: '2. Form a cross-functional privacy working group' }, { title: '3. Run a gap assessment against the Act and Rules' }, { title: '4. Agree a roadmap and budget with leadership' }] }),
  cards({ eyebrow: 'Map your data', heading: '5 to 8: Map and document', style: 'checklist', columns: '2', theme: 'light', items: [{ title: '5. Inventory personal data across systems, files and vendors' }, { title: '6. Record each processing activity and its purpose' }, { title: '7. Choose a ground for each: consent or a Section 7 use' }, { title: '8. Set a retention period for each data category' }] }),
  cards({ eyebrow: 'Notice and consent', heading: '9 to 12: Fix how you collect', style: 'checklist', columns: '2', theme: 'white', items: [{ title: '9. Write standalone, itemised notices in the languages you need' }, { title: '10. Unbundle consent by purpose on every channel' }, { title: '11. Make withdrawal as easy as giving consent' }, { title: '12. Send notices to customers whose consent predates the Act' }] }),
  cards({ eyebrow: 'Rights and grievances', heading: '13 to 15: Serve Data Principals', style: 'checklist', columns: '2', theme: 'light', items: [{ title: '13. Publish how to exercise rights and contact your DPO' }, { title: '14. Build a request workflow with identity verification' }, { title: '15. Set up grievance redressal with a 90-day limit' }] }),
  cards({ eyebrow: 'Security and vendors', heading: '16 to 18: Protect the data', style: 'checklist', columns: '2', theme: 'white', items: [{ title: '16. Apply reasonable security safeguards and keep logs for a year' }, { title: '17. Prepare a breach playbook with 72-hour Board reporting' }, { title: '18. Assess vendors and add DPDP clauses to contracts' }] }),
  cards({ eyebrow: 'Special cases', heading: '19 and 20: Children and continuous compliance', style: 'checklist', columns: '2', theme: 'light', items: [{ title: '19. Add age checks, parental consent and no tracking for children' }, { title: '20. Train staff and review the programme every year' }] }),
  cta('Want help working through the list?', 'TruSync runs the assessment with you and deploys Sentinel DPDP to close the gaps.'),
])

const GLOSSARY: [string, string][] = [
  ['Data Principal', 'The individual to whom the personal data relates. For a child it includes the parent or lawful guardian, and for a person with disability, their lawful guardian (Section 2(j)).'],
  ['Data Fiduciary', 'Any person who alone or with others determines the purpose and means of processing personal data (Section 2(i)).'],
  ['Data Processor', 'Any person who processes personal data on behalf of a Data Fiduciary (Section 2(k)).'],
  ['Significant Data Fiduciary (SDF)', 'A Data Fiduciary or class notified by the Government under Section 10, with additional obligations.'],
  ['Consent Manager', 'A person registered with the Board who acts as a single point of contact for a Data Principal to give, manage, review and withdraw consent (Section 2(g)).'],
  ['Personal data', 'Any data about an individual who is identifiable by or in relation to that data (Section 2(t)).'],
  ['Digital personal data', 'Personal data in digital form (Section 2(n)).'],
  ['Processing', 'A wholly or partly automated operation on digital personal data, including collection, recording, storage, use, sharing, disclosure, erasure and destruction (Section 2(x)).'],
  ['Personal data breach', 'Any unauthorised processing, or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access, that compromises the confidentiality, integrity or availability of personal data (Section 2(u)).'],
  ['Consent', 'A free, specific, informed, unconditional and unambiguous indication of the Data Principal\'s wishes, by a clear affirmative action (Section 6(1)).'],
  ['Notice', 'Information given with or before a request for consent, describing the data, the purpose and how to exercise rights and complain (Section 5).'],
  ['Legitimate use', 'A purpose listed in Section 7 for which personal data may be processed without consent.'],
  ['Child', 'An individual who has not completed eighteen years of age (Section 2(f)).'],
  ['Verifiable parental consent', 'Consent of a parent or lawful guardian, verified as coming from an identifiable adult (Rule 10).'],
  ['Data Protection Officer (DPO)', 'An individual appointed by a Significant Data Fiduciary, based in India and responsible to its board (Section 10(2)).'],
  ['Data Protection Impact Assessment (DPIA)', 'A process describing the rights of Data Principals and the purpose of processing, and assessing and managing the risks to them (Section 10(2)(c)).'],
  ['Data Protection Board of India', 'The independent body that inquires into breaches and complaints and imposes penalties (Section 18).'],
  ['Nomination', 'The right of a Data Principal to nominate another person to exercise their rights on death or incapacity (Section 14).'],
  ['Voluntary undertaking', 'A commitment by a Data Fiduciary, accepted by the Board, to take or refrain from an action, which can bar proceedings on that matter (Section 32).'],
  ['RoPA', 'Record of Processing Activities: a register of what personal data is processed, why, on what ground and with whom. Not a defined term in the Act, but the practical basis for many obligations.'],
]

const glossary = page('glossary', 'DPDP Glossary', 'DPDP Act Glossary: Key Terms Explained', 'Plain-language definitions of the key terms in India\'s DPDP Act, 2023 and DPDP Rules, 2025, with section references.', [
  hero({ eyebrow: 'Resources · Glossary', heading: 'DPDP *glossary*', sub: 'The terms you will meet in the Act, the Rules and compliance conversations, defined in plain language with their source.', secondary: { label: 'The DPDP Act explained', url: '/dpdp/act' } }),
  faq(GLOSSARY, 'Key terms'),
  cta(),
])

const faqPage = page('faq', 'DPDP FAQ', `DPDP Act FAQ for Businesses | ${PRODUCT}`, 'Answers to the questions Indian businesses ask most about the DPDP Act, 2023: consent, marketing, rights, breaches, vendors, children, timelines and penalties.', [
  hero({ eyebrow: 'Resources · FAQ', heading: 'DPDP questions, *answered*', sub: 'Practical answers to the questions we hear most from marketing, legal, IT and leadership teams.', secondary: { label: 'The DPDP Act explained', url: '/dpdp/act' } }),
  faq([
    ['Does DPDP apply only to paying customers?', 'No. It covers every individual whose digital personal data you process: customers, leads, website visitors, employees, candidates, vendor contacts and more.'],
    ['When a user fills a form, can we use the data for anything?', 'No. You may use it for the purpose they gave it for. Using it for something else, such as marketing, needs a notice and separate consent.'],
    ['Can we keep using customer data collected over many years?', 'You may continue to process data collected with consent before the Act, but you must send those customers a notice as soon as reasonably practicable, and stop if they withdraw (Section 5(2)).'],
    ['If a customer withdraws marketing consent, can we still send transactional messages?', 'Yes. Order, billing and service messages needed for what the customer asked for rely on that request, not on marketing consent.'],
    ['Is a privacy policy on our website enough?', 'No. A privacy policy is useful, but the Act requires a specific notice with each request for consent, itemising the data and purposes.'],
  ], 'Consent and notices'),
  faq([
    ['If a customer asks what data we hold, what must we provide?', 'A summary of their personal data and the processing done on it, the identities of other Data Fiduciaries and Processors it was shared with and what was shared, and other information the Rules specify (Section 11).'],
    ['Can we retain data for analytics after an erasure request?', 'No, unless retention is required by law. Internal analytics is not a legal requirement. Anonymised, aggregate data that no longer identifies anyone is outside the Act.'],
    ['How fast must we answer complaints?', 'Within the period you publish, which may not exceed 90 days (Rule 14). The customer can go to the Board only after using your mechanism.'],
  ], 'Rights and grievances'),
  faq([
    ['If we have a breach, what exactly must we do?', 'Contain it, then inform each affected Data Principal without delay, and inform the Board without delay with a detailed report within 72 hours (Rule 7).'],
    ['Are we responsible for a breach at our vendor?', 'Yes. The Data Fiduciary is responsible for processing done on its behalf (Section 8(1)). Contracts should require vendors to report breaches immediately.'],
    ['Can we transfer data to vendors outside India?', 'Yes, unless the Government restricts transfers to that country (Section 16). Sector rules, such as RBI\'s, may be stricter.'],
  ], 'Security, breaches and vendors'),
  faq([
    ['Do all companies need a DPO?', 'Only Significant Data Fiduciaries must appoint a Data Protection Officer. Every other Data Fiduciary must publish the contact of a person who can answer questions about its processing.'],
    ['Can we manage DPDP manually without a platform?', 'A small business with few systems can. Once data flows through several channels and tools, keeping consent in sync and proving it manually becomes impractical.'],
    ['What is the deadline?', 'Most obligations apply from May 2027. Consent Manager provisions applied from November 2026.'],
  ], 'Getting started'),
  cta(),
])

const rules = page('rules-2025', 'DPDP Rules 2025', 'DPDP Rules 2025: Key Obligations and Timelines', 'What the Digital Personal Data Protection Rules, 2025 add to the DPDP Act: notices, consent managers, security, breach reporting, retention, children, SDFs and rights, with the phased timeline.', [
  hero({ eyebrow: 'Resources · DPDP Rules, 2025', heading: 'The *DPDP Rules, 2025*: what they add', sub: 'Notified in November 2025, the Rules turn the Act\'s principles into concrete procedures and deadlines.', secondary: { label: 'The DPDP Act explained', url: '/dpdp/act' } }),
  cards({ heading: 'Key obligations in the Rules', style: 'icon', columns: '2', theme: 'white', items: [
    { title: 'Rule 3: Notice', description: 'Standalone, clear and plain notice with an itemised list of data and purposes, and links to withdraw, exercise rights and complain.', icon: 'FileText', color: 'blue' },
    { title: 'Rule 4: Consent Managers', description: 'Registration with the Board, conditions on ownership and net worth, and obligations to act for Data Principals.', icon: 'UserCheck', color: 'purple' },
    { title: 'Rule 6: Security safeguards', description: 'Encryption, masking or tokenisation, access control, logging and monitoring, backups, logs kept for one year, and safeguards in processor contracts.', icon: 'Lock', color: 'red' },
    { title: 'Rule 7: Breach intimation', description: 'Inform affected people without delay; inform the Board without delay and send a detailed report within 72 hours.', icon: 'Zap', color: 'orange' },
    { title: 'Rule 8: Retention and erasure', description: 'Time limits for large e-commerce, gaming and social media platforms, 48 hours\' notice before erasure, and logs retained for one year.', icon: 'Clock', color: 'teal' },
    { title: 'Rules 10 and 11: Children and disability', description: 'Verifiable consent of parents and lawful guardians, with defined exemptions.', icon: 'GraduationCap', color: 'green' },
    { title: 'Rule 13: Significant Data Fiduciaries', description: 'Annual DPIA and audit, algorithmic due diligence, and possible localisation of specified data.', icon: 'ShieldCheck', color: 'indigo' },
    { title: 'Rule 14: Rights and grievances', description: 'Publish how to exercise rights, and answer grievances within no more than 90 days.', icon: 'Headphones', color: 'pink' },
  ] }),
  cards({ eyebrow: 'Timeline', heading: 'Phased commencement', style: 'icon', columns: '3', theme: 'light', items: PHASES.map((p, i) => ({ ...p, icon: ['FileText', 'UserCheck', 'Clock'][i], color: ['blue', 'purple', 'red'][i] })) }),
  cta(),
])

const bookDemo = page('book-demo', 'Book a Demo', `Book a ${PRODUCT} Demo | TruSync`, `See ${PRODUCT} in action: consent capture, notices, rights requests and audit trail for DPDP Act compliance. Book a demo with TruSync.`, [
  hero({ variant: 'split', eyebrow: 'Book a demo', heading: 'See *Sentinel DPDP* in action', sub: 'A 30-minute walkthrough tailored to your channels and systems. Choose "Sentinel-DPDP" as the service in the form below.', primary: { label: 'Go to the form', url: '#contact' }, secondary: { label: 'Explore the platform', url: '/dpdp/platform' } }),
  cards({ heading: 'What we will cover', style: 'checklist', columns: '2', theme: 'white', items: [{ title: 'How consent is captured and proved on your channels' }, { title: 'Notices in English and Indian languages' }, { title: 'Rights requests and grievance workflows' }, { title: 'Integration with ERPNext, CRM and marketing tools' }, { title: 'Breach response and vendor governance' }, { title: 'A rollout plan for your timeline' }] }),
  { blockType: 'contactForm', heading: 'Request your demo' },
])

export const dpdpSeeds = (): DpdpSeed[] => [
  productHome, platformHub, ...MODULES.map(modulePage), integrations, services,
  industriesHub, ...INDUSTRIES.map(industryPage), byRole, byPrincipal,
  actPage, rules, vsGdpr, checklist, glossary, faqPage, bookDemo,
]
