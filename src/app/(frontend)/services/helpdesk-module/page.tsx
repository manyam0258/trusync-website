import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frappe Helpdesk | Customer Support System',
    description: 'Deliver exceptional customer support with an open-source ticketing system. SLA management, automation, and multichannel support.',
};

export default function HelpdeskModulePage() {
    const painPoints = [
        { title: 'Slow Response Times', description: 'Customers frustrated by delayed resolutions.' },
        { title: 'Chaos in Tickets', description: 'Emails, calls, and chats scattered across different tools.' },
        { title: 'Missed SLAs', description: 'No tracking of service level agreements and deadlines.' },
    ];

    const features = [
        { title: 'Unified Inbox', description: 'Manage emails and tickets from a single interface.' },
        { title: 'SLA Management', description: 'Configure SLAs and get alerts for breaches.' },
        { title: 'Knowledge Base', description: 'Build a self-service portal for customers.' },
        { title: 'Automated Routing', description: 'Assign tickets to the right agent automatically.' },
    ];

    return (
        <ServicePageLayout
            title="Frappe Helpdesk"
            subtitle="Transform your customer support with a lightning-fast, open-source helpdesk solution."
            painPoints={painPoints}
            features={features}
            techStack={['Frappe', 'Redis', 'MariaDB', 'TailwindCSS']}
        />
    );
}
