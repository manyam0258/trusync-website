'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Factory,
    Settings,
    Truck,
    Cpu,
    Layers,
    GitMerge,
    ClipboardList,
    BarChart3,
    CheckCircle2,
    Zap,
    Database,
    Search,
    AlertCircle,
    ArrowRight,
    Activity,
    Box,
    Timer,
    LineChart,
    AlertTriangle,
    PieChart
} from 'lucide-react';
import { Button } from "@/components/ui/Button";
import Link from 'next/link';

// --- Components ---

const TechnicalGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
    />
);

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h2 className={`text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight ${className}`}>
        {children}
    </h2>
);

const SectionSubheading = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        {children}
    </p>
);

// --- Shop Floor Card ---
const MachineCard = ({ name, status, load, efficiency }: { name: string, status: 'Running' | 'Idle' | 'Maintenance', load: number, efficiency: number }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
    >
        <div className={`absolute top-0 left-0 w-1 h-full ${status === 'Running' ? 'bg-emerald-500' : status === 'Idle' ? 'bg-amber-400' : 'bg-red-500'}`} />
        <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg text-slate-900">{name}</h3>
            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${status === 'Running' ? 'bg-emerald-100 text-emerald-700' :
                status === 'Idle' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                }`}>
                {status}
            </span>
        </div>
        <div className="space-y-3 font-mono text-sm text-slate-600">
            <div className="flex justify-between">
                <span>Load</span>
                <span className="font-bold text-slate-900">{load}%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${load}%` }} />
            </div>
            <div className="flex justify-between pt-2">
                <span>Efficiency</span>
                <span className="font-bold text-slate-900">{efficiency}%</span>
            </div>
        </div>
    </motion.div>
);

export default function ManufacturingPage() {
    const [activeBomItem, setActiveBomItem] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">

            {/* --- Hero Section --- */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
                <TechnicalGrid />

                {/* Abstract Shapes */}
                <div className="absolute top-1/2 right-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl -z-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 mb-6 shadow-sm">
                                    <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                                    <span>Next-Gen Manufacturing ERP</span>
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-6 tracking-tighter text-slate-900">
                                    Precision <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                        in Production
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 mb-8 font-medium max-w-lg leading-relaxed">
                                    From Bill of Materials to Finished Goods—Gain complete visibility and control over your entire manufacturing process.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/25 transition-all">
                                        <Link href="/#contact">Watch Context Demo</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-slate-300 hover:bg-slate-50">
                                        <Link href="/#contact">Explore Features</Link>
                                    </Button>
                                </div>

                                <div className="mt-12 flex items-center gap-8 text-slate-400 font-mono text-xs uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        System Online
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        v15.0.0
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 relative perspective-1000">
                            <motion.div
                                initial={{ opacity: 0, rotateY: 30, scale: 0.8 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="relative z-10"
                            >
                                {/* Drone Placeholder / Image Area */}
                                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl" />
                                    <motion.img
                                        src="/assets/manufacturing/hero-drone.gif" // SVG Placeholder
                                        alt="Advanced Drone Manufacturing"
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                        animate={{
                                            y: [0, -20, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Floating Stats Cards */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="absolute top-1/4 -left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-white/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                                <Activity size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 font-bold uppercase">Efficiency</div>
                                                <div className="text-lg font-bold text-slate-900">98.5%</div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 }}
                                        className="absolute bottom-1/4 -right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-white/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                <Box size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 font-bold uppercase">Stock</div>
                                                <div className="text-lg font-bold text-slate-900">Optimal</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Blind Spots Section --- */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <SectionHeading>Eliminate Factory Blind Spots</SectionHeading>
                        <SectionSubheading>
                            Manufacturing is chaos management. Stop juggling disconnected spreadsheets and start orchestrating your shop floor with a centralized brain.
                        </SectionSubheading>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                                <AlertCircle size={24} />
                                The Challenge
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Disconnected data silos (Inventory vs Accounting)",
                                    "Unpredictable machine downtime",
                                    "Material shortages halting production",
                                    "Inaccurate costing and margin analysis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <div className="flex gap-2 items-center justify-center p-4 bg-white rounded border border-slate-200 border-dashed text-slate-400 text-sm">
                                    <span className="line-through">Spreadsheet_vFinal_v2.xlsx</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full border border-slate-200 shadow-lg z-10">
                                <ArrowRight size={24} className="text-slate-400" />
                            </div>
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <CheckCircle2 size={24} />
                                    The ERPNext Solution
                                </h3>
                                <p className="mb-6 text-blue-100 leading-relaxed">
                                    A unified platform where a change in inventory instantly reflects in accounting, and a sales order triggers production planning.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur rounded p-4 border border-white/20">
                                        <div className="text-2xl font-bold mb-1">100%</div>
                                        <div className="text-xs text-blue-200 uppercase tracking-wider">Traceability</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur rounded p-4 border border-white/20">
                                        <div className="text-2xl font-bold mb-1">0ms</div>
                                        <div className="text-xs text-blue-200 uppercase tracking-wider">Data Latency</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BOM Section (Interactive) --- */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">Defining the Product: BOM</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Multi-level Bills of Materials that handle complex structures, sub-assemblies, and scrap management with ease.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Interactive List */}
                        <div className="lg:col-span-4 space-y-2">
                            {[
                                { id: 1, name: "Propeller Assembly", type: "Sub-assembly", code: "PA-001" },
                                { id: 2, name: "Brushless Motor", type: "Raw Material", code: "RM-MT-220" },
                                { id: 3, name: "Carbon Fiber Frame", type: "Raw Material", code: "RM-FR-CF4" },
                                { id: 4, name: "4S LiPo Battery", type: "Raw Material", code: "RM-BT-4S" },
                                { id: 5, name: "Flight Controller", type: "Electronic", code: "EL-FC-X1" },
                                { id: 6, name: "Camera Gimbal", type: "Sub-assembly", code: "SA-CG-3X" },
                            ].map((item) => (
                                <motion.div
                                    key={item.id}
                                    onHoverStart={() => setActiveBomItem(item.id)}
                                    onHoverEnd={() => setActiveBomItem(null)}
                                    className={`p-4 rounded-lg cursor-pointer border transition-all duration-300 ${activeBomItem === item.id
                                        ? 'bg-blue-600/20 border-blue-500 translate-x-2'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-lg">{item.name}</div>
                                            <div className="text-xs text-slate-400 font-mono mt-1">{item.code}</div>
                                        </div>
                                        <div className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${item.type === 'Sub-assembly' ? 'bg-purple-500/20 text-purple-300' :
                                            item.type === 'Electronic' ? 'bg-yellow-500/20 text-yellow-300' :
                                                'bg-blue-500/20 text-blue-300'
                                            }`}>
                                            {item.type}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Exploded View Graphic Content */}
                        <div className="lg:col-span-8 relative min-h-[500px] flex items-center justify-center bg-slate-800/50 rounded-3xl border border-white/10 p-8">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="px-3 py-1 bg-black/40 rounded text-xs font-mono text-emerald-400 border border-emerald-500/30">
                                    Est. Cost: $485.00
                                </div>
                            </div>

                            <img
                                src="/assets/manufacturing/BOM-3.jpg"
                                alt="Drone Exploded View"
                                className="w-full h-auto object-contain max-h-[500px] mix-blend-lighten"
                            />

                            {/* Overlay Hotspots (Simulated positions) */}
                            {activeBomItem === 1 && (
                                <motion.div layoutId="hotspot" className="absolute top-[20%] right-[20%] w-16 h-16 border-2 border-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                            )}
                            {activeBomItem === 3 && (
                                <motion.div layoutId="hotspot" className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                            )}

                            <div className="absolute bottom-8 left-8 max-w-sm">
                                <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                                    <Database size={16} /> Data-Driven Manufacturing
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Every component is tracked. Scrap rates are calculated automatically. Versions are managed with change logs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MRP & Planning --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <SectionHeading>Strategic Planning & MRP</SectionHeading>
                        <SectionSubheading>
                            From sales forecast to production schedule in one click. Prevent stockouts and overproduction.
                        </SectionSubheading>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 hidden md:block" />

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Sales Order", icon: ClipboardList, desc: "Customer places order for 50 Drones.", color: "blue" },
                                { title: "MRP Engine", icon: Cpu, desc: "System checks inventory & calculates shortages.", color: "purple" },
                                { title: "Production Plan", icon: Factory, desc: "Work orders & Material Requests created.", color: "emerald" }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center relative z-10"
                                >
                                    <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center text-${step.color}-600 mb-6`}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 bg-white p-2 rounded-xl border border-slate-200 shadow-sm max-w-5xl mx-auto">
                        <img
                            src="/assets/manufacturing/mrp-flow.svg"
                            alt="MRP Process Details"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* --- Shop Floor Section --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <SectionHeading className="mb-2">Shop Floor Real-Time View</SectionHeading>
                            <p className="text-slate-600">Live monitoring of workstations, job cards, and operations.</p>
                        </div>
                        <Button variant="outline" className="gap-2 hidden md:flex">
                            <Timer size={16} /> View Production Schedule
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <MachineCard name="CNC Station 01" status="Running" load={85} efficiency={92} />
                        <MachineCard name="Assembly Line A" status="Maintenance" load={0} efficiency={0} />
                        <MachineCard name="Final Testing Bay" status="Running" load={45} efficiency={98} />
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6">Ready to optimize your production line?</h3>
                            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                                Join 5,000+ manufacturers who trust ERPNext to deliver quality products on time, every time.
                            </p>
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/#contact">Schedule a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Execution: Work Order --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <SectionHeading>Execution: The Work Order</SectionHeading>
                            <SectionSubheading>
                                The central document that signals the warehouse to release materials and the floor to begin work.
                            </SectionSubheading>

                            <div className="mt-12 space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">The Conductor</h4>
                                        <p className="text-slate-600 leading-relaxed">Signals the warehouse to release materials and the floor to begin work.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                        <Box size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">Stock Reservation</h4>
                                        <p className="text-slate-600 leading-relaxed">Reserve specific batches (e.g., Lithium Cells) against a Work Order.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">Back-Flushing</h4>
                                        <p className="text-slate-600 leading-relaxed">Upon completion, the system automatically consumes raw materials based on the BOM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative p-8 bg-white rounded-2xl shadow-xl border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/assets/manufacturing/work-order-card.svg"
                                    alt="Work Order Card"
                                    className="w-full h-auto drop-shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Granular Control: Job Cards --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <SectionHeading>Granular Control: Job Cards</SectionHeading>
                        <SectionSubheading>
                            Track actual time spent by specific employees or machines with precision.
                        </SectionSubheading>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative"
                            >
                                <img
                                    src="/assets/manufacturing/job-card-mobile.svg"
                                    alt="Job Card Mobile View"
                                    className="w-full max-w-md mx-auto h-auto drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                    <Activity size={20} className="text-blue-500" /> Real-Time Tracking
                                </h4>
                                <p className="text-slate-600">Track actual time spent on specific operations like "Precision Milling".</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                    <BarChart3 size={20} className="text-amber-500" /> Efficiency Analysis
                                </h4>
                                <p className="text-slate-600">Compare Planned Time vs. Actual Time to identify training needs.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
                                <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                    <Settings size={20} className="text-green-500" /> Operational Costing
                                </h4>
                                <p className="text-slate-600">Actual labor costs are captured and added to the final product valuation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Quality Inspection --- */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Integrated Quality Inspection</h2>
                            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                                Don't let defects leave the floor. Enforce checks at incoming receipt, WIP, or finished goods.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-blue-400 mt-1"><Layers size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Gatekeeping</h4>
                                        <p className="text-slate-400">Mandatory stops in the workflow for quality verification.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-blue-400 mt-1"><ClipboardList size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Standardized Templates</h4>
                                        <p className="text-slate-400">Define acceptance criteria (e.g., Variance &lt; 0.5%) for consistency.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-red-400 mt-1"><AlertCircle size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-red-400">Block Non-Conformance</h4>
                                        <p className="text-slate-400">Automatically block inventory that fails inspection from being shipped.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="/assets/manufacturing/quality-tablet.svg"
                                alt="Quality Inspection Tablet Interface"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Traceability --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <SectionHeading>Traceability: Serial & Batch Management</SectionHeading>
                        <SectionSubheading>
                            Full lifecycle tracking from procurement to sale. Know exactly which batch of batteries went into which drone.
                        </SectionSubheading>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-10 rounded-full" />
                            <img
                                src="/assets/manufacturing/traceability-scan.svg"
                                alt="Serial and Batch Scanning"
                                className="relative w-full h-auto drop-shadow-xl rounded-lg"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="group p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Serialized Inventory</h4>
                                <p className="text-slate-600">Assign unique IDs to high-value goods for warranty tracking and individual history.</p>
                            </div>
                            <div className="group p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Batch Control</h4>
                                <p className="text-slate-600">Prevent expired materials (like chemicals or batteries) from being used in production.</p>
                            </div>
                            <div className="group p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Full Lifecycle</h4>
                                <p className="text-slate-600">Track every component from the supplier's dock to the customer's hands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Subcontracting --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <SectionHeading>Extended Supply Chain: Subcontracting</SectionHeading>
                    <SectionSubheading>
                        Seamlessly handle tasks like painting or galvanizing sent to external partners.
                    </SectionSubheading>

                    <div className="mt-16 mb-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <img
                            src="/assets/manufacturing/subcontracting-flow.svg"
                            alt="Factory to Vendor Subcontracting Flow"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-3">Core Competencies</h4>
                            <p className="text-sm text-slate-600">Focus on what you do best and outsource the rest without losing visibility.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-3">Material Transfer</h4>
                            <p className="text-sm text-slate-600">Track raw materials supplied to the vendor via Subcontracting Orders.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-3">Auto-Reconciliation</h4>
                            <p className="text-sm text-slate-600">Automatically consume supplied raw materials and record service charges upon receipt.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Phase 3: Real-Time Financial Integration --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <SectionHeading>Real-Time Financial Integration</SectionHeading>
                            <SectionSubheading>
                                Every stock movement creates a corresponding accounting entry in real-time. No more end-of-month surprises.
                            </SectionSubheading>

                            <div className="mt-12 space-y-8">
                                <div className="border-l-4 border-slate-900 pl-6 py-2">
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Perpetual Inventory</h4>
                                    <p className="text-slate-600">Stock accounts are updated instantly upon receipt, delivery, or production.</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-6 py-2">
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">True Costing</h4>
                                    <p className="text-slate-600">Valuation includes Material Cost + Landed Costs (Freight/Customs) + Operational Costs (Labor/Power).</p>
                                </div>
                                <div className="border-l-4 border-slate-300 pl-6 py-2">
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Valuation Methods</h4>
                                    <p className="text-slate-600">Supports FIFO (First-In, First-Out) and Moving Average for precise profit calculation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="p-4 bg-slate-900 rounded-xl shadow-2xl">
                                <img
                                    src="/assets/manufacturing/financial-integration.svg"
                                    alt="Real-Time Financial Integration T-Account"
                                    className="w-full h-auto rounded-lg opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Phase 3: Data-Driven Decision Making --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <SectionHeading>Data-Driven Decision Making</SectionHeading>
                    <SectionSubheading>
                        Turn shop floor actions into actionable insights.
                    </SectionSubheading>

                    <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center text-left max-w-6xl mx-auto">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-20 blur-lg"></div>
                            <img
                                src="/assets/manufacturing/analytics-dashboard.svg"
                                alt="Production Analytics Dashboard"
                                className="relative w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2 space-y-10">
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2 flex items-center gap-3">
                                    <LineChart size={24} className="text-blue-600" /> Production Analytics
                                </h4>
                                <p className="text-slate-600">Visualize trends in production volume and identify delay rates over time.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2 flex items-center gap-3">
                                    <AlertTriangle size={24} className="text-amber-500" /> Downtime Analysis
                                </h4>
                                <p className="text-slate-600">Identify exactly which machines or workstations are causing bottlenecks.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2 flex items-center gap-3">
                                    <PieChart size={24} className="text-emerald-600" /> BOM Stock Reports
                                </h4>
                                <p className="text-slate-600">Instantly see if you have enough raw materials to build a specific batch before starting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Phase 3: The Unified Ecosystem --- */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionHeading>The Unified Ecosystem</SectionHeading>
                        <SectionSubheading>
                            Manufacturing doesn't happen in a silo. Connect your floor to HR, Maintenance, and Support.
                        </SectionSubheading>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        <img
                            src="/assets/manufacturing/ecosystem-connect.jpg"
                            alt="Unified Ecosystem Diagram"
                            className="relative w-full max-w-4xl mx-auto h-auto"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
                        <div className="text-center p-6">
                            <h4 className="font-bold text-slate-900 mb-2">Asset Management</h4>
                            <p className="text-sm text-slate-600">Track depreciation and schedule maintenance for your high-value machinery.</p>
                        </div>
                        <div className="text-center p-6">
                            <h4 className="font-bold text-slate-900 mb-2">HR & Payroll</h4>
                            <p className="text-sm text-slate-600">Link employee timesheets from the Job Cards directly to payroll processing.</p>
                        </div>
                        <div className="text-center p-6">
                            <h4 className="font-bold text-slate-900 mb-2">Helpdesk Support</h4>
                            <p className="text-sm text-slate-600">Convert customer issues into tickets linked directly to the specific serialized item they purchased.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Phase 4: Final CTA --- */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                                Streamline Your Shop Floor <span className="text-blue-600">Today</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Complete Visibility. Total Control. <br />
                                ERPNext: The operating system for modern manufacturers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
                                    <Link href="/#contact">Start a Free Trial</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full">
                                    <Link href="/#contact">Schedule Demo</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/assets/manufacturing/cta-delivery-drone.svg"
                                    alt="Delivery Drone - ERPNext"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
