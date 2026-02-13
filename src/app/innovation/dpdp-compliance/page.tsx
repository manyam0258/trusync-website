import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DPDP Compliance Solutions | Data Privacy India',
    description: 'Ensure your business is fully compliant with the Digital Personal Data Protection Act, 2023. Audit, implementation, and training services.',
};

export default function DPDPCompliancePage() {
    const painPoints = [
        { title: 'Legal Risks', description: 'High penalties for non-compliance with the new DPDP Act.' },
        { title: 'Data Breaches', description: 'Vulnerable data infrastructure risking customer trust.' },
        { title: 'Consent Management', description: 'Complexities in managing user consent and data rights.' },
    ];

    const features = [
        { title: 'Gap Analysis', description: 'Comprehensive audit of current data practices against DPDP requirements.' },
        { title: 'Policy Framework', description: 'Drafting robust privacy policies and consent mechanisms.' },
        { title: 'Data Mapping', description: 'Visualizing data flow to ensure lawful processing.' },
        { title: 'Compliance Dashboard', description: 'Real-time monitoring of compliance status.' },
    ];

    return (
        <ServicePageLayout
            title="DPDP Compliance Shield"
            subtitle="Navigate India's new data privacy laws with confidence. Secure your data and building trust."
            painPoints={painPoints}
            features={features}
            techStack={['Privacy by Design', 'Encryption', 'Access Control']}
        />
    );
}
