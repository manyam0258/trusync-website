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
                                href="#contact"
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
            {/* Procure to Pay (Buying) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="mb-16 md:text-center max-w-3xl mx-auto">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Buying Module</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-slate-900">Procure to Pay Excellence</h2>
                        <p className="text-lg text-slate-600">
                            Streamline your purchasing with a unified workflow. From material request to payment, every step is linked and traceable.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[24px] left-0 w-full h-1 bg-slate-100 -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { icon: ClipboardCheck, title: "Request", desc: "Material Requests from stock levels." },
                                { icon: FileText, title: "Order", desc: "Supplier selection & Purchase Orders." },
                                { icon: Truck, title: "Receipt", desc: "GRNs update stock instantly." },
                                { icon: DollarSign, title: "Bill", desc: "Purchase Invoice verification." },
                                { icon: CheckCircle, title: "Pay", desc: "Payment entry & ledger update." }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg relative group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4 text-xl font-bold border-4 border-white shadow-sm mx-auto md:mx-0">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 md:text-left text-center">{step.title}</h3>
                                    <p className="text-sm text-slate-600 md:text-left text-center">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Order to Cash (Selling) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
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

            {/* Intelligent Replenishment */}
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
                            Intelligent Replenishment
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop stockouts before they happen. ERPNext acts as an always-on procurement assistant, monitoring levels 24/7.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                        {[
                            { icon: Gauge, title: "Stock Monitor", desc: "Stock dips below reorder level", color: "text-red-500 bg-red-50" },
                            { icon: Cpu, title: "Auto-Trigger", desc: "System detects shortage instantly", color: "text-blue-500 bg-blue-50" },
                            { icon: FilePlus, title: "Material Request", desc: "Auto-creates Purchase Request", color: "text-indigo-500 bg-indigo-50" },
                            { icon: Handshake, title: "Procurement", desc: "Purchasing team notified", color: "text-green-500 bg-green-50" }
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg w-full md:w-64 text-center z-10"
                                >
                                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${step.color}`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600">{step.desc}</p>
                                </motion.div>
                                {index < 3 && (
                                    <div className="hidden md:flex text-slate-300">
                                        <ArrowRight className="w-8 h-8 animate-pulse" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl font-medium text-slate-800">
                            Optimize cash flow by buying only <span className="text-blue-600 font-bold">what you need</span>, when you <span className="text-blue-600 font-bold">need it</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Efficient Inwarding & Organization */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                            Efficient Inwarding & Organization
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Streamline the receiving process. Ensure items are quality-checked and stored in their optimal location immediately to prevent "lost" inventory.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Purchase Receipt</h4>
                                    <p className="text-sm text-slate-600">Generated directly from PO.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <ClipboardCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Quality Inspections</h4>
                                    <p className="text-sm text-slate-600">Mandatory checks before stock hits the floor.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <Box className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Put-away Rules</h4>
                                    <p className="text-sm text-slate-600">Auto-assign bins for optimal retrieval.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-bl-full opacity-50 -mr-10 -mt-10"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-full max-w-sm bg-slate-900 rounded-2xl p-6 text-white shadow-2xl mb-8 group hover:scale-105 transition-transform duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Item</div>
                                        <div className="font-bold text-xl">Widget A</div>
                                    </div>
                                    <div className="bg-green-500 rounded-full p-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                        <span className="text-slate-400">Quality Check</span>
                                        <span className="text-green-400 font-bold">Passed</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Put-Away Location</span>
                                        <span className="text-orange-400 font-bold flex items-center gap-1">
                                            <Layers className="w-3 h-3" /> Rack 4, Bin B
                                        </span>
                                    </div>
                                </div>

                                {/* Scanning Laser Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_ease-in-out_infinite]"></div>
                            </div>

                            <ScanLine className="w-16 h-16 text-slate-300" />
                        </div>
                    </motion.div>
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

            {/* Sales Order Backbone */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            The Sales Order: Backbone of Repeat Business
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            The Sales Order is the pivot point where a promise becomes an operation. It triggers the entire supply chain.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        {/* Central Node */}
                        <div className="flex justify-center mb-12 md:mb-0 relative z-20">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center w-64"
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">Sales Order</h3>
                                <div className="text-sm font-mono text-slate-500 bg-slate-50 rounded py-1 px-2 inline-block">
                                    #SO-2024-001
                                </div>
                            </motion.div>
                        </div>

                        {/* Connected Nodes */}
                        <div className="grid md:grid-cols-3 gap-8 md:mt-[-40px]">
                            {/* Logistics */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center relative md:top-20"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                                    <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                                </div>
                                <div className="hidden md:block absolute -top-12 right-0 w-24 h-[2px] bg-slate-300 origin-bottom-right -rotate-45"></div>

                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-slate-800">Logistics</h4>
                                <p className="text-sm text-slate-500">Plan Dispatch & Route</p>
                            </motion.div>

                            {/* Manufacturing (Spacer for center) */}
                            <div className="hidden md:block"></div>

                            {/* Procurement & Manufacturing Right Side */}
                            <div className="space-y-8 md:top-10 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                                >
                                    <div className="hidden md:block absolute top-1/2 -left-12 w-12 h-[2px] bg-slate-300 -rotate-12 origin-right"></div>
                                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <Factory className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-slate-800">Manufacturing</h4>
                                    <p className="text-sm text-slate-500">Trigger Work Order</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                                >
                                    <div className="hidden md:block absolute top-1/2 -left-12 w-12 h-[2px] bg-slate-300 rotate-12 origin-right"></div>
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <Warehouse className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-slate-800">Procurement</h4>
                                    <p className="text-sm text-slate-500">Generate Material Request</p>
                                </motion.div>
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



            {/* Blanket Orders & Long-Term Revenue */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Secure Long-Term Revenue with Blanket Orders
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Automate compliance with long-term contracts and rate locking.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-800">Blanket Order #BO-9901 Contract Limit</h3>
                            <div className="text-sm text-slate-500">Total Quantity: 10,000 Units</div>
                        </div>

                        {/* Progress Bar Visualization */}
                        <div className="relative h-16 bg-slate-100 rounded-xl overflow-hidden mb-8 border border-slate-200">
                            {/* Filled Portion */}
                            <div className="absolute top-0 left-0 h-full bg-blue-600 w-[65%] flex items-center justify-end pr-4">
                                <div className="bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    Ordered: 6,500
                                </div>
                            </div>

                            {/* Remaining Portion Tooltip */}
                            <div className="absolute top-1/2 right-[15%] -translate-y-1/2">
                                <div className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-2">
                                    Remaining: 3,500
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Rate Lock Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg transform -translate-y-4">
                            <Lock className="w-4 h-4" />
                            Rate Locked: $5.50/unit until Dec 31st
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
                            <div className="flex gap-3">
                                <div className="mt-1 text-blue-600"><ArrowRight className="w-5 h-5" /></div>
                                <p className="text-slate-700 font-medium">Lock in rates and quantities for key customers.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1 text-blue-600"><ArrowRight className="w-5 h-5" /></div>
                                <p className="text-slate-700 font-medium">Auto-validation against contract terms on every new order.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1 text-blue-600"><ArrowRight className="w-5 h-5" /></div>
                                <p className="text-slate-700 font-medium">Monitor fulfillment progress to prompt timely renewals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Flawless Fulfillment */}
            < section className="py-24 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Flawless Fulfillment and Delivery
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Move from digital promise to physical delivery without data re-entry.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">

                            {/* Sales Order Doc */}
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm w-64 text-center shrink-0">
                                <div className="bg-white w-12 h-16 mx-auto mb-4 border border-slate-200 shadow-sm rounded flex flex-col p-1 gap-1">
                                    <div className="h-1 bg-slate-200 w-full rounded-sm"></div>
                                    <div className="h-1 bg-slate-200 w-3/4 rounded-sm"></div>
                                    <div className="h-4 bg-blue-100 w-full mt-auto rounded-sm"></div>
                                </div>
                                <h3 className="font-bold text-slate-800">Sales Order</h3>
                            </div>

                            <ArrowRight className="w-8 h-8 text-blue-500 lg:rotate-0 rotate-90" />

                            {/* Delivery Note Doc */}
                            <div className="bg-white p-6 rounded-xl border border-blue-600 shadow-lg w-64 text-center relative z-10 shrink-0">
                                <div className="bg-white w-12 h-16 mx-auto mb-4 border border-slate-200 shadow-sm rounded flex flex-col p-1 gap-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-[8px] text-white flex items-center justify-center font-bold">✓</div>
                                    <div className="h-1 bg-slate-200 w-full rounded-sm"></div>
                                    <div className="h-1 bg-slate-200 w-3/4 rounded-sm"></div>
                                    <div className="h-4 bg-blue-600 w-full mt-auto rounded-sm"></div>
                                </div>
                                <h3 className="font-bold text-blue-600">Delivery Note</h3>
                            </div>

                            <ArrowRight className="w-8 h-8 text-blue-500 lg:rotate-0 rotate-90" />

                            {/* Stock Ledger */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm w-full max-w-lg lg:ml-4">
                                <h3 className="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Stock Ledger</h3>
                                <div className="grid grid-cols-4 gap-2 text-[10px] font-bold text-slate-500 mb-2">
                                    <div>Item Code</div>
                                    <div>Warehouse</div>
                                    <div>Opening</div>
                                    <div>Closing</div>
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-xs items-center bg-white p-2 rounded border border-slate-100">
                                    <div className="font-mono">ITEM-001</div>
                                    <div>WH-001</div>
                                    <div>500</div>
                                    <div className="flex items-center gap-1 font-bold text-red-500">
                                        <ArrowRight className="w-3 h-3 rotate-45" />
                                        499
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Capabilities below */}
                        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <ClipboardList className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">Pick List</h4>
                                <p className="text-sm text-slate-500">Group orders for efficient picking tours.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <ScanLine className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">Barcode Scan</h4>
                                <p className="text-sm text-slate-500">Mobile scanning for error-free dispatch.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Tags className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">Batch Tracking</h4>
                                <p className="text-sm text-slate-500">Traceability from supplier to customer.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Actionable Analytics & Reporting */}
            < section className="py-24 bg-white overflow-hidden" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                            Actionable Analytics & Reporting
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Turn raw data into strategic decisions. Identify bottlenecks, reduce holding costs, and optimize inventory turnover.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-4 md:p-8 shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none"></div>

                        <div className="grid lg:grid-cols-3 gap-6 relative z-10">
                            {/* Stock Aging Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-white">Stock Aging</h3>
                                    <PieChart className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="flex items-end gap-3 h-40 mt-6 px-2">
                                    <div className="w-1/3 bg-green-500/20 border-t-2 border-green-500 h-[30%] rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">120</div>
                                    </div>
                                    <div className="w-1/3 bg-yellow-500/20 border-t-2 border-yellow-500 h-[50%] rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">450</div>
                                    </div>
                                    <div className="w-1/3 bg-red-500/20 border-t-2 border-red-500 h-[80%] rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">890</div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-400 mt-2 px-2">
                                    <span>0-30</span>
                                    <span>30-60</span>
                                    <span>90+</span>
                                </div>
                            </motion.div>

                            {/* Projected Quantity Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-white">Projected Quantity</h3>
                                    <TrendingUp className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-6">4,250 <span className="text-sm font-normal text-slate-400">units</span></div>
                                <div className="relative h-32 w-full">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <path d="M0,50 L20,35 L40,45 L60,15 L80,25 L100,5" fill="none" stroke="#60a5fa" strokeWidth="2" />
                                        <circle cx="60" cy="15" r="3" fill="#60a5fa" className="animate-pulse" />
                                        <path d="M0,50 L20,35 L40,45 L60,15 L80,25 L100,5 V50 H0 Z" fill="url(#gradient)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#60a5fa" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </motion.div>

                            {/* KPI List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center gap-4"
                            >
                                <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-xl">
                                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                                        <ClipboardList className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Stock Ledger</div>
                                        <div className="font-bold text-white">View History</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-xl">
                                    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Stock Balance</div>
                                        <div className="font-bold text-white">$1.2M Value</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-xl">
                                    <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg">
                                        <History className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Turnover Ratio</div>
                                        <div className="font-bold text-white">4.5x / Year</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >

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
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
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
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                        >
                            Book a Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Page;
