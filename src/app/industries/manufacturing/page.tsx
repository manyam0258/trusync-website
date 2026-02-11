'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    Search
} from 'lucide-react';
import { Button } from "@/components/ui/Button";

const TechnicalGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
    />
);

export default function ManufacturingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
                <TechnicalGrid />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight text-slate-900">
                                    Precision in <span className="text-slate-900">Production</span>
                                </h1>
                                <p className="text-2xl text-slate-600 mb-8 font-medium">
                                    The ERPNext Manufacturing Module
                                </p>

                                <div className="flex gap-4">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-8 py-6 text-lg">
                                        Explore Capabilities
                                    </Button>
                                </div>

                                <div className="mt-12 p-6 border-l-4 border-slate-200 bg-slate-50 max-w-md">
                                    <p className="font-mono text-sm text-slate-600 leading-relaxed">
                                        From Bill of Materials to Finished Goods—Complete Visibility and Control.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -20, 0],
                                    rotateZ: [0, 1, 0, -1, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.2 },
                                    scale: { duration: 0.8, delay: 0.2 },
                                    y: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotateZ: {
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="relative z-10"
                            >
                                {/* Placeholder for Hero Drone Image */}
                                <div className="relative group">
                                    <img
                                        src="/assets/manufacturing/hero-drone.jpg"
                                        alt="Professional Drone Manufacturing"
                                        className="relative w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="absolute right-0 bottom-[-20px] text-xs font-mono text-slate-400">
                                    Built on the Frappe Framework
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Eliminate Blind Spots --- */}
            <section className="py-24 bg-slate-50 relative border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">Eliminate the Blind Spots in Your Factory</h2>

                        {/* Placeholder for Blind Spots Diagram */}
                        <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-4">
                            <img
                                src="/assets/manufacturing/blind-spots.png"
                                alt="Factory Blind Spots Diagram"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                        <div className="relative pl-6 border-l-4 border-slate-300">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge:</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Manufacturing is chaos management. Juggling raw material availability, machine downtime, and delivery deadlines across disconnected spreadsheets creates blind spots.
                            </p>
                        </div>
                        <div className="relative pl-6 border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution:</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                ERPNext acts as a centralized brain. A unified platform where a change in inventory instantly reflects in accounting, and a sales order automatically triggers production planning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BOM Section --- */}
            <section className="py-24 bg-white overflow-hidden border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900">
                            Defining the Product: The Bill of Materials (BOM)
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                        {/* Left List */}
                        <div className="lg:w-1/4 space-y-8 font-mono text-sm">
                            <div className="flex items-start gap-4 hover:bg-slate-50 p-3 rounded transition-colors">
                                <span className="font-bold text-xl text-slate-300">1.</span>
                                <div>
                                    <div className="font-bold text-slate-900">Propeller Assembly</div>
                                    <div className="text-slate-500">(Sub-assembly)</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 hover:bg-slate-50 p-3 rounded transition-colors">
                                <span className="font-bold text-xl text-slate-300">2.</span>
                                <div>
                                    <div className="font-bold text-slate-900">Brushless Motor</div>
                                    <div className="text-slate-500">(Raw Material)</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 hover:bg-slate-50 p-3 rounded transition-colors">
                                <span className="font-bold text-xl text-slate-300">3.</span>
                                <div>
                                    <div className="font-bold text-slate-900">Carbon Fiber Frame</div>
                                    <div className="text-slate-500">(Raw Material)</div>
                                </div>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="lg:w-2/4">
                            <div className="relative bg-white rounded-lg p-2">
                                <img
                                    src="/assets/manufacturing/bom-exploded.png"
                                    alt="Drone Exploded View BOM"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Right List/Features */}
                        <div className="lg:w-1/4 space-y-12">
                            <div className="space-y-8 font-mono text-sm mb-12 lg:mb-0">
                                <div className="flex items-start gap-4 hover:bg-slate-50 p-3 rounded transition-colors">
                                    <span className="font-bold text-xl text-slate-300">4.</span>
                                    <div>
                                        <div className="font-bold text-slate-900">4S LiPo Battery</div>
                                        <div className="text-slate-500">(Raw Material)</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 hover:bg-slate-50 p-3 rounded transition-colors">
                                    <span className="font-bold text-xl text-slate-300">5.</span>
                                    <div>
                                        <div className="font-bold text-slate-900">Camera Gimbal</div>
                                        <div className="text-slate-500">(Sub-assembly)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-slate-100">
                                <div className="group">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Multi-Level BOMs</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Handle complex structures where sub-assemblies (like the motor) are nested within the final unit.
                                    </p>
                                </div>
                                <div className="group">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Cost Estimation</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Auto-calculate finished costs based on raw materials + operations.
                                    </p>
                                </div>
                                <div className="group">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Scrap Management</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Define scrap rates per item to predict wastage effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MRP Section --- */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Strategic Planning & MRP</h2>
                        <p className="font-mono text-slate-500 mb-8">Precision Engineering details, using JetBrains Mono for technical details.</p>

                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <span className="p-1 bg-blue-100 rounded-full text-blue-600 mt-1"><CheckCircle2 size={16} /></span>
                                <p className="text-slate-700"><span className="font-bold text-slate-900">Demand-Driven:</span> The Production Planning Tool analyzes open sales orders to generate precise schedules.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="p-1 bg-blue-100 rounded-full text-blue-600 mt-1"><CheckCircle2 size={16} /></span>
                                <p className="text-slate-700"><span className="font-bold text-slate-900">Auto-Replenishment:</span> Automatically identifies raw material shortages and triggers Material Requests.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="p-1 bg-blue-100 rounded-full text-blue-600 mt-1"><BarChart3 size={16} /></span>
                                <p className="text-slate-700"><span className="font-bold text-slate-900">Forecasting:</span> Integrate sales forecasts to pre-plan production queues.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                        <img
                            src="/assets/manufacturing/mrp-flow.png"
                            alt="MRP Process Flow: Sales Order to Production Plan"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* --- Shop Floor Section --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-16">Shop Floor Modeling: Workstations & Routing</h2>

                    <div className="max-w-6xl mx-auto mb-16">
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                            <img
                                src="/assets/manufacturing/shop-floor.png"
                                alt="Shop Floor Isometric View with Workstations"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                        <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
                            <div className="text-blue-600 mt-1"><Factory size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Workstations</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Define hourly rates to capture accurate labor, electricity, and rent costs.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
                            <div className="text-blue-600 mt-1"><GitMerge size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Routing</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Specify the sequence of operations the drone must pass through.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
                            <div className="text-blue-600 mt-1"><BarChart3 size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Capacity Planning</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Track workload per machine to prevent bottlenecks and reschedule jobs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
