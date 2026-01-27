import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for EPC | Engineering, Procurement, Construction',
    description: 'Integrated solution for EPC companies. Manage large-scale infrastructure projects, procurement, and contracting.',
};

export default function EPCPage() {
    const painPoints = [
        { title: 'Procurement Delays', description: 'Project halts due to critical equipment not arriving on time.' },
        { title: 'Vendor Management', description: 'Difficulty tracking performance and compliance of hundreds of subcontractors.' },
        { title: 'Cash Flow Gaps', description: 'Billing milestones missed leading to severe liquidity crunches.' },
    ];

    const features = [
        { title: 'Tender Management', description: 'Track opportunities and manage the bidding process systematically.' },
        { title: 'Material Requisition', description: 'Site-to-HQ workflows for material approvals and purchasing.' },
        { title: 'Project Billing', description: 'Milestone-based billing linked to work completion reports.' },
        { title: 'Document Control', description: 'Centralized repository for drawings, contracts, and compliance docs.' },
    ];

    return (
        <ServicePageLayout
            title="Industrial Strength EPC ERP"
            subtitle="Deliver mega-projects on time and under budget. A unified platform for Engineering, Procurement, and Construction."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Linux', 'PostgreSQL']}
        />
    );
}
