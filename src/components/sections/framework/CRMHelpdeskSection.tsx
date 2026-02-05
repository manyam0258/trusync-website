"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    GitPullRequest,
    MessageSquare,
    Phone,
    Inbox,
    Clock,
    Users
} from "lucide-react";

export function CRMHelpdeskSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center text-slate-900">
                    Modernizing customer <span className="text-slate-600">relationships and support</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* CRM Section */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Frappe CRM</h3>
                            <ul className="space-y-4 mb-8">
                                <FeatureItem text="Digital Deal Pipelines: Custom views (Kanban, List)." />
                                <FeatureItem text="Meta & WhatsApp Integration: Direct lead pull from Socials. Chat directly from deal page." />
                                <FeatureItem text="Omnichannel: Integration with Twilio and Exotel." />
                            </ul>
                        </div>

                        {/* CRM Mockup */}
                        <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-4 overflow-hidden">
                            <div className="flex border-b border-slate-100 pb-2 mb-4 justify-between items-center">
                                <span className="font-bold text-slate-700 text-sm">Deals</span>
                                <div className="flex gap-2">
                                    <span className="bg-slate-100 px-2 py-1 rounded text-xs">Gantt</span>
                                    <span className="bg-slate-100 px-2 py-1 rounded text-xs">+</span>
                                </div>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-4">
                                <KanbanColumn title="Lead" color="bg-blue-100" cards={2} />
                                <KanbanColumn title="Contacted" color="bg-orange-100" cards={1} />
                                <KanbanColumn title="Proposal" color="bg-purple-100" cards={1} />
                                <KanbanColumn title="Won" color="bg-green-100" cards={1} />
                            </div>
                        </div>
                    </div>

                    {/* Helpdesk Section */}
                    <div>
                        <div className="mb-6 lg:order-last">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Frappe Helpdesk</h3>
                            <ul className="space-y-4 mb-8">
                                <FeatureItem text="Unified Inbox: Converts emails/calls to tickets automatically." />
                                <FeatureItem text="SLA Tracking: Real-time resolution timers." />
                                <FeatureItem text="Automation: Round-robin assignment rules." />
                                <FeatureItem text="Self-Service: Integrated Knowledge Base portal." />
                            </ul>
                        </div>

                        {/* Helpdesk Mockup */}
                        <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-slate-800 text-sm">Inbox</h4>
                                <div className="flex gap-2">
                                    <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs">Ticket</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <InboxItem id="80021" subject="Converts emails/calls to tickets" priority="High" status="Open" />
                                <InboxItem id="80022" subject="Subject to new changes" priority="High" status="Open" />
                                <InboxItem id="80023" subject="Get multiple knows with tickets" priority="Medium" status="Replied" />
                                <InboxItem id="80034" subject="Subject to imitation" priority="Medium" status="Replied" />
                                <InboxItem id="80025" subject="Converts emails/teams to tickets" priority="High" status="Open" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ text }: { text: string }) {
    const [title, ...rest] = text.split(':');
    return (
        <li className="flex items-start gap-2 text-slate-600 text-sm">
            <div className="min-w-[5px] h-[5px] rounded-full bg-slate-900 mt-2"></div>
            <span>
                <strong className="text-slate-900">{title}:</strong>{rest.join(':')}
            </span>
        </li>
    )
}

function KanbanColumn({ title, color, cards }: any) {
    return (
        <div className="min-w-[100px] flex-1 bg-slate-50 rounded p-2 flex flex-col gap-2">
            <div className={`text-xs font-semibold px-2 py-1 rounded ${color} w-fit`}>{title}</div>
            {[...Array(cards)].map((_, i) => (
                <div key={i} className="bg-white p-2 rounded border border-slate-100 shadow-sm h-12 flex flex-col gap-1">
                    <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                </div>
            ))}
        </div>
    )
}

function InboxItem({ id, subject, priority, status }: any) {
    return (
        <div className="flex items-center gap-2 text-xs py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-1 rounded cursor-pointer">
            <input type="checkbox" className="rounded border-slate-300" />
            <span className="text-slate-400 w-10">{id}</span>
            <span className="text-slate-700 flex-1 truncate">{subject}</span>
            <span className={`px-1.5 py-0.5 rounded-full ${priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>
                {priority}
            </span>
            <span className="text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{status}</span>
        </div>
    )
}
