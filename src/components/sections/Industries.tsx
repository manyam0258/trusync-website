"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Factory, Stethoscope, Users, Building2, Briefcase, ShoppingCart, HardHat, Feather, Banknote, Truck, Construction } from "lucide-react";

const industries = [
    { title: "Manufacturing", icon: Factory, color: "from-blue-500 to-cyan-500", href: "/industries/manufacturing" },
    { title: "Textile", icon: Feather, color: "from-purple-500 to-pink-500", href: "/industries/textile" },
    { title: "Healthcare", icon: Stethoscope, color: "from-red-500 to-orange-500", href: "/industries/healthcare" },
    { title: "Retail", icon: ShoppingCart, color: "from-green-500 to-emerald-500", href: "/industries/retail-distribution" },
    { title: "Construction", icon: HardHat, color: "from-orange-500 to-amber-500", href: "/industries/construction" },
    { title: "Crowdfunding", icon: Banknote, color: "from-indigo-500 to-purple-500", href: "/industries/crowdfunding" },
    { title: "HR & Payroll", icon: Users, color: "from-teal-500 to-cyan-500", href: "/services/hr-payroll-module" },
    { title: "Real Estate", icon: Building2, color: "from-pink-500 to-rose-500", href: "/industries/real-estate" },
    { title: "NBFC", icon: Banknote, color: "from-yellow-500 to-orange-500", href: "/industries/nbfc" },
    { title: "Distribution", icon: Truck, color: "from-blue-600 to-indigo-600", href: "/industries/distribution" },
    { title: "EPC", icon: Construction, color: "from-gray-600 to-slate-600", href: "/industries/epc" },
    { title: "Dairy", icon: Briefcase, color: "from-lime-500 to-green-500", href: "/industries/dairy" },
];

export function Industries() {
    return (
        <Section id="industries" className="bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            Industries
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                            Tailored ERP + AI solutions for your specific business needs across various sectors.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <Link href={industry.href} className="block h-full">
                                <Card className="relative group h-full text-center bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                    <CardContent className="relative pt-8 pb-8 flex flex-col items-center justify-center">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <industry.icon className="h-8 w-8 text-white" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">{industry.title}</h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
