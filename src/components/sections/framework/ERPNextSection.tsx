"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, PieChart, Landmark, TrendingUp } from "lucide-react";

export function ERPNextSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-slate-900 text-center lg:text-left">
                    ERPNext: The financial backbone of the <span className="text-blue-600">enterprise</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Financial Accounting</h3>
                            <ul className="space-y-4">
                                <FeatureItem
                                    title="Tree-View Chart of Accounts:"
                                    text="Organise ledgers into parent and child nodes."
                                />
                                <FeatureItem
                                    title="Global Compliance:"
                                    text="Multi-company, multi-currency support with consolidated financial statements (GL, P&L, Balance Sheet)."
                                />
                                <FeatureItem
                                    title="Dimensions:"
                                    text="Track profitability using Cost Centres and Accounting Dimensions."
                                />
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Asset Management</h3>
                            <ul className="space-y-4">
                                <FeatureItem
                                    title="Full Lifecycle:"
                                    text="Track assets from acquisition to retirement."
                                />
                                <FeatureItem
                                    title="Automation:"
                                    text="Auto-calculate depreciation (Straight Line, Double Declining)."
                                />
                                <FeatureItem
                                    title="Maintenance:"
                                    text="Schedule asset maintenance and value adjustments."
                                />
                            </ul>
                        </div>
                    </div>

                    {/* Right Visuals - Mockup */}
                    <div className="relative">
                        {/* Chart Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 z-10 relative"
                        >
                            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                <div>
                                    <h4 className="font-bold text-slate-700">Profit & Loss</h4>
                                    <span className="text-xs text-slate-400">Inter, Slate Grey</span>
                                </div>
                                <span className="text-slate-400 text-xs bg-slate-100 px-2 py-1 rounded">View Report</span>
                            </div>

                            <div className="h-64 flex items-end justify-between gap-2 px-4">
                                {[30, 45, 60, 50, 75, 90, 80].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                        className="w-full bg-blue-600 rounded-t-sm opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-slate-500 text-center">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                            </div>
                        </motion.div>

                        {/* Asset Card Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-10 -right-4 md:-right-10 w-72 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 p-5"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="font-bold text-slate-800">Asset Card</h5>
                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">Active</span>
                            </div>
                            <div className="flex gap-4 items-center mb-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                                    <Laptop className="text-blue-600 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-700">MacBook Pro M2</div>
                                    <div className="text-xs text-slate-500">ID: ASSET-001</div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-500">Depreciation</span>
                                    <span className="text-orange-500 font-medium">65% Depreciated</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "65%" }}
                                        transition={{ delay: 0.8, duration: 1 }}
                                        className="h-full bg-orange-500 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ title, text }: { title: string, text: string }) {
    return (
        <li className="flex items-start gap-2 text-slate-600">
            <div className="min-w-[6px] h-[6px] rounded-full bg-slate-900 mt-2.5"></div>
            <span>
                <strong className="text-slate-900">{title}</strong> {text}
            </span>
        </li>
    )
}
