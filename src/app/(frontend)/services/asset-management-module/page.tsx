import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext Asset Management | Maintenance & Depreciation',
    description: 'Track your company assets from procurement to disposal. Automated depreciation, maintenance schedules, and location tracking.',
};

export default function AssetManagementPage() {
    const painPoints = [
        { title: 'Ghost Assets', description: 'Paying insurance and taxes on assets that no longer exist or are missing.' },
        { title: 'Compliance Audits', description: 'Struggling to provide an accurate fixed asset register during audits.' },
        { title: 'Breakdowns', description: 'Equipment failing due to missed preventative maintenance schedules.' },
    ];

    const features = [
        { title: 'Lifecycle Tracking', description: 'Monitor every asset from purchase receipt to scrapping or sale.' },
        { title: 'Auto-Depreciation', description: 'Calculate and book depreciation entries automatically based on policies.' },
        { title: 'Maintenance Management', description: 'Schedule service visits and track repair costs against each asset.' },
        { title: 'Asset Movement', description: 'Track who has what asset and their current physical location.' },
    ];

    return (
        <ServicePageLayout
            title="Complete Asset Visibility"
            subtitle="Protect your investments. Gain real-time control over your infrastructure and fixed assets."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Python', 'SQL']}
        />
    );
}
