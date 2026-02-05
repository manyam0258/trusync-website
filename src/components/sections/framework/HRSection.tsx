"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    UserPlus,
    Fingerprint,
    Target,
    Wallet,
    FileCheck
} from "lucide-react";

export function HRSection() {
    const steps = [
        {
            icon: <UserPlus className="w-8 h-8 text-orange-600" />,
            title: "Onboarding",
            desc: "Lifecycle Management.\nOnboarding to Exit Interviews.",
            delay: 0.1
        },
        {
            icon: <Fingerprint className="w-8 h-8 text-orange-600" />,
            title: "Attendance",
            desc: "Geo-fenced mobile check-ins & Biometric integration.",
            delay: 0.2
        },
        {
            icon: <Target className="w-8 h-8 text-orange-600" />,
            title: "Performance",
            desc: "Track KRAs, goals, and appraisals.",
            delay: 0.3
        },
        {
            icon: <Wallet className="w-8 h-8 text-orange-600" />,
            title: "Payroll",
            desc: "Configurable salary structures & automated slip generation.",
            delay: 0.4
        },
        {
            icon: <FileCheck className="w-8 h-8 text-orange-600" />,
            title: "Expense Claims",
            desc: "Multi-level approval workflows linked to ERPNext accounting.",
            delay: 0.5
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900"
                    >
                        Frappe HR: Focus on <span className="text-orange-600">people, not paperwork</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A complete HRMS solution to drive excellence from onboarding to exit.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) with fill animation */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-orange-100 z-0 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-orange-500"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: step.delay, type: "spring" }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center group cursor-default"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, borderColor: "#f97316" }}
                                    className="w-32 h-32 rounded-full border-[6px] border-orange-100 bg-white flex items-center justify-center shadow-lg mb-6 relative transition-colors duration-300"
                                >
                                    {/* Inner Pulsing Circle */}
                                    <div className="absolute inset-2 border-2 border-orange-50 rounded-full group-hover:border-orange-200 transition-colors"></div>

                                    <motion.div
                                        whileHover={{ rotate: 10 }}
                                        className="transform transition-transform"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Connecting Arrow Tip */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-500 border-b-[8px] border-b-transparent"></div>
                                        </div>
                                    )}
                                </motion.div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line px-2">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
