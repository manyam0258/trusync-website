import React from 'react';
import { Metadata } from 'next';
import { FrameworkHero } from '@/components/sections/framework/FrameworkHero';
import { ArchitectureSection } from '@/components/sections/framework/ArchitectureSection';
import { ERPNextSection } from '@/components/sections/framework/ERPNextSection';
import { POSSection } from '@/components/sections/framework/POSSection';
import { HRSection } from '@/components/sections/framework/HRSection';
import { InsightsSection } from '@/components/sections/framework/InsightsSection';
import { CRMHelpdeskSection } from '@/components/sections/framework/CRMHelpdeskSection';
import { VerticalsSection } from '@/components/sections/framework/VerticalsSection';
import { BuilderSection } from '@/components/sections/framework/BuilderSection';
import { PricingSection } from '@/components/sections/framework/PricingSection';
import { ERPFlowSection } from '@/components/sections/framework/ERPFlowSection';
import { ComparisonSection } from '@/components/sections/framework/ComparisonSection';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: 'Frappe Framework Development | Low Code Platform',
    description: 'Build robust, scalable enterprise applications with Frappe Framework. Python + JS based low-code web framework.',
};

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
