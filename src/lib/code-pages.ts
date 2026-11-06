/**
 * Pages whose layout is hand-built in code (diagrams, mock screens, animations) and kept exactly as designed.
 * Their wording, links and sections are managed in the admin through the "Built-in page design" section.
 * Add an entry here, then run scripts/codemod-editable.mts and scripts/seed-code-pages.mts for the new page.
 */
export const CODE_PAGES = [
  { key: 'accounting-module', label: 'Accounting and asset management', path: 'services/accounting-module' },
  { key: 'hr-payroll-module', label: 'HR and payroll module', path: 'services/hr-payroll-module' },
  { key: 'order-management-module', label: 'Order management module', path: 'services/order-management-module' },
  { key: 'ai-automation', label: 'AI automation', path: 'innovation/ai-automation' },
  { key: 'dpdp-compliance', label: 'DPDP compliance', path: 'innovation/dpdp-compliance' },
  { key: 'frappe-framework', label: 'Frappe Framework', path: 'solutions/frappe-framework' },
] as const
