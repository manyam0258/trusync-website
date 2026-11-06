'use client';

import { Contact } from '@/components/sections/Contact';

import { ArchitectureSection } from './frappe-framework/ArchitectureSection';
import { BuilderSection } from './frappe-framework/BuilderSection';
import { ComparisonSection } from './frappe-framework/ComparisonSection';
import { CRMHelpdeskSection } from './frappe-framework/CRMHelpdeskSection';
import { ERPFlowSection } from './frappe-framework/ERPFlowSection';
import { ERPNextSection } from './frappe-framework/ERPNextSection';
import { FrameworkHero } from './frappe-framework/FrameworkHero';
import { HRSection } from './frappe-framework/HRSection';
import { InsightsSection } from './frappe-framework/InsightsSection';
import { POSSection } from './frappe-framework/POSSection';
import { PricingSection } from './frappe-framework/PricingSection';
import { VerticalsSection } from './frappe-framework/VerticalsSection';

export default function FrappeFrameworkPage() {
    return (
        <main className="min-h-screen">
            <FrameworkHero />
            <ArchitectureSection />
            <ERPNextSection />
            <POSSection />
            <HRSection />
            <InsightsSection />
            <CRMHelpdeskSection />
            <VerticalsSection />
            <BuilderSection />
            <PricingSection />
            <ERPFlowSection />
            <ComparisonSection />
            <Contact />
        </main>
    );
}
