import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

import type { CODE_PAGES } from '@/lib/code-pages'

type Key = (typeof CODE_PAGES)[number]['key']

/** The hand-built page designs. Each one is loaded only when a page uses it. */
export const CODE_PAGE_COMPONENTS: Partial<Record<Key, ComponentType>> = {
  'accounting-module': dynamic(() => import('./accounting-module')),
  'hr-payroll-module': dynamic(() => import('./hr-payroll-module')),
  'order-management-module': dynamic(() => import('./order-management-module')),
  'ai-automation': dynamic(() => import('./ai-automation')),
  'dpdp-compliance': dynamic(() => import('./dpdp-compliance')),
  'frappe-framework': dynamic(() => import('./frappe-framework')),
}
