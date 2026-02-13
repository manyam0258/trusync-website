import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext for Textile Industry | Spinning to Garment Manufacturing',
    description: 'Manage the complete textile value chain. From raw cotton procurement to spinning, weaving, dyeing, and garment production.',
};

export default function TextilePage() {
    const painPoints = [
        { title: 'Dye Lot Tracking', description: 'Difficulty managing batch-wise inventory and color consistency.' },
        { title: 'Subcontracting', description: 'Losing track of material sent for dyeing, knitting, or embroidery to third parties.' },
        { title: 'Quality Control', description: 'Rejections at the final stage due to lack of in-process quality checks.' },
    ];

    const features = [
        { title: 'Batch Management', description: 'Trace every roll of fabric back to its original fiber lot.' },
        { title: 'Subcontracting', description: 'Automated challans and reconciliation for outsourced processes.' },
        { title: 'BOM for Styles', description: 'Manage complex Bill of Materials for different sizes and colors (SKUs).' },
        { title: 'Wastage Reporting', description: 'Track production loss at every stage to optimize yields.' },
    ];

    return (
        <ServicePageLayout
            title="Textile Manufacturing ERP"
            subtitle="Weave efficiency into your fabric. A vertically integrated solution for the modern textile mill."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext', 'Python', 'Barcode Integration']}
        />
    );
}
