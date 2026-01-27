import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for NBFC | Loan Management System',
    description: 'End-to-end Loan Management System (LMS) for NBFCs. Origination, underwriting, disbursement, and collections.',
};

export default function NBFCPage() {
    const painPoints = [
        { title: 'Slow Disbursal', description: 'Manual underwriting processes taking days to approve simple loans.' },
        { title: 'NPA Management', description: 'Rising Non-Performing Assets due to poor collection tracking.' },
        { title: 'Regulatory Reporting', description: 'Struggling to generate RBI/Central Bank compliance reports.' },
    ];

    const features = [
        { title: 'Loan Origination', description: 'Digital onboarding and credit scoring for instant approvals.' },
        { title: 'Collection App', description: 'Mobile app for field agents to collect EMI and issue receipts.' },
        { title: 'Repayment Schedules', description: 'Flexible amortization calculators (Flat, Reducing Balance).' },
        { title: 'Accounting Integration', description: 'Automated interest accrual and posting to the general ledger.' },
    ];

    return (
        <ServicePageLayout
            title="Core Banking for NBFCs"
            subtitle="Digitize your lending operations. Serve more customers with less risk and lower overheads."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Python', 'Credit Bureau APIs']}
        />
    );
}
