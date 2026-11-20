import type { ComponentType } from 'react'

import { DpChecklistSection, DpFaqSection, DpFlowSection, DpShowcaseSection, DpStepperSection, DpToggleSection, DpUseCasesSection } from './interactive'
import {
  DpCardsSection, DpCompareSection, DpCtaSection, DpHeroSection, DpHubSection, DpRecordsSection, DpResourcesSection, DpRolesSection,
  DpStackSection, DpTimelineSection, DpWorkflowSection,
} from './static'

/** Renders one Sentinel DPDP section (block types from src/blocks/dpdp.ts). Returns null for any other block. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SECTIONS: Record<string, ComponentType<{ block: any; first?: boolean }>> = {
  dpHero: DpHeroSection,
  dpCards: DpCardsSection,
  dpTimeline: DpTimelineSection,
  dpRoles: DpRolesSection,
  dpFlow: DpFlowSection,
  dpCompare: DpCompareSection,
  dpStepper: DpStepperSection,
  dpUseCases: DpUseCasesSection,
  dpStack: DpStackSection,
  dpChecklist: DpChecklistSection,
  dpFaq: DpFaqSection,
  dpCta: DpCtaSection,
  dpShowcase: DpShowcaseSection,
  dpRecords: DpRecordsSection,
  dpHub: DpHubSection,
  dpWorkflow: DpWorkflowSection,
  dpToggle: DpToggleSection,
  dpResources: DpResourcesSection,
}

export function isDpdpBlock(blockType: unknown): boolean {
  return typeof blockType === 'string' && blockType in SECTIONS
}

export function DpdpSection({ block, first, anchor }: { block: { blockType: string }; first?: boolean; anchor?: string }) {
  const Section = SECTIONS[block.blockType]
  if (!Section) return null
  return anchor ? <div id={anchor}><Section block={block} first={first} /></div> : <Section block={block} first={first} />
}
