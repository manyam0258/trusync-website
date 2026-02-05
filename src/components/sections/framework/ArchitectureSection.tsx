"use client";

import React from "react";
import { motion } from "framer-motion";

export function ArchitectureSection() {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                        Built on the Frappe Framework: <span className="text-slate-600">Low-code, high performance</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        All apps in the ecosystem share the same DNA. A full-stack web application framework (Python/JS) where metadata is treated as data.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative pt-12">
                    {/* Top Label */}
                    <div className="text-center mb-12 relative z-10">
                        <span className="bg-white px-4 py-2 rounded-full border border-blue-200 text-blue-800 font-semibold shadow-sm inline-block transform -rotate-1">
                            Powers the entire Ecosystem
                            <span className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 transform rotate-45 translate-y-1/2 -translate-x-1/2"></span>
                        </span>
                    </div>

                    {/* Three Blocks Row */}
                    <div className="grid md:grid-cols-3 gap-6 relative z-10 mb-8">
                        <ArchitectureCard
                            title="Frappe UI & Espresso"
                            subtitle="Vue-based library."
                            description="Modernism and minimalism."
                            color="border-blue-500 shadow-blue-100"
                            titleColor="text-blue-900"
                            delay={0.1}
                        />

                        <ArchitectureCard
                            title="Frappe Studio"
                            subtitle="Visual app builder."
                            description="Drag-and-drop interface."
                            color="border-orange-400 shadow-orange-100"
                            titleColor="text-orange-900"
                            delay={0.2}
                            dashedLine
                        />

                        <ArchitectureCard
                            title="Core Engine"
                            subtitle="Python & JS."
                            description="High performance backend."
                            color="border-slate-400 shadow-slate-100"
                            titleColor="text-slate-900"
                            delay={0.3}
                        />
                    </div>

                    {/* Base Framework Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-indigo-900 text-white p-8 rounded-xl shadow-xl mx-4 md:mx-0 border-b-8 border-indigo-950"
                    >
                        <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-sm text-slate-600 hidden lg:block w-28 text-right">
                            <strong>Rapid Development:</strong><br />
                            Metadata-driven architecture.
                            <div className="absolute right-[-20px] top-1/2 w-4 h-[1px] bg-slate-400"></div>
                        </div>

                        <div className="absolute -left-32 bottom-4 text-sm text-slate-600 hidden lg:block w-28 text-right">
                            <strong>Connectivity:</strong><br />
                            Built-in REST API, Auth, DB Abstraction.
                            <div className="absolute right-[-20px] top-1/2 w-4 h-[1px] bg-slate-400"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-center">Frappe Framework</h3>
                    </motion.div>

                    {/* Dotted Connections */}
                    <div className="absolute inset-0 pointer-events-none hidden md:block">
                        <svg className="w-full h-full">
                            <line x1="50%" y1="230" x2="50%" y2="400" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArchitectureCard({ title, subtitle, description, color, titleColor, delay, dashedLine }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className={`bg-white p-6 rounded-xl border-2 ${color} shadow-lg text-center relative h-full flex flex-col justify-center min-h-[160px]`}
        >
            <h3 className={`font-bold text-lg mb-2 ${titleColor}`}>{title}</h3>
            <p className="text-sm font-medium text-slate-700">{subtitle}</p>
            <p className="text-sm text-slate-500">{description}</p>

            {/* 3D effect bottom border */}
            <div className="absolute bottom-[-2px] left-[-2px] right-[-2px] h-2 bg-black/5 rounded-b-xl z-[-1]"></div>
        </motion.div>
    )
}
