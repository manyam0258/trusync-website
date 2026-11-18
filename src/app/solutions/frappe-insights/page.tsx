import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frappe Insights for ERPNext | Open Source Business Intelligence',
    description: 'Frappe Insights is an open-source business intelligence tool for your ERPNext. Make informed decisions with Frappe Insights and ERPNext insights for your operations.',
    keywords: [
        'frappe insights',
        'erpnext insights',
        'frappe business intelligence',
        'erpnext business intelligence',
        'frappe insights erpnext',
    ],
};

export default function FrappeInsightsPage() {
    const painPoints = [
        { title: 'Data Silos', description: 'Critical data trapped in different departmental databases.' },
        { title: 'Complex Reporting', description: 'Reliance on IT teams for basic custom reports.' },
        { title: 'Delayed Decisions', description: 'Waiting days for monthly performance reports.' },
    ];

    const features = [
        { title: 'Self-Service BI', description: 'Drag-and-drop report builder for non-technical users.' },
        { title: 'Visual Dashboards', description: 'Beautiful charts and graphs to track KPIs in real-time.' },
        { title: 'Seamless Integration', description: 'Directly connect with ERPNext database without ETL.' },
        { title: 'SQL Power', description: 'Write raw SQL queries for advanced data analysis.' },
    ];

    return (
        <ServicePageLayout
            title="Frappe Insights for ERPNext"
            subtitle="Turn your ERPNext data into actionable business intelligence with Frappe Insights, the open-source BI tool for your operations."
            painPoints={painPoints}
            features={features}
            techStack={['React', 'Python', 'SQL', 'Chart.js']}
        />
    );
}
