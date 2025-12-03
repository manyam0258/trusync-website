"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Settings, Briefcase, Users, Cpu, Layout, HelpCircle, Building, DollarSign } from "lucide-react";

const services = [
    {
        title: "Financial Accounting",
        description: "Manage your finances, bookkeeping, and accounting with ease.",
        icon: DollarSign,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Order Management",
        description: "Streamline your sales and purchase order processing.",
        icon: Briefcase,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "HR & Payroll",
        description: "Efficiently manage employee data, payroll, and HR processes.",
        icon: Users,
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Manufacturing",
        description: "Optimize production planning, BOM, and shop floor control.",
        icon: Settings,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "CRM",
        description: "Enhance customer relationships and sales pipeline management.",
        icon: Cpu,
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Website",
        description: "Build and manage your website directly within ERPNext.",
        icon: Layout,
        color: "from-teal-500 to-cyan-500"
    },
    {
        title: "Helpdesk",
        description: "Provide excellent customer support with an integrated helpdesk.",
        icon: HelpCircle,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Asset Management",
        description: "Track and manage your company's assets effectively.",
        icon: Building,
        color: "from-amber-500 to-orange-500"
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext Modules</h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                            Comprehensive solutions to drive your business forward with technology and innovation.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative group h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                                    <CardHeader className="pb-4">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                                            <service.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                        </div>
                                        <CardTitle className="text-xl mb-3 text-slate-900">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <CardDescription className="text-base text-slate-600 leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
