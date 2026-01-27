import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for Dairy Industry | Milk Procurement to Distribution',
    description: 'Manage your dairy plant. Milk procurement, fat/SNF based pricing, production, and cold-chain distribution.',
};

export default function DairyPage() {
    const painPoints = [
        { title: 'Perishability', description: 'Milk spoiling due to delays in procurement or processing.' },
        { title: 'Variable Pricing', description: 'Complex payments to farmers based on daily Fat and SNF content.' },
        { title: 'Traceability', description: 'Inability to track quality issues back to the collection center.' },
    ];

    const features = [
        { title: 'Procurement Billing', description: 'Automated rate charts for farmers based on milk quality parameters.' },
        { title: 'Route Optimization', description: 'Efficient logistics for morning/evening milk collection runs.' },
        { title: 'Batch Processing', description: 'Manage pasteurization, homogenization, and packaging workflows.' },
        { title: 'Cold Chain', description: 'Monitor temperature and inventory across the distribution network.' },
    ];

    return (
        <ServicePageLayout
            title="Farm-to-Table Dairy ERP"
            subtitle="Fresher products, happier farmers. Digitalize your dairy value chain for maximum efficiency."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'IoT Sensors', 'Mobile Apps']}
        />
    );
}
