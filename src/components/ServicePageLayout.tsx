'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertTriangle, Server, Code, Database } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
}

interface PainPoint {
    title: string;
    description: string;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    heroImage?: string;
    painPoints: PainPoint[];
    features: Feature[];
    techStack?: string[];
    ctaText?: string;
    ctaLink?: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
    title,
    subtitle,
    painPoints,
    features,
    techStack = ['Python', 'JavaScript', 'MariaDB'],
    ctaText = 'Book a Free Consultation',
    ctaLink = '#contact',
}) => {
    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans">
            <section className="relative overflow-hidden bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-lg">
                            {subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
                            >
                                {ctaText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="w-full h-96 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]" />
                            <div className="text-center p-8">
                                <span className="text-6xl font-black text-white/5 tracking-widest uppercase">TruSync</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Conventional Solutions Fall Short</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Generic software often creates more problems than it solves. We address specific industry challenges head-on.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {painPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{point.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">The TruSync Advantage</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Purpose-built solutions designed for scalability, performance, and real-world results.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Built on Robust Open Source Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <Code className="w-8 h-8 text-yellow-400" />
                            </div>
                            <span className="font-semibold">{techStack[0]}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <Server className="w-8 h-8 text-green-400" />
                            </div>
                            <span className="font-semibold">{techStack[1] || 'Node.js'}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <Database className="w-8 h-8 text-blue-400" />
                            </div>
                            <span className="font-semibold">{techStack[2] || 'PostgreSQL'}</span>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link href="/services/hire-dedicated-developer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                            View our technical expertise
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Don&apos;t let outdated software hold you back. Schedule a free discovery call with our ERP experts today.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                    >
                        Book Free Consultation
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ServicePageLayout;
