import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frappe CRM Implementation | Open Source CRM',
    description: 'Manage your leads, opportunities, and customers with a powerful, customizable Open Source CRM.',
};

export default function CRMModulePage() {
    const painPoints = [
        { title: 'Lost Leads', description: 'Leads falling through cracks due to manual tracking on spreadsheets.' },
        { title: 'No Visibility', description: 'Blind spots in sales pipeline and team performance.' },
        { title: 'Disconnected Data', description: 'Sales data siloed from inventory and accounting.' },
    ];

    const features = [
        { title: 'Omnichannel Communication', description: 'Integrate Email, WhatsApp, and SMS in one inbox.' },
        { title: 'Pipeline Management', description: 'Visual drag-and-drop deal pipelines.' },
        { title: 'Automated Workflows', description: 'Auto-assign leads and trigger follow-up emails.' },
        { title: '360° Customer View', description: 'See all interactions, invoices, and support tickets in one place.' },
    ];

    return (
        <ServicePageLayout
            title="Frappe CRM"
            subtitle="Supercharge your sales team with a modern, open-source CRM that's fully integrated with your ERP."
            painPoints={painPoints}
            features={features}
            techStack={['Vue.js', 'Python', 'Socket.io', 'PostgreSQL']}
        />
    );
}
