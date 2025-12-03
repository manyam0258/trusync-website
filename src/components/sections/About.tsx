"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, TrendingUp, Globe } from "lucide-react";

export function About() {
    const stats = [
        { value: "64+", label: "ERPNext Experts", icon: Users },
        { value: "10+", label: "Industries", icon: Globe },
        { value: "200+", label: "Projects", icon: TrendingUp },
        { value: "5+", label: "Years Experience", icon: Award },
    ];

    return (
        <Section id="about" className="bg-white">
            <Container>
                {/* Stats Bar */}
                <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="h-8 w-8 text-white" strokeWidth={2} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            An ERPNext consulting firm with expertise in enterprise resource planning software.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Optimize your business processes, satisfy your customers, and ultimately boost your revenues by leveraging the best-in-class platform, such as ERPNext, and a trusted implementation partner.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            ERPNext is the feature-rich, all-in-one enterprise resource planning (ERP) solution that empowers businesses to streamline and optimize their operations.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Streamlined Management",
                                "Better Customer Satisfaction",
                                "Higher Revenues",
                                "Certified Frappe Partners"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="text-primary h-5 w-5" />
                                    </div>
                                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 relative shadow-2xl">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,141,170,0.1),transparent_50%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-2xl mb-6">
                                            <Award className="h-12 w-12 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Certified Partner</h3>
                                    <p className="text-slate-600 text-lg">Official Frappe & ERPNext Partner</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
