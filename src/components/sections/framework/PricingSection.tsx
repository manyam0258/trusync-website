"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Server,
    Cloud,
    HardDrive
} from "lucide-react";

export function PricingSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">

                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-slate-900">
                    The Fairness Model: <span className="text-slate-600">Pay for compute, not users</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center mb-16 relative">

                    {/* The Old Way */}
                    <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 className="text-xl font-bold mb-6 text-slate-700">The Old Way</h3>
                        <div className="flex flex-wrap gap-2 justify-center mb-6 h-32 overflow-hidden items-center content-center opacity-50 grayscale">
                            {[...Array(20)].map((_, i) => (
                                <Users key={i} size={24} className="text-slate-400" />
                            ))}
                        </div>
                        <p className="font-medium text-slate-600">Penalty for Growth.<br />Pricing based on User Count.</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center">
                            <span className="text-xl font-bold text-slate-400">→</span>
                        </div>
                    </div>

                    {/* The Frappe Way */}
                    <div className="p-8 rounded-xl bg-white border-2 border-blue-500 shadow-xl relative overflow-hidden">
                        <h3 className="text-xl font-bold mb-6 text-blue-800">The Frappe Way</h3>

                        <div className="flex justify-center mb-6">
                            <div className="w-32 h-40 bg-slate-800 rounded-lg p-2 flex flex-col gap-2 border-4 border-slate-300 shadow-inner">
                                <div className="h-2 w-full bg-blue-500 rounded-sm animate-pulse"></div>
                                <div className="h-2 w-full bg-blue-500 rounded-sm animate-pulse delay-75"></div>
                                {/* Gauge UI */}
                                <div className="flex-1 bg-slate-900 rounded border border-slate-700 relative flex items-center justify-center">
                                    <div className="w-20 h-10 border-t-8 border-l-8 border-r-8 border-slate-600 rounded-t-full relative overflow-hidden">
                                        <motion.div
                                            animate={{ rotate: [0, 90, 45, 120, 80] }}
                                            transition={{ repeat: Infinity, duration: 5 }}
                                            className="absolute bottom-0 left-[35px] w-1 h-10 bg-red-500 origin-bottom"
                                        ></motion.div>
                                    </div>
                                    <span className="absolute bottom-2 text-[10px] text-white font-mono">CPU/RAM</span>
                                </div>
                                <div className="h-4 w-full flex gap-1">
                                    <div className="w-1/2 bg-blue-900 rounded-sm"></div>
                                    <div className="w-1/2 bg-blue-900 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                        <p className="font-medium text-slate-800 mb-2">Pay for Consumption.<br />Pricing based on Compute Resources.</p>
                        <div className="bg-orange-50 text-orange-800 text-sm font-bold py-2 px-4 rounded-full inline-block border border-orange-200">
                            Instances start from ~$5/month for UNLIMITED users.
                        </div>
                    </div>
                </div>

                {/* Deployment Options */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="border border-blue-200 rounded-lg p-6 bg-blue-50/30 flex flex-col gap-2 text-left hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                            <Cloud className="text-blue-600 w-6 h-6" />
                            <h4 className="font-bold text-blue-900 text-lg">Frappe Cloud</h4>
                        </div>
                        <p className="text-slate-600 text-sm">Managed hosting, automated backups, one-click install.</p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 flex flex-col gap-2 text-left hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                            <Server className="text-slate-600 w-6 h-6" />
                            <h4 className="font-bold text-slate-900 text-lg">Self-Hosted</h4>
                        </div>
                        <p className="text-slate-600 text-sm">Docker containers, Bench CLI, full code access.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
