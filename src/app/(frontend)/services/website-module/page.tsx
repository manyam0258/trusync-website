import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext Website Builder | Integrated E-commerce & Content',
    description: 'Build your website and e-commerce store directly within ERPNext. Unified product catalog, inventory, and customer portal.',
};

export default function WebsiteManagementPage() {
    const painPoints = [
        { title: 'Disconnected Systems', description: 'Manually syncing products and stock between your website and ERP.' },
        { title: 'Double Data Entry', description: 'Managing two separate databases for items, prices, and customers.' },
        { title: 'Maintenance Overhead', description: 'Updating plugins and security patches for a separate CMS.' },
    ];

    const features = [
        { title: 'Integrated E-commerce', description: 'Publish items from your ERP directly to your web store instantly.' },
        { title: 'Customer Portal', description: 'Allow customers to view their invoices, order history, and support tickets.' },
        { title: 'Blog & Content', description: 'Full-featured CMS to manage your blogs, web pages, and SEO.' },
        { title: 'Web Forms', description: 'Capture leads and support requests directly into your ERP workflows.' },
    ];

    return (
        <ServicePageLayout
            title="Unified Web Presence"
            subtitle="Stop stitching systems together. Run your website, e-commerce, and back-office on a single platform."
            painPoints={painPoints}
            features={features}
            techStack={['Frappe', 'Jinja', 'Bootstrap']}
        />
    );
}
