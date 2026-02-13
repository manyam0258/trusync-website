"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CreditCard,
    WifiOff,
    Receipt,
    Clock,
    MousePointer2,
    Workflow
} from "lucide-react";

export function POSSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-slate-900">
                    Accelerating the <span className="text-slate-700">Order-to-Cash cycle</span>
                </h2>

                <div className="relative max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">
                    {/* Main Tablet Mockup with Float Animation */}
                    <div className="relative z-10 inline-block">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                opacity: { duration: 0.8 },
                                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                            }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden max-w-4xl w-full mx-auto aspect-[16/10] relative"
                        >
                            {/* Status Bar */}
                            <div className="bg-slate-900 h-8 flex justify-between items-center px-6">
                                <span className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">POS Terminal #04 • Online</span>
                            </div>

                            {/* POS UI */}
                            <div className="flex h-full text-left">
                                {/* Product Grid */}
                                <div className="flex-1 p-6 bg-slate-50">
                                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                                        <div className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold shadow-sm cursor-pointer">All Items</div>
                                        <div className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-50 cursor-pointer">Beverages</div>
                                        <div className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-50 cursor-pointer">Snacks</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <ProductCard name="Coffee" price="$3.00" color="bg-orange-100" icon="☕" />
                                        <ProductCard name="Croissant" price="$4.50" color="bg-yellow-100" icon="🥐" />
                                        <ProductCard name="Burger" price="$12.00" color="bg-red-100" icon="🍔" />
                                        <ProductCard name="Tea" price="$2.50" color="bg-green-100" icon="🍵" />
                                        <ProductCard name="Bagel" price="$3.50" color="bg-amber-100" icon="🥯" />
                                        <ProductCard name="Cookie" price="$2.00" color="bg-purple-100" icon="🍪" />
                                    </div>
                                </div>

                                {/* Cart Sidebar */}
                                <div className="w-1/3 bg-white border-l border-slate-200 p-6 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Current Order</h4>
                                        <div className="space-y-3">
                                            <CartItem name="Coffee" price="$3.00" qty="1" />
                                            <CartItem name="Croissant" price="$4.50" qty="2" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 text-slate-500">
                                            <span>Subtotal</span>
                                            <span>$12.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm mb-4 text-slate-500">
                                            <span>Tax</span>
                                            <span>$1.20</span>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-colors flex justify-between px-6"
                                        >
                                            <span>Pay</span>
                                            <span>$13.20</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Connected Features (with absolute positioning relative to container) */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                        {/* Top Left - Touch */}
                        <FeatureConnector
                            icon={<MousePointer2 className="w-5 h-5 text-white" />}
                            title="Touch-Friendly UI"
                            text="Optimised for touch."
                            position="top-[0%] left-[0%]"
                            lineOrigin="right"
                            delay={0.2}
                            bg="bg-blue-500"
                        />

                        {/* Bottom Left - Shift */}
                        <FeatureConnector
                            icon={<Clock className="w-5 h-5 text-white" />}
                            title="Shift Management"
                            text="Consolidated closing."
                            position="bottom-[5%] left-[0%]"
                            lineOrigin="right"
                            delay={0.3}
                            bg="bg-purple-500"
                        />

                        {/* Bottom Center - Workflow */}
                        <FeatureConnector
                            icon={<Workflow className="w-5 h-5 text-white" />}
                            title="Sales Workflow"
                            text="Lead -> Order"
                            position="bottom-[-10%] left-[40%]"
                            lineOrigin="top"
                            delay={0.4}
                            bg="bg-slate-700"
                        />

                        {/* Top Right - Offline */}
                        <FeatureConnector
                            icon={<WifiOff className="w-5 h-5 text-white" />}
                            title="Offline Mode"
                            text="Syncs automatically."
                            position="top-[0%] right-[0%]"
                            lineOrigin="left"
                            delay={0.5}
                            bg="bg-orange-500"
                        />

                        {/* Bottom Right - Invoicing */}
                        <FeatureConnector
                            icon={<Receipt className="w-5 h-5 text-white" />}
                            title="Smart Invoicing"
                            text="Auto receivables."
                            position="bottom-[5%] right-[0%]"
                            lineOrigin="left"
                            delay={0.6}
                            bg="bg-green-500"
                        />
                    </div>

                    {/* Mobile Feature List */}
                    <div className="grid md:grid-cols-2 gap-4 mt-12 lg:hidden text-left w-full">
                        <MobileFeature title="Touch-Friendly UI" icon={<MousePointer2 />} />
                        <MobileFeature title="Offline Capability" icon={<WifiOff />} />
                        <MobileFeature title="Shift Management" icon={<Clock />} />
                        <MobileFeature title="Smart Invoicing" icon={<Receipt />} />
                    </div>

                </div>
            </div>
        </section>
    );
}

function ProductCard({ name, price, color, icon }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="aspect-square bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center p-2 gap-1 hover:border-blue-300 transition-colors cursor-pointer group"
        >
            <div className={`w-10 h-10 ${color} rounded-full group-hover:scale-110 transition-transform flex items-center justify-center text-lg`}>
                {icon}
            </div>
            <div className="text-center">
                <div className="text-[10px] font-bold text-slate-700">{name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{price}</div>
            </div>
        </motion.div>
    )
}

function CartItem({ name, price, qty }: any) {
    return (
        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
            <div>
                <div className="font-medium text-slate-700">{name}</div>
                <div className="text-[10px] text-slate-400">Qty: {qty}</div>
            </div>
            <div className="font-semibold text-slate-700">{price}</div>
        </div>
    )
}

function FeatureConnector({ icon, title, text, position, lineOrigin, delay, bg }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className={`absolute ${position} w-56 text-left`}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 relative z-10"
            >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${bg} shadow-md`}>
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                        <p className="text-xs text-slate-500">{text}</p>
                    </div>
                </div>
            </motion.div>

            {/* Visual Line Connector */}
            <svg className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 -z-10 pointer-events-none overflow-visible">
                {lineOrigin === 'right' && (
                    <path d="M 230 100 Q 300 100 350 150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                )}
                {lineOrigin === 'left' && (
                    <path d="M 0 100 Q -50 100 -100 150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                )}
            </svg>
        </motion.div>
    )
}

function MobileFeature({ title, icon }: any) {
    return (
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="text-blue-600">{icon}</div>
            <span className="font-bold text-slate-800">{title}</span>
        </div>
    )
}
