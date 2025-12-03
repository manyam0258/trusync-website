"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                            ✨ Your trusted ERPNext partner
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
                    >
                        The Leading{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            ERPNext
                        </span>
                        {" "}Company!<br className="hidden sm:block" /> Transform Your Business
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        An ERPNext consulting firm with expertise in enterprise resource planning software. Optimize your business processes, satisfy your customers, and ultimately boost your revenues.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto text-lg h-14 px-10 rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                            asChild
                        >
                            <Link href="#contact">
                                Book A Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto text-lg h-14 px-10 rounded-full border-2 hover:bg-slate-50 transition-all duration-300 hover:scale-105"
                            asChild
                        >
                            <Link href="#services">
                                <Play className="mr-2 h-5 w-5" />
                                View Case Studies
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { value: "64+", label: "ERPNext Experts" },
                            { value: "10+", label: "Industries" },
                            { value: "200+", label: "Projects Delivered" },
                            { value: "98%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
