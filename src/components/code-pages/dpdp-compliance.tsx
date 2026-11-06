'use client';

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CmsSection, useCms } from '@/components/code-pages/runtime';


export default function DPDPCompliancePage() {
    const { t: __t, u: __u, m: __m } = useCms();
    return (
        <>
            {/* Hero Section - Using ServicePageLayout for consistent styling */}
            <ServicePageLayout
                title={__t("x.1", "Digital Personal Data Protection (DPDP) Act, 2023")}
                subtitle={__t("x.2", "Simplifying DPDP Compliance Through Technology")}
                painPoints={[
                    { title: __t("x.3", "Legal Risks"), description: __t("x.4", "High penalties for non-compliance with the new DPDP Act.") },
                    { title: __t("x.5", "Data Breaches"), description: __t("x.6", "Vulnerable data infrastructure risking customer trust.") },
                    { title: __t("x.7", "Consent Management"), description: __t("x.8", "Complexities in managing user consent and data rights.") },
                ]}
                features={[
                    { title: __t("x.9", "Gap Analysis"), description: __t("x.10", "Comprehensive audit of current data practices against DPDP requirements.") },
                    { title: __t("x.11", "Policy Framework"), description: __t("x.12", "Drafting robust privacy policies and consent mechanisms.") },
                    { title: __t("x.13", "Data Mapping"), description: __t("x.14", "Visualizing data flow to ensure lawful processing.") },
                    { title: __t("x.15", "Compliance Dashboard"), description: __t("x.16", "Real-time monitoring of compliance status.") },
                ]}
                techStack={['Privacy by Design', 'Encryption', 'Access Control']}
                ctaText={__t("x.17", "Start Your DPDP Journey")}
                ctaLink={__u("x.18", "#assessment")}
            />
            
            {/* Main Content Section */}
            <CmsSection id="s1"><section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* What is the DPDP Act? */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.1", "What is the DPDP Act?")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.2", "The")}{" "}<strong>{__t("s1.3", "DPDP Act, 2023")}</strong>{" "}{__t("s1.4", "is India's primary framework for regulating the processing of digital personal data.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.5", "It establishes requirements relating to:")}</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>{__t("s1.6", "Personal data processing")}</li>
                            <li>{__t("s1.7", "Consent and lawful processing")}</li>
                            <li>{__t("s1.8", "Data Principal rights")}</li>
                            <li>{__t("s1.9", "Data security")}</li>
                            <li>{__t("s1.10", "Breach management")}</li>
                            <li>{__t("s1.11", "Grievance redressal")}</li>
                            <li>{__t("s1.12", "Children's data")}</li>
                            <li>{__t("s1.13", "Significant Data Fiduciaries")}</li>
                            <li>{__t("s1.14", "Regulatory oversight")}</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">{__t("s1.15", "The")}{" "}<strong>{__t("s1.16", "Digital Personal Data Protection Rules, 2025")}</strong>{" "}{__t("s1.17", "provide detailed operational requirements under the framework.")}</p>
                    </div>
                    
                    {/* Who Needs to Consider DPDP? */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.18", "Who Needs to Consider DPDP?")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.19", "DPDP requirements can apply to organisations across industries that process digital personal data.")}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Manufacturing */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.20", "Manufacturing")}</h3>
                                <p className="text-slate-600">{__t("s1.21", "Customer, employee, dealer, supplier and enquiry data.")}</p>
                            </div>
                            
                            {/* Real Estate */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.22", "Real Estate")}</h3>
                                <p className="text-slate-600">{__t("s1.23", "Buyer, tenant, lead, broker and customer information.")}</p>
                            </div>
                            
                            {/* IT & SaaS */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.24", "IT & SaaS")}</h3>
                                <p className="text-slate-600">{__t("s1.25", "User, customer, support, application and marketing data.")}</p>
                            </div>
                            
                            {/* Hotels & Hospitality */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.26", "Hotels & Hospitality")}</h3>
                                <p className="text-slate-600">{__t("s1.27", "Guest, booking, contact, loyalty and marketing information.")}</p>
                            </div>
                            
                            {/* Healthcare */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.28", "Healthcare")}</h3>
                                <p className="text-slate-600">{__t("s1.29", "Patient, appointment, employee and related personal data.")}</p>
                            </div>
                            
                            {/* Education */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.30", "Education")}</h3>
                                <p className="text-slate-600">{__t("s1.31", "Student, parent/guardian, admission and academic information.")}</p>
                            </div>
                            
                            {/* Banking & Financial Services */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.32", "Banking & Financial Services")}</h3>
                                <p className="text-slate-600">{__t("s1.33", "Customer, KYC, employee and financial-service related data.")}</p>
                            </div>
                            
                            {/* Retail & E-Commerce */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{__t("s1.34", "Retail & E-Commerce")}</h3>
                                <p className="text-slate-600">{__t("s1.35", "Customer accounts, orders, delivery, support and marketing information.")}</p>
                            </div>
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed mt-6 font-medium">
                            <strong>{__t("s1.36", "Every organisation should assess its own processing activities and applicable requirements.")}</strong>
                        </p>
                    </div>
                    
                    {/* Key Areas of DPDP Compliance */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.37", "Key Areas of DPDP Compliance")}</h2>
                        
                        {/* Data Discovery & Inventory */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.38", "Data Discovery & Inventory")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.39", "Identify personal data, systems, applications, processing activities and data flows across the organisation.")}</p>
                        </div>
                        
                        {/* Purpose & Lawful Basis */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.40", "Purpose & Lawful Basis")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.41", "Map each processing activity to its purpose and applicable lawful basis.")}</p>
                        </div>
                        
                        {/* Privacy Notices */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.42", "Privacy Notices")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.43", "Provide clear information about personal data collection, processing purposes and applicable rights.")}</p>
                        </div>
                        
                        {/* Consent Management */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.44", "Consent Management")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.45", "Where consent is the applicable basis, manage consent, preferences, evidence and withdrawal throughout the lifecycle.")}</p>
                        </div>
                        
                        {/* Data Principal Rights */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.46", "Data Principal Rights")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.47", "Enable applicable requests such as access, correction, erasure, consent withdrawal and grievance redressal.")}</p>
                        </div>
                        
                        {/* Data Security */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.48", "Data Security")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.49", "Implement appropriate technical and organisational safeguards including access control, encryption, logging, monitoring and secure disposal.")}</p>
                        </div>
                        
                        {/* Breach Management */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.50", "Breach Management")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.51", "Establish processes to detect, assess, respond to and document personal-data breaches.")}</p>
                        </div>
                        
                        {/* Retention & Erasure */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.52", "Retention & Erasure")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.53", "Define appropriate retention periods and implement controlled review, deletion and disposal processes.")}</p>
                        </div>
                        
                        {/* Processor & Vendor Governance */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.54", "Processor & Vendor Governance")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.55", "Identify third parties processing personal data and manage their contracts, data access, security and compliance responsibilities.")}</p>
                        </div>
                        
                        {/* DPIA & Privacy Risk */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.56", "DPIA & Privacy Risk")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.57", "Assess privacy risks associated with applicable processing activities and implement appropriate controls.")}</p>
                        </div>
                        
                        {/* Children & Guardian Data */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.58", "Children & Guardian Data")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.59", "Implement appropriate controls for processing children's personal data and applicable guardian-related requirements.")}</p>
                        </div>
                        
                        {/* Governance & Audit */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{__t("s1.60", "Governance & Audit")}</h3>
                            <p className="text-slate-600 leading-relaxed">{__t("s1.61", "Maintain policies, responsibilities, assessments, audit trails, evidence, findings and remediation activities.")}</p>
                        </div>
                    </div>
                    
                    {/* DPDPA Technology Consulting */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.62", "DPDPA Technology Consulting")}</h2>
                        
                        <h3 className="text-xl font-bold mb-4 text-slate-900">{__t("s1.63", "Turning Privacy Requirements into Technology & Business Controls")}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.64", "We provide")}{" "}<strong>{__t("s1.65", "DPDPA Technology Consulting")}</strong>{" "}{__t("s1.66", "to help organisations translate India's")}{" "}<strong>{__t("s1.67", "Digital Personal Data Protection Act (DPDP Act)")}</strong>{" "}{__t("s1.68", "requirements into practical technology, processes and governance controls.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.69", "Our consulting approach covers the complete personal data lifecycle:")}</p>
                        <p className="font-bold text-slate-900 mb-2">{__t("s1.70", "Collection → Consent → Processing → Storage → Sharing → Retention → Deletion")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6">{__t("s1.71", "with a focus on improving")}{" "}<strong>{__t("s1.72", "privacy, security and regulatory readiness")}</strong>.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4 text-slate-900">{__t("s1.73", "Our Key Consulting Areas")}</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.74", "DPDPA Readiness Assessment")}</strong><br className="hidden md:inline"/>{__t("s1.75", "Assess your current technology, processes and controls to identify compliance gaps and priorities.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.76", "Personal Data Discovery & Mapping")}</strong><br className="hidden md:inline"/>{__t("s1.77", "Discover, classify and map personal data across applications, databases, business processes and data flows.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.78", "Consent & Preference Management")}</strong><br className="hidden md:inline"/>{__t("s1.79", "Design and implement consent, preference and withdrawal workflows where applicable.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.80", "Data Principal Rights")}</strong><br className="hidden md:inline"/>{__t("s1.81", "Enable technology-driven workflows for applicable access, correction, erasure and other rights requests.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.82", "Privacy Notice & Consent Workflows")}</strong><br className="hidden md:inline"/>{__t("s1.83", "Integrate privacy notices and applicable consent mechanisms into websites, applications and business processes.")}</span>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.84", "Retention & Deletion Automation")}</strong><br className="hidden md:inline"/>{__t("s1.85", "Define retention policies and automate applicable review, deletion and disposal processes.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.86", "Data Breach & Incident Management")}</strong><br className="hidden md:inline"/>{__t("s1.87", "Design workflows for incident detection, assessment, escalation, response, notification and evidence management.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.88", "Vendor & Third-Party Governance")}</strong><br className="hidden md:inline"/>{__t("s1.89", "Assess and manage third-party processors, data sharing, contractual controls and data flows.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.90", "Privacy-by-Design Assessment")}</strong><br className="hidden md:inline"/>{__t("s1.91", "Evaluate applications and new initiatives for privacy requirements before implementation or release.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.92", "Audit Trails & Compliance Reporting")}</strong><br className="hidden md:inline"/>{__t("s1.93", "Establish evidence, audit trails, compliance dashboards, assessments and management reporting.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.94", "Enterprise Application Integration")}</strong><br className="hidden md:inline"/>{__t("s1.95", "Integrate DPDP controls with ERP, CRM, HRMS, websites, mobile applications, APIs and other business systems.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">•</span>
                                    <span><strong>{__t("s1.96", "Privacy Technology Roadmap")}</strong><br className="hidden md:inline"/>{__t("s1.97", "Develop a practical roadmap for implementing and continuously improving privacy technology and controls.")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Our DPDP Implementation Approach */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.98", "Our DPDP Implementation Approach")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.99", "We help organisations move from")}{" "}<strong>{__t("s1.100", "compliance requirements to an operational privacy framework")}</strong>.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">01 —</span>
                                    <span><strong>{__t("s1.101", "Assess")}</strong><br className="hidden md:inline"/>{__t("s1.102", "Understand your organisation, personal data, systems, processes and current compliance posture.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">02 —</span>
                                    <span><strong>{__t("s1.103", "Design")}</strong><br className="hidden md:inline"/>{__t("s1.104", "Define the appropriate privacy processes, technology controls, governance structure and implementation roadmap.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">03 —</span>
                                    <span><strong>{__t("s1.105", "Implement")}</strong><br className="hidden md:inline"/>{__t("s1.106", "Implement notices, consent, rights, retention, security, processor, incident and governance controls.")}</span>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">04 —</span>
                                    <span><strong>{__t("s1.107", "Integrate")}</strong><br className="hidden md:inline"/>{__t("s1.108", "Connect privacy controls with your existing business applications and technology ecosystem.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">05 —</span>
                                    <span><strong>{__t("s1.109", "Monitor")}</strong><br className="hidden md:inline"/>{__t("s1.110", "Continuously track compliance activities, risks, requests, incidents, vendors and remediation.")}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 text-blue-600 mr-3">06 —</span>
                                    <span><strong>{__t("s1.111", "Demonstrate")}</strong><br className="hidden md:inline"/>{__t("s1.112", "Maintain evidence, audit trails, reports and compliance records to demonstrate your privacy posture.")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Sentinel-DPDP */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.113", "Sentinel-DPDP")}</h2>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">{__t("s1.114", "Your DPDP Compliance Control Center")}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            <strong>{__t("s1.115", "Sentinel-DPDP")}</strong>{" "}{__t("s1.116", "helps organisations operationalise their privacy programme through a unified platform covering:")}</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 pl-5">
                            <li>{__t("s1.117", "Data Inventory & Processing")}</li>
                            <li>{__t("s1.118", "Purpose & Lawful Basis")}</li>
                            <li>{__t("s1.119", "Privacy Notices")}</li>
                            <li>{__t("s1.120", "Consent Management")}</li>
                            <li>{__t("s1.121", "Data Principal Rights")}</li>
                            <li>{__t("s1.122", "Grievance Management")}</li>
                            <li>{__t("s1.123", "Processor & Data Sharing Management")}</li>
                            <li>{__t("s1.124", "Retention & Erasure")}</li>
                            <li>{__t("s1.125", "Breach Management")}</li>
                            <li>{__t("s1.126", "DPIA & Privacy Risk")}</li>
                            <li>{__t("s1.127", "Security & Governance")}</li>
                            <li>{__t("s1.128", "Audit & Compliance Evidence")}</li>
                            <li>{__t("s1.129", "Compliance Monitoring & Reporting")}</li>
                        </ul>
                        <p className="text-slate-600 font-bold mt-4">{__t("s1.130", "From Data Discovery to Demonstrable Compliance.")}</p>
                    </div>
                    
                    {/* DPDP Compliance Lifecycle */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.131", "DPDP Compliance Lifecycle")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>{__t("s1.132", "Discover")}</strong><br/>{__t("s1.133", "Identify personal data, systems, applications and processors.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>{__t("s1.134", "Assess")}</strong><br/>{__t("s1.135", "Understand purposes, lawful basis, risks and compliance gaps.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>{__t("s1.136", "Implement")}</strong><br/>{__t("s1.137", "Deploy the required privacy, security and governance controls.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>{__t("s1.138", "Integrate")}</strong><br/>{__t("s1.139", "Connect DPDP controls with your business applications.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>{__t("s1.140", "Monitor")}</strong><br/>{__t("s1.141", "Track compliance, risks, incidents, rights and remediation.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                            <strong>↓</strong><br/>
                            <strong>{__t("s1.142", "Audit & Improve")}</strong><br/>{__t("s1.143", "Maintain evidence, assess controls and continuously improve.")}</p>
                    </div>
                    
                    {/* Why Choose Us? */}
                    <div className="mb-16 bg-white rounded-xl border border-slate-200 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.144", "Why Choose Us?")}</h2>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">{__t("s1.145", "Technology + Compliance + Business Process")}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.146", "DPDP compliance cannot be addressed through documentation alone.")}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.147", "Our approach combines:")}</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li><strong>{__t("s1.148", "Regulatory Understanding")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.149", "Business Process")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.150", "Technology")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.151", "Security")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.152", "Automation")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.153", "Governance")}</strong><br className="hidden md:inline"/>•</li>
                            <li><strong>{__t("s1.154", "Continuous Monitoring")}</strong><br className="hidden md:inline"/>•</li>
                        </ul>
                        <p className="text-slate-600 font-bold mt-4">{__t("s1.155", "This enables organisations to move beyond a static compliance programme and build an")}{" "}<strong>{__t("s1.156", "operational privacy framework integrated into their everyday business processes and technology landscape.")}</strong>
                        </p>
                    </div>
                    
                    {/* Start Your DPDP Journey */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{__t("s1.157", "Start Your DPDP Journey")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">{__t("s1.158", "Not sure where your organisation stands?")}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{__t("s1.159", "We can help you assess your current DPDP readiness, identify technology and process gaps, and develop a practical implementation roadmap.")}</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                            <a href={__u("s1.160", "#assessment")} className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group">{__t("s1.161", "Request a DPDP Assessment")}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href={__u("s1.162", "#contact")} className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors group">{__t("s1.163", "Talk to Our DPDPA Technology Consultants")}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href={__u("s1.164", "#contact")} className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors group">{__t("s1.165", "Explore Sentinel-DPDP")}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Disclaimer */}
                    <div className="mb-16 bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            <strong>{__t("s1.166", "Disclaimer")}</strong><br/>{__t("s1.167", "This content is provided for general informational purposes and does not constitute legal advice. DPDP applicability and obligations may vary depending on the organisation, processing activities, sector, exemptions and applicable legal requirements.")}</p>
                        <p className="text-slate-500 text-sm leading-relaxed mt-2">
                            <strong>{__t("s1.168", "Last Reviewed: August 2026")}</strong>
                        </p>
                    </div>
                </div>
            </section></CmsSection>
        </>
    );
}