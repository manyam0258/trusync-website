"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layers,
    Users,
    ShoppingCart,
    FileText,
    BarChart3,
    GraduationCap,
    Headphones,
    Globe
} from "lucide-react";

export function FrameworkHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                            The Operating System for <span className="text-blue-600">Modern Business</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                            A unified, open-source ecosystem that breaks down silos and powers your entire enterprise.
                        </p>
                    </motion.div>
                </div>

                {/* Ecosystem Diagram */}
                <div className="relative max-w-5xl mx-auto mt-12 min-h-[500px] hidden md:block">
                    {/* Central Hub */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <div className="relative w-40 h-40 bg-white rounded-full shadow-[0_0_40px_rgba(37,99,235,0.2)] flex items-center justify-center border-4 border-white z-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-blue-200"
                            />
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-2 flex items-center justify-center shadow-lg shadow-blue-200">
                                    <Layers className="text-white w-8 h-8" />
                                </div>
                                <span className="font-bold text-slate-900 block text-sm">Frappe<br />Framework</span>
                            </div>
                        </div>

                        {/* Outer Ripple */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-100 rounded-full -z-10"
                        />
                    </motion.div>

                    {/* Orbiting Satellites */}
                    <Satellite
                        icon={<FileText />} label="ERPNext"
                        angle={0} radius={220} delay={0.1} color="bg-blue-100 text-blue-600"
                    />
                    <Satellite
                        icon={<Users />} label="HR"
                        angle={45} radius={220} delay={0.2} color="bg-orange-100 text-orange-600"
                    />
                    <Satellite
                        icon={<Headphones />} label="Helpdesk"
                        angle={90} radius={220} delay={0.3} color="bg-purple-100 text-purple-600"
                    />
                    <Satellite
                        icon={<ShoppingCart />} label="Commerce"
                        angle={135} radius={220} delay={0.4} color="bg-green-100 text-green-600"
                    />
                    <Satellite
                        icon={<BarChart3 />} label="Insights"
                        angle={180} radius={220} delay={0.5} color="bg-cyan-100 text-cyan-600"
                    />
                    <Satellite
                        icon={<Globe />} label="Builder"
                        angle={225} radius={220} delay={0.6} color="bg-pink-100 text-pink-600"
                    />
                    <Satellite
                        icon={<GraduationCap />} label="LMS"
                        angle={270} radius={220} delay={0.7} color="bg-yellow-100 text-yellow-600"
                    />
                    <Satellite
                        icon={<Layers />} label="Custom Apps"
                        angle={315} radius={220} delay={0.8} color="bg-slate-100 text-slate-600"
                    />
                </div>

                {/* Mobile Fallback */}
                <div className="md:hidden grid grid-cols-2 gap-4">
                    <MobileCard icon={<FileText />} label="ERPNext" color="bg-blue-50 text-blue-600" />
                    <MobileCard icon={<Users />} label="HR" color="bg-orange-50 text-orange-600" />
                    <MobileCard icon={<Headphones />} label="Helpdesk" color="bg-purple-50 text-purple-600" />
                    <MobileCard icon={<BarChart3 />} label="Insights" color="bg-cyan-50 text-cyan-600" />
                </div>

            </div>
        </section>
    );
}

function Satellite({ icon, label, angle, radius, delay, color }: any) {
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, type: "spring" }}
            className="absolute left-1/2 top-1/2 flex flex-col items-center gap-3 z-10"
            style={{ x, y, marginLeft: -32, marginTop: -32 }} // Center offset
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-white/50 backdrop-blur-sm ${color}`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </motion.div>

            <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100 text-sm font-semibold text-slate-700 whitespace-nowrap">
                {label}
            </div>

            {/* Connection Line */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10 pointer-events-none opacity-20">
                <line
                    x1="250" y1="250"
                    x2={250 - x} y2={250 - y}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-slate-400"
                />
            </svg>
        </motion.div>
    )
}

function MobileCard({ icon, label, color }: any) {
    return (
        <div className={`p-4 rounded-xl border border-slate-100 flex items-center gap-3 ${color}`}>
            {icon}
            <span className="font-bold">{label}</span>
        </div>
    )
}
