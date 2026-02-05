"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Database,
    Share2,
    Folder,
    FileText,
    MousePointer2
} from "lucide-react";

export function InsightsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center text-slate-900">
                    Insights and collaboration <span className="text-slate-500">without the license fees</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Frappe Insights (BI) */}
                    <Panel
                        title="Frappe Insights (BI)"
                        titleColor="text-blue-700"
                        borderColor="border-blue-200"
                        delay={0.1}
                    >
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-6 relative overflow-hidden aspect-video">
                            {/* Fake Browser Chrome */}
                            <div className="absolute top-2 left-2 flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            </div>

                            <div className="mt-6 flex gap-4 h-full">
                                {/* Donut Chart */}
                                <div className="w-1/3 flex items-center justify-center relative">
                                    <svg viewBox="0 0 36 36" className="w-24 h-24 rotate-[-90deg]">
                                        <path className="text-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="32, 100" />
                                        <path className="text-blue-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="24, 100" strokeDashoffset="-32" />
                                        <path className="text-slate-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="22, 100" strokeDashoffset="-56" />
                                        <path className="text-slate-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="22, 100" strokeDashoffset="-78" />
                                    </svg>
                                    {/* Labels */}
                                    <span className="absolute top-0 right-0 text-[8px] text-slate-500">24%</span>
                                    <span className="absolute bottom-4 left-0 text-[8px] text-slate-500">32%</span>
                                </div>

                                {/* Line Chart */}
                                <div className="flex-1 border-l border-slate-200 pl-4 flex items-end pb-4">
                                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                                        <path d="M0 50 L 20 40 L 40 42 L 60 25 L 80 20 L 100 5" fill="none" stroke="#1e40af" strokeWidth="2" />
                                        <path d="M0 50 L 20 45 L 40 48 L 60 35 L 80 40 L 100 15" fill="none" stroke="#f97316" strokeWidth="2" />
                                        <path d="M0 50 L 20 48 L 40 35 L 60 42 L 80 30 L 100 25" fill="none" stroke="#64748B" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            <ListItem title="No-SQL Required:" text="Visual query builder for everyone." />
                            <ListItem title="Visualisation:" text="Diverse chart types (eCharts) and drag-and-drop dashboards." />
                            <ListItem title="Sources:" text="Connects to PostgreSQL, MariaDB, CSVs." />
                        </ul>
                    </Panel>

                    {/* Frappe Drive */}
                    <Panel
                        title="Frappe Drive"
                        titleColor="text-orange-600"
                        borderColor="border-orange-200"
                        delay={0.2}
                    >
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-6 relative h-48 flex items-center justify-center">
                            <div className="relative w-full max-w-xs h-full">
                                {/* Central Doc */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-white border border-slate-300 shadow-lg rounded-sm flex flex-col items-center justify-center z-20"
                                >
                                    <FileText className="w-8 h-8 text-blue-600" />
                                    <div className="w-8 h-1 bg-slate-200 mt-2"></div>
                                    <div className="w-6 h-1 bg-slate-200 mt-1"></div>
                                </motion.div>

                                {/* Folders */}
                                <FolderIcon className="left-[10%] top-[20%]" delay={0.5} />
                                <FolderIcon className="left-[20%] bottom-[20%]" delay={0.6} />
                                <FolderIcon className="right-[20%] top-[20%]" delay={0.7} />
                                <FolderIcon className="right-[10%] bottom-[30%]" delay={0.8} />

                                {/* Architecture Arrows */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <path d="M60 40 Q 100 40 130 65" stroke="#cbd5e1" fill="none" markerEnd="url(#arrow)" />
                                    <path d="M260 40 Q 220 40 190 65" stroke="#cbd5e1" fill="none" markerEnd="url(#arrow)" />
                                    <defs>
                                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="#cbd5e1" />
                                        </marker>
                                    </defs>
                                </svg>

                                {/* Cursors */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10, y: 10 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                                    className="absolute left-[45%] top-[60%] z-30"
                                >
                                    <MousePointer2 className="w-5 h-5 text-blue-600 fill-blue-600" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 10, y: 10 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                                    className="absolute right-[45%] top-[65%] z-30"
                                >
                                    <MousePointer2 className="w-5 h-5 text-orange-600 fill-orange-600" />
                                </motion.div>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            <ListItem title="Storage:" text="Folder uploads, large file support, previews." />
                            <ListItem title="Real-time Writer:" text="Collaborative document editing (powered by TipTap/YJS)." />
                            <ListItem title="Sharing:" text="Granular permissions and public links." />
                        </ul>
                    </Panel>
                </div>
            </div>
        </section>
    );
}

function Panel({ title, titleColor, borderColor, children, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className={`border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow ${borderColor}`}
        >
            <h3 className={`text-2xl font-bold mb-6 text-center ${titleColor}`}>{title}</h3>
            {children}
        </motion.div>
    )
}

function ListItem({ title, text }: any) {
    return (
        <li className="flex items-start gap-2 text-slate-600 text-sm">
            <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400 mt-2"></div>
            <span>
                <strong className="text-slate-900">{title}</strong> {text}
            </span>
        </li>
    )
}

function FolderIcon({ className, delay }: any) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay }}
            className={`absolute w-10 h-8 bg-slate-500 rounded-sm flex items-center justify-center opacity-80 ${className}`}
        >
            <div className="absolute -top-1 left-2 w-4 h-2 bg-slate-500 rounded-t-sm"></div>
        </motion.div>
    )
}
