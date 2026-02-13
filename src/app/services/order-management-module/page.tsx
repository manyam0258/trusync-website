'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Box,
    Warehouse,
    ShoppingCart,
    Truck,
    BarChart3,
    Layers,
    Package,
    ClipboardCheck,
    Factory,
    DollarSign,
    TrendingUp,
    MapPin,
    FileText,
    CheckCircle,
    Gauge,
    Cpu,
    FilePlus,
    Handshake,
    ScanLine,
    ArrowLeftRight,
    CalendarCheck,
    Lock,
    Scale,
    ClipboardList,
    Laptop,
    History,
    Smartphone,
    Zap,
    Database,
    Server,
    Code,
    Globe,
    PieChart,
    Printer,
    Mail,
    GitBranch,
    Users,
    Tags,
    FileCheck,
    RefreshCw,
    WifiOff,
    MousePointer2,
    Anchor
} from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
                            Mastering Inventory & <br />
                            <span className="text-blue-600">Order Management</span>
                        </h1>
                        <p className="text-xl font-medium text-slate-700 mb-4">
                            A Comprehensive Guide to Stock, Warehouse, and Item Management with ERPNext.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Whether you manage a single room or a multi-national network, model your physical space digitally with precision and integrate stock directly with Procurement, Accounting, and Sales.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Box className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm text-slate-600">Stock Module: Central nervous system of operations.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Warehouse className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-sm text-slate-600">Flexible Warehouses: Reality-mirroring hierarchy.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-purple-600" />
                                </div>
                                <p className="text-sm text-slate-600">Real-Time Valuation: Perpetual inventory accounting.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        {/* Isometric Warehouse Illustration Representation */}
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 min-h-[400px] flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                    <Package className="w-12 h-12 text-blue-500 mb-2" />
                                    <span className="text-sm font-bold text-blue-800">Inventory</span>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center translate-y-8">
                                    <ShoppingCart className="w-12 h-12 text-green-500 mb-2" />
                                    <span className="text-sm font-bold text-green-800">Sales</span>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex flex-col items-center -translate-y-8">
                                    <Truck className="w-12 h-12 text-orange-500 mb-2" />
                                    <span className="text-sm font-bold text-orange-800">Procurement</span>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex flex-col items-center">
                                    <Factory className="w-12 h-12 text-purple-500 mb-2" />
                                    <span className="text-sm font-bold text-purple-800">Manufacturing</span>
                                </div>
                            </div>

                            {/* Central Connection */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-lg border-4 border-slate-100 flex items-center justify-center z-20">
                                <Layers className="w-10 h-10 text-slate-700" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stock Module - Central Nervous System */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            The Backbone of Retail, Distribution, and Manufacturing
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Effective stock management is the central nervous system of your operation.
                            ERPNext breaks down silos by integrating Stock directly with Procurement, Accounting, and Sales.
                        </p>
                    </motion.div>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">

                            {/* Left Side: Inputs */}
                            <div className="space-y-12 flex flex-col items-center md:items-end">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm w-full max-w-xs relative group hover:border-blue-200 transition-colors"
                                >
                                    <div className="absolute top-1/2 -right-3 w-3 h-3 bg-blue-500 rounded-full hidden md:block"></div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Accounting</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Real-time valuation updates with every stock move.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm w-full max-w-xs relative group hover:border-orange-200 transition-colors"
                                >
                                    <div className="absolute top-1/2 -right-3 w-3 h-3 bg-orange-500 rounded-full hidden md:block"></div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                                            <ShoppingCart className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Sales</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Immediate reservation and delivery status visibility.</p>
                                </motion.div>
                            </div>

                            {/* Center: Stock Module */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                                className="flex justify-center py-8 md:py-0"
                            >
                                <div className="w-64 h-64 rounded-full bg-slate-900 flex items-center justify-center p-2 shadow-2xl relative z-20 border-8 border-slate-100">
                                    <div className="text-center text-white">
                                        <h3 className="text-3xl font-black tracking-widest mb-1">STOCK</h3>
                                        <div className="text-lg font-light tracking-widest text-slate-400">MODULE</div>
                                    </div>

                                    {/* Pulsing Rings */}
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 animate-[spin_10s_linear_infinite] opacity-30 scale-110"></div>
                                    <div className="absolute inset-0 rounded-full border border-slate-300 animate-[ping_3s_ease-out_infinite] opacity-20"></div>
                                </div>
                            </motion.div>

                            {/* Right Side: Outputs */}
                            <div className="space-y-12 flex flex-col items-center md:items-start">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm w-full max-w-xs relative group hover:border-green-200 transition-colors"
                                >
                                    <div className="absolute top-1/2 -left-3 w-3 h-3 bg-green-500 rounded-full hidden md:block"></div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                                            <Truck className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Procurement</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Automated replenishment based on reorder levels.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm w-full max-w-xs relative group hover:border-purple-200 transition-colors"
                                >
                                    <div className="absolute top-1/2 -left-3 w-3 h-3 bg-purple-500 rounded-full hidden md:block"></div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                                            <Factory className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Manufacturing</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">BOM planning and raw material consumption.</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Desktop Connection Lines - SVG Overlay */}
                        <svg className="absolute inset-0 w-full h-full hidden md:block pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            {/* Connections from Left to Center */}
                            <motion.path d="M340 100 H400 V250 H500" stroke="#CBD5E1" strokeWidth="2" fill="none"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                            <motion.path d="M340 300 H400 V250 H500" stroke="#CBD5E1" strokeWidth="2" fill="none"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />

                            {/* Connections from Center to Right */}
                            <motion.path d="M650 250 H740 V100 H820" stroke="#CBD5E1" strokeWidth="2" fill="none"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                            <motion.path d="M650 250 H740 V300 H820" stroke="#CBD5E1" strokeWidth="2" fill="none"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                        </svg>

                        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-2xl mx-auto">
                            <p className="text-blue-800 font-semibold flex items-center justify-center gap-2">
                                <TrendingUp className="w-5 h-5" />
                                100% Visibility: Changes in inventory instantly reflect in financial books.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexible Warehouses - Tree View */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Mirroring Reality with Flexible Warehouses
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Whether you manage a single room or a multi-national network, model your physical space digitally with precision.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <Warehouse className="w-5 h-5 text-blue-600" />
                                Warehouse Hierarchy
                            </h3>

                            {/* Tree View Visualization */}
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex items-center gap-2 text-slate-800 font-bold p-2 bg-blue-50 rounded">
                                    <Box className="w-4 h-4" /> Company Head Office
                                </div>
                                <div className="pl-6 space-y-4 border-l-2 border-slate-200 ml-3">
                                    <div className="relative">
                                        <div className="absolute -left-[26px] top-3 w-6 h-px bg-slate-200"></div>
                                        <div className="flex items-center gap-2 text-slate-700 font-semibold p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors">
                                            <Warehouse className="w-4 h-4 text-blue-500" /> New York Warehouse
                                        </div>

                                        {/* Nested Aisles */}
                                        <div className="pl-6 space-y-3 border-l-2 border-slate-200 ml-3 mt-2">
                                            <div className="relative">
                                                <div className="absolute -left-[26px] top-3 w-6 h-px bg-slate-200"></div>
                                                <div className="flex items-center gap-2 text-slate-600 p-1">
                                                    <Layers className="w-3 h-3 text-slate-400" /> Aisle A
                                                </div>
                                                <div className="pl-6 mt-1 border-l-2 border-slate-200 ml-2">
                                                    <div className="relative flex items-center gap-2 text-slate-500 text-xs py-1">
                                                        <div className="absolute -left-[14px] top-1/2 w-3 h-px bg-slate-200"></div>
                                                        Rack 1
                                                    </div>
                                                    <div className="relative flex items-center gap-2 text-blue-600 font-bold text-xs py-1 bg-blue-50 rounded px-2 -ml-2 border border-blue-200">
                                                        <div className="absolute -left-[22px] top-1/2 w-3 h-px bg-slate-200"></div>
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                        Bin 04
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute -left-[26px] top-3 w-6 h-px bg-slate-200"></div>
                                                <div className="flex items-center gap-2 text-slate-600 p-1">
                                                    <Layers className="w-3 h-3 text-slate-400" /> Aisle B
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-[26px] top-3 w-6 h-px bg-slate-200"></div>
                                        <div className="flex items-center gap-2 text-slate-700 font-semibold p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors">
                                            <Warehouse className="w-4 h-4 text-blue-500" /> London Warehouse
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-[26px] top-3 w-6 h-px bg-slate-200"></div>
                                        <div className="flex items-center gap-2 text-orange-700 font-semibold p-2 bg-orange-50 border border-orange-100 rounded cursor-pointer transition-colors border-dashed">
                                            <Truck className="w-4 h-4 text-orange-500" /> Virtual Warehouse (In Transit)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Layers className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tree-View Hierarchy</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Organize warehouses in a parent-child structure. Drill down from Company to Bin location with a single click.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    <Truck className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Virtual Warehouses</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Track 'In Transit' stock moving between locations. Know exactly what is on the water or on the road.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Location Management</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Optimize picking paths and retrieval times by knowing exactly which Bin contains your Stock Item.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Precision Tracking: Serials & Batches */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precision Tracking: Serials & Batches</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Manage high-value assets and perishables with granular traceability. Know exactly which unit went to which customer.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Serialized Inventory */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Laptop className="w-32 h-32" />
                            </div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-3 bg-blue-900/50 rounded-lg text-blue-400 border border-blue-800">
                                    <Laptop className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Serialized Inventory</h3>
                                    <p className="text-sm text-slate-400">Tracking Unit #SN-998877</p>
                                </div>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <History className="w-5 h-5 text-blue-500" />
                                    <span>Full Service History</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Warranty: Active (2 Years)</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Batch Management */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Package className="w-32 h-32" />
                            </div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-3 bg-orange-900/50 rounded-lg text-orange-400 border border-orange-800">
                                    <Package className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Batch Management</h3>
                                    <p className="text-sm text-slate-400">Batch #B-2024</p>
                                </div>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CalendarCheck className="w-5 h-5 text-orange-500" />
                                    <span>Expiry Date: 12/2025</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <Factory className="w-5 h-5 text-slate-500" />
                                    <span>Mfg Date: 01/2024</span>
                                </li>
                            </ul>
                            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-xs font-bold border border-red-900/50">
                                <History className="w-3 h-3" /> Expires in 30 Days
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Optimized Fulfillment & Picking */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                            Optimized Fulfillment & Picking
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Accelerate stock picking while eliminating errors. System-generated pick lists guide staff through the optimal path in the warehouse.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Stock Reservation", desc: "Auto-hold stock for confirmed Sales Orders.", icon: Lock, color: "text-orange-600 bg-orange-100" },
                                { title: "Smart Pick Lists", desc: "Group items by aisle to minimize walking time.", icon: ClipboardList, color: "text-blue-600 bg-blue-100" },
                                { title: "Barcode Validation", desc: "Scan to verify items at packing stage.", icon: ScanLine, color: "text-green-600 bg-green-100" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className={`p-2 rounded-lg mt-1 ${item.color}`}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Tablet Mockup */}
                        <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl border-4 border-slate-800 max-w-md mx-auto transform rotate-1">
                            <div className="bg-white rounded-xl overflow-hidden h-[400px] flex flex-col">
                                <div className="bg-slate-100 p-4 border-b flex justify-between items-center">
                                    <span className="font-bold text-slate-700">Pick List #PL-404</span>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">In Progress</span>
                                </div>
                                <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                                        <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white">
                                            <CheckCircle className="w-3 h-3" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-slate-800">Item A - Widget</div>
                                            <div className="text-xs text-slate-500">Aisle 3 • Bin 42</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg opacity-60">
                                        <div className="w-5 h-5 border-2 border-slate-300 rounded"></div>
                                        <div className="flex-1">
                                            <div className="font-bold text-slate-800">Item B - Gadget</div>
                                            <div className="text-xs text-slate-500">Aisle 4 • Bin 12</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 border-t">
                                    <div className="w-full py-3 bg-slate-900 text-white rounded-lg text-center font-bold text-sm">
                                        Complete Picking
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lock Floating Icon */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg shadow-orange-500/30 hidden md:block"
                        >
                            <Lock className="w-8 h-8" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-600 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap">
                                Reserved
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stock Movements & Reconciliation */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Updates in Sync with Reality
                        </h2>
                        <p className="text-lg text-slate-600">
                            Course-correct discrepancies easily. Reconcile physical counts with system counts and gain full visibility into warehouse transfers.
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                        <div className="flex justify-center items-end gap-8 md:gap-16 mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-slate-900 mb-2">1,000</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Physical Count</div>
                                <div className="w-32 h-2 bg-slate-200 mt-4 mx-auto rounded-full"></div>
                            </div>

                            <div className="pb-4 text-slate-300">
                                <Scale className="w-16 h-16" />
                            </div>

                            <div className="text-center">
                                <div className="text-4xl font-bold text-slate-900 mb-2">1,000</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">System Count</div>
                                <div className="w-32 h-2 bg-slate-200 mt-4 mx-auto rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                                <Smartphone className="w-4 h-4" /> Stock Entry
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium text-sm">
                                <ArrowLeftRight className="w-4 h-4" /> Inter-Warehouse Transfer
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium text-sm">
                                <ClipboardCheck className="w-4 h-4" /> Audit Trail
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-Time Inventory Confidence */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Modern Enterprise Clarity</div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                                Sell with Confidence Using Real-Time Inventory
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Never sell what you don't have. ERPNext provides instant visibility into stock levels during the sales process.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-600"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Stock Reservation</h4>
                                        <p className="text-slate-600">Reserve batches specifically for high-priority orders.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-600"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Projected Quantity</h4>
                                        <p className="text-slate-600">See what's on the shelf vs. what's already committed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-600"></div></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Multi-Warehouse</h4>
                                        <p className="text-slate-600">Check availability across all stores instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-lg"
                        >
                            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-4">
                                <div className="border-b border-slate-100 p-3 bg-slate-50 font-bold text-slate-700 text-sm">
                                    Sales Order Item
                                </div>
                                <div className="p-4">
                                    <div className="grid grid-cols-4 gap-4 text-xs font-bold text-slate-500 mb-2">
                                        <div>Item Code</div>
                                        <div>Description</div>
                                        <div>Quantity</div>
                                        <div className="text-right">Action</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 items-center text-sm border-t border-slate-100 pt-2">
                                        <div className="font-mono text-slate-600">ITEM-001</div>
                                        <div className="text-slate-800">Wireless Mouse</div>
                                        <div className="relative group">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto cursor-help"></div>

                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded shadow-xl border border-slate-200 text-xs hidden group-hover:block z-10">
                                                <div className="flex justify-between mb-1"><span>Actual Qty:</span> <span className="font-bold">500</span></div>
                                                <div className="flex justify-between mb-1"><span>Reserved Qty:</span> <span className="font-bold">50</span></div>
                                                <div className="flex justify-between text-green-600"><span>Available:</span> <span className="font-bold">450</span></div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded font-bold hover:bg-blue-700 transition-colors">
                                                Reserve Stock
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>






            {/* Mobile & Barcode Integration */}
            < section className="py-24 bg-slate-50 relative overflow-hidden" >
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                            Mobile & Barcode Integration
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Untether your workforce. Manage operations directly from the warehouse floor with the ERPNext mobile app.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Scan to Search", desc: "Instantly retrieve item details by scanning barcodes.", icon: ScanLine },
                                { title: "Mobile UI", desc: "Create stock entries and check levels on the go.", icon: Smartphone },
                                { title: "Efficiency Boost", desc: "Reduce manual data entry errors by 90%.", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                                    <div className="p-3 bg-slate-100 text-slate-600 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        {/* Abstract Phone Mockup with Scanning Effect */}
                        <div className="w-72 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                            <div className="h-full bg-slate-800 relative">
                                {/* Camera Viewfinder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 border-2 border-white/30 rounded-lg relative">
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1"></div>
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1"></div>
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1"></div>
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1"></div>

                                        {/* Scanning Laser */}
                                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
                                    </div>
                                </div>

                                {/* Overlay UI */}
                                <div className="absolute bottom-0 w-full bg-slate-900/90 backdrop-blur p-6 rounded-t-3xl">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-white font-bold text-lg">Item Identified</div>
                                        <div className="text-slate-400 text-sm">Widget A - 50 Units</div>
                                    </div>
                                    <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Floating box being scanned */}
                        <div className="absolute top-20 -right-4 md:-right-12 w-32 h-32 bg-orange-100 rounded-2xl border-2 border-orange-200 flex flex-col items-center justify-center shadow-lg transform rotate-12 z-10">
                            <Box className="w-12 h-12 text-orange-500 mb-2" />
                            <div className="h-6 w-20 bg-slate-800 rounded px-1 flex items-center justify-center gap-0.5" aria-hidden="true">
                                <div className="w-0.5 h-3 bg-white"></div>
                                <div className="w-0.5 h-3 bg-white"></div>
                                <div className="w-1 h-3 bg-white"></div>
                                <div className="w-0.5 h-3 bg-white"></div>
                                <div className="w-1 h-3 bg-white"></div>
                                <div className="w-0.5 h-3 bg-white"></div>
                                <div className="w-1 h-3 bg-white"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Real-Time Valuation & Accounting */}
            < section className="py-24 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                                Real-Time Inventory Valuation & Accounting
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                With Perpetual Inventory, every stock movement automatically posts a corresponding entry to the General Ledger. Say goodbye to end-of-year inventory reconciliation nightmares.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded text-blue-600 mt-1">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Valuation Methods</h4>
                                        <p className="text-sm text-slate-600">FIFO, Moving Average, and Standard Costing supported out of the box.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-100 rounded text-green-600 mt-1">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Landed Cost Vouchers</h4>
                                        <p className="text-sm text-slate-600">Distribute shipping, customs, and insurance costs to items for true profitability analysis.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-100 rounded text-purple-600 mt-1">
                                        <Factory className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Asset Capitalization</h4>
                                        <p className="text-sm text-slate-600">Easily track inventory details of fixed assets and manage depreciation.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative shadow-xl"
                        >
                            {/* Interactive Ledger Visualization */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Transaction</div>
                                    <div className="font-bold text-slate-800">Delivery Note #DN-001</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-slate-400" />
                                <div className="flex-1 bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">GL Entry</div>
                                    <div className="font-bold text-white">Journal #JV-005</div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            <th className="p-3 text-left text-slate-500 font-medium">Account</th>
                                            <th className="p-3 text-right text-slate-500 font-medium">Debit</th>
                                            <th className="p-3 text-right text-slate-500 font-medium">Credit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-3 font-medium text-slate-700">Cost of Goods Sold</td>
                                            <td className="p-3 text-right font-mono text-slate-600">$500.00</td>
                                            <td className="p-3 text-right font-mono text-slate-400"></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium text-slate-700">Stock In Hand</td>
                                            <td className="p-3 text-right font-mono text-slate-400"></td>
                                            <td className="p-3 text-right font-mono text-slate-600">$500.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Strategic Procurement Intro */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Buying Module</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Strategic <br />
                                <span className="text-blue-600">Procurement</span> <br />
                                with ERPNext
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                A comprehensive guide to the Procure-to-Pay lifecycle: from automated replenishment to data-driven supplier analysis.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Automated Replenishment", "Supplier Scorecards", "3-Way Matching", "RFQs & Portals"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            {/* Isometric Abstract Visualization */}
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                                <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-2xl">
                                    {/* Pathways */}
                                    <motion.path d="M50 150 L200 75 L350 150 L200 225 Z" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                                    <motion.path d="M200 75 V 225" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
                                    <motion.path d="M50 150 H 350" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />

                                    {/* Nodes */}
                                    <g transform="translate(200, 75)"> {/* Top: Factory */}
                                        <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                                        <Factory x="-10" y="-10" width="20" height="20" className="text-blue-600" />
                                    </g>
                                    <g transform="translate(50, 150)"> {/* Left: Store */}
                                        <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#fff" stroke="#F59E0B" strokeWidth="2" />
                                        <Warehouse x="-10" y="-10" width="20" height="20" className="text-orange-500" />
                                    </g>
                                    <g transform="translate(350, 150)"> {/* Right: Supplier */}
                                        <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#fff" stroke="#10B981" strokeWidth="2" />
                                        <Truck x="-10" y="-10" width="20" height="20" className="text-green-500" />
                                    </g>
                                    <g transform="translate(200, 225)"> {/* Bottom: Finance */}
                                        <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#fff" stroke="#6366F1" strokeWidth="2" />
                                        <DollarSign x="-10" y="-10" width="20" height="20" className="text-indigo-500" />
                                    </g>

                                    {/* Moving Packets */}
                                    <motion.circle r="4" fill="#3B82F6">
                                        <animateMotion dur="4s" repeatCount="indefinite" path="M50 150 L200 75 L350 150 L200 225 L50 150" />
                                    </motion.circle>
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 1: Intelligent Planning */}
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-100 hidden lg:block"></div>
                        <div className="lg:pl-24 relative space-y-24">

                            {/* PROCESS STEP 1 */}
                            <div className="relative">
                                {/* Step Indicator */}
                                <div className="hidden lg:flex absolute -left-[76px] top-0 w-10 h-10 bg-blue-600 text-white rounded-full items-center justify-center font-bold z-10 shadow-lg shadow-blue-500/30">
                                    1
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                                        Planning Phase
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Procurement Starts with <span className="text-blue-600">Intelligent Planning</span></h3>
                                    <p className="text-lg text-slate-600 max-w-3xl">
                                        Optimized purchasing is about buying the right quantity at the fair price. The process begins with identifying the need before it becomes an emergency.
                                    </p>
                                </motion.div>

                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Left: Material Request Visualization */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative"
                                    >
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                            Material Request Source
                                        </div>

                                        <div className="flex flex-col gap-6 relative">
                                            {/* Connecting Lines (CSS/SVG) */}
                                            <svg className="absolute inset-0 w-full h-full -z-10" style={{ overflow: 'visible' }}>
                                                <path d="M50 40 Q 150 40 150 100" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                                                <path d="M50 120 Q 100 120 120 120" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                                                <path d="M50 200 Q 150 200 150 140" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                                            </svg>

                                            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100 w-fit">
                                                <BarChart3 className="w-5 h-5 text-blue-600" />
                                                <span className="font-bold text-slate-700">Sales Forecast</span>
                                            </div>
                                            <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-xl border border-purple-100 w-fit">
                                                <Factory className="w-5 h-5 text-purple-600" />
                                                <span className="font-bold text-slate-700">Manufacturing Plan</span>
                                            </div>
                                            <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-100 w-fit">
                                                <Warehouse className="w-5 h-5 text-orange-600" />
                                                <span className="font-bold text-slate-700">Re-order Levels</span>
                                            </div>

                                            {/* Central Doc */}
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-600 w-48 text-center">
                                                <FilePlus className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                                                <h4 className="font-bold text-slate-900 text-sm">Unified Material Request</h4>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right: Auto-Replenishment Alert */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-6"
                                    >
                                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm flex items-start gap-4">
                                            <div className="bg-white p-2 rounded-full shadow-sm text-red-500">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-red-800 text-lg">Alert: Low Stock Warning</h4>
                                                <p className="text-red-700 mt-1">
                                                    Stock for <strong>Widget-A</strong> is below re-order level (50 units).
                                                    <br />
                                                    <span className="font-semibold">Auto-request generated.</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <Cpu className="w-5 h-5 text-blue-600" />
                                                Auto-Replenishment
                                            </h4>
                                            <p className="text-slate-600 text-sm mb-4">
                                                AI-enabled assistant monitors thresholds and triggers requests automatically, preventing human error.
                                            </p>
                                            <div className="flex gap-2 text-xs font-mono text-slate-500 bg-slate-50 p-3 rounded border border-slate-100">
                                                <span>&gt; Check_Levels()</span>
                                                <span className="text-green-600">OK</span>
                                                <span>&gt; Create_PO()</span>
                                                <span className="animate-pulse">_</span>
                                            </div>
                                        </div>

                                        <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl font-bold flex items-center gap-3">
                                            <CheckCircle className="w-6 h-6" />
                                            Benefit: Prevents stock-outs & eliminates over-ordering.
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3: Data-Driven Vendor Selection */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 hidden lg:block"></div>
                        <div className="lg:pl-24 relative">

                            {/* PROCESS STEP 3 */}
                            <div className="relative">
                                {/* Step Indicator */}
                                <div className="hidden lg:flex absolute -left-[76px] top-0 w-10 h-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full items-center justify-center font-bold z-10 shadow-lg">
                                    3
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                        Data-Driven <span className="text-blue-600">Vendor Selection</span>
                                    </h3>
                                    <p className="text-lg text-slate-600 max-w-3xl">
                                        Make informed purchasing decisions by comparing offers side-by-side rather than sifting through spreadsheets.
                                    </p>
                                </motion.div>

                                <div className="grid lg:grid-cols-1 gap-12">
                                    {/* Comparison Table Visualization */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto w-full"
                                    >
                                        <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200 text-sm font-bold text-slate-500">
                                            <div className="p-4">Criteria</div>
                                            <div className="p-4 text-center">Supplier A</div>
                                            <div className="p-4 text-center bg-blue-600 text-white relative">
                                                Supplier B
                                                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] px-2 py-0.5 font-bold uppercase tracking-wide">Best Match</div>
                                            </div>
                                            <div className="p-4 text-center">Supplier C</div>
                                        </div>

                                        {/* Row 1: Price */}
                                        <div className="grid grid-cols-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                            <div className="p-4 font-semibold text-slate-700 flex items-center gap-2">
                                                <DollarSign className="w-4 h-4 text-slate-400" /> Item Price
                                            </div>
                                            <div className="p-4 text-center text-slate-600">$10,500</div>
                                            <div className="p-4 text-center font-bold text-blue-700 bg-blue-50 flex justify-center items-center gap-2">
                                                $10,000 <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <div className="p-4 text-center text-slate-600">$11,200</div>
                                        </div>

                                        {/* Row 2: Lead Time */}
                                        <div className="grid grid-cols-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                            <div className="p-4 font-semibold text-slate-700 flex items-center gap-2">
                                                <CalendarCheck className="w-4 h-4 text-slate-400" /> Lead Time
                                            </div>
                                            <div className="p-4 text-center text-slate-600">10 Days</div>
                                            <div className="p-4 text-center font-bold text-blue-700 bg-blue-50 flex justify-center items-center gap-2">
                                                7 Days <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <div className="p-4 text-center text-slate-600">14 Days</div>
                                        </div>

                                        {/* Row 3: Terms */}
                                        <div className="grid grid-cols-4 hover:bg-slate-50 transition-colors">
                                            <div className="p-4 font-semibold text-slate-700 flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-slate-400" /> Payment Terms
                                            </div>
                                            <div className="p-4 text-center text-slate-600">Net 30</div>
                                            <div className="p-4 text-center font-bold text-blue-700 bg-blue-50 flex justify-center items-center gap-2">
                                                Net 60 <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <div className="p-4 text-center text-slate-600">Net 30</div>
                                        </div>
                                    </motion.div>

                                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex-1">
                                            <h4 className="font-bold text-blue-800 mb-2">Supplier Quotation</h4>
                                            <p className="text-sm text-blue-700">Standardized bid capture from all vendors via Supplier Portal.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
                                            <h4 className="font-bold text-slate-800 mb-2">Comparison Report</h4>
                                            <p className="text-sm text-slate-600">Auto-generated line-by-line analysis highlighted best value.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* Step 5: Receiving, Quality, and Organization */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 hidden lg:block"></div>
                        <div className="lg:pl-24 relative space-y-16">

                            {/* PROCESS STEP 5 */}
                            <div className="relative">
                                {/* Step Indicator */}
                                <div className="hidden lg:flex absolute -left-[76px] top-0 w-10 h-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full items-center justify-center font-bold z-10 shadow-lg">
                                    5
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                        Step 5: <span className="text-blue-600">Receiving, Quality, and Organization</span>
                                    </h3>
                                    <p className="text-lg text-slate-600 max-w-3xl">
                                        Timely receipt is critical. Ensure you get exactly what you paid for before it hits your shelves.
                                    </p>
                                </motion.div>

                                {/* Horizontal Process Flow */}
                                <div className="grid md:grid-cols-4 gap-8 relative items-start">
                                    {/* Connecting Line (Desktop) */}
                                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10"></div>

                                    {[
                                        { icon: Truck, title: "Goods Arrival", sub: "Logistics Tracking" },
                                        { icon: ClipboardCheck, title: "Purchase Receipt", sub: "Updates Stock Ledger" },
                                        { icon: FileCheck, title: "Quality Inspection", sub: "Block Defective Items" },
                                        { icon: Warehouse, title: "Put-away", sub: "Automated Bin Assignment" }
                                    ].map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center relative group"
                                        >
                                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                                                <step.icon className="w-8 h-8" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{step.sub}</p>

                                            {/* Arrow for next step (except last) */}
                                            {i < 3 && (
                                                <div className="hidden md:block absolute top-20 -right-6 text-slate-300 z-0">
                                                    <ArrowRight className="w-8 h-8" />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-12 bg-blue-600 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Benefit: Complete Visibility</h4>
                                            <p className="text-blue-100">Accurate inventory valuation and 100% visibility of stock movement.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg font-mono text-sm">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        Stock Updated: Just Now
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Step 6: Closing the Financial Loop */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-100 hidden lg:block"></div>
                        <div className="lg:pl-24 relative space-y-16">

                            {/* PROCESS STEP 6 */}
                            <div className="relative">
                                {/* Step Indicator */}
                                <div className="hidden lg:flex absolute -left-[76px] top-0 w-10 h-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full items-center justify-center font-bold z-10 shadow-lg">
                                    6
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                        Step 6: <span className="text-blue-600">Closing the Financial Loop</span>
                                    </h3>
                                    <p className="text-lg text-slate-600 max-w-3xl">
                                        Automated 3-Way Matching ensures you never overpay. System verifies that Invoice matches PO and Receipt before releasing payment.
                                    </p>
                                </motion.div>

                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* 3-Way Match Visualization */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="relative h-80 flex items-center justify-center"
                                    >
                                        {/* Circles */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 rounded-full border-2 border-blue-500 flex items-start justify-center pt-8">
                                            <span className="font-bold text-blue-800 bg-white px-2 py-1 rounded shadow-sm">Purchase Order</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full border-2 border-green-500 flex items-end justify-center pb-8">
                                            <span className="font-bold text-green-800 bg-white px-2 py-1 rounded shadow-sm">Purchase Receipt</span>
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full border-2 border-purple-500 flex items-end justify-center pb-8">
                                            <span className="font-bold text-purple-800 bg-white px-2 py-1 rounded shadow-sm">Purchase Invoice</span>
                                        </div>

                                        {/* Intersection */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-24 h-24 bg-slate-900 text-white rounded-full flex flex-col items-center justify-center shadow-xl z-10 border-4 border-white">
                                            <CheckCircle className="w-8 h-8 text-green-400 mb-1" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Match</span>
                                            <span className="text-xs font-bold text-green-400">Approved</span>
                                        </div>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-8"
                                    >
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <DollarSign className="w-5 h-5 text-blue-600" /> Payment Protection
                                            </h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-red-400"></div>
                                                    Prevents payment for unreceived goods.
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-red-400"></div>
                                                    Blocks invoices with price discrepancies greater than tolerance.
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-green-400"></div>
                                                    Auto-releases payments for perfect matches.
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* The Procurement Advantage */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Why ERPNext?</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">The Procurement Advantage</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Transform procurement from a cost center to a strategic asset.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Efficiency", desc: "Reduce cycle time by 40% with automated workflows.", icon: Zap, color: "text-yellow-400" },
                            { title: "Control", desc: "100% compliance with budget and approval hierarchies.", icon: Lock, color: "text-red-400" },
                            { title: "Visibility", desc: "Real-time dashboard for spending and supplier performance.", icon: Gauge, color: "text-blue-400" },
                            { title: "Savings", desc: "Lower costs through better negotiation and rate locking.", icon: TrendingUp, color: "text-green-400" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Connected Architecture of Buying */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">
                            The Connected Architecture of <span className="text-blue-600">Buying</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Seamless integration means data is entered once and reflects everywhere instantly.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto min-h-[600px] hidden md:block">
                        {/* SVG Connections Layer */}
                        {/* SVG Connections Layer (Desktop) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            <defs>
                                <marker id="arrowhead-blue-buy-circle" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#CBD5E1" />
                                </marker>
                            </defs>

                            {/* Paths and Data Packets */}
                            {/* Stock (Top) */}
                            <motion.path d="M448 300 L448 150" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-blue-buy-circle)" />
                            <motion.circle r="4" fill="#3B82F6">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M448 300 L448 150" />
                            </motion.circle>
                            <text x="458" y="190" className="text-xs font-bold fill-slate-500" style={{ textAnchor: 'start' }}>Inventory Updates</text>

                            {/* Accounting (Right) */}
                            <motion.path d="M550 300 L700 300" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-blue-buy-circle)" />
                            <motion.circle r="4" fill="#3B82F6">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M550 300 L700 300" />
                            </motion.circle>
                            <text x="625" y="290" className="text-xs font-bold fill-slate-500" style={{ textAnchor: 'middle' }}>GL Entries & Payments</text>

                            {/* Quality (Bottom) */}
                            <motion.path d="M448 300 L448 450" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-blue-buy-circle)" />
                            <motion.circle r="4" fill="#3B82F6">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M448 300 L448 450" />
                            </motion.circle>
                            <text x="458" y="410" className="text-xs font-bold fill-slate-500" style={{ textAnchor: 'start' }}>Inspections</text>

                            {/* Manufacturing (Left) */}
                            <motion.path d="M346 300 L196 300" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-blue-buy-circle)" />
                            <motion.circle r="4" fill="#3B82F6">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M346 300 L196 300" />
                            </motion.circle>
                            <text x="271" y="290" className="text-xs font-bold fill-slate-500" style={{ textAnchor: 'middle' }}>BOM & Raw Materials</text>
                        </svg>

                        {/* Nodes (Desktop Absolute Positioning) */}
                        {/* Center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)"] }}
                                transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                                className="w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white"
                            >
                                <ShoppingCart className="w-10 h-10 mb-2" />
                                <h3 className="text-xl font-bold">Buying Module</h3>
                            </motion.div>
                        </div>

                        {/* Top - Stock */}
                        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-32 h-32 bg-blue-500 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white text-white"
                            >
                                <Layers className="w-6 h-6 mb-1" />
                                <span className="font-bold">Stock</span>
                            </motion.div>
                        </div>

                        {/* Right - Accounting */}
                        <div className="absolute top-1/2 right-[50px] -translate-y-1/2 z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-32 h-32 bg-blue-500 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white text-white"
                            >
                                <DollarSign className="w-6 h-6 mb-1" />
                                <span className="font-bold">Accounting</span>
                            </motion.div>
                        </div>

                        {/* Bottom - Quality */}
                        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-32 h-32 bg-blue-500 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white text-white"
                            >
                                <ClipboardCheck className="w-6 h-6 mb-1" />
                                <span className="font-bold">Quality</span>
                            </motion.div>
                        </div>

                        {/* Left - Manufacturing */}
                        <div className="absolute top-1/2 left-[50px] -translate-y-1/2 z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-32 h-32 bg-blue-500 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white text-white"
                            >
                                <Factory className="w-6 h-6 mb-1" />
                                <span className="font-bold text-sm">Manufacturing</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile View (Stacked) */}
                    <div className="md:hidden flex flex-col gap-8 items-center mt-12 pb-12">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 rounded-full"></div>
                            <div className="w-40 h-40 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-white relative z-10">
                                <ShoppingCart className="w-8 h-8 mb-2" />
                                <h3 className="text-lg font-bold">Buying</h3>
                            </div>
                        </div>

                        {[
                            { title: "Stock", icon: Layers, label: "Inventory Updates" },
                            { title: "Manufacturing", icon: Factory, label: "BOM & Raw Materials" },
                            { title: "Accounting", icon: DollarSign, label: "GL Entries" },
                            { title: "Quality", icon: ClipboardCheck, label: "Inspections" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 w-full">
                                <ArrowRight className="w-6 h-6 text-slate-300 rotate-90 my-2" />
                                <div className="w-full max-w-[200px] bg-white p-4 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                                        <item.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="font-bold text-slate-800">{item.title}</span>
                                    <span className="text-xs text-slate-500 font-medium mt-1">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Insight: Supplier Scorecards */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                                Strategic Insight: <span className="text-blue-600">Supplier Scorecards</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Move from transactional buying to strategic relationship management. Know who your best partners are.
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-6xl mx-auto relative">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Dashboard Visualization */}
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                                >
                                    {/* Dashboard Header */}
                                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center">
                                        <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                            <Factory className="w-5 h-5 text-blue-600" />
                                            Supplier Name: <span className="text-slate-900">Acme Corp</span>
                                        </h3>
                                        <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">Preferred Partner</span>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="p-6 grid md:grid-cols-2 gap-6">
                                        {/* Delivery Score - Gauge Chart */}
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            <h4 className="text-sm font-semibold text-slate-600 mb-4">Delivery Score</h4>
                                            <div className="relative h-32 flex flex-col items-center justify-end">
                                                {/* Gauge Background */}
                                                <svg viewBox="0 0 200 100" className="w-48 overflow-visible">
                                                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E2E8F0" strokeWidth="20" />
                                                    <motion.path
                                                        d="M 20 100 A 80 80 0 0 1 180 100"
                                                        fill="none"
                                                        stroke="#22C55E"
                                                        strokeWidth="20"
                                                        strokeDasharray="251.2"
                                                        strokeDashoffset="251.2"
                                                        whileInView={{ strokeDashoffset: 20 }} // 92% filled approx
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                                    />
                                                    {/* Needle */}
                                                    <motion.line
                                                        x1="100" y1="100" x2="160" y2="100"
                                                        stroke="#475569"
                                                        strokeWidth="4"
                                                        initial={{ rotate: 180 }}
                                                        whileInView={{ rotate: 340 }} // Pointing to ~90%
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                        style={{ originX: "100px", originY: "100px" }}
                                                    />
                                                    <circle cx="100" cy="100" r="6" fill="#475569" />
                                                </svg>
                                                <div className="absolute bottom-0 text-center">
                                                    <span className="text-3xl font-bold text-slate-800">92%</span>
                                                    <p className="text-xs text-slate-500">On-Time Delivery</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column: Key Metrics */}
                                        <div className="flex flex-col gap-4">
                                            {/* Quality Score - Bar Chart */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex-1">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-sm font-semibold text-slate-600">Quality Score</h4>
                                                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Low Defect Rate</span>
                                                </div>
                                                <div className="flex items-end gap-2 h-24 pt-4">
                                                    {[40, 65, 30, 85, 50, 20].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                                            className="flex-1 bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                                                        ></motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Pricing Consistency - Line Chart */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex-1">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-sm font-semibold text-slate-600">Pricing Trends</h4>
                                                    <span className="flex items-center text-xs text-blue-600 font-bold">
                                                        <TrendingUp className="w-3 h-3 mr-1" /> Stable
                                                    </span>
                                                </div>
                                                <div className="h-16 relative flex items-end">
                                                    <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                                        <defs>
                                                            <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                        <motion.path
                                                            d="M0 50 L40 45 L80 48 L120 40 L160 35 L200 30"
                                                            fill="none"
                                                            stroke="#3B82F6"
                                                            strokeWidth="2"
                                                            initial={{ pathLength: 0 }}
                                                            whileInView={{ pathLength: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5 }}
                                                        />
                                                        <motion.path
                                                            d="M0 50 L40 45 L80 48 L120 40 L160 35 L200 30 V 60 H 0 Z"
                                                            fill="url(#gradient-blue)"
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.5, duration: 1 }}
                                                        />
                                                        {[
                                                            { x: 40, y: 45 }, { x: 80, y: 48 }, { x: 120, y: 40 }, { x: 160, y: 35 }, { x: 200, y: 30 }
                                                        ].map((point, i) => (
                                                            <motion.circle
                                                                key={i}
                                                                cx={point.x} cy={point.y} r="3" fill="#fff" stroke="#3B82F6" strokeWidth="2"
                                                                initial={{ scale: 0 }}
                                                                whileInView={{ scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 1 + (i * 0.1) }}
                                                            />
                                                        ))}
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Annotations & Text */}
                            <div className="lg:col-span-4 space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Supplier Groups</h3>
                                    <p className="text-lg text-slate-600 mb-6">
                                        Categorize vendors for strategic analysis. Identify risks and opportunities in your supply chain.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Layers className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">Category Management</p>
                                                <p className="text-xs text-slate-500">Group by Raw Material, Service, etc.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <Gauge className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">Performance Tracking</p>
                                                <p className="text-xs text-slate-500">Auto-calculated scorecards.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Benefit Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 bg-blue-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl text-center md:text-left"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Benefit: Unified Supplier Insights</h4>
                                <p className="text-blue-100 text-lg">
                                    Identify top performers and negotiate better terms based on real-time data, not gut feeling.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Order to Cash (Selling) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16 md:text-center max-w-3xl mx-auto">
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Selling Module</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Order to Cash Efficiency</h2>
                        <p className="text-lg text-slate-300">
                            Accelerate your sales cycle. Quotations, orders, shipments, and invoicing in one seamless flow.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Quotation", desc: "Create professional quotes that convert instantly to Sales Orders.", color: "bg-blue-600" },
                            { title: "Sales Order", desc: "Reserve stock immediately. Trigger procurement if out of stock.", color: "bg-indigo-600" },
                            { title: "Delivery Note", desc: "Pick, Pack, and Ship. Stock is deducted from specific warehouses.", color: "bg-purple-600" },
                            { title: "Invoice & Pay", desc: "Automated billing based on delivery or order. Real-time AR tracking.", color: "bg-teal-600" }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 ${card.color} opacity-10 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:scale-150 group-hover:opacity-20`}></div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{card.title}</h3>
                                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">{card.desc}</p>
                                <div className={`absolute bottom-0 left-0 w-full h-1 ${card.color}`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selling Module - The Growth Engine */}
            <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            The Growth Engine: Accelerate Your Order-to-Cash Cycle
                        </h2>
                        <p className="text-xl text-blue-100 mb-12">
                            Run a lightning-fast cycle from the first quote to the final payment.
                            Sales is the heartbeat of your organization—keep it strong, rhythmic, and connected.
                        </p>

                        <div className="relative">
                            {/* Abstract 3D Wave Representation */}
                            <div className="h-32 w-full bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 rounded-full blur-3xl opacity-30 absolute top-1/2 left-0 -translate-y-1/2"></div>

                            <div className="flex justify-center items-center gap-8 md:gap-16 relative z-10">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <FileText className="w-10 h-10 text-orange-300 mx-auto mb-2" />
                                    <span className="font-bold">Quote</span>
                                </div>
                                <ArrowRight className="w-8 h-8 text-white/50" />
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <Box className="w-10 h-10 text-blue-300 mx-auto mb-2" />
                                    <span className="font-bold">Deliver</span>
                                </div>
                                <ArrowRight className="w-8 h-8 text-white/50" />
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <RefreshCw className="w-10 h-10 text-green-300 mx-auto mb-2" />
                                    <span className="font-bold">Cash</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CRM and Order-to-Cash Flow */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            CRM and Order-to-Cash, All in One App
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Eliminate the friction of disconnected systems. Experience the flow of a single source of truth.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* The Friction */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">THE FRICTION</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Disconnected Chaos</h3>

                            <div className="relative h-64 flex items-center justify-center">
                                {/* Messy Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                    <path d="M50,50 Q150,150 250,50 T450,150" fill="none" stroke="#FDA4AF" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M50,150 Q150,50 250,150 T450,50" fill="none" stroke="#FDA4AF" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M100,50 C100,200 400,0 400,150" fill="none" stroke="#FDA4AF" strokeWidth="2" strokeDasharray="4 4" />
                                </svg>

                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-green-700 flex flex-col items-center">
                                        <div className="font-mono text-xs mb-1">Spreadsheet</div>
                                        <div className="font-bold">Excel</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-blue-700 flex flex-col items-center">
                                        <div className="font-mono text-xs mb-1">Email</div>
                                        <div className="font-bold">Outlook</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-700 flex flex-col items-center">
                                        <div className="font-mono text-xs mb-1">Legacy</div>
                                        <div className="font-bold">Database</div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-orange-700 flex flex-col items-center">
                                        <div className="font-mono text-xs mb-1">Phone</div>
                                        <div className="font-bold">Calls</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-red-500 text-sm font-medium mt-6 text-center">
                                <span className="inline-block mr-2">⚠️</span> Manual entry errors, out-of-stock sales, delayed invoicing.
                            </p>
                        </motion.div>

                        {/* The Flow */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">THE FLOW</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Seamless Velocity</h3>

                            <div className="relative h-64 flex items-center justify-center">
                                <div className="absolute top-1/2 left-4 right-4 h-1 bg-blue-100 -translate-y-1/2"></div>

                                <div className="flex justify-between w-full relative z-10 px-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg">
                                            <Users className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">Lead</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg">
                                            <FileText className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">Quote</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg">
                                            <ShoppingCart className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">Order</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg">
                                            <DollarSign className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">Cash</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-blue-600 text-sm font-medium mt-6 text-center">
                                <span className="inline-block mr-2">🚀</span> Sales data instantly updates inventory and financial records.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Professional Quotations */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                                Win Business with Professional Quotations
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Speed kills the competition. Create competitive proposals on the fly using pre-configured masters.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Instant Masters</h4>
                                        <p className="text-slate-600">Fetch customer details and items in seconds.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Print Designer</h4>
                                        <p className="text-slate-600">Generate branded, pixel-perfect PDFs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Automated Follow-up</h4>
                                        <p className="text-slate-600">Email directly from the system.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative"
                        >
                            {/* Transformation Arrow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg border border-slate-100 hidden md:block">
                                <ArrowRight className="w-8 h-8 text-blue-500" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Form View */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-xs">
                                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <span className="font-bold text-slate-700">New Quotation</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="bg-slate-50 p-2 rounded border border-slate-100">
                                            <div className="text-slate-400 text-[10px]">Customer</div>
                                            <div className="font-medium text-slate-700">TechCorp Inc.</div>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded border border-slate-100">
                                            <div className="text-slate-400 text-[10px]">Item</div>
                                            <div className="font-medium text-slate-700">High-Performance Laptop</div>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded border border-slate-100">
                                            <div className="text-slate-400 text-[10px]">Rate</div>
                                            <div className="font-medium text-slate-700">$1200</div>
                                        </div>
                                    </div>
                                </div>

                                {/* PDF View */}
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 relative rotate-2 md:translate-x-4 md:translate-y-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                                        <div className="text-right">
                                            <div className="font-bold text-slate-800 text-sm">INVOICE</div>
                                            <div className="text-[10px] text-slate-500">#INV-2024-001</div>
                                        </div>
                                    </div>
                                    <div className="border-b-2 border-slate-100 mb-4"></div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-[10px] font-bold text-slate-700 bg-slate-50 p-1">
                                            <span>Item</span>
                                            <span>Amount</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-slate-600 px-1">
                                            <span>Laptop SKU-99</span>
                                            <span>$60,000</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                                        <div className="text-[10px] font-bold text-slate-800">Total</div>
                                        <div className="text-sm font-bold text-blue-600">$60,000</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Rules */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Automate Strategy with Pricing Rules
                        </h2>
                        <p className="text-lg text-slate-600">
                            Automate your negotiation logic to protect margins while encouraging volume.
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 relative">
                            {/* Flowchart Logic Visualization */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-4">
                                <div className="bg-blue-600 text-white p-4 rounded-lg font-bold shadow-lg min-w-[140px]">
                                    Incoming Sales Order
                                </div>
                                <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
                                <div className="md:hidden w-6 h-6 border-l-2 border-slate-300 h-8"></div>

                                <div className="flex flex-col gap-8">
                                    {/* Branch 1 */}
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-slate-700 font-medium min-w-[180px]">
                                            Is Customer Group = "Gold Partner"?
                                        </div>
                                        <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Yes</div>
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                        <div className="bg-green-500 text-white p-3 rounded-lg font-bold shadow-md min-w-[140px]">
                                            Apply 15% Discount
                                        </div>
                                    </div>

                                    {/* Branch 2 */}
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-slate-700 font-medium min-w-[180px]">
                                            Is Quantity {'>'} 100?
                                        </div>
                                        <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Yes</div>
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                        <div className="bg-blue-500 text-white p-3 rounded-lg font-bold shadow-md min-w-[140px]">
                                            Apply Bulk Pricing Tier
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frictionless Journey Roadmap */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            "The Frictionless Journey" in ERPNext Blue <span className="text-blue-600">(#2563EB)</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Your roadmap to sales velocity in ERPNext.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
                        {[
                            { title: "The Pitch", desc: "Professional Quotations", color: "bg-blue-600" },
                            { title: "The Strategy", desc: "Pricing Rules & Logic", color: "bg-blue-500" },
                            { title: "The Commitment", desc: "Sales Orders & Stock", color: "bg-teal-500" },
                            { title: "The Fulfillment", desc: "Delivery & Logistics", color: "bg-emerald-500" },
                            { title: "The Reward", desc: "Invoicing & Cash", color: "bg-green-500" }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${step.color} text-white p-6 relative group hover:-translate-y-2 transition-transform duration-300 shadow-lg`}
                                style={{
                                    clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
                                    marginLeft: index === 0 ? 0 : "-20px",
                                    zIndex: 5 - index
                                }}
                            >
                                <div className="pl-4">
                                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-xs text-white/90 font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-slate-50 border border-slate-100 rounded-xl p-6 max-w-3xl mx-auto shadow-sm">
                        <p className="text-slate-700 font-medium">
                            Integrated throughout: <span className="font-bold text-blue-600">Real-time Analytics & CRM Nurturing.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Sales Order Backbone - Redesigned Hub & Spoke */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">
                            The Sales Order: <span className="text-slate-700">Backbone of Repeat Business</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            The Sales Order is the pivot point where a promise becomes an operation. <br className="hidden md:block" />
                            It triggers the entire supply chain.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* SVG Connections Layer */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ overflow: 'visible' }}>
                            <defs>
                                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                                </marker>
                                <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#F97316" />
                                </marker>
                            </defs>

                            {/* Logistics Arrow (Center to Left) */}
                            <motion.path
                                d="M540 250 L300 250"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                                fill="none"
                                markerEnd="url(#arrowhead-blue)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />

                            {/* Manufacturing Arrow (Center to Top Right) */}
                            <motion.path
                                d="M750 220 L900 120"
                                stroke="#F97316"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                                fill="none"
                                markerEnd="url(#arrowhead-orange)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            />

                            {/* Procurement Arrow (Center to Bottom Right) */}
                            <motion.path
                                d="M750 280 L900 380"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                                fill="none"
                                markerEnd="url(#arrowhead-blue)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            />
                        </svg>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">

                            {/* Left Column: Logistics */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex justify-center md:justify-end"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center w-64 md:mr-12 hover:scale-105 transition-transform duration-300">
                                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                        <Truck className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-1">Logistics</h3>
                                    <p className="text-sm text-slate-500 font-medium">Plan Dispatch & Route</p>
                                </div>
                            </motion.div>

                            {/* Center Column: Sales Order Hub */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <div className="bg-white p-10 rounded-[2rem] shadow-2xl border-2 border-slate-100 flex flex-col items-center text-center w-80 relative z-20">
                                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                                        ACTIVE
                                    </div>
                                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-slate-200">
                                        <FileText className="w-12 h-12 text-slate-700" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Sales Order</h3>
                                    <div className="bg-slate-100 text-slate-600 font-mono text-sm px-4 py-1.5 rounded-lg border border-slate-200">
                                        #SO-2024-001
                                    </div>
                                    <p className="mt-4 text-xs text-slate-400 max-w-[200px]">
                                        Confirms details, reserves stock, and initiates fulfillment.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column: Manufacturing & Procurement */}
                            <div className="flex flex-col gap-12 md:gap-32 md:pl-12">
                                {/* Manufacturing (Top Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex justify-center md:justify-start"
                                >
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center w-64 hover:scale-105 transition-transform duration-300">
                                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                            <Factory className="w-10 h-10 text-orange-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-orange-900 mb-1">Manufacturing</h3>
                                        <p className="text-sm text-slate-500 font-medium">Trigger Work Order</p>
                                    </div>
                                </motion.div>

                                {/* Procurement (Bottom Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="flex justify-center md:justify-start"
                                >
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center w-64 hover:scale-105 transition-transform duration-300">
                                        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                            <Warehouse className="w-10 h-10 text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-indigo-900 mb-1">Procurement</h3>
                                        <p className="text-sm text-slate-500 font-medium">Generate Material Request</p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Flawless Fulfillment */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 -translate-y-1/2 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                            Flawless Fulfillment and Delivery
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Move from digital promise to physical delivery without data re-entry.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-20">

                            {/* Sales Order Doc */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl w-72 text-center shrink-0 group hover:border-blue-200 transition-colors"
                            >
                                <div className="bg-white w-16 h-20 mx-auto mb-6 border border-slate-200 shadow-sm rounded-lg flex flex-col p-2 gap-1.5 relative">
                                    <div className="h-1.5 bg-slate-100 w-full rounded-full"></div>
                                    <div className="h-1.5 bg-slate-100 w-3/4 rounded-full"></div>
                                    <div className="h-1.5 bg-slate-100 w-1/2 rounded-full"></div>
                                    <div className="h-6 bg-blue-100 w-full mt-auto rounded-md flex items-center justify-center">
                                        <Handshake className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">Sales Order</h3>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-blue-500 hidden lg:block"
                            >
                                <ArrowRight className="w-10 h-10" />
                            </motion.div>

                            {/* Delivery Note Doc */}
                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-3xl border-2 border-blue-600 shadow-2xl w-72 text-center relative z-10 shrink-0 transform lg:-translate-y-4"
                            >
                                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div className="bg-white w-16 h-20 mx-auto mb-6 border border-slate-200 shadow-sm rounded-lg flex flex-col p-2 gap-1.5 relative overflow-hidden">
                                    <div className="h-1.5 bg-slate-100 w-full rounded-full"></div>
                                    <div className="h-1.5 bg-slate-200 w-3/4 rounded-full"></div>
                                    <div className="h-6 bg-blue-600 w-full mt-auto rounded-md flex items-center justify-center">
                                        <Truck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-blue-600">Delivery Note</h3>
                                <div className="mt-4 flex justify-center gap-1">
                                    <motion.div
                                        animate={{ y: [0, 5, 0], opacity: [1, 0, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="text-red-500 font-black text-2xl"
                                    >
                                        -1
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                                className="text-blue-500 hidden lg:block"
                            >
                                <ArrowRight className="w-10 h-10" />
                            </motion.div>

                            {/* Stock Ledger */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl w-full max-w-xl lg:ml-4 text-white overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Database className="w-6 h-6 text-blue-400" />
                                    Stock Ledger
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-5 gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4">
                                        <div className="col-span-2">Item Code</div>
                                        <div>Wh</div>
                                        <div className="text-right">Open</div>
                                        <div className="text-right">Close</div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 text-sm items-center bg-slate-800/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                        <div className="col-span-2 font-mono text-blue-400">ITEM-001</div>
                                        <div className="text-slate-400">WH-01</div>
                                        <div className="text-right font-medium">500</div>
                                        <div className="text-right flex items-center justify-end gap-1.5 font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded-lg">
                                            <TrendingUp className="w-3 h-3 rotate-180" />
                                            499
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Feature Capabilities below */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: ClipboardList, title: "Pick List", desc: "Group orders for efficient picking tours.", color: "blue" },
                                { icon: ScanLine, title: "Barcode Scan", desc: "Mobile scanning for error-free dispatch.", color: "indigo" },
                                { icon: Tags, title: "Batch Tracking", desc: "Full traceability from supplier to customer.", color: "purple" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl text-center group transition-all duration-300 hover:shadow-2xl active:scale-95"
                                >
                                    <div className={`w-16 h-16 bg-${feature.color}-50 text-${feature.color}-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform transition-transform group-hover:rotate-12`}>
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h4>
                                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Faster Invoicing, Healthy Cash Flow */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Financial Velocity</div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Faster Invoicing, <br /><span className="text-orange-600">Healthy Cash Flow</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                A sale isn't complete until the money is in the bank. Convert delivery notes to invoices instantly and monitor payments in real-time.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Instant Conversion", desc: "Generate invoices directly from delivery notes or sales orders." },
                                    { title: "Automated Reminders", desc: "Never chase a payment manually again with auto-emailers." },
                                    { title: "Direct Payment Links", desc: "Include Razorpay, PayPal, or Stripe links in every PDF." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-orange-100 p-1 rounded-full h-6 w-6 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative">
                            {/* Document Conversion Graphic */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-10"
                            >
                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Sales Invoice</h3>
                                    </div>
                                    <div className="text-sm font-mono text-slate-400">#INV-2024-089</div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm"><span className="text-slate-500">Subtotal:</span> <span className="font-bold text-slate-800">$1,200.00</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-slate-500">Tax (VAT 5%):</span> <span className="font-bold text-slate-800">$60.00</span></div>
                                    <div className="flex justify-between text-xl pt-4 border-t border-slate-100"><span className="font-bold text-slate-900">Total:</span> <span className="font-black text-orange-600">$1,260.00</span></div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                                    <FilePlus className="w-6 h-6" />
                                    CREATE INVOICE
                                    <motion.div
                                        animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="absolute -bottom-2 -right-2 text-white/50"
                                    >
                                        <MousePointer2 className="w-8 h-8 rotate-[25deg] fill-white" />
                                    </motion.div>
                                </motion.button>
                            </motion.div>

                            {/* Aging Summary Card Overlay */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-10 -right-6 lg:-right-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 w-72 z-20"
                            >
                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <History className="w-4 h-4 text-orange-500" />
                                    Aging Summary
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>0-30 DAYS</span> <span>$45.5k</span></div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[75%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>30-60 DAYS</span> <span>$12.2k</span></div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-400 w-[20%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1"><span>60+ DAYS</span> <span>$3.1k</span></div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[5%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Insights & Sales Analytics */}
            < section className="py-24 bg-white overflow-hidden" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                            Strategic Insights & Sales Analytics
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Turn raw data into predictable revenue growth. Identify high-value territories and optimize your sales conversion funnel.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none"></div>
                        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
                        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>

                        <div className="grid lg:grid-cols-12 gap-8 relative z-10">
                            {/* Sales Funnel Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-5 bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold text-white">Conversion Funnel</h3>
                                    <div className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-bold">LIVE</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative h-12 bg-white/5 rounded-xl flex items-center justify-between px-6 overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-600/20 w-full"></div>
                                        <span className="relative z-10 text-sm font-bold text-slate-300">Leads Generated</span>
                                        <span className="relative z-10 font-black text-white">100%</span>
                                    </div>
                                    <div className="relative h-12 bg-white/5 rounded-xl flex items-center justify-between px-6 overflow-hidden mx-4">
                                        <div className="absolute inset-0 bg-blue-500/20 w-[65%]"></div>
                                        <span className="relative z-10 text-sm font-bold text-slate-300">Quotations</span>
                                        <span className="relative z-10 font-black text-white">65%</span>
                                    </div>
                                    <div className="relative h-12 bg-white/5 rounded-xl flex items-center justify-between px-6 overflow-hidden mx-8">
                                        <div className="absolute inset-0 bg-blue-400/20 w-[35%]"></div>
                                        <span className="relative z-10 text-sm font-bold text-slate-300">Sales Orders</span>
                                        <span className="relative z-10 font-black text-white">35%</span>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                    <div className="text-blue-400 text-3xl font-black">3.5%</div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Lead to Cash Velocity</div>
                                </div>
                            </motion.div>

                            {/* Revenue & Map Column */}
                            <div className="lg:col-span-7 space-y-8">
                                {/* Revenue Chart Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-white">Monthly Revenue</h3>
                                        <TrendingUp className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex items-end gap-3 h-32 mt-4">
                                        {[40, 65, 45, 80, 55, 95, 85].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                                className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative group"
                                            >
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    ${h}k
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-4 px-2 tracking-widest">
                                        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
                                    </div>
                                </motion.div>

                                {/* Territory Heatmap Mini-Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center gap-6"
                                >
                                    <div className="w-24 h-24 bg-slate-700/50 rounded-2xl flex items-center justify-center p-2 relative overflow-hidden">
                                        <Globe className="w-12 h-12 text-blue-500/50" />
                                        <div className="absolute top-4 left-6 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                                        <div className="absolute bottom-8 right-6 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white">Territory Insights</h4>
                                        <p className="text-slate-400 text-sm mt-1">North America leads with 45% of total Q3 volume.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unified Retail Point of Sale (POS) */}
            <section className="py-24 bg-slate-900 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#0f172a_100%)]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/20"
                        >
                            <Laptop className="w-4 h-4" />
                            Retail Excellence
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                            Unified Retail Point of Sale (POS)
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Sell anywhere, anytime. A high-performance retail interface that stays operational even when the internet goes down.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* POS Tablet Mockup */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-8 group"
                            >
                                <div className="bg-slate-800 p-3 rounded-[3rem] border-[12px] border-slate-700 shadow-2xl relative overflow-hidden aspect-[16/10] flex flex-col">
                                    {/* POS Interface Header */}
                                    <div className="bg-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
                                        <div className="flex items-center gap-4">
                                            <div className="font-black text-white tracking-tighter">TRUSYNC <span className="text-blue-500">POS</span></div>
                                            <div className="h-4 w-[1px] bg-slate-700"></div>
                                            <div className="text-xs font-bold text-slate-400">Main Store - Register 01</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold animate-pulse">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                OFFLINE MODE ACTIVE
                                            </div>
                                            <WifiOff className="w-4 h-4 text-slate-500" />
                                        </div>
                                    </div>

                                    {/* POS Main Area */}
                                    <div className="flex-1 flex overflow-hidden">
                                        {/* Product Grid */}
                                        <div className="flex-1 p-4 grid grid-cols-3 gap-3 overflow-y-auto custom-scrollbar">
                                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                                <div key={i} className="bg-slate-700/50 p-3 rounded-2xl border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer group/item">
                                                    <div className="aspect-square bg-slate-800 rounded-xl mb-3 flex items-center justify-center text-slate-600 group-hover/item:text-blue-400 transition-colors">
                                                        <Package className="w-8 h-8" />
                                                    </div>
                                                    <div className="text-xs font-bold text-white mb-1">Premium Product {i}</div>
                                                    <div className="text-blue-400 font-black">$45.00</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Cart Sidebar */}
                                        <div className="w-72 bg-slate-900 border-l border-slate-700 p-4 flex flex-col">
                                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Current Order</h4>
                                            <div className="flex-1 space-y-3 mb-4">
                                                <div className="flex justify-between items-center bg-slate-800 p-2 rounded-lg text-xs">
                                                    <span className="text-white">Product 1 x 2</span>
                                                    <span className="font-bold text-blue-400">$90.00</span>
                                                </div>
                                                <div className="flex justify-between items-center bg-slate-800 p-2 rounded-lg text-xs">
                                                    <span className="text-white">Product 3 x 1</span>
                                                    <span className="font-bold text-blue-400">$45.00</span>
                                                </div>
                                            </div>
                                            <div className="pt-4 border-t border-slate-700 space-y-2 mb-4">
                                                <div className="flex justify-between text-xs text-slate-400"><span>Subtotal:</span> <span>$135.00</span></div>
                                                <div className="flex justify-between text-lg font-black text-white"><span>Total:</span> <span>$135.00</span></div>
                                            </div>
                                            <button className="w-full bg-blue-600 text-white font-black py-3 rounded-xl shadow-lg hover:bg-blue-500 transition-colors">
                                                CHECKOUT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* POS Benefits */}
                            <div className="lg:col-span-4 space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-6">
                                        <RefreshCw className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Automated Offline Sync</h3>
                                    <p className="text-slate-400">Transactions are stored locally and automatically synced to the clerk's ledger once the connection is restored.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-6">
                                        <Printer className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Hardware Ready</h3>
                                    <p className="text-slate-400">Native support for thermal printers, barcode scanners, and cash drawers via Frappe Raw Printing.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Multi-Store Control</h3>
                                    <p className="text-slate-400">Manage pricing, loyalty points, and stock levels across 100+ locations from a single dashboard.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Powered by Frappe Framework */}
            < section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden" >
                <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Powered by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Frappe Framework</span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            Built on a full-stack, battery-included framework designed for flexibility and power. Future-proof your business with open source technology.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Code className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">No-Code Customization</h3>
                            <p className="text-slate-400">Modify forms, fields, and workflows without writing a single line of code.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">API-First Design</h3>
                            <p className="text-slate-400">Seamlessly integrate with third-party apps via REST and Socket.io APIs.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">100% Open Source</h3>
                            <p className="text-slate-400">No vendor lock-in. Own your data and your code specifically tailored to you.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-20 bg-blue-600 text-white" >
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of businesses using ERPNext to gain total visibility and control over their inventory.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                        >
                            Book a Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section >
        </div >
    );
};

export default Page;
