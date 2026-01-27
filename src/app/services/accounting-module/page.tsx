import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext Financial Accounting | Automated Bookkeeping & Reporting',
    description: 'Streamline your finances with ERPNext. Multi-currency accounting, automated bank reconciliation, and real-time financial reports.',
};

export default function FinancialAccountingPage() {
    const painPoints = [
        { title: 'Manual Entry Errors', description: 'Typographical errors in manual bookkeeping leading to mismatched balance sheets.' },
        { title: 'Delayed Reporting', description: 'Waiting weeks for month-end close because data is scattered.' },
        { title: 'Tax Compliance Risks', description: 'Missing tax deadlines or incorrect filings due to bad data.' },
    ];

    const features = [
        { title: 'Multi-Currency', description: 'Manage transactions in any currency with real-time exchange rates.' },
        { title: 'Automated Reconciliation', description: 'Import bank statements and match transactions automatically.' },
        { title: 'GST/VAT Compliance', description: 'Built-in tax engines to handle regional tax requirements seamlessly.' },
        { title: 'Real-time Dashboards', description: 'View P&L, Cash Flow, and Balance Sheet instantly.' },
    ];

    return (
        <ServicePageLayout
            title="Financial Clarity & Control"
            subtitle="From recording transactions to generating financial statements, automate your entire accounting lifecycle."
            painPoints={painPoints}
            features={features}
            techStack={['Python', 'MariaDB', 'Chart.js']}
        />
    );
}
