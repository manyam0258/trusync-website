import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Automation Services | TruSync Innovations',
    description: 'Transform your business operations with custom AI & ML solutions. Automate workflows, gain predictive insights, and enhance decision-making.',
};

export default function AIAutomationPage() {
    const painPoints = [
        { title: 'Manual Data Entry', description: 'Teams wasting hours on repetitive tasks that can be automated.' },
        { title: 'Unpredictable Forecasts', description: 'Lack of data-driven insights leading to poor inventory and sales planning.' },
        { title: 'Customer Churn', description: 'Inability to predict and prevent customer attrition in time.' },
    ];

    const features = [
        { title: 'Predictive Analytics', description: 'Forecast trends and demand with high accuracy models.' },
        { title: 'Workflow Automation', description: 'End-to-end automation of complex business processes.' },
        { title: 'Chatbots & Assistants', description: '24/7 intelligent customer support agents.' },
        { title: 'Document Processing', description: 'OCR and NLP for automated invoice and document handling.' },
    ];

    return (
        <ServicePageLayout
            title="Intelligent AI Automation"
            subtitle="Unlock the next level of efficiency with custom AI solutions tailored for your enterprise."
            painPoints={painPoints}
            features={features}
            techStack={['Python', 'TensorFlow', 'PyTorch', 'OpenAI API']}
        />
    );
}
