/**
 * Pages whose layout is hand-built in code (diagrams, mock screens, animations) and kept exactly as designed.
 * Their wording, links and sections are managed in the admin through the "Built-in page design" section.
 * title and description are the search listing used only if the page is missing from the database.
 * Add an entry here, then run scripts/codemod-editable.mts and scripts/seed-code-pages.mts for the new page.
 */
export const CODE_PAGES = [
  {
    key: 'accounting-module',
    label: 'Accounting and asset management',
    path: 'services/accounting-module',
    title: "ERPNext Accounting & Asset Management Software in Hyderabad | TruSync",
    description: "One system for financial accounting and fixed assets: chart of accounts, multi-currency, budgeting, tax compliance and asset lifecycle. ERPNext implemented by TruSync in Hyderabad.",
  },
  {
    key: 'hr-payroll-module',
    label: 'HR and payroll module',
    path: 'services/hr-payroll-module',
    title: "ERPNext HR & Payroll Implementation Services in Hyderabad | TruSync",
    description: "Automate biometric attendance, salary structures, tax calculations, and compliance with ERPNext HRMS. Local support in Hyderabad, Telangana.",
  },
  {
    key: 'order-management-module',
    label: 'Order management module',
    path: 'services/order-management-module',
    title: "ERPNext Inventory & Order Management Software in Hyderabad | TruSync",
    description: "Manage stock, warehouses and items with ERPNext, integrated with procurement, accounting and sales. Implemented and customised by TruSync in Hyderabad.",
  },
  {
    key: 'ai-automation',
    label: 'AI automation',
    path: 'innovation/ai-automation',
    title: "Generative AI & LLM Solutions | TruSync Innovations",
    description: "Turn AI possibilities into real business results with practical, secure and scalable Generative AI and Large Language Model solutions.",
  },
  {
    key: 'dpdp-compliance',
    label: 'DPDP compliance',
    path: 'innovation/dpdp-compliance',
    title: "DPDP Compliance Solutions | Digital Personal Data Protection Act, 2023",
    description: "Comprehensive DPDP Act, 2023 compliance solutions. From assessment to implementation, we help organisations build operational privacy frameworks.",
  },
  {
    key: 'frappe-framework',
    label: 'Frappe Framework',
    path: 'solutions/frappe-framework',
    title: "Frappe Framework Custom Development in Hyderabad | TruSync",
    description: "Enterprise app development using Frappe Framework. Certified developers in Hyderabad building robust custom modules, APIs, and portals.",
  },
] as const
