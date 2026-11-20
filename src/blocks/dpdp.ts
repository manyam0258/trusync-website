import type { Block, Field } from 'payload'

import { URL_HELP, validateOptionalUrl } from '../lib/safe-url'

/**
 * Section library for the Sentinel DPDP product pages (/dpdp/...).
 * Every visible word is a field, so editors and the CMS tools can change all of it. Mock screens are drawn
 * in code from these fields: no images. Rendered by src/components/dpdp/sections.
 */

export const DP_ICONS = [
  'Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag',
  'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale',
  'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud',
  'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House',
  'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings',
  'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass',
  'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi',
  'Languages', 'PenLine',
] as const
const iconOptions = DP_ICONS.map((value) => ({ label: value, value }))

const TONES = ['teal', 'sky', 'violet', 'rose', 'amber', 'emerald', 'indigo'] as const
const STATUSES = ['granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info'] as const

// ---------- shared fields ----------
const t = (name: string, extra: Partial<Field> = {}): Field => ({ name, type: 'text', ...extra }) as Field
const ta = (name: string, extra: Partial<Field> = {}): Field => ({ name, type: 'textarea', ...extra }) as Field
const icon = (name = 'icon'): Field => ({ name, type: 'select', options: iconOptions })
const tone: Field = { name: 'tone', type: 'select', options: TONES.map((v) => ({ label: v, value: v })), admin: { description: 'Accent colour of the icon.' } }
const status = (name = 'status'): Field => ({ name, type: 'select', options: STATUSES.map((v) => ({ label: v, value: v })) })
const url = (name = 'url'): Field => ({ name, type: 'text', validate: validateOptionalUrl, admin: { description: URL_HELP } })
const link = (name: string, label: string): Field => ({ name, type: 'group', label, fields: [t('label'), url()] })
const head: Field[] = [
  t('eyebrow', { admin: { description: 'Small uppercase label above the heading.' } }),
  t('heading', { admin: { description: 'Words between *asterisks* get the brand gradient.' } }),
  ta('intro'),
]
const list = (name: string, fields: Field[], extra: Record<string, unknown> = {}): Field => ({ name, type: 'array', fields, ...extra }) as Field
const labels = (name: string) => list(name, [t('label', { required: true })])
const theme: Field = {
  name: 'theme', type: 'select', defaultValue: 'white',
  options: [{ label: 'White', value: 'white' }, { label: 'Soft grey', value: 'soft' }, { label: 'Dark navy', value: 'dark' }],
}

// ---------- blocks ----------
export const DpHero: Block = {
  slug: 'dpHero',
  labels: { singular: 'DPDP hero', plural: 'DPDP heroes' },
  fields: [
    { name: 'layout', type: 'select', defaultValue: 'split', options: [{ label: 'Text left, mock screen right', value: 'split' }, { label: 'Centred', value: 'centered' }] },
    list('breadcrumb', [t('label', { required: true }), url()], { admin: { description: 'Shown above the hero. Leave empty for none.' } }),
    t('eyebrow'),
    t('heading', { required: true, admin: { description: 'Words between *asterisks* get the brand gradient.' } }),
    ta('subheading'),
    ta('note', { admin: { description: 'Optional second paragraph in smaller text.' } }),
    link('primary', 'Main button'),
    link('secondary', 'Second button'),
    labels('chips'),
    {
      name: 'visual', type: 'select', defaultValue: 'toggles',
      options: [
        { label: 'Preference toggles card', value: 'toggles' },
        { label: 'Consent record card', value: 'record' },
        { label: 'Dashboard card', value: 'dashboard' },
        { label: 'No mock screen', value: 'none' },
      ],
    },
    t('visualTitle'),
    t('visualSubtitle'),
    list('visualRows', [t('label', { required: true }), t('meta'), status()]),
    t('statValue', { admin: { description: 'Floating figure on the mock screen, for example ₹250 Cr.' } }),
    t('statLabel'),
    t('toast', { admin: { description: 'Small floating confirmation, for example "Consent recorded".' } }),
  ],
}

export const DpCards: Block = {
  slug: 'dpCards',
  labels: { singular: 'DPDP cards', plural: 'DPDP card grids' },
  fields: [
    ...head,
    theme,
    {
      name: 'variant', type: 'select', defaultValue: 'numbered',
      options: [
        { label: 'Numbered cards with icon', value: 'numbered' },
        { label: 'Section-reference cards (tag pill)', value: 'tagged' },
        { label: 'Cards with ticked points', value: 'points' },
        { label: 'Compact icon rows', value: 'compact' },
      ],
    },
    { name: 'columns', type: 'select', defaultValue: '4', options: ['2', '3', '4'].map((v) => ({ label: `${v} per row`, value: v })) },
    list('items', [icon(), tone, t('tag'), t('title', { required: true }), ta('text'), labels('points'), url()]),
    ta('note'),
  ],
}

export const DpTimeline: Block = {
  slug: 'dpTimeline',
  labels: { singular: 'DPDP timeline', plural: 'DPDP timelines' },
  fields: [...head, list('items', [{ name: 'date', type: 'date', required: true }, t('label', { admin: { description: 'Date as shown, for example Nov 2025.' } }), t('title', { required: true })]), { name: 'showToday', type: 'checkbox', defaultValue: true }],
}

export const DpRoles: Block = {
  slug: 'dpRoles',
  labels: { singular: 'DPDP roles', plural: 'DPDP roles' },
  fields: [
    ...head, t('primaryLabel'), t('primaryTitle'), ta('primaryText'), t('secondaryLabel'), t('secondaryTitle'), ta('secondaryText'),
    t('chipsTitle'), labels('chips'), ta('note'),
  ],
}

export const DpFlow: Block = {
  slug: 'dpFlow',
  labels: { singular: 'DPDP data flow tabs', plural: 'DPDP data flow tabs' },
  fields: [...head, list('tabs', [t('label', { required: true }), icon(), list('steps', [icon(), t('label', { required: true }), t('value', { required: true })])]), ta('note')],
}

export const DpCompare: Block = {
  slug: 'dpCompare',
  labels: { singular: 'DPDP challenges and answers', plural: 'DPDP challenges and answers' },
  fields: [...head, t('leftLabel'), t('rightLabel'), list('rows', [t('problem', { required: true }), ta('problemText'), t('solution', { required: true }), ta('solutionText'), url()]), ta('note')],
}

export const DpStepper: Block = {
  slug: 'dpStepper',
  labels: { singular: 'DPDP stage stepper', plural: 'DPDP stage steppers' },
  fields: [...head, list('stages', [t('name', { required: true }), ta('text'), t('output')])],
}

export const DpUseCases: Block = {
  slug: 'dpUseCases',
  labels: { singular: 'DPDP use cases', plural: 'DPDP use cases' },
  fields: [...head, list('items', [icon(), t('title', { required: true }), ta('scenario'), ta('approach'), t('panelTitle'), list('panelRows', [t('label', { required: true }), status()])])],
}

export const DpStack: Block = {
  slug: 'dpStack',
  labels: { singular: 'DPDP system stack', plural: 'DPDP system stacks' },
  fields: [...head, t('leftLabel'), labels('left'), t('coreTitle'), t('coreSubtitle'), t('coreLabel'), labels('core'), t('rightLabel'), labels('right')],
}

export const DpChecklist: Block = {
  slug: 'dpChecklist',
  labels: { singular: 'DPDP readiness checklist', plural: 'DPDP readiness checklists' },
  fields: [...head, list('groups', [icon(), t('title', { required: true }), list('items', [t('text', { required: true })])])],
}

export const DpFaq: Block = {
  slug: 'dpFaq',
  labels: { singular: 'DPDP FAQ', plural: 'DPDP FAQs' },
  fields: [...head, list('items', [t('question', { required: true }), ta('answer', { required: true })], { minRows: 1 }), link('link', 'Link under the questions')],
}

export const DpCta: Block = {
  slug: 'dpCta',
  labels: { singular: 'DPDP call to action', plural: 'DPDP calls to action' },
  fields: [t('heading', { required: true }), ta('text'), link('primary', 'Main button'), link('secondary', 'Second button')],
}

export const DpShowcase: Block = {
  slug: 'dpShowcase',
  labels: { singular: 'DPDP product tabs', plural: 'DPDP product tabs' },
  fields: [
    ...head,
    list('tabs', [
      icon(), t('title', { required: true }), t('subtitle'), t('panelHeading'), ta('text'), labels('chips'),
      { name: 'visual', type: 'select', defaultValue: 'bars', options: [{ label: 'Bar chart', value: 'bars' }, { label: 'Record list', value: 'records' }, { label: 'Progress meters', value: 'meters' }] },
      t('visualTitle'), list('data', [t('label', { required: true }), { name: 'value', type: 'number' }, status()]), link('link', 'Link'),
    ]),
  ],
}

export const DpRecords: Block = {
  slug: 'dpRecords',
  labels: { singular: 'DPDP capabilities with records table', plural: 'DPDP capabilities with records table' },
  fields: [
    ...head,
    list('capabilities', [icon(), t('title', { required: true }), ta('text')]),
    t('tableTitle'), t('tableSubtitle'), t('tableButton'),
    list('rows', [t('ref', { required: true }), t('purpose', { required: true }), t('detail'), t('channel'), status(), t('source'), t('version'), t('time')]),
  ],
}

export const DpHub: Block = {
  slug: 'dpHub',
  labels: { singular: 'DPDP hub diagram', plural: 'DPDP hub diagrams' },
  fields: [...head, t('topLabel'), list('top', [icon(), t('label', { required: true })]), t('coreName'), t('coreStatus'), t('bottomLabel'), list('bottom', [icon(), t('label', { required: true })]), list('points', [icon(), t('title', { required: true }), ta('text')])],
}

export const DpWorkflow: Block = {
  slug: 'dpWorkflow',
  labels: { singular: 'DPDP workflow steps', plural: 'DPDP workflow steps' },
  fields: [...head, list('steps', [icon(), t('title', { required: true }), ta('text'), t('code', { admin: { description: 'Short monospace detail, for example NTC-001 · v1.3.' } })])],
}

export const DpToggle: Block = {
  slug: 'dpToggle',
  labels: { singular: 'DPDP before and after', plural: 'DPDP before and after' },
  fields: [...head, t('offLabel'), t('onLabel'), list('without', [t('title', { required: true }), ta('text')]), list('with', [t('title', { required: true }), ta('text')])],
}

export const DpResources: Block = {
  slug: 'dpResources',
  labels: { singular: 'DPDP resource cards', plural: 'DPDP resource cards' },
  fields: [
    ...head,
    list('items', [t('kind', { admin: { description: 'For example Guide or Checklist.' } }), t('title', { required: true }), ta('text'), t('meta'), url(), { name: 'tone', type: 'select', options: TONES.map((v) => ({ label: v, value: v })) }]),
    link('link', 'Link under the cards'),
  ],
}

export const dpdpBlocks: Block[] = [
  DpHero, DpCards, DpTimeline, DpRoles, DpFlow, DpCompare, DpStepper, DpUseCases, DpStack, DpChecklist, DpFaq, DpCta,
  DpShowcase, DpRecords, DpHub, DpWorkflow, DpToggle, DpResources,
]
export const DPDP_BLOCK_SLUGS = dpdpBlocks.map((b) => b.slug)
