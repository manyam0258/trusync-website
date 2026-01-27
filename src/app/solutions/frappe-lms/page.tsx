import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frappe LMS | Learning Management System',
    description: 'Train your workforce and educate customers with an open-source Learning Management System.',
};

export default function FrappeLMSPage() {
    const painPoints = [
        { title: 'Skill Gaps', description: 'Employees lacking structured training on new tools and processes.' },
        { title: 'Manual Onboarding', description: 'HR spending hours repeatedly delivering the same induction training.' },
        { title: 'Unracked Progress', description: 'No visibility into who has completed which compliance training.' },
    ];

    const features = [
        { title: 'Course Builder', description: 'Create rich content courses with videos, quizzes, and assignments.' },
        { title: 'Progress Tracking', description: 'Monitor learner progress and issue certifications.' },
        { title: 'Job Board', description: 'Post openings and manage applications directly within the portal.' },
        { title: 'Batch Management', description: 'Organize learners into batches for cohorts-based learning.' },
    ];

    return (
        <ServicePageLayout
            title="Frappe LMS"
            subtitle="Empower your organization with a comprehensive learning and training platform."
            painPoints={painPoints}
            features={features}
            techStack={['Frappe', 'Video.js', 'Quiz Module']}
        />
    );
}
