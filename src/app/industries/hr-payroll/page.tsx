import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERPNext HR & Payroll | Complete HRM Solution',
    description: 'Manage your entire employee lifecycle. Recruitment, attendance, leave management, expense claims, and automated payroll.',
};

export default function HRPayrollPage() {
    const painPoints = [
        { title: 'Payroll Errors', description: 'Mistakes in salary calculation leading to unhappy employees and compliance issues.' },
        { title: 'Attendance Fraud', description: 'Inability to track actual working hours and location of field staff.' },
        { title: 'Onboarding Chaos', description: 'New hires waiting days for assets and access due to unorganized processes.' },
    ];

    const features = [
        { title: 'Automated Payroll', description: 'One-click salary processing with tax deductions and payslip generation.' },
        { title: 'Employee Self-Service', description: 'Portal for employees to apply for leave, view payslips, and claim expenses.' },
        { title: 'Biometric Integration', description: 'Sync attendance data directly from biometric devices.' },
        { title: 'Performance Appraisal', description: 'Structured reviews and goal tracking for employee growth.' },
    ];

    return (
        <ServicePageLayout
            title="Human Capital Management"
            subtitle="Empower your workforce with a modern HR platform that handles everything from hiring to retiring."
            painPoints={painPoints}
            features={features}
            techStack={['ERPNext HR', 'Python', 'React']}
        />
    );
}
