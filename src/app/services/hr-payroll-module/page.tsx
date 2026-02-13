'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ClipboardList, Globe, MessageSquare, Handshake, ChevronRight, CheckSquare, Square, User, Laptop, Shield, FileText, FileSpreadsheet, FolderOpen, Calculator, Lock, PiggyBank, Puzzle, MapPin, Fingerprint, Clock, UserCheck, Calendar as CalendarIcon, BookOpen, GitPullRequest, AlertCircle, Receipt, Globe2, Banknote, RefreshCw, Send, Smartphone, LayoutDashboard, ScrollText, Play, Code2, Users, Lightbulb, Zap, UserPlus, Search as SearchIcon, Award, Activity } from 'lucide-react';
import { Button } from "@/components/ui/Button";

const UploadTarget = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 13v8" /><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="m8 17 4-4 4 4" /></svg>
);
export default function HRPayrollPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
                            >
                                Frappe HR & ERPNext: <br />
                                <span className="text-slate-900">People, Not Paperwork.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl"
                            >
                                A comprehensive, open-source HRMS and Payroll solution designed for the modern enterprise.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="border-t-4 border-blue-600 pt-6 max-w-lg"
                            >
                                <p className="text-xl text-slate-800 font-medium mb-2">
                                    Drive excellence with a solution that covers everything from Onboarding to Separation. Open Source. Modern. Integrated.
                                </p>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3] relative"
                            >
                                <img
                                    src="/assets/hero-team.png"
                                    alt="Frappe HR Team Collaboration"
                                    className="w-full h-full object-cover object-[80%_center]"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Frappe HR? */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Why Choose Frappe HR?</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Lock, title: "No Vendor Lock-in", sub: "(Open Source)" },
                            { icon: PiggyBank, title: "Cost Effective", sub: "" },
                            { icon: Globe, title: "Community", sub: "Powered" },
                            { icon: Puzzle, title: "Fully Integrated", sub: "" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <item.icon size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                                {item.sub && <p className="text-slate-500 text-sm">{item.sub}</p>}
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <h3 className="text-2xl font-bold text-slate-800">Transform your employee experience.<br />Start your journey with Frappe HR today.</h3>
                    </motion.div>
                </div>
            </section>

            {/* Built on the Frappe Framework */}
            <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Built on the Frappe Framework</h2>
                        <p className="text-lg text-slate-600">A powerful, low-code foundation that powers the world's best open-source ERP.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Stack Visual */}
                        <div className="lg:w-1/2 w-full max-w-lg mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {/* Top Layer: App */}
                                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-xl text-center relative z-30 transform hover:-translate-y-1 transition-transform border border-blue-500">
                                    <h3 className="text-2xl font-bold">Frappe HR & ERPNext</h3>
                                </div>

                                {/* Middle Layer: Framework */}
                                <div className="bg-blue-100 text-slate-800 p-8 rounded-xl shadow-md text-center relative z-20 border border-blue-200 mx-4">
                                    <h3 className="text-xl font-bold mb-2">Frappe Framework</h3>
                                    <p className="text-sm text-slate-600 font-medium">(Low Code, API, Permissions)</p>
                                </div>

                                {/* Bottom Layer: Database/Lang */}
                                <div className="bg-slate-800 text-slate-300 p-8 rounded-xl shadow-inner text-center relative z-10 mx-8">
                                    <h3 className="text-xl font-bold font-mono">Python & MariaDB</h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Features List */}
                        <div className="lg:w-1/2 space-y-6">
                            {[
                                { icon: Code2, title: "Low Code", desc: "Customize fields and forms without coding." },
                                { icon: Zap, title: "API First", desc: "Easy integration with 3rd party tools." },
                                { icon: Shield, title: "Robust Security", desc: "Granular Role-Based Permissions." },
                                { icon: Globe, title: "Open Source", desc: "Built on standard, modern technologies." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start p-4 hover:bg-white rounded-xl transition-colors"
                                >
                                    <div className="text-blue-600 mt-1"><item.icon size={28} strokeWidth={1.5} /></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hub & Spoke Section - Revamped */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Everything Under One Roof</h2>
                        <p className="text-xl text-slate-500">A unified ecosystem for your entire workforce.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Interactive Diagram */}
                        <div className="relative h-[600px] w-full flex items-center justify-center">
                            {/* Central Glow */}
                            <div className="absolute w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50" />

                            {/* Center Node */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative z-20 w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center text-center p-2 shadow-2xl border-4 border-blue-100"
                            >
                                <div className="bg-blue-600 p-3 rounded-full text-white mb-2 shadow-lg">
                                    <User size={32} />
                                </div>
                                <h3 className="font-bold text-slate-900 leading-tight text-sm">Employee Master</h3>
                            </motion.div>

                            {/* Spoke Nodes */}
                            {[
                                { title: "Recruitment", x: 0, y: -220, icon: SearchIcon },
                                { title: "Onboarding", x: 190, y: -110, icon: UserPlus },
                                { title: "Attendance", x: 190, y: 110, icon: Clock },
                                { title: "Payroll", x: 0, y: 220, icon: Banknote },
                                { title: "Performance", x: -190, y: 110, icon: Award },
                                { title: "Expenses", x: -190, y: -110, icon: Receipt },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="absolute z-10 flex flex-col items-center justify-center"
                                    style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                                >
                                    {/* Connecting Line */}
                                    <div
                                        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-blue-200 to-transparent w-[100px] -z-10 origin-left"
                                        style={{
                                            transform: `rotate(${Math.atan2(-node.y, -node.x) * (180 / Math.PI)}deg) translate(0, -50%)`,
                                            width: Math.sqrt(node.x * node.x + node.y * node.y) - 80
                                        }}
                                    />

                                    <div className="bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
                                        <div className="text-blue-500">
                                            <node.icon size={18} />
                                        </div>
                                        <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{node.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="space-y-10">
                            {[
                                { title: "Complete Coverage", desc: "13+ integrated modules covering the entire lifecycle." },
                                { title: "Single Source of Truth", desc: "Update once, reflect everywhere. No more data duplication." },
                                { title: "Strategic Focus", desc: "Automate administrative tasks to focus on company culture." },
                                { title: "Scale Ready", desc: "Proven architecture that scales from 10 to 10,000 employees." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 relative"
                                >
                                    {/* Connecting Line Vertical */}
                                    {i !== 3 && <div className="absolute left-[19px] top-[40px] bottom-[-40px] w-[2px] bg-slate-100" />}

                                    <div className="relative mt-1">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border-4 border-white shadow-sm z-10 relative">
                                            <Check size={20} strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Talent Acquisition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-16 text-blue-700">Strategic Talent Acquisition</h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
                        {[
                            { title: "Staffing Plan", sub: "Budget & Requirement Planning", icon: ClipboardList },
                            { title: "Job Portal Publishing", sub: "Built-in Career Site", icon: Globe },
                            { title: "Interview Management", sub: "Track Rounds & Feedback", icon: MessageSquare },
                            { title: "Job Offer & Hiring", sub: "One-click Employee Creation", icon: Handshake },
                        ].map((step, i) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center max-w-[250px]"
                                >
                                    <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 text-white transform hover:scale-105 transition-transform duration-300">
                                        <step.icon size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-800">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed px-4">{step.sub}</p>
                                </motion.div>

                                {i < 3 && (
                                    <div className="hidden lg:block text-blue-300">
                                        <ArrowRight size={40} strokeWidth={2.5} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 mx-auto max-w-fit"
                    >
                        <div className="flex items-center gap-4 bg-blue-50 border border-blue-200 px-6 py-4 rounded-xl shadow-sm">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <ArrowRight size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block font-bold text-slate-900">Seamless Transition:</span>
                                <span className="block text-slate-600">Applicant Data &rarr; Employee Master</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Frictionless Onboarding */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Frictionless Onboarding & Lifecycle Management</h2>

                    {/* Features Grid - Full Width */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: User, title: "Employee Lifecycle", desc: "Track Onboarding to Separation." },
                            { icon: Laptop, title: "Asset Management", desc: "Link devices to users for accountability." },
                            { icon: Shield, title: "Role-Based Permissions", desc: "Auto-assign access based on Designation." },
                            { icon: FileText, title: "Document Management", desc: "Digital storage for all proofs." },
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center gap-3"
                            >
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 h-fit">
                                    <feat.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">{feat.title}</h4>
                                    <p className="text-sm text-slate-600 leading-snug">{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        {/* Radar Chart Implementation (SVG) */}
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-sm w-full"
                            >
                                <h4 className="text-center font-bold mb-4 text-slate-800 text-sm">Employee Skill Map</h4>
                                <div className="relative aspect-square">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-[8px] font-medium text-slate-400">
                                        {/* Background Grid (Pentagons) */}
                                        {[20, 35, 50].map((r, i) => (
                                            <polygon
                                                key={i}
                                                points="50,15 85,38 72,80 28,80 15,38"
                                                fill="none"
                                                stroke="#e2e8f0"
                                                strokeWidth="1"
                                                transform={`scale(${r / 50})`}
                                                className="origin-center"
                                            />
                                        ))}

                                        {/* Axes */}
                                        <line x1="50" y1="50" x2="50" y2="15" stroke="#e2e8f0" />
                                        <line x1="50" y1="50" x2="85" y2="38" stroke="#e2e8f0" />
                                        <line x1="50" y1="50" x2="72" y2="80" stroke="#e2e8f0" />
                                        <line x1="50" y1="50" x2="28" y2="80" stroke="#e2e8f0" />
                                        <line x1="50" y1="50" x2="15" y2="38" stroke="#e2e8f0" />

                                        {/* Data Shape */}
                                        <polygon
                                            points="50,20 80,45 65,75 35,75 25,45"
                                            fill="rgba(37, 99, 235, 0.2)"
                                            stroke="#2563eb"
                                            strokeWidth="2"
                                        />

                                        {/* Data Points */}
                                        <circle cx="50" cy="20" r="1.5" fill="#2563eb" />
                                        <circle cx="80" cy="45" r="1.5" fill="#2563eb" />
                                        <circle cx="65" cy="75" r="1.5" fill="#2563eb" />
                                        <circle cx="35" cy="75" r="1.5" fill="#2563eb" />
                                        <circle cx="25" cy="45" r="1.5" fill="#2563eb" />

                                        {/* Labels - Explicitly Small */}
                                        <text x="50" y="10" textAnchor="middle" fontSize="6">Python</text>
                                        <text x="90" y="38" textAnchor="start" fontSize="6">Communication</text>
                                        <text x="75" y="90" textAnchor="middle" fontSize="6">Leadership</text>
                                        <text x="25" y="90" textAnchor="middle" fontSize="6">Project Mgmt</text>
                                        <text x="5" y="38" textAnchor="end" fontSize="6">Data Analysis</text>
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Onboarding Checklist Card */}
                        <div className="lg:w-1/2 flex justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 max-w-sm w-full transform rotate-1 hover:rotate-0 transition-transform duration-300"
                            >
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="font-bold text-lg text-slate-900">Onboarding Checklist</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    {[
                                        { text: "Create Corporate Email", checked: true },
                                        { text: "Assign Laptop (Asset Linked)", checked: true },
                                        { text: "Upload ID Proofs", checked: true },
                                        { text: "Introductory Meeting", checked: false },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            {item.checked ? (
                                                <div className="bg-blue-600 rounded text-white p-0.5"><Check size={14} strokeWidth={3} /></div>
                                            ) : (
                                                <Square className="text-slate-300" size={20} />
                                            )}
                                            <span className={item.checked ? "text-slate-700 font-medium text-sm" : "text-slate-400 text-sm"}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precision in Time & Attendance */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative order-last lg:order-first">
                            {/* Mobile Mockup */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
                            >
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">
                                    {/* App Header */}
                                    <div className="bg-white p-6 pt-12 pb-4 shadow-sm z-10">
                                        <h3 className="font-bold text-lg">Frappe HR</h3>
                                        <p className="text-xs text-slate-500">High-fidelity HR app</p>
                                    </div>
                                    {/* App Content */}
                                    <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
                                        {/* Background Elements */}
                                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                                            <div className="grid grid-cols-2 gap-2 p-2">
                                                <div className="bg-blue-500 h-20 rounded-lg"></div>
                                                <div className="bg-blue-300 h-20 rounded-lg"></div>
                                                <div className="bg-purple-500 h-20 rounded-lg"></div>
                                                <div className="bg-purple-300 h-20 rounded-lg"></div>
                                            </div>
                                        </div>

                                        <div className="w-48 h-48 rounded-full bg-blue-500 shadow-lg shadow-blue-200 flex items-center justify-center mb-8 relative z-10 cursor-pointer hover:scale-105 transition-transform">
                                            <span className="text-white text-xl font-bold">Check-in</span>
                                        </div>
                                        <p className="text-2xl font-bold text-slate-800 mb-2">09:02 AM</p>
                                        <div className="w-full bg-slate-200 h-32 rounded-xl mt-4 relative overflow-hidden">
                                            {/* Map Placeholder */}
                                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                                <MapPin className="text-slate-400" size={32} />
                                            </div>
                                            <div className="absolute bottom-2 left-2 right-2 bg-white/90 p-2 rounded text-xs text-center font-medium">
                                                Location: HQ Office (Geofenced)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 text-slate-900">Precision in Time & Attendance</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: MapPin, title: "Smart Check-ins", desc: "Geolocation validation for field staff." },
                                    { icon: Fingerprint, title: "Biometric Integration", desc: "Sync with office hardware." },
                                    { icon: Clock, title: "Shift Management", desc: "Complex roster handling." },
                                    { icon: UserCheck, title: "Auto Attendance", desc: "Automated presence marking based on logs." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600 h-fit">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparent Leave Management */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Transparent Leave Management</h2>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Calendar UI Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
                        >
                            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="font-bold text-slate-800">Leave Calendar</h3>
                                <span className="text-slate-500 text-sm font-medium">October 2024</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-slate-400">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {/* Simple Calendar Grid Generation */}
                                    {Array.from({ length: 31 }).map((_, i) => {
                                        const day = i + 1;
                                        // Mocking some leave status
                                        let statusColor = "bg-slate-50";
                                        let text = "";
                                        if ([24, 25].includes(day)) { statusColor = "bg-red-100 text-red-700 font-medium"; text = "Holiday"; }
                                        if ([18, 19, 20].includes(day)) { statusColor = "bg-purple-100 text-purple-700 font-medium"; text = "Privilege"; }
                                        if ([4, 5, 11, 12, 17, 21].includes(day)) { statusColor = "bg-green-100 text-green-700 font-bold"; text = "Present"; }

                                        return (
                                            <div key={i} className={`h-24 ${statusColor} rounded-lg p-2 text-xs relative border border-slate-100 flex flex-col justify-between`}>
                                                <span className="text-slate-500">{day}</span>
                                                {text && <span className="block truncate">{text}</span>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Features & Balance */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h4 className="font-bold text-lg mb-4 text-slate-900 border-b pb-2">Leave Balance</h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-600">Casual Leave</span>
                                        <span className="font-bold text-blue-600">5 Days</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-600">Sick Leave</span>
                                        <span className="font-bold text-blue-600">8 Days</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-600">Privilege Leave</span>
                                        <span className="font-bold text-blue-600">12 Days</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    { icon: BookOpen, title: "Policy & Allocation", desc: "Define rules by region/dept." },
                                    { icon: FileSpreadsheet, title: "Ledger Integrity", desc: "Track every accrual and usage." },
                                    { icon: GitPullRequest, title: "Approval Workflows", desc: "Configurable multi-level routing." },
                                    { icon: AlertCircle, title: "Special Cases", desc: "Handle LWP & compensatory requests." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="text-blue-600 mt-1"><item.icon size={20} /></div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">{item.title}</h5>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expenses & Claims */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Expenses, Claims & Accounting Integration</h2>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Diagram */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-10 rounded-3xl relative flex items-center justify-center min-h-[400px]"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between">
                                {/* Expense Claim Card */}
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 w-full md:w-5/12 relative z-10">
                                    <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold">
                                        <FileText size={20} /> Expense Claim
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded border border-slate-100 mb-2">
                                        <div className="text-xs text-slate-400 mb-1">Receipt</div>
                                        <div className="flex items-center gap-2 font-medium">
                                            <Receipt size={16} /> Flight to NY - $400
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex flex-col items-center text-blue-600 z-0">
                                    <span className="text-sm font-bold mb-2 uppercase tracking-wider">Auto-Posting</span>
                                    <ArrowRight size={40} className="hidden md:block" />
                                    <div className="md:hidden h-12 w-0.5 bg-blue-600 my-2"></div>
                                </div>

                                {/* Ledger Entry Card */}
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 w-full md:w-5/12 relative z-10">
                                    <div className="flex items-center gap-2 mb-4 text-green-600 font-bold">
                                        <FileSpreadsheet size={20} /> GL Entry
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Debit: <span className="font-medium">Travel Expense</span></span>
                                            <span>$400</span>
                                        </div>
                                        <div className="flex justify-between text-slate-500">
                                            <span>Credit: <span className="font-medium">Employee Payables</span></span>
                                            <span>$400</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { icon: Receipt, title: "Streamlined Claims", desc: "Digital submission with attachments." },
                                { icon: Globe2, title: "Multi-Currency", desc: "Native support for international travel." },
                                { icon: Banknote, title: "Employee Advances", desc: "Reconcile advances against future claims." },
                                { icon: RefreshCw, title: "ERPNext Synergy", desc: "Zero reconciliation errors with integrated accounting." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 p-6 rounded-xl"
                                >
                                    <div className="text-blue-600 mb-4"><item.icon size={32} /></div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Automated Payroll Processing */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Automated Payroll Processing</h2>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 relative">
                            {/* Features List */}
                            <div className="space-y-8">
                                {[
                                    { icon: Check, title: "One-Click Generation", desc: "Batch process for the entire company." },
                                    { icon: RefreshCw, title: "Intelligent Linking", desc: "Auto-adjusts for Leave Without Pay (LWP)." },
                                    { icon: Send, title: "Distribution", desc: "Instant email delivery of password-protected slips." },
                                    { icon: Banknote, title: "Bank Integration", desc: "Generate bank-ready payment files." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="p-3 bg-blue-600 rounded-full text-white h-fit shadow-lg shadow-blue-200">
                                            <item.icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* UI Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Background: Payroll Entry List */}
                                <div className="bg-white border-2 border-slate-100 rounded-xl shadow-xl p-4 overflow-hidden transform scale-[0.9] origin-bottom-left opacity-60 blur-[1px]">
                                    <div className="flex justify-between mb-4 border-b pb-2">
                                        <span className="font-bold text-slate-700">Payroll Entry</span>
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Process Payroll</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="flex gap-4 text-xs text-slate-400 bg-slate-50 p-2 rounded">
                                                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="w-24 h-2 bg-slate-200 rounded"></div>
                                                    <div className="w-16 h-2 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Foreground: Salary Slip */}
                                <div className="absolute top-10 left-10 right-0 bottom-[-40px] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 z-10 w-[90%] md:w-[400px]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold text-xl text-slate-900">Salary Slip</h3>
                                        <div className="text-right text-xs text-slate-500">
                                            <div className="font-bold text-slate-700">Employee Name</div>
                                            <div>Salary Manajar</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div className="bg-slate-50 p-3 rounded">
                                            <div className="font-bold mb-2 text-slate-700">Earnings</div>
                                            <div className="flex justify-between mb-1"><span>Basic</span> <span className="font-medium">$3000</span></div>
                                            <div className="flex justify-between mb-1"><span>HRA</span> <span className="font-medium">$500</span></div>
                                            <div className="flex justify-between"><span>Special</span> <span className="font-medium">$200</span></div>
                                        </div>
                                        <div className="bg-slate-50 p-3 rounded">
                                            <div className="font-bold mb-2 text-slate-700">Deductions</div>
                                            <div className="flex justify-between mb-1"><span>PF</span> <span className="font-medium">$200</span></div>
                                            <div className="flex justify-between"><span>Tax</span> <span className="font-medium">$150</span></div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                                        <span className="text-blue-700 font-bold">Net Pay</span>
                                        <span className="text-2xl font-bold text-slate-900">$3350</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payroll: The Foundation - Revamped */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Payroll: The Foundation</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {[
                                { icon: Puzzle, title: "Flexible Structures", desc: "Configure salary components based on Grades or Designations." },
                                { icon: Calculator, title: "Complex Logic", desc: "Use Python/JS formulas for intricate calculations." },
                                { icon: Banknote, title: "Tax Slabs", desc: "Pre-configured regionally compliant tax brackets." },
                                { icon: Clock, title: "Timesheet Integration", desc: "Auto-process pay based on billable hours." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="text-blue-600 h-fit mt-1">
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Modern Flow Diagram */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>

                            <div className="flex flex-col items-center relative z-10 gap-8">
                                {/* Top: Inputs */}
                                <div className="flex justify-center gap-4 w-full">
                                    <div className="flex-1 bg-blue-50 border-2 border-blue-100 rounded-2xl p-4 text-center">
                                        <span className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Input</span>
                                        <h4 className="font-bold text-slate-800 text-lg">Earnings</h4>
                                        <div className="mt-2 text-xs text-slate-500 font-mono">Basic, HRA, Special</div>
                                    </div>
                                    <div className="flex-1 bg-red-50 border-2 border-red-100 rounded-2xl p-4 text-center">
                                        <span className="block text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Input</span>
                                        <h4 className="font-bold text-slate-800 text-lg">Deductions</h4>
                                        <div className="mt-2 text-xs text-slate-500 font-mono">PF, Tax, Loan</div>
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="text-slate-300">
                                    <ChevronRight size={32} className="rotate-90" />
                                </div>

                                {/* Middle: Processing */}
                                <div className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl relative w-full text-center">
                                    <div className="absolute -inset-1 bg-blue-500 rounded-xl opacity-20 blur"></div>
                                    Salary Structure & Processing
                                </div>

                                {/* Arrow Down */}
                                <div className="text-slate-300">
                                    <ChevronRight size={32} className="rotate-90" />
                                </div>

                                {/* Bottom: Output */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl w-full flex items-center justify-between shadow-sm group hover:border-blue-500 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                            <FileSpreadsheet size={24} />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-xl text-slate-900">Salary Slip</h3>
                                            <p className="text-sm text-slate-500">Generated & Distributed</p>
                                        </div>
                                    </div>
                                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Compliance, Taxation & Benefits */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-16 text-slate-900">Compliance, Taxation & Benefits</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: FileText, title: "Tax Exemption Declaration", desc: "Digital submission of proofs and exemptions." },
                            { icon: GitPullRequest, title: "Flexible Benefit Allocation", desc: "Employees structure their own allowances." },
                            { icon: Handshake, title: "Full & Final Settlement", desc: "Automated encashment and recovery on exit." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                            >
                                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
                                    <item.icon size={40} />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance & Talent Development - Revamped */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Performance & Talent Development</h2>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-8">
                            {[
                                { icon: UploadTarget, title: "Appraisals", desc: "Track Goals and KRAs with unified dashboards." },
                                { icon: UserCheck, title: "360 Feedback", desc: "Collect insights from Self, Peers, and Managers." },
                                { icon: Users, title: "Skill Mapping", desc: "Identify skill gaps and nurture internal talent." },
                                { icon: CalendarIcon, title: "Training", desc: "Schedule events and track training effectiveness." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                                >
                                    <div className="p-3 bg-white border border-slate-200 rounded-full text-blue-600 h-fit shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:w-1/2 relative flex justify-center">
                            {/* Polished Radar Chart Card */}
                            <motion.div
                                initial={{ opacity: 0, zoom: 0.9 }}
                                whileInView={{ opacity: 1, zoom: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 relative"
                            >
                                <div className="absolute top-4 right-6 text-slate-400 font-mono text-xs">Skill Matrix 2024</div>

                                <div className="w-[340px] h-[340px] relative">
                                    {/* Pentagonal Radar Chart SVG */}
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                                            </radialGradient>
                                        </defs>

                                        {/* Background Grid */}
                                        {[1, 2, 3, 4, 5].map(level => (
                                            <polygon
                                                key={level}
                                                points="50,10 90,38 75,85 25,85 10,38"
                                                fill={level % 2 === 0 ? "#f8fafc" : "#ffffff"}
                                                stroke="#e2e8f0"
                                                strokeWidth="0.5"
                                                transform={`scale(${level * 0.2})`}
                                                style={{ transformOrigin: '50px 50px' }}
                                            />
                                        ))}

                                        {/* Axes */}
                                        <line x1="50" y1="50" x2="50" y2="10" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,1" />
                                        <line x1="50" y1="50" x2="90" y2="38" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,1" />
                                        <line x1="50" y1="50" x2="75" y2="85" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,1" />
                                        <line x1="50" y1="50" x2="25" y2="85" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,1" />
                                        <line x1="50" y1="50" x2="10" y2="38" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,1" />

                                        {/* Data Polygon */}
                                        <polygon
                                            points="50,15 85,42 70,80 30,75 20,45"
                                            fill="url(#radarGradient)"
                                            stroke="#2563eb"
                                            strokeWidth="2"
                                            className="drop-shadow-md"
                                        />

                                        {/* Data Points with Pulsing Effect */}
                                        {[
                                            { cx: 50, cy: 15 }, { cx: 85, cy: 42 }, { cx: 70, cy: 80 }, { cx: 30, cy: 75 }, { cx: 20, cy: 45 }
                                        ].map((pt, i) => (
                                            <circle key={i} cx={pt.cx} cy={pt.cy} r="2.5" fill="#2563eb" stroke="white" strokeWidth="1" />
                                        ))}

                                        {/* Styled Labels */}
                                        <text x="50" y="6" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#475569">Coding</text>
                                        <text x="94" y="38" textAnchor="start" fontSize="3.5" fontWeight="bold" fill="#475569">Teamwork</text>
                                        <text x="75" y="92" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#475569">Delivery</text>
                                        <text x="25" y="92" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#475569">Innovation</text>
                                        <text x="6" y="38" textAnchor="end" fontSize="3.5" fontWeight="bold" fill="#475569">Communication</text>
                                    </svg>
                                </div>

                                {/* Training Calendar Popover */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-6 -right-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-52 hidden md:block"
                                >
                                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                                        <CalendarIcon size={14} className="text-blue-500" />
                                        <h5 className="font-bold text-slate-800 text-sm">Training Calendar</h5>
                                    </div>
                                    <div className="space-y-3 text-xs">
                                        <div className="flex justify-between items-center group cursor-pointer">
                                            <span className="text-slate-600 group-hover:text-blue-600 transition-colors">Leadership</span>
                                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Oct 12</span>
                                        </div>
                                        <div className="flex justify-between items-center group cursor-pointer">
                                            <span className="text-slate-600 group-hover:text-blue-600 transition-colors">Python Adv</span>
                                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Nov 05</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HR in Your Pocket */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">HR in Your Pocket</h2>
                    <p className="text-lg text-slate-600">Full functionality on the go using our PWA-ready mobile interface.</p>
                </div>

                <div className="container mx-auto px-4 overflow-x-auto pb-12">
                    <div className="flex gap-8 justify-center min-w-max md:min-w-0">
                        {/* Phone 1: Dashboard */}
                        <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[260px] shadow-xl">
                            <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-slate-50 flex flex-col pt-8 relative">
                                <div className="absolute top-0 w-32 h-6 bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-bold text-slate-700">Frappe HR</span>
                                        <LayoutDashboard size={16} />
                                    </div>
                                    <div className="bg-blue-600 text-white p-4 rounded-xl mb-4 shadow-lg shadow-blue-200">
                                        <div className="text-xs opacity-80 mb-1">Leave Balance</div>
                                        <div className="text-2xl font-bold mb-2">12 Days</div>
                                        <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="text-xs font-bold text-slate-400 mb-2 uppercase">Upcoming Holidays</div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Dussehra</span> <span className="text-slate-500">Oct 25</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Diwali</span> <span className="text-slate-500">Nov 1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 2: Expense Claim */}
                        <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[260px] shadow-xl mt-8">
                            <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-slate-50 flex flex-col pt-8 relative">
                                <div className="absolute top-0 w-32 h-6 bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-bold text-slate-700">Expense Claim</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-white p-2 rounded border border-slate-200 text-xs text-slate-500">Expense Type</div>
                                        <div className="bg-white p-2 rounded border border-slate-200 text-xs text-slate-500">Amount</div>
                                        <div className="h-32 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50 flex flex-col items-center justify-center text-blue-500">
                                            <div className="bg-white p-2 rounded-full mb-2"><Smartphone size={20} /></div>
                                            <span className="text-xs font-bold">Scan Receipt</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 3: Payslip */}
                        <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[260px] shadow-xl">
                            <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-slate-50 flex flex-col pt-8 relative">
                                <div className="absolute top-0 w-32 h-6 bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-bold text-slate-700">Payslip View</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="text-center mb-4 pb-4 border-b">
                                            <div className="text-xs text-slate-400">September 2023</div>
                                            <div className="text-2xl font-bold text-slate-800">$4,200</div>
                                            <div className="text-xs text-green-600 font-bold">Paid</div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span>Gross</span> <span>$5000</span></div>
                                            <div className="flex justify-between text-red-500"><span>Deductions</span> <span>-$800</span></div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t text-center">
                                            <button className="text-blue-600 text-xs font-bold border border-blue-600 px-4 py-2 rounded-lg">Download PDF</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disconnected Systems Cost */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-16 text-slate-900">The Cost of Disconnected Systems</h2>

                    <div className="relative max-w-4xl mx-auto mb-20">
                        {/* Messy Lines SVG Background */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200">
                            <path d="M 100 50 Q 250 150 400 50 T 700 50" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
                            <path d="M 100 50 C 200 150 600 -50 700 50" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
                            <path d="M 400 50 L 100 120" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
                            <path d="M 400 50 L 700 120" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
                        </svg>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {[
                                { icon: FileSpreadsheet, title: "Manual Payroll", desc: "Excel" },
                                { icon: FolderOpen, title: "Onboarding Files", desc: "Physical/Drive" },
                                { icon: Calculator, title: "Leave Requests", desc: "Email/Chat" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-4 shadow-sm text-slate-500">
                                        <item.icon size={40} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-left">
                        {[
                            { title: "Scattered Processes", desc: "Employee data lives in silos, leading to duplication and errors." },
                            { title: "Manual Overload", desc: "Payroll calculations done on spreadsheets risk compliance and accuracy." },
                            { title: "Disconnected Records", desc: "No single source of truth for employee history or assets." },
                            { title: "Time-Consuming", desc: "Chasing managers for signatures instead of strategic talent management." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-slate-50 p-6 rounded-xl"
                            >
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
}
