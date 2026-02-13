import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Open Source Integrations | Seamless Connectivity',
    description: 'Connect your ERPNext with best-of-breed open source tools like Metabase, Rocket.Chat, and n8n.',
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
            title="Power of Open Source"
            subtitle="Integrate your favorite open-source tools for a unified, powerful, and cost-effective ecosystem."
            painPoints={painPoints}
            features={features}
            techStack={['n8n', 'Metabase', 'Rocket.Chat', 'Keycloak']}
        />
    );
}
