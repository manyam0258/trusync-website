import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frappe Framework Development | Low Code Platform',
    description: 'Build robust, scalable enterprise applications with Frappe Framework. Python + JS based low-code web framework.',
};

export default function FrappeFrameworkPage() {
    const painPoints = [
        { title: 'Slow Development', description: 'Traditional coding takes months to deploy MVPs.' },
        { title: 'Rigid Systems', description: 'Off-the-shelf software fails to adapt to unique business workflows.' },
        { title: 'High Maintenance', description: 'Custom stacks require large teams to maintain and upgrade.' },
    ];

    const features = [
        { title: 'Rapid Prototyping', description: 'Go from idea to live app in days, not months.' },
        { title: 'Metadata Driven', description: 'Define DocTypes and let the framework handle the rest.' },
        { title: 'Built-in Features', description: 'Auth, PDF generation, Email, and REST API out of the box.' },
        { title: 'Scalable Architecture', description: 'Powered by Python, MariaDB, and Redis for high performance.' },
    ];

    return (
        <ServicePageLayout
            title="Frappe Framework Development"
            subtitle="Accelerate your digital transformation with the world's best 100% Open Source Low Code Framework."
            painPoints={painPoints}
            features={features}
            techStack={['Python', 'JavaScript', 'MariaDB', 'Redis']}
        />
    );
}
