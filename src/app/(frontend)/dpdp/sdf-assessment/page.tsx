import type { Metadata } from 'next'
import Link from 'next/link'

import { SdfAssessment } from '@/components/dpdp/SdfAssessment'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { absoluteUrl } from '@/lib/cms'

/** An interactive tool, so it is built in code rather than as a CMS page. Listed in the sitemap via src/lib/site-pages.ts. */

// Rendered on request like the CMS pages: the shared layout reads the logo from the database, which the build must not need.
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Significant Data Fiduciary (SDF) Readiness Check | Sentinel DPDP',
  description:
    'A free self-check against the Section 10 factors of the DPDP Act, 2023: how likely is your organisation to be notified as a Significant Data Fiduciary, and what should you prepare?',
  alternates: { canonical: absoluteUrl('/dpdp/sdf-assessment') },
}

export default function SdfAssessmentPage() {
  return (
    <Section className="bg-slate-50 pt-32 md:pt-40">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <Link href="/dpdp" className="hover:text-primary">Sentinel DPDP</Link> <span aria-hidden>›</span>{' '}
          <Link href="/dpdp/act" className="hover:text-primary">Resources</Link> <span aria-hidden>›</span> SDF readiness check
        </nav>
        <header className="mb-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Resources · Self-check</span>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Are you likely to be a <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Significant Data Fiduciary</span>?
          </h1>
          <p className="text-lg text-slate-600">
            The Government can notify any Data Fiduciary as significant based on the volume and sensitivity of the personal data it processes, the risk to
            Data Principals, and wider impact on the country (Section 10). Answer five questions to see how many of those factors apply to you.
          </p>
        </header>
        <SdfAssessment />
      </Container>
    </Section>
  )
}
