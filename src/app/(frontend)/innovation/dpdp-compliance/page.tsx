import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'DPDP Compliance Solutions | Digital Personal Data Protection Act, 2023',
    description: 'Comprehensive DPDP Act, 2023 compliance solutions. From assessment to implementation, we help organisations build operational privacy frameworks.',
};

export default function DPDPCompliancePage() {
    return (
        <>
            {/* Hero Section - Using ServicePageLayout for consistent styling */}
            <ServicePageLayout
                title="Digital Personal Data Protection (DPDP) Act, 2023"
                subtitle="Simplifying DPDP Compliance Through Technology"
                painPoints={[
                    { title: 'Legal Risks', description: 'High penalties for non-compliance with the new DPDP Act.' },
                    { title: 'Data Breaches', description: 'Vulnerable data infrastructure risking customer trust.' },
                    { title: 'Consent Management', description: 'Complexities in managing user consent and data rights.' },
                ]}
                features={[
                    { title: 'Gap Analysis', description: 'Comprehensive audit of current data practices against DPDP requirements.' },
                    { title: 'Policy Framework', description: 'Drafting robust privacy policies and consent mechanisms.' },
                    { title: 'Data Mapping', description: 'Visualizing data flow to ensure lawful processing.' },
                    { title: 'Compliance Dashboard', description: 'Real-time monitoring of compliance status.' },
                ]}
                techStack={['Privacy by Design', 'Encryption', 'Access Control']}
                ctaText="Start Your DPDP Journey"
                ctaLink="#assessment"
            />
            
            {/* Main Content Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* What is the DPDP Act? */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">What is the DPDP Act?</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The <strong>DPDP Act, 2023</strong> is India's primary framework for regulating the processing of digital personal data.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            It establishes requirements relating to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Personal data processing</li>
                            <li>Consent and lawful processing</li>
                            <li>Data Principal rights</li>
                            <li>Data security</li>
                            <li>Breach management</li>
                            <li>Grievance redressal</li>
                            <li>Children's data</li>
                            <li>Significant Data Fiduciaries</li>
                            <li>Regulatory oversight</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            The <strong>Digital Personal Data Protection Rules, 2025</strong> provide detailed operational requirements under the framework.
                        </p>
                    </div>
                    
                    {/* Who Needs to Consider DPDP? */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Who Needs to Consider DPDP?</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            DPDP requirements can apply to organisations across industries that process digital personal data.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Manufacturing */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Manufacturing</h3>
                                <p className="text-slate-600">Customer, employee, dealer, supplier and enquiry data.</p>
                            </div>
                            
                            {/* Real Estate */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Real Estate</h3>
                                <p className="text-slate-600">Buyer, tenant, lead, broker and customer information.</p>
                            </div>
                            
                            {/* IT & SaaS */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">IT & SaaS</h3>
                                <p className="text-slate-600">User, customer, support, application and marketing data.</p>
                            </div>
                            
                            {/* Hotels & Hospitality */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Hotels & Hospitality</h3>
                                <p className="text-slate-600">Guest, booking, contact, loyalty and marketing information.</p>
                            </div>
                            
                            {/* Healthcare */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Healthcare</h3>
                                <p className="text-slate-600">Patient, appointment, employee and related personal data.</p>
                            </div>
                            
                            {/* Education */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Education</h3>
                                <p className="text-slate-600">Student, parent/guardian, admission and academic information.</p>
                            </div>
                            
                            {/* Banking & Financial Services */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Banking & Financial Services</h3>
                                <p className="text-slate-600">Customer, KYC, employee and financial-service related data.</p>
                            </div>
                            
                            {/* Retail & E-Commerce */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Retail & E-Commerce</h3>
                                <p className="text-slate-600">Customer accounts, orders, delivery, support and marketing information.</p>
                            </div>
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed mt-6 font-medium">
                            <strong>Every organisation should assess its own processing activities and applicable requirements.</strong>
                        </p>
                    </div>
                    
                    {/* Key Areas of DPDP Compliance */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Key Areas of DPDP Compliance</h2>
                        
                        {/* Data Discovery & Inventory */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Data Discovery & Inventory</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Identify personal data, systems, applications, processing activities and data flows across the organisation.
                            </p>
                        </div>
                        
                        {/* Purpose & Lawful Basis */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Purpose & Lawful Basis</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Map each processing activity to its purpose and applicable lawful basis.
                            </p>
                        </div>
                        
                        {/* Privacy Notices */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Privacy Notices</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Provide clear information about personal data collection, processing purposes and applicable rights.
                            </p>
                        </div>
                        
                        {/* Consent Management */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Consent Management</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Where consent is the applicable basis, manage consent, preferences, evidence and withdrawal throughout the lifecycle.
                            </p>
                        </div>
                        
                        {/* Data Principal Rights */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Data Principal Rights</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Enable applicable requests such as access, correction, erasure, consent withdrawal and grievance redressal.
                            </p>
                        </div>
                        
                        {/* Data Security */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Data Security</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Implement appropriate technical and organisational safeguards including access control, encryption, logging, monitoring and secure disposal.
                            </p>
                        </div>
                        
                        {/* Breach Management */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Breach Management</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Establish processes to detect, assess, respond to and document personal-data breaches.
                            </p>
                        </div>
                        
                        {/* Retention & Erasure */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Retention & Erasure</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Define appropriate retention periods and implement controlled review, deletion and disposal processes.
                            </p>
                        </div>
                        
                        {/* Processor & Vendor Governance */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Processor & Vendor Governance</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Identify third parties processing personal data and manage their contracts, data access, security and compliance responsibilities.
                            </p>
                        </div>
                        
                        {/* DPIA & Privacy Risk */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">DPIA & Privacy Risk</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Assess privacy risks associated with applicable processing activities and implement appropriate controls.
                            </p>
                        </div>
                        
                        {/* Children & Guardian Data */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Children & Guardian Data</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Implement appropriate controls for processing children's personal data and applicable guardian-related requirements.
                            </p>
                        </div>
                        
                        {/* Governance & Audit */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Governance & Audit</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Maintain policies, responsibilities, assessments, audit trails, evidence, findings and remediation activities.
                            </p>
                        </div>
                    </div>
                    
                    {/* DPDPA Technology Consulting */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">DPDPA Technology Consulting</h2>
                        
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Turning Privacy Requirements into Technology & Business Controls</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We provide <strong>DPDPA Technology Consulting</strong> to help organisations translate India's <strong>Digital Personal Data Protection Act (DPDP Act)</strong> requirements into practical technology, processes and governance controls.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Our consulting approach covers the complete personal data lifecycle:
                        </p>
                        <p className="font-bold text-slate-900 mb-2">Collection → Consent → Processing → Storage → Sharing → Retention → Deletion</p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            with a focus on improving <strong>privacy, security and regulatory readiness</strong>.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Our Key Consulting Areas</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>DPDPA Readiness Assessment</strong><br className="hidden md:inline"/>Assess your current technology, processes and controls to identify compliance gaps and priorities.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Personal Data Discovery & Mapping</strong><br className="hidden md:inline"/>Discover, classify and map personal data across applications, databases, business processes and data flows.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Consent & Preference Management</strong><br className="hidden md:inline"/>Design and implement consent, preference and withdrawal workflows where applicable.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Data Principal Rights</strong><br className="hidden md:inline"/>Enable technology-driven workflows for applicable access, correction, erasure and other rights requests.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Privacy Notice & Consent Workflows</strong><br className="hidden md:inline"/>Integrate privacy notices and applicable consent mechanisms into websites, applications and business processes.</span>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Retention & Deletion Automation</strong><br className="hidden md:inline"/>Define retention policies and automate applicable review, deletion and disposal processes.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Data Breach & Incident Management</strong><br className="hidden md:inline"/>Design workflows for incident detection, assessment, escalation, response, notification and evidence management.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Vendor & Third-Party Governance</strong><br className="hidden md:inline"/>Assess and manage third-party processors, data sharing, contractual controls and data flows.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Privacy-by-Design Assessment</strong><br className="hidden md:inline"/>Evaluate applications and new initiatives for privacy requirements before implementation or release.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Audit Trails & Compliance Reporting</strong><br className="hidden md:inline"/>Establish evidence, audit trails, compliance dashboards, assessments and management reporting.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Enterprise Application Integration</strong><br className="hidden md:inline"/>Integrate DPDP controls with ERP, CRM, HRMS, websites, mobile applications, APIs and other business systems.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>Privacy Technology Roadmap</strong><br className="hidden md:inline"/>Develop a practical roadmap for implementing and continuously improving privacy technology and controls.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Our DPDP Implementation Approach */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Our DPDP Implementation Approach</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We help organisations move from <strong>compliance requirements to an operational privacy framework</strong>.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">01 —</span>
                                    <span><strong>Assess</strong><br className="hidden md:inline"/>Understand your organisation, personal data, systems, processes and current compliance posture.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">02 —</span>
                                    <span><strong>Design</strong><br className="hidden md:inline"/>Define the appropriate privacy processes, technology controls, governance structure and implementation roadmap.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">03 —</span>
                                    <span><strong>Implement</strong><br className="hidden md:inline"/>Implement notices, consent, rights, retention, security, processor, incident and governance controls.</span>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">04 —</span>
                                    <span><strong>Integrate</strong><br className="hidden md:inline"/>Connect privacy controls with your existing business applications and technology ecosystem.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">05 —</span>
                                    <span><strong>Monitor</strong><br className="hidden md:inline"/>Continuously track compliance activities, risks, requests, incidents, vendors and remediation.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">06 —</span>
                                    <span><strong>Demonstrate</strong><br className="hidden md:inline"/>Maintain evidence, audit trails, reports and compliance records to demonstrate your privacy posture.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Sentinel-DPDP */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Sentinel-DPDP</h2>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Your DPDP Compliance Control Center</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            <strong>Sentinel-DPDP</strong> helps organisations operationalise their privacy programme through a unified platform covering:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 pl-5">
                            <li>Data Inventory & Processing</li>
                            <li>Purpose & Lawful Basis</li>
                            <li>Privacy Notices</li>
                            <li>Consent Management</li>
                            <li>Data Principal Rights</li>
                            <li>Grievance Management</li>
                            <li>Processor & Data Sharing Management</li>
                            <li>Retention & Erasure</li>
                            <li>Breach Management</li>
                            <li>DPIA & Privacy Risk</li>
                            <li>Security & Governance</li>
                            <li>Audit & Compliance Evidence</li>
                            <li>Compliance Monitoring & Reporting</li>
                        </ul>
                        <p className="text-slate-600 font-bold mt-4">
                            From Data Discovery to Demonstrable Compliance.
                        </p>
                    </div>
                    
                    {/* DPDP Compliance Lifecycle */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">DPDP Compliance Lifecycle</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>Discover</strong><br/>
                            Identify personal data, systems, applications and processors.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>Assess</strong><br/>
                            Understand purposes, lawful basis, risks and compliance gaps.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>Implement</strong><br/>
                            Deploy the required privacy, security and governance controls.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>Integrate</strong><br/>
                            Connect DPDP controls with your business applications.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>Monitor</strong><br/>
                            Track compliance, risks, incidents, rights and remediation.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>Audit & Improve</strong><br/>
                            Maintain evidence, assess controls and continuously improve.
                        </p>
                    </div>
                    
                    {/* Why Choose Us? */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Choose Us?</h2>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Technology + Compliance + Business Process</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            DPDP compliance cannot be addressed through documentation alone.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Our approach combines:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li><strong>Regulatory Understanding</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Business Process</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Technology</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Security</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Automation</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Governance</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>Continuous Monitoring</strong><br className="hidden md:inline"/>•</li>
                        </ul>
                        <p className="text-slate-600 font-bold mt-4">
                            This enables organisations to move beyond a static compliance programme and build an <strong>operational privacy framework integrated into their everyday business processes and technology landscape.</strong>
                        </p>
                    </div>
                    
                    {/* Start Your DPDP Journey */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Start Your DPDP Journey</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Not sure where your organisation stands?
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We can help you assess your current DPDP readiness, identify technology and process gaps, and develop a practical implementation roadmap.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                            <a href="#assessment" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group">
                                Request a DPDP Assessment
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors group">
                                Talk to Our DPDPA Technology Consultants
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors group">
                                Explore Sentinel-DPDP
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Disclaimer */}
                    <div className="mb-16 bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            <strong>Disclaimer</strong><br/>
                            This content is provided for general informational purposes and does not constitute legal advice. DPDP applicability and obligations may vary depending on the organisation, processing activities, sector, exemptions and applicable legal requirements.
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed mt-2">
                            <strong>Last Reviewed: August 2026</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}