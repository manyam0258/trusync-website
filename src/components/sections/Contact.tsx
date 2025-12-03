"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-gradient-to-br from-slate-50 to-white">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            Contact Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                            Ready to transform your business? Let's discuss how we can help you.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
                        {/* Left Panel - Contact Info */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-600 p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                                <p className="text-white/90 mb-10 text-lg">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Phone</div>
                                            <a href="tel:+918143483438" className="text-white/90 hover:text-white">+91 81434 83438</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Email</div>
                                            <a href="mailto:surendhranath@trusync.in" className="text-white/90 hover:text-white break-all">surendhranath@trusync.in</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Address</div>
                                            <p className="text-white/90 text-sm">H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet, Hyderabad, Telangana 500056, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Contact Form */}
                        <div className="lg:col-span-3 p-10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name *</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            suppressHydrationWarning
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Interest</label>
                                        <select
                                            id="service"
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white transition-all"
                                        >
                                            <option>Select a service</option>
                                            <option>ERP Implementation</option>
                                            <option>AI Automation</option>
                                            <option>Both ERP & AI</option>
                                            <option>Consulting</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message *</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all">
                                    Send Message <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
