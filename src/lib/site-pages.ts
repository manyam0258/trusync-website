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
    ],
  },
  {
    group: 'ERPNext modules and services',
    pages: [
      { path: '/services/accounting-module', label: 'Accounting module' },
      { path: '/services/crm-module', label: 'CRM module' },
      { path: '/services/hr-payroll-module', label: 'HR and payroll module' },
      { path: '/services/order-management-module', label: 'Order management module' },
    ],
  },
  {
    group: 'Innovation',
    pages: [
      { path: '/innovation/ai-automation', label: 'AI automation' },
      { path: '/innovation/dpdp-compliance', label: 'DPDP compliance' },
    ],
  },
  {
    group: 'Industries',
    pages: [
      { path: '/industries/education', label: 'Education' },
      { path: '/industries/manufacturing', label: 'Manufacturing' },
    ],
  },
]

export const CODE_ROUTES = ['/', ...CODE_PAGE_GROUPS.flatMap((g) => g.pages.map((p) => p.path))]
