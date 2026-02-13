"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    CalendarDays,
    BookOpen,
    CreditCard,
    ShieldAlert,
    FileSpreadsheet
} from "lucide-react";

export function VerticalsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl lg:text-4xl font-bold mb-16 text-slate-900">
                    Deep vertical capabilities: <span className="text-slate-600">Education and Lending</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Education Card */}
                    <VerticalCard
                        title="Frappe Education"
                        titleColor="text-blue-800"
                        icon={<SchoolIcon />}
                        target="For B-Schools, Academies, and Schools."
                        borderColor="border-blue-200"
                        bgAccent="bg-blue-50/50"
                    >
                        <VerticalFeature
                            icon={<GraduationCap className="w-5 h-5 text-blue-600" />}
                            title="Student Lifecycle:"
                            text="Applicant -> Student -> Alumni."
                        />
                        <VerticalFeature
                            icon={<BookOpen className="w-5 h-5 text-blue-600" />}
                            title="Academics:"
                            text="Course scheduling, assessment plans, grading."
                        />
                        <VerticalFeature
                            icon={<CalendarDays className="w-5 h-5 text-blue-600" />}
                            title="Portals:"
                            text="Student self-service for fees and timetables."
                        />
                    </VerticalCard>

                    {/* Lending Card */}
                    <VerticalCard
                        title="Frappe Lending"
                        titleColor="text-orange-600"
                        icon={<VaultIcon />}
                        target="For NBFCs and financial lenders."
                        borderColor="border-slate-300"
                        bgAccent="bg-slate-50/50"
                    >
                        <VerticalFeature
                            icon={<CreditCard className="w-5 h-5 text-orange-600" />}
                            title="Loan Lifecycle:"
                            text="Origination -> Disbursement -> Closure."
                        />
                        <VerticalFeature
                            icon={<ShieldAlert className="w-5 h-5 text-orange-600" />}
                            title="Risk Engine:"
                            text="Automated NPA classification and DPD tracking."
                        />
                        <VerticalFeature
                            icon={<FileSpreadsheet className="w-5 h-5 text-orange-600" />}
                            title="Complex Accounting:"
                            text="Co-lending support, collateral management."
                        />
                    </VerticalCard>
                </div>
            </div>
        </section>
    );
}

function VerticalCard({ title, titleColor, icon, target, children, borderColor, bgAccent }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className={`border rounded-3xl p-8 lg:p-10 ${borderColor} ${bgAccent} relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl`}
        >
            <div className="flex justify-between items-start mb-8">
                <h3 className={`text-2xl font-bold ${titleColor}`}>{title}</h3>
                <div className="hidden sm:block scale-110">{icon}</div>
            </div>

            <div className="sm:hidden mb-8 flex justify-center scale-110">{icon}</div>

            <p className="font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">{target}</p>

            <ul className="space-y-5">
                {children}
            </ul>

            {/* Tech Decoration Lines */}
            <div className="absolute bottom-4 left-4 w-12 h-1 bg-slate-200 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 -right-1 h-12 w-1 bg-slate-200 rounded-full opacity-50"></div>
        </motion.div>
    )
}

function VerticalFeature({ icon, title, text }: any) {
    return (
        <li className="flex gap-4 items-start group">
            <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="text-slate-600 text-sm mt-1">
                <strong className="text-slate-900 block mb-0.5">{title}</strong> {text}
            </div>
        </li>
    )
}

function SchoolIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M50 10 L10 30 L50 50 L90 30 L50 10Z"
                fill="#dbeafe" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"
            />
            <motion.rect
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                x="20" y="50" width="60" height="40" fill="#eff6ff" stroke="#2563eb" strokeWidth="2"
            />
            <motion.path
                initial={{ height: 0 }}
                whileInView={{ height: 40 }}
                transition={{ delay: 0.8 }}
                d="M40 50 V 90" stroke="#2563eb" strokeWidth="2"
            />
            <motion.path
                initial={{ height: 0 }}
                whileInView={{ height: 40 }}
                transition={{ delay: 1 }}
                d="M60 50 V 90" stroke="#2563eb" strokeWidth="2"
            />
            <path d="M50 25 V 40" stroke="#2563eb" strokeWidth="2" />
            <circle cx="50" cy="35" r="5" fill="white" stroke="#2563eb" strokeWidth="2" />
        </svg>
    )
}

function VaultIcon() {
    return (
        <motion.div
            initial={{ rotate: -10 }}
            whileInView={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative w-20 h-20 bg-slate-100 border-2 border-slate-600 rounded-xl flex items-center justify-center shadow-lg"
        >
            <div className="w-14 h-14 rounded-full border-2 border-slate-500 bg-slate-200 flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border-2 border-slate-500 bg-slate-300"></div>
                {/* Bolts */}
                <div className="absolute w-1.5 h-1.5 rounded-full bg-slate-400 top-1"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-slate-400 bottom-1"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-slate-400 left-1"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-slate-400 right-1"></div>
            </div>
            {/* Percentage Badge */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-2 -right-2 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow-md z-10"
            >
                %
            </motion.div>
        </motion.div>
    )
}
