/**
 * Pages that still live in code, grouped for sitemap.xml and llms.txt.
 * Remove an entry once the page moves to the CMS: CMS pages are listed automatically.
 * Placeholder pages with no real content yet are left out on purpose.
 */
export const CODE_PAGE_GROUPS: { group: string; pages: { path: string; label: string }[] }[] = [
  {
    group: 'Solutions',
    pages: [
      { path: '/solutions/frappe-framework', label: 'Frappe Framework' },
      { path: '/solutions/frappe-insights', label: 'Frappe Insights' },
      { path: '/solutions/frappe-lms', label: 'Frappe LMS' },
    ],
  },
  {
    group: 'ERPNext modules and services',
    pages: [
      { path: '/services/accounting-module', label: 'Accounting module' },
      { path: '/services/asset-management-module', label: 'Asset management module' },
      { path: '/services/crm-module', label: 'CRM module' },
      { path: '/services/helpdesk-module', label: 'Helpdesk module' },
      { path: '/services/hr-payroll-module', label: 'HR and payroll module' },
      { path: '/services/order-management-module', label: 'Order management module' },
      { path: '/services/website-module', label: 'Website module' },
    ],
  },
  {
    group: 'Innovation',
    pages: [
      { path: '/innovation/ai-automation', label: 'AI automation' },
      { path: '/innovation/dpdp-compliance', label: 'DPDP compliance' },
      { path: '/innovation/open-source-integrations', label: 'Open source integrations' },
    ],
  },
  {
    group: 'Industries',
    pages: [
      { path: '/industries/construction', label: 'Construction' },
      { path: '/industries/crowdfunding', label: 'Crowdfunding' },
      { path: '/industries/dairy', label: 'Dairy' },
      { path: '/industries/distribution', label: 'Distribution' },
      { path: '/industries/education', label: 'Education' },
      { path: '/industries/epc', label: 'EPC and engineering' },
      { path: '/industries/hr-payroll', label: 'HR and payroll' },
      { path: '/industries/manufacturing', label: 'Manufacturing' },
      { path: '/industries/nbfc', label: 'NBFC' },
      { path: '/industries/textile', label: 'Textile' },
    ],
  },
]

export const CODE_ROUTES = ['/', ...CODE_PAGE_GROUPS.flatMap((g) => g.pages.map((p) => p.path))]
