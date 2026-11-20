/**
 * The "Sentinel DPDP" mega menu in the header. Each link points to a CMS page seeded from
 * scripts/seed-dpdp-pages.mts (or, for the readiness check, a page built in code).
 * Keep paths in step with that file when pages are added or renamed.
 */
export type MenuLink = { name: string; href: string }
export type MenuColumn = { title: string; href: string; links: MenuLink[] }

export const DPDP_HOME = { name: 'Sentinel DPDP', href: '/dpdp' }

export const DPDP_MENU: MenuColumn[] = [
  {
    title: 'Platform',
    href: '/dpdp/platform',
    links: [
      { name: 'Data Discovery & Mapping', href: '/dpdp/platform/data-discovery' },
      { name: 'Gap Assessment', href: '/dpdp/platform/gap-assessment' },
      { name: 'Records of Processing (RoPA)', href: '/dpdp/platform/ropa' },
      { name: 'Notice Creation & Management', href: '/dpdp/platform/notice-management' },
      { name: 'Consent & Preference Management', href: '/dpdp/platform/consent-management' },
      { name: 'Cookie Consent Management', href: '/dpdp/platform/cookie-consent' },
      { name: 'Data Principal Rights', href: '/dpdp/platform/data-principal-rights' },
      { name: 'Consent Audit Trail', href: '/dpdp/platform/consent-audit-trail' },
      { name: 'Impact Assessment (DPIA)', href: '/dpdp/platform/dpia' },
      { name: 'Breach Management', href: '/dpdp/platform/breach-management' },
      { name: 'Third-Party Risk Management', href: '/dpdp/platform/third-party-risk' },
      { name: 'Integrations', href: '/dpdp/integrations' },
    ],
  },
  {
    title: 'Solutions',
    href: '/dpdp/industries',
    links: [
      { name: 'Retail', href: '/dpdp/industries/retail' },
      { name: 'E-commerce', href: '/dpdp/industries/ecommerce' },
      { name: 'Food & Beverage', href: '/dpdp/industries/food-and-beverage' },
      { name: 'Real Estate', href: '/dpdp/industries/real-estate' },
      { name: 'Manufacturing', href: '/dpdp/industries/manufacturing' },
      { name: 'Insurance', href: '/dpdp/industries/insurance' },
      { name: 'Ed-Tech', href: '/dpdp/industries/edtech' },
      { name: 'BFSI & NBFC', href: '/dpdp/industries/bfsi-nbfc' },
      { name: 'Travel & Hospitality', href: '/dpdp/industries/travel-hospitality' },
      { name: 'Healthcare', href: '/dpdp/industries/healthcare' },
      { name: 'DPDP by your role', href: '/dpdp/by-role' },
      { name: 'DPDP by your Data Principals', href: '/dpdp/by-data-principal' },
      { name: 'Implementation services', href: '/dpdp/services' },
    ],
  },
  {
    title: 'Resources',
    href: '/dpdp/act',
    links: [
      { name: 'The DPDP Act explained', href: '/dpdp/act' },
      { name: 'DPDP Rules, 2025', href: '/dpdp/rules-2025' },
      { name: 'DPDP vs GDPR', href: '/dpdp/dpdp-vs-gdpr' },
      { name: 'Compliance checklist', href: '/dpdp/compliance-checklist' },
      { name: 'SDF readiness check', href: '/dpdp/sdf-assessment' },
      { name: 'Glossary', href: '/dpdp/glossary' },
      { name: 'FAQ', href: '/dpdp/faq' },
      { name: 'Book a demo', href: '/dpdp/book-demo' },
    ],
  },
]
