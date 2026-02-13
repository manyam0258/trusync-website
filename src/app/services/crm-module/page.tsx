import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Mail, MessageSquare, List, Grip, Layout, Box, Users, DollarSign, Smartphone, Settings, BarChart3, Globe, Phone, Facebook, Instagram } from 'lucide-react';
import HeroImage from '@/components/crm/HeroImage';
import CRMImage from '@/components/crm/CRMImage';

export const metadata: Metadata = {
    title: 'Frappe CRM Implementation | Customer Relationships That Last',
    description: 'Frappe CRM helps you work, not slow you down. Open-source, intuitive, and free from extra costs. Centralize your sales, support, and marketing.',
};

export default function CRMModulePage() {
    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-white/50 -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900">
                        Customer relationships <br className="hidden md:block" /> that last.
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                        Frappe CRM helps you work, not slow you down. <br className="hidden md:block" />
                        Open-source, intuitive, and free from extra costs.
                    </p>

                    {/* Hero Image */}
                    <HeroImage />
                    <p className="mt-8 text-sm text-slate-500 font-mono">Modern. Open Source. Frictionless.</p>
                </div>
            </section>

            {/* DETAILED FEATURES SECTIONS */}

            {/* 1. Contact & Deal Management */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Users size={24} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Never miss out on follow-ups for new leads.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A lead shows interest, but without the right follow-up, they move on.
                                Frappe CRM captures them all in a single queue, tracking every call, email, and note.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Unified Pipeline</h4>
                                        <p className="text-slate-600">Visualize your sales pipeline with the Kanban view. Move deals through customizable stages.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Products & Pricing</h4>
                                        <p className="text-slate-600">Add products, adjust prices, and apply discounts directly in the deal. Know exactly what's being sold.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Central Hub</h4>
                                        <p className="text-slate-600">Link every contact to their deals. Access full history of interactions for Organizations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Deal Management UI */}
                        <div className="relative">
                            <CRMImage
                                src="/assets/crm/Deals.webp"
                                alt="Frappe CRM Deals Pipeline Visualization"
                                className="shadow-xl rounded-xl border border-slate-200 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Communications */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Communications UI */}
                        <div className="order-2 lg:order-1 relative">
                            <CRMImage
                                src="/assets/crm/screen3.png"
                                alt="Unified Communications Hub"
                                className="shadow-xl rounded-xl border border-slate-200 w-full"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <MessageSquare size={24} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Link with email and save time.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Sales conversations are dynamic. Frappe CRM keeps every email linked to the right lead or deal, so you never lose context.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Email Templates</h4>
                                        <p className="text-slate-600">Save common responses as templates to respond efficiently while keeping communications personalized.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Log Calls & Notes</h4>
                                        <p className="text-slate-600">Automatically track calls via Exotel/Twilio or log manually. Link notes directly to interactions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Team Collaboration</h4>
                                        <p className="text-slate-600">Tag teammates directly on deals to get quick input. Notifications keep you in the loop.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Reports & Analytics */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                <BarChart3 size={24} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Save your views with a click.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Stop reapplying the same filters every day. Create Saved Views with your preferred details so you can pull up the exact list you need instantly.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Shared & Pinned Views</h4>
                                        <p className="text-slate-600">Share views with your team or keep them private. Pin frequency used lists to the sidebar.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Forecasting</h4>
                                        <p className="text-slate-600">Use deal values and probabilities to get a realistic estimate of expected revenue.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Insightful Dashboards</h4>
                                        <p className="text-slate-600">See top deals, team performance, and monthly trends at a glance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Analytics UI */}
                        <div className="relative">
                            <CRMImage
                                src="/assets/crm/dashboards.webp"
                                alt="Analytics Dashboard"
                                className="shadow-xl rounded-xl border border-slate-200 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Settings size={24} />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Make it your own.
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                The underlying platform for Frappe CRM is the powerful <strong>Frappe Framework</strong>.
                                It allows you to rapidly build new data models or extend pre-existing ones.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                Adding custom fields or tables is a breeze, and you can add quick automation using pluggable Python scripts.
                                Frappe CRM offers a unified product experience out of the box, but with zero limits on customization.
                            </p>
                            <Link href="/#contact" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                                Explore Customization controls <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative">
                            <CRMImage
                                src="/assets/crm/AddCustomField.webp"
                                alt="Frappe Framework Customization Interface"
                                className="shadow-xl rounded-xl border border-slate-200 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Native WhatsApp Integration Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* WhatsApp Image Removed as requested */}
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center h-full min-h-[300px]">
                                <div className="text-center">
                                    <Phone size={64} className="text-green-500 mx-auto mb-4" />
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Connect Directly</h4>
                                    <p className="text-slate-600">Seamlessly integrated with WhatsApp Business API</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            {/* WhatsApp Logo */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="bg-[#25D366] p-2 rounded-full text-white">
                                    <Phone size={24} fill="white" className="border-none" />
                                </div>
                                <span className="font-bold text-[#25D366] text-xl">WhatsApp Integration</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 leading-tight">
                                Move faster with WhatsApp.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Sales happens across different channels. Frappe CRM works with the tools you already use, so your leads, deals, and conversations stay linked without extra effort.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <p className="text-lg text-slate-700">
                                        <span className="font-bold text-slate-900">Direct Access:</span> Message directly from the Deal page.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <p className="text-lg text-slate-700">
                                        <span className="font-bold text-slate-900">Templates:</span> Send pre-approved templates for instant engagement.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <p className="text-lg text-slate-700">
                                        <span className="font-bold text-slate-900">Unified History:</span> Chat logs saved to the CRM timeline.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Omni-Channel Integrations Section (Updated) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            {/* Logos */}
                            <div className="mb-6 flex items-center gap-4">
                                <Globe className="w-8 h-8 text-blue-600" />
                                <div className="h-6 w-px bg-slate-300"></div>
                                <div className="flex gap-3 text-slate-600 items-center">
                                    <Facebook className="w-8 h-8 text-[#1877F2]" fill="#1877F2" stroke="none" />
                                    <Instagram className="w-8 h-8 text-[#E4405F]" />
                                    <span className="font-bold text-slate-500 ml-2">Exotel</span>
                                    <span className="font-bold text-slate-500">Twilio</span>
                                </div>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Automatically pull leads from Facebook & Instagram.
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Managing leads inside Meta’s dashboard feels disconnected. Downloading CSVs or manually copying details allows leads to slip through the cracks.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                Frappe CRM pulls every Meta lead straight into your pipeline with all the details filled in. Your team sees every lead right inside the CRM, exactly where it belongs.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                <strong>And it doesn't stop there.</strong> Frappe CRM also supports <strong>Exotel and Twilio CTI & SMS integrations</strong> to ensure you are connected with your customers on every channel.
                            </p>
                        </div>
                        <div className="relative">
                            <CRMImage
                                src="/assets/crm/integration.PNG"
                                alt="Omni-channel Integrations with Meta, Exotel, and Twilio"
                                className="shadow-xl rounded-xl border border-slate-200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Philosophy */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Sharp, modern, and minimal.</h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        We invested in making a beautiful and powerful design system called <strong>Espresso</strong>.
                        It blends modernism and minimalism so that it helps the user focus on their core activity without being distracted by annoying design inconsistencies.
                    </p>
                </div>
            </section>

            {/* Mobile / PWA Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Access your CRM from any device.
                            </h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Fast, app-like experience right from your browser. Managing your profile, leaves, and deals on the go has never been easier.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <Smartphone className="w-8 h-8 text-blue-400" />
                                    <div>
                                        <h4 className="font-bold text-lg">PWA Ready</h4>
                                        <p className="text-slate-400">Installable on iOS and Android.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <Layout className="w-8 h-8 text-blue-400" />
                                    <div>
                                        <h4 className="font-bold text-lg">Responsive Design</h4>
                                        <p className="text-slate-400">Adapts to any screen size seamlessly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <CRMImage
                                src="/assets/crm/mobile_app.webp"
                                alt="Frappe CRM Mobile View"
                                className="shadow-2xl rounded-3xl border-8 border-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & Community */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <Users size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Not just a product, but a community.</h3>
                            <p className="text-slate-600 mb-6 text-lg">
                                Frappe CRM is fully open source and backed by a vibrant, global community. You are never locked into one vendor.
                                Join a global community where people help each other.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                <DollarSign size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Don&apos;t pay per user.</h3>
                            <p className="text-slate-600 mb-6 text-lg">
                                Most CRM products charge per user. We don&apos;t think that&apos;s fair.
                                Frappe products are priced based on compute, allowing you to start low and scale without per-seat penalties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Story / Final CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Built to scratch our own itch</p>
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">
                        &quot;It all began with rethinking our sales experience.&quot;
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Existing CRMs were too basic, too expensive, or closed source. So we built our own.
                        Now, it&apos;s open for everyone.
                    </p>
                    <Link href="/#contact" className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Start your implementation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
