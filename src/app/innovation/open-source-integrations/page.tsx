import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext Open Source Integrations | Seamless Connectivity',
    description: 'Connect your ERPNext with best-of-breed open source tools like Metabase, Rocket.Chat, and n8n. Explore ERPNext open source integrations, ERPNext apps, and custom open source software solutions.',
    keywords: [
        'erpnext open source',
        'erpnext apps',
        'frappe plugins',
        'erpnext integration services',
        'open source integrations erpnext',
        'frappe framework',
    ],
};

export default function OpenSourceIntegrationsPage() {
    const painPoints = [
        { title: 'Siloed Systems', description: 'Disconnected applications causing data fragmentation.' },
        { title: 'High License Costs', description: 'Paying exorbitant fees for proprietary integration tools.' },
        { title: 'Inefficient Workflows', description: 'Manual data transfer between different software platforms.' },
    ];

    const features = [
        { title: 'Unified Dashboard', description: 'Centralized view of data from multiple apps.' },
        { title: 'Real-time Sync', description: 'Instant data synchronization across your tech stack.' },
        { title: 'Custom APIs', description: 'Besppoke API development for unique business needs.' },
        { title: 'n8n Automation', description: 'Workflow automation using powerful open-source tools.' },
    ];

    return (
        <ServicePageLayout
            title="ERPNext Open Source Integrations"
            subtitle="Integrate your ERPNext with favorite open-source tools for a unified, powerful, and cost-effective ecosystem."
            painPoints={painPoints}
            features={features}
            techStack={['n8n', 'Metabase', 'Rocket.Chat', 'Keycloak']}
        />
    );
}
