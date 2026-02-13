'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, RefreshCw, Settings, FileText, Globe, Layers, DollarSign, AlertTriangle, Database, Trash2, TrendingDown, MapPin, Wrench, BarChart3, PieChart } from 'lucide-react';

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
                            Financial Mastery Meets <br />
                            <span className="text-blue-600">Asset Intelligence</span>
                        </h1>
                        <p className="text-xl font-medium text-slate-700 mb-4">
                            A Unified Ecosystem for ERPNext Accounting and Asset Management
                        </p>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Move beyond scattered spreadsheets and disconnected records. ERPNext unifies financial accounting and fixed asset management into a single source of truth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm text-slate-600">Accounting Core: Multi-currency, budgeting, compliance.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-sm text-slate-600">Asset Lifecycle: From procurement to retirement.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Settings className="w-5 h-5 text-purple-600" />
                                </div>
                                <p className="text-sm text-slate-600">Seamless Integration: Physical actions update financial ledgers.</p>
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
                        {/* Abstract Representation of Ledger + Factory */}
                        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                            <div className="absolute top-4 right-4 text-slate-200">
                                <TrendingUp size={120} strokeWidth={1} />
                            </div>
                            {/* Mock Ledger */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 relative z-10 w-3/4">
                                <div className="font-mono text-xs text-slate-500 mb-2 border-b pb-1">General Ledger</div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs"><span>01/01/24 Asset Purchase</span><span className="font-mono">50,000.00</span></div>
                                    <div className="flex justify-between text-xs"><span>01/01/24 Asset Install</span><span className="font-mono">5,000.00</span></div>
                                    <div className="w-full h-px bg-slate-200 my-1"></div>
                                    <div className="flex justify-between text-xs font-bold"><span>Total Assets</span><span className="font-mono">55,000.00</span></div>
                                </div>
                            </div>

                            {/* Connection Lines */}
                            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-16 h-px bg-dashed border-t-2 border-slate-300"></div>

                            {/* Mock Factory Icon */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                                <Layers className="w-12 h-12 text-blue-600" />
                                <div className="text-xs font-bold text-center mt-2 text-slate-600">Plant A</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Foundation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">The Foundation: Intelligent Chart of Accounts</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Structure</h3>
                                    <p className="text-slate-600">Adapts to any business model. Organize ledgers into parent and child nodes for detailed categorization.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">General Ledger Integration</h3>
                                    <p className="text-slate-600">Every transaction automatically creates a GL entry, forming the foundation of all reporting.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Drill-Down Capability</h3>
                                    <p className="text-slate-600">Trace transactions from high-level reports down to individual ledger postings.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mt-8">
                                <p className="text-blue-800 text-sm font-medium">
                                    <span className="font-bold">Key Benefit:</span> Maintain accurate records for statutory compliance and real-time financial health visibility.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-4 border-b pb-2">
                                <span className="font-bold text-slate-700">Chart of Accounts</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            {/* Tree View Mock */}
                            <div className="font-mono text-sm space-y-2 text-slate-700">
                                <div className="flex items-center gap-2 font-bold"><span className="text-slate-400">▼</span> Assets</div>
                                <div className="pl-6 flex items-center gap-2"><span className="text-slate-400">▶</span> Current Assets</div>
                                <div className="pl-6 flex items-center gap-2"><span className="text-slate-400">▼</span> Fixed Assets</div>
                                <div className="pl-12 flex items-center gap-2 hover:bg-blue-50 p-1 rounded cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500">
                                    <FileText className="w-4 h-4 text-slate-400" /> Buildings
                                </div>
                                <div className="pl-12 flex items-center gap-2 bg-blue-50 p-1 rounded cursor-pointer border-l-2 border-blue-500">
                                    <FileText className="w-4 h-4 text-blue-600" /> Electronic Equipment
                                </div>
                                <div className="pl-12 flex items-center gap-2 hover:bg-blue-50 p-1 rounded cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500">
                                    <FileText className="w-4 h-4 text-slate-400" /> Furniture
                                </div>
                                <div className="flex items-center gap-2"><span className="text-slate-400">▶</span> Liabilities</div>
                                <div className="flex items-center gap-2"><span className="text-slate-400">▶</span> Income</div>
                                <div className="flex items-center gap-2"><span className="text-slate-400">▶</span> Expenses</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Unified Ecosystem Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">The Unified Financial Ecosystem</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Challenge</h3>
                                <p className="text-slate-600">Businesses suffer from &quot;ghost assets,&quot; manual errors, and disconnected records.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center relative py-12"
                        >
                            {/* Circular Cycle Diagram Implementation */}
                            <div className="relative w-80 h-80 rounded-full border-4 border-slate-200 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rotate-45"></div>

                                <div className="text-center z-10 w-40">
                                    <h4 className="text-2xl font-bold text-slate-900 leading-tight">One Centralized System</h4>
                                </div>

                                {/* Orbiting Items */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md border border-slate-100 flex flex-col items-center w-24">
                                    <DollarSign className="w-6 h-6 text-blue-600 mb-1" />
                                    <span className="text-[10px] font-bold text-center leading-tight">Procurement</span>
                                </div>
                                <div className="absolute top-1/4 -right-10 bg-white p-3 rounded-full shadow-md border border-slate-100 flex flex-col items-center w-24">
                                    <Settings className="w-6 h-6 text-blue-600 mb-1" />
                                    <span className="text-[10px] font-bold text-center leading-tight">Asset Creation</span>
                                </div>
                                <div className="absolute bottom-1/4 -right-10 bg-white p-3 rounded-full shadow-md border border-slate-100 flex flex-col items-center w-24">
                                    <TrendingUp className="w-6 h-6 text-blue-600 mb-1" />
                                    <span className="text-[10px] font-bold text-center leading-tight">Depreciation</span>
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md border border-slate-100 flex flex-col items-center w-24">
                                    <FileText className="w-6 h-6 text-blue-600 mb-1" />
                                    <span className="text-[10px] font-bold text-center leading-tight">General Ledger</span>
                                </div>
                                <div className="absolute bottom-1/4 -left-10 bg-white p-3 rounded-full shadow-md border border-slate-100 flex flex-col items-center w-24">
                                    <Layers className="w-6 h-6 text-blue-600 mb-1" />
                                    <span className="text-[10px] font-bold text-center leading-tight">Reporting</span>
                                </div>

                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Solution</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm"><strong className="text-slate-900">Unified Truth:</strong> One platform for financials and fixed assets.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm"><strong className="text-slate-900">Automation:</strong> Auto-calculated depreciation and recurring invoices.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm"><strong className="text-slate-900">Compliance:</strong> Built-in tax templates and localization.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Scaling Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                {/* Abstract Map Background using grid dots */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Scaling Globally: Multi-Company & Multi-Currency</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <Globe className="w-10 h-10 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Multi-Company Management</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Manage multiple entities across regions within a single ERPNext account. Generate inter-company sales and purchase transactions effortlessly.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <Layers className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Consolidation</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Consolidate financials for group-level reporting. View a unified picture of global health.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <DollarSign className="w-10 h-10 text-yellow-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Currency Precision</h3>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li>• Capture balances in base and transaction currencies.</li>
                                <li>• Generate GL reports in local currencies.</li>
                                <li>• Real-time valuation for international transactions.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cash Flow Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Optimizing Cash Flow: Receivables & Payables</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Receivables Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border border-green-200 rounded-xl overflow-hidden shadow-sm"
                        >
                            <div className="bg-green-600 text-white p-4 text-center font-bold text-lg">
                                Inflow: Accounts Receivable
                            </div>
                            <div className="p-6 bg-green-50/30">
                                {/* Mock Table */}
                                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                            <tr>
                                                <th className="p-3">Invoice ID</th>
                                                <th className="p-3">Customer</th>
                                                <th className="p-3">Amount</th>
                                                <th className="p-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-3 font-mono text-slate-600">INV-001</td>
                                                <td className="p-3">Acme Corp</td>
                                                <td className="p-3">$5,000</td>
                                                <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-mono text-slate-600">INV-002</td>
                                                <td className="p-3">Beta Inc</td>
                                                <td className="p-3">$2,500</td>
                                                <td className="p-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Overdue</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> Streamline invoicing and payment tracking.</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> Automated follow-ups for outstanding payments.</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Payables Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border border-orange-200 rounded-xl overflow-hidden shadow-sm"
                        >
                            <div className="bg-orange-600 text-white p-4 text-center font-bold text-lg">
                                Outflow: Accounts Payable
                            </div>
                            <div className="p-6 bg-orange-50/30">
                                {/* Mock Table */}
                                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                            <tr>
                                                <th className="p-3">Bill ID</th>
                                                <th className="p-3">Vendor</th>
                                                <th className="p-3">Amount</th>
                                                <th className="p-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-3 font-mono text-slate-600">BILL-101</td>
                                                <td className="p-3">Supplier X</td>
                                                <td className="p-3">$1,200</td>
                                                <td className="p-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Scheduled</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-mono text-slate-600">BILL-102</td>
                                                <td className="p-3">Vendor Y</td>
                                                <td className="p-3">$800</td>
                                                <td className="p-3"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">Due Soon</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5" /> Track vendor invoices to avoid duplicate payments.</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-orange-600 mt-0.5" /> Manage liabilities effectively.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Reconciliation: Intuitive tools to match payments seamlessly.
                        </div>
                    </div>

                </div>
            </section>

            {/* Strategic Control Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Strategic Control: Cost Centers & Budgeting</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Centers & Dimensions</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Track profitability by unit, branch, or project. Tag transactions with dimensions to generate <strong className="text-slate-900">segmented P&L reports instantly.</strong>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Budgeting Discipline</h3>
                                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                    <li>Define budgets for specific cost centers.</li>
                                    <li>Break down budgets into monthly splits.</li>
                                </ul>
                                <p className="text-slate-600 mt-3">
                                    <strong className="text-green-700">Enforcement:</strong> System prevents transactions that exceed allocated funds.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bar Chart Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
                        >
                            <h4 className="text-lg font-bold text-blue-900 mb-6 text-center">Profitability by Cost Center</h4>
                            <div className="space-y-6">
                                {/* New York */}
                                <div className="relative">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-semibold text-slate-700">New York Branch</span>
                                        <span className="font-bold text-slate-900">$1.2M</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-8 overflow-hidden">
                                        <div className="bg-blue-600 h-8 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                {/* London */}
                                <div className="relative">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-semibold text-slate-700">London Branch</span>
                                        <span className="font-bold text-slate-900">Near Limit</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-8 overflow-hidden relative">
                                        <div className="bg-blue-600 h-8 rounded-full" style={{ width: '85%' }}></div>
                                        <div className="absolute top-0 right-[15%] -mt-2">
                                            <AlertTriangle className="w-6 h-6 text-yellow-500 fill-white" />
                                        </div>
                                    </div>
                                </div>
                                {/* Online Store */}
                                <div className="relative">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-semibold text-slate-700">Online Store</span>
                                        <span className="font-bold text-slate-900">$900K</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-8 overflow-hidden relative">
                                        <div className="absolute top-0 left-0 h-full bg-slate-400 z-10" style={{ width: '70%' }}></div>
                                        <div className="absolute top-0 left-0 h-full bg-blue-600 z-20" style={{ width: '60%' }}></div>
                                        <div className="absolute inset-0 flex items-center justify-end pr-4 z-30 pointer-events-none">
                                            <span className="text-xs text-white drop-shadow-md">Budget $1.0M</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-2 justify-end text-xs">
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-400"></div> Budget</div>
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-600"></div> Actual</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-900">Compliance & Taxation Engines</h2>
                    </motion.div>

                    <div className="relative max-w-6xl mx-auto">

                        <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">

                            {/* Left Column */}
                            <div className="space-y-32">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                    className="lg:text-right"
                                >
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Configurable Tax Templates</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Pre-configure Sales and Purchase templates to fetch tax ledgers automatically. Reduces manual data entry errors.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                                    className="lg:text-right"
                                >
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Regional Localization</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Support for GST, VAT, and consumption taxes. Integration with government portals for direct E-Invoicing via API.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Center Column - Icon */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                className="flex justify-center py-12 lg:py-0"
                            >
                                <div className="relative">
                                    {/* Floating Tags - Symmetrical Placement */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                                        className="absolute -top-6 -left-8 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20"
                                    >
                                        GST
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                                        className="absolute -top-6 -right-8 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20"
                                    >
                                        VAT
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                                        className="absolute -bottom-6 -left-12 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20"
                                    >
                                        E-Invoice
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                                        className="absolute -bottom-6 -right-12 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20"
                                    >
                                        Withholding
                                    </motion.div>

                                    {/* Main Icon */}
                                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl border-4 border-blue-600 w-56 h-64 flex flex-col items-center justify-center relative z-10">
                                        <h3 className="text-5xl font-black text-blue-600 tracking-tighter mb-4">TAX</h3>

                                        <div className="w-full flex flex-col gap-3 opacity-50">
                                            <div className="w-full h-4 bg-blue-100 rounded-sm"></div>
                                            <div className="flex gap-2">
                                                <div className="w-2/3 h-24 bg-blue-100 rounded-sm border-2 border-blue-200"></div>
                                                <div className="w-1/3 flex flex-col gap-2">
                                                    <div className="h-full bg-blue-100 rounded-sm border-2 border-blue-200"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-3 rounded-full border-4 border-white shadow-xl">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column */}
                            <div className="space-y-32">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                    className="text-left"
                                >
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Item Linking</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Link specific items to specific tax ledgers. Ensures automatic, accurate calculation even on complex mixed bills.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-left"
                                >
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Withholding Tax</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Configure taxation and withholding clauses directly within invoices.
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* End-of-Life Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">End-of-Life: Selling & Scrapping</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
                        >
                            {/* Branching Logic Visual */}
                            <div className="flex flex-col items-center">
                                <div className="bg-slate-100 p-4 rounded-lg w-full text-center border border-slate-300 mb-8 relative">
                                    <span className="font-bold text-slate-700">Asset Disposal Action</span>
                                    {/* Line down */}
                                    <div className="absolute top-full left-1/2 w-0.5 h-8 bg-slate-300 -translate-x-1/2"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 w-full relative">
                                    {/* Connectivity lines */}
                                    <div className="absolute -top-8 left-1/4 w-1/2 h-8 border-t-2 border-slate-300"></div>
                                    <div className="absolute -top-8 left-1/4 w-0.5 h-8 bg-slate-300"></div>
                                    <div className="absolute -top-8 right-1/4 w-0.5 h-8 bg-slate-300"></div>

                                    {/* Sell Path */}
                                    <div className="border border-green-200 bg-green-50 p-6 rounded-lg text-center relative">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3 absolute -top-6 left-1/2 -translate-x-1/2 shadow-sm">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-green-900 mt-4 mb-2">Sell Asset</h4>
                                        <p className="text-xs text-green-800">Create Sales Invoice.</p>
                                        <p className="text-xs text-green-800 mt-1"><b>Gain/Loss</b> Calculated Automatically.</p>
                                    </div>

                                    {/* Scrap Path */}
                                    <div className="border border-red-200 bg-red-50 p-6 rounded-lg text-center relative">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-3 absolute -top-6 left-1/2 -translate-x-1/2 shadow-sm">
                                            <Trash2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-red-900 mt-4 mb-2">Scrap Asset</h4>
                                        <p className="text-xs text-red-800">Write off value.</p>
                                        <p className="text-xs text-red-800 mt-1">Post entry to <b>Loss on Scrap</b> account.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Gain/Loss Calculation</h3>
                                <p className="text-slate-600">
                                    The system automatically compares the <b>Book Value</b> with the <b>Selling Price</b> and posts the difference to the Gain/Loss on Asset Disposal account.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">One-Click Journal Entry</h3>
                                <p className="text-slate-600">
                                    No manual calculations needed. The predefined Asset Disposal account template handles the GL posting instantly.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Asset Tracking, Maintenance & Adjustment Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Asset Tracking, Maintenance & Adjustment</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value Adjustment */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <TrendingDown className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Value Adjustment</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Revalue assets due to market changes or damage.
                            </p>
                            <ul className="text-xs text-slate-400 space-y-2">
                                <li className="flex gap-2"><div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div> Update Current Value instantly.</li>
                                <li className="flex gap-2"><div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div> Automatically posts GL entries.</li>
                            </ul>
                        </motion.div>

                        {/* Inventory Movement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <MapPin className="w-10 h-10 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Movement & Tracking</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Track asset location and custodian history.
                            </p>
                            <ul className="text-xs text-slate-400 space-y-2">
                                <li className="flex gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5"></div> Issue to Employees (Custodians).</li>
                                <li className="flex gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5"></div> Transfer between locations.</li>
                            </ul>
                        </motion.div>

                        {/* Maintenance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <Wrench className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Maintenance</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Schedule repairs and track maintenance costs.
                            </p>
                            <ul className="text-xs text-slate-400 space-y-2">
                                <li className="flex gap-2"><div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div> Preventative maintenance schedules.</li>
                                <li className="flex gap-2"><div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div> Log repair entries & capitalization.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intelligence & Reporting Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Intelligence at Your Fingertips</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-6 h-6 text-blue-600" />
                                <h3 className="font-bold text-slate-900">Financial Statements</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">Balance Sheet, Profit & Loss, and Cash Flow statements. Drill down to any level.</p>
                            <div className="h-32 bg-slate-50 rounded border border-slate-100 relative overflow-hidden flex items-end px-4 pb-2 gap-2">
                                {/* Mock Bar Chart */}
                                <div className="w-1/4 bg-blue-200 h-[60%] rounded-t"></div>
                                <div className="w-1/4 bg-blue-300 h-[80%] rounded-t"></div>
                                <div className="w-1/4 bg-blue-400 h-[40%] rounded-t"></div>
                                <div className="w-1/4 bg-blue-500 h-[70%] rounded-t"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <BarChart3 className="w-6 h-6 text-green-600" />
                                <h3 className="font-bold text-slate-900">Asset Analytics</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">Fixed Asset Register, Depreciation Schedule, and Asset Maintenance Reports.</p>
                            {/* Mock Pie Chart Visualization */}
                            <div className="h-32 bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
                                <div className="relative w-20 h-20 rounded-full border-4 border-green-500 border-l-green-200 border-t-green-300"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <PieChart className="w-6 h-6 text-purple-600" />
                                <h3 className="font-bold text-slate-900">Budget vs. Actual</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">Real-time variance analysis for cost centers and projects.</p>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[75%]"></div>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-300 w-[50%]"></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl shadow-lg text-white"
                        >
                            <h3 className="font-bold text-lg mb-2">Custom Report Builder</h3>
                            <p className="text-blue-100 text-sm mb-6">Create custom reports with drag-and-drop ease. No coding required.</p>
                            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-blue-50 transition-colors w-full">
                                Explore Reports
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Streamline Your Finances?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Get a unified view of your assets and accounting with ERPNext.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                    >
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Page;

