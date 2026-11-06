"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { CmsSection, useCms } from '@/components/code-pages/runtime';

export function ComparisonSection() {
    const { t: __t, u: __u, m: __m } = useCms();
    return (
        <CmsSection id="compar-s1"><section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">{__t("compar-s1.1", "Replace chaos with a")}{" "}<span className="text-slate-700">{__t("compar-s1.2", "unified, scalable foundation")}</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-xl bg-white">
                    {/* Left Side: The Friction */}
                    <div className="p-8 lg:p-12 bg-slate-100/50 border-r border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-500 mb-8 text-center">{__t("compar-s1.3", "The Friction")}</h3>

                        {/* Visual Placeholder for "Chaos" */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative w-48 h-48 opacity-60">
                                {/* Abstract Chaos SVG */}
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <circle cx="50" cy="50" r="20" fill="#cbd5e1" />
                                    <rect x="120" y="30" width="40" height="40" fill="#cbd5e1" />
                                    <circle cx="150" cy="150" r="25" fill="#cbd5e1" />
                                    <rect x="40" y="130" width="50" height="30" fill="#cbd5e1" />

                                    {/* Messy Lines */}
                                    <path d="M50 50 L120 30 M120 70 L 150 150 M 150 150 L 90 145 M 50 50 L 150 150" stroke="#64748B" strokeWidth="2" fill="none" />
                                    <path d="M50 50 Q 80 100 150 150" stroke="#64748B" strokeWidth="2" fill="none" />
                                    <path d="M140 50 Q 100 80 60 140" stroke="#64748B" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <FrictionItem text={__t("compar-s1.4", "Scattered processes and disconnected records lead to data silos.")} />
                            <FrictionItem text={__t("compar-s1.5", "Proprietary SaaS models enforce 'per-user' licensing penalties.")} />
                            <FrictionItem text={__t("compar-s1.6", "Black-box code creates vendor lock-in and hinders customization.")} />
                        </ul>
                    </div>

                    {/* Right Side: The Frappe Advantage */}
                    <div className="p-8 lg:p-12 bg-white">
                        <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">{__t("compar-s1.7", "The Frappe Advantage")}</h3>

                        {/* Visual Placeholder for "Ordered Grid" */}
                        <div className="mb-8 flex justify-center">
                            <div className="grid grid-cols-4 gap-2 w-48 mx-auto">
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`w-8 h-8 rounded-sm ${i % 2 === 0 ? 'bg-blue-600' : 'bg-blue-200'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <AdvantageItem
                                title={__t("compar-s1.8", "100% Open Source:")}
                                text={__t("compar-s1.9", " No vendor lock-in; you own your data and code.")}
                            />
                            <AdvantageItem
                                title={__t("compar-s1.10", "Unified Truth:")}
                                text={__t("compar-s1.11", " Eliminate silos—HR, Finance, and Sales share one database.")}
                            />
                            <AdvantageItem
                                title={__t("compar-s1.12", "Fair Pricing:")}
                                text={__t("compar-s1.13", " Pay for computational resources consumed, not per user.")}
                            />
                            <AdvantageItem
                                title={__t("compar-s1.14", "Batteries Included:")}
                                text={__t("compar-s1.15", " Everything needed is built-in, from database abstraction to UI.")}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section></CmsSection>
    );
}

function FrictionItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-slate-600">
            <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
            <span>{text}</span>
        </li>
    )
}

function AdvantageItem({ title, text }: { title: string, text: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
            <span className="text-slate-800">
                <span className="font-bold">{title}</span>
                {text}
            </span>
        </li>
    )
}
