import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext Order Management | Sales & Purchase Automation',
    description: 'Optimize your order-to-cash cycle. Manage quotations, sales orders, purchase orders, and fulfillment in one system.',
};

export default function OrderManagementPage() {
    const painPoints = [
        { title: 'Lost Orders', description: 'Orders falling through the cracks due to manual email processing.' },
        { title: 'Stockouts', description: 'Selling items that are out of stock because inventory isn\'t synced.' },
        { title: 'Fulfilment Delays', description: 'Slow processing time from order receipt to shipment dispatch.' },
    ];

    const features = [
        { title: 'Smart Quotations', description: 'Create beautiful quotes and convert them to orders with one click.' },
        { title: 'Inventory Sync', description: 'Real-time stock checks to prevent overselling on any channel.' },
        { title: 'Drop Shipping', description: 'Automated workflows for drop-ship orders directly to suppliers.' },
        { title: 'Returns Management', description: 'Streamlined RMA process for handling customer returns efficiently.' },
    ];

    return (
        <ServicePageLayout
            title="Seamless Order Processing"
            subtitle="Accelerate your order-to-cash cycle and delight customers with error-free fulfillment."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Redis', 'Python']}
        />
    );
}
