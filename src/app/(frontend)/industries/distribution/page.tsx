import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for Distribution | Supply Chain Management',
    description: 'Optimize your supply chain. Route planning, warehouse management, and salesman tracking for distributors.',
};

export default function DistributionPage() {
    const painPoints = [
        { title: 'Dead Stock', description: 'Warehouses full of slow-moving items eating up working capital.' },
        { title: 'Route Inefficiency', description: 'Delivery vans driving unnecessary miles wasting fuel and time.' },
        { title: 'Salesman Visibility', description: 'No idea if field sales reps are actually visiting retailers.' },
    ];

    const features = [
        { title: 'Route Planning', description: 'Optimize delivery paths to serve more customers in less time.' },
        { title: 'Sales App', description: 'Mobile order taking for field staff with real-time stock visibility.' },
        { title: 'Schemes & Promos', description: 'Manage complex trade discounts and BOGO offers automatically.' },
        { title: 'Warehouse Management', description: 'Bin-level inventory tracking for faster picking and packing.' },
    ];

    return (
        <ServicePageLayout
            title="High-Velocity Distribution"
            subtitle="Move goods faster and cheaper. Complete control over your inventory, fleet, and field force."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Frappe', 'Google Maps']}
        />
    );
}
