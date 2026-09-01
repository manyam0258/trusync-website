import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Generative AI & LLM Solutions | TruSync Innovations',
    description: 'Turn AI possibilities into real business results with practical, secure and scalable Generative AI and Large Language Model solutions.',
};

export default function AIAutomationPage() {
    return (
        <>
            {/* Hero Section - Using ServicePageLayout for consistent styling */}
            <ServicePageLayout
                title="Generative AI & LLM Solutions"
                subtitle="Turn AI Possibilities into Real Business Results"
                painPoints={[
                    { title: 'Manual Effort', description: 'Teams spending excessive time on repetitive, manual tasks.' },
                    { title: 'Limited Insights', description: 'Difficulty extracting actionable intelligence from business data.' },
                    { title: 'Slow Decision-Making', description: 'Inability to quickly process information for timely decisions.' },
                ]}
                features={[
                    { title: 'Knowledge Automation', description: 'AI-powered understanding of documents, emails and reports.' },
                    { title: 'Intelligent Assistants', description: 'AI chatbots and virtual agents for employees and customers.' },
                    { title: 'Decision Support', description: 'AI-enhanced analysis for faster, data-driven decisions.' },
                    { title: 'Document Processing', description: 'Automated extraction and classification of business documents.' },
                ]}
                techStack={['Python', 'TensorFlow/PyTorch', 'OpenAI API', 'LangChain', 'Vector Databases']}
                ctaText="Explore AI Solutions"
                ctaLink="#services"
            />
            
            {/* Main Content Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* Hero Introduction */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                            Generative AI & LLM Solutions
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Turn AI Possibilities into Real Business Results
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Generative AI is transforming the way businesses work—from automating repetitive tasks and processing documents to creating intelligent assistants and accelerating decision-making. We help organizations move beyond AI experimentation and implement practical, secure and scalable Generative AI and Large Language Model (LLM) solutions that deliver measurable business value.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Whether you are exploring your first AI use case or looking to scale an existing AI initiative, we work with you from strategy and use-case identification to development, integration and deployment.
                        </p>
                    </div>
                    
                    {/* How We Help Your Business */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
                            How We Help Your Business
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Automate Knowledge-Intensive Work */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-9 3a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 8a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Automate Knowledge-Intensive Work</h3>
                                        <p className="text-slate-600">
                                            Reduce manual effort by using AI to understand documents, emails, reports and business information and convert them into actionable insights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Build Intelligent Business Assistants */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Build Intelligent Business Assistants</h3>
                                        <p className="text-slate-600">
                                            Create AI-powered assistants that help employees and customers find information, answer questions and complete routine tasks faster.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Unlock Enterprise Knowledge */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-9 3a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 8a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Unlock Enterprise Knowledge</h3>
                                        <p className="text-slate-600">
                                            Connect AI with your organization's approved documents, policies, procedures and knowledge repositories to make information easier to access and use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Improve Decision-Making */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Improve Decision-Making</h3>
                                        <p className="text-slate-600">
                                            Use AI to summarize large volumes of information, identify patterns, generate insights and support faster business decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Transform Document Processing */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-9 3a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 8a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4m4-2a2 2 0 012-2h2m2 2h4"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Transform Document Processing</h3>
                                        <p className="text-slate-600">
                                            Automate the extraction, validation and classification of information from invoices, contracts, purchase orders, applications and other business documents.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Accelerate Product & Application Development */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 1118 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">Accelerate Product & Application Development</h3>
                                        <p className="text-slate-600">
                                            Leverage AI to accelerate software development, documentation, testing, knowledge management and product innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Additional Service - AI Strategy & Consulting */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 1118 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">AI Strategy & Consulting</h3>
                                        <p className="text-slate-600">
                                            Comprehensive AI strategy development, use-case identification and assessment for enterprise AI initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Our Generative AI Services */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
                            Our Generative AI Services
                        </h2>
                        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
                            We offer a comprehensive suite of Generative AI and LLM services designed to address diverse business needs across industries.
                        </p>
                        
                        <div className="space-y-4">
                            {/* Service Items */}
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>Generative AI Strategy & Consulting</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Use-Case Identification & Assessment</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>Enterprise AI Assistants</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Chatbots & Conversational AI</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>Retrieval-Augmented Generation (RAG)</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>Intelligent Document Processing</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI-powered Search & Knowledge Management</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Workflow Automation</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Integration with ERP, CRM and Business Applications</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Proof of Concept (PoC) Development</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Application Modernization</strong></span>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 text-blue-600 mr-4">•</span>
                                <span><strong>AI Governance & Responsible AI Advisory</strong></span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Call to Action Section */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">
                            Ready to Transform Your Business with AI?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                            Whether you're starting your AI journey or looking to scale existing initiatives, our team of AI specialists can help you achieve measurable business results through practical, secure and scalable AI solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group">
                                Get Started with AI Consulting
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/services/ai-development" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors group">
                                View Our AI Development Services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}