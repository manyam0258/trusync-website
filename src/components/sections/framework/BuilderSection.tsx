"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Rocket,
    MousePointerClick,
    Move
} from "lucide-react";

export function BuilderSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-slate-900">
                    Web publishing and knowledge <span className="text-slate-600">management redefined</span>
                </h2>

                <div className="mb-8 font-bold text-2xl text-left bg-white inline-block px-4 py-2 border-b-2 border-black">Frappe Builder</div>

                {/* Split Visual View */}
                <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto rounded-xl overflow-hidden border border-slate-300 shadow-xl mb-12">

                    {/* Left: Visual Editor */}
                    <div className="flex-1 bg-slate-100 p-2 lg:p-4 border-b lg:border-b-0 lg:border-r border-slate-300 relative">
                        <div className="bg-white rounded shadow-sm h-72 lg:h-96 relative overflow-hidden flex flex-col items-center pt-8 gap-4 border border-slate-200 p-4">
                            {/* Pseudo Elements representing blocks */}
                            <div className="w-full h-24 bg-blue-50 border border-blue-100 rounded flex items-center justify-center mb-2">
                                <div className="w-1/2 h-4 bg-blue-200 rounded"></div>
                            </div>
                            <div className="flex gap-2 w-full">
                                <div className="w-1/3 h-32 bg-slate-50 border border-slate-200 rounded"></div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    <div className="mt-4 w-24 h-8 bg-blue-500 rounded"></div>
                                </div>
                            </div>

                            {/* Cursor */}
                            <motion.div
                                initial={{ x: 50, y: 50 }}
                                animate={{ x: 0, y: 0 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                                className="absolute top-1/2 left-1/2"
                            >
                                <MousePointerClick className="w-8 h-8 text-black fill-white drop-shadow-md" />
                            </motion.div>
                        </div>
                        <div className="absolute top-6 left-6 text-xs text-slate-400 font-mono tracking-widest">VISUAL EDITOR</div>
                    </div>

                    {/* Right: Code View */}
                    <div className="flex-1 bg-[#1e1e1e] p-4 text-left font-mono text-xs overflow-hidden relative">
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-gray-400 leading-relaxed">
                            <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span><br />
                            <span className="text-blue-400">&lt;html&gt;</span><br />
                            &nbsp;&nbsp;<span className="text-blue-400">&lt;body&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&lt;div class="hero-section"&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">Generated optimized code...</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">&lt;h1&gt;</span><span className="text-white">Welcome</span><span className="text-green-400">&lt;/h1&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&lt;/div&gt;</span><br />
                            &nbsp;&nbsp;<span className="text-blue-400">&lt;/body&gt;</span><br />
                            <span className="text-blue-400">&lt;/html&gt;</span>
                        </div>
                        <div className="absolute bottom-6 right-6 text-xs text-white/20 font-mono tracking-widest">CODE VIEW</div>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-12">
                    <Feature
                        icon={<Move className="w-6 h-6 text-slate-700" />}
                        title="Visual Editor:"
                        text="Design responsive websites with a drag-and-drop interface."
                    />
                    <Feature
                        icon={<Zap className="w-6 h-6 text-slate-700" />}
                        title="Performance:"
                        text="Generates clean code scoring high on Google Lighthouse."
                    />
                    <Feature
                        icon={<Rocket className="w-6 h-6 text-slate-700" />}
                        title="One-Click Publishing:"
                        text="Instant deployment."
                    />
                </div>

                {/* Footer Wiki Note */}
                <div className="max-w-4xl mx-auto border border-blue-200 bg-blue-50 rounded-lg p-4 flex gap-4 items-center">
                    <div className="bg-white px-2 py-1 border border-slate-300 rounded text-xs font-bold text-slate-700">M↓</div>
                    <p className="text-sm text-blue-900">
                        <span className="font-bold">Frappe Wiki:</span> Internal knowledge base with Markdown support, version history, and approval workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Feature({ icon, title, text }: any) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">{icon}</div>
            <div>
                <h4 className="font-bold text-blue-600 mb-1">{title}</h4>
                <p className="text-slate-600 text-sm leading-snug">{text}</p>
            </div>
        </div>
    )
}
