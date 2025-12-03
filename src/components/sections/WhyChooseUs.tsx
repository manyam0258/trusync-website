"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ShieldCheck, Sliders, Clock, UserCheck, Star, Headphones } from "lucide-react";

const benefits = [
    {
        title: "Industry-rich expertise",
        description: "Extensive experience across various industries to meet unique requirements.",
        icon: Star,
    },
    {
        title: "Cost savings",
        description: "Cost-effective rates without compromising quality.",
        icon: ShieldCheck,
    },
    {
        title: "Best development practices",
        description: "Latest methodologies for robust, adaptable, and future-proof solutions.",
        icon: Sliders,
    },
    {
        title: "Timely delivery",
        description: "Efficient project management and clear communication for on-time completion.",
        icon: Clock,
    },
    {
        title: "Dedicated project manager",
        description: "Personalized attention, streamlined communication, and efficient coordination.",
        icon: UserCheck,
    },
    {
        title: "Post-project support",
        description: "Comprehensive assistance after project completion for smooth operations.",
        icon: Headphones,
    },
];

export function WhyChooseUs() {
    return (
        <Section className="bg-slate-900 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/20 rounded-full border border-primary/30">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us As ERPNext Partner?</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We combine the power of open-source ERP with advanced AI automation to deliver solutions that are not just robust, but intelligent and tailored.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative group h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:bg-slate-800 group-hover:border-primary/30 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="h-7 w-7 text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
