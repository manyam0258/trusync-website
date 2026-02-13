import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for Construction | Project Management & Job Costing',
    description: 'Manage construction projects, job costing, contractor billing, and site inventory with ERPNext Construction.',
};

export default function ConstructionPage() {
    const painPoints = [
        { title: 'Cost Overruns', description: 'Projects bleeding money due to lack of real-time budget vs actual tracking.' },
        { title: 'Material Theft', description: 'Inventory disappearing from sites without accountability.' },
        { title: 'Contractor Billing', description: 'Complex measurement books (MB) leading to billing disputes.' },
    ];

    const features = [
        { title: 'Project Budgeting', description: 'Define cost centers and budgets for every phase of construction.' },
        { title: 'Site Inventory', description: 'Track material consumption per project site in real-time.' },
        { title: 'Muster Rolls', description: 'Daily labor attendance and wage calculation linked to project costs.' },
        { title: 'Gantt Charts', description: 'Visual timeline management to keep projects on schedule.' },
    ];

    return (
        <ServicePageLayout
            title="Build Smarter with ERPNext"
            subtitle="From tender to handover. Control your construction costs and timelines with precision."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Frappe', 'Maps API']}
        />
    );
}
