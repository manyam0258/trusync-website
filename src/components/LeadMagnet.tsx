'use client';

import React from 'react';
import { Download, CheckSquare } from 'lucide-react';

const LeadMagnet = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            <Download className="w-4 h-4" />
                            Free Resource
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Is Your Business Ready for ERPNext?</h2>
                        <p className="text-slate-300 text-lg mb-6">
                            Download our comprehensive &quot;ERPNext Readiness Checklist&quot; to evaluate your infrastructure, team, and data before starting your implementation journey. Avoid common pitfalls.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4 text-green-400" /> Hardware Requirements</li>
                                <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4 text-green-400" /> Team Roles Definition</li>
                                <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4 text-green-400" /> Data Cleaning Guide</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-none w-full md:w-auto">
                        <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-3">
                            <Download className="w-5 h-5" />
                            Download Checklist
                        </button>
                        <p className="text-xs text-slate-400 mt-3 text-center">No credit card required. Instant PDF download.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
