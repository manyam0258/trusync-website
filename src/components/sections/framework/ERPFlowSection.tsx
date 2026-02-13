"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Package,
    Settings,
    Truck,
    Warehouse,
    ClipboardCheck,
    Users
} from "lucide-react";

export function ERPFlowSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-slate-900">
                        Complete visibility from <span className="text-blue-600">procurement to production</span>
                    </h2>
                </div>

                {/* Main Flow Diagram */}
                <div className="max-w-6xl mx-auto">
                    {/* Top Row: Flow Steps */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
                        {/* Connectors (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[30%] w-[10%] h-1 bg-blue-600 z-0">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rotate-45 transform translate-x-1"></div>
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white"></div>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white z-10"></div>
                        </div>
                        <div className="hidden md:block absolute top-12 right-[30%] w-[10%] h-1 bg-blue-600 z-0">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rotate-45 transform translate-x-1"></div>
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white"></div>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white z-10"></div>
                        </div>

                        <FlowCard
                            icon={<Package className="w-10 h-10 text-slate-700" />}
                            title="Procurement"
                            description="Auto-Replenishment triggers Material Requests.\nTraceability via Serial/Batch #."
                            delay={0.1}
                        />
                        <FlowCard
                            icon={<Settings className="w-10 h-10 text-slate-700" />}
                            title="Manufacturing"
                            description="Multi-level BOMs & Production Planning.\nCapacity tracking per workstation."
                            delay={0.2}
                        />
                        <FlowCard
                            icon={<Truck className="w-10 h-10 text-slate-700" />}
                            title="Distribution"
                            description="Pick-list strategies.\nSubcontracting management."
                            delay={0.3}
                        />
                    </div>

                    {/* Bottom Row: Detailed Features */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Warehouse Management"
                            icon={<Warehouse className="w-6 h-6" />}
                            text="Tree-view structure (Racks, Bins) with Put-away strategies."
                            delay={0.4}
                        />
                        <FeatureCard
                            title="Production Planning"
                            icon={<ClipboardCheck className="w-6 h-6" />}
                            text="Fetches raw material availability to initiate Work Orders."
                            delay={0.5}
                        />
                        <FeatureCard
                            title="Subcontracting"
                            icon={<Users className="w-6 h-6" />}
                            text="Manage supply of raw materials to third parties and track receipts."
                            delay={0.6}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FlowCard({ icon, title, description, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="bg-white border-2 border-blue-900 p-8 rounded-sm text-center relative z-10 hover:shadow-xl transition-shadow"
        >
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{description}</p>
        </motion.div>
    );
}

function FeatureCard({ title, text, icon, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="border border-blue-900 p-6 flex flex-col h-full hover:bg-slate-50 transition-colors"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-md">
                    {icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
        </motion.div>
    )
}
