import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for Crowdfunding | P2P Lending & Investment',
    description: 'Launch your crowdfunding or P2P lending platform. Manage investors, borrowers, and automated payouts securely.',
};

export default function CrowdfundingPage() {
    const painPoints = [
        { title: 'Investor Trust', description: 'Lack of transparency in fund usage scaring away potential backers.' },
        { title: 'Compliance', description: 'Navigating complex financial regulations for pooling funds.' },
        { title: 'Payout Complexity', description: 'Calculating and distributing returns to thousands of investors manually.' },
    ];

    const features = [
        { title: 'Investor Portal', description: 'Dashboard for backers to track their portfolio and returns.' },
        { title: 'KYC Automation', description: 'Automated identity verification for compliance.' },
        { title: 'Escrow Integration', description: 'Secure fund management through integrated payment gateways.' },
        { title: 'Auto-Payouts', description: 'Schedule and execute dividend or interest payments automatically.' },
    ];

    return (
        <ServicePageLayout
            title="Crowdfunding & P2P Platform"
            subtitle="Democratize finance. Build a secure, scalable platform for pooling and managing investments."
            painPoints={painPoints}
            features={features}
            techStack={['Frappe', 'Stripe/Razorpay', 'React']}
        />
    );
}
