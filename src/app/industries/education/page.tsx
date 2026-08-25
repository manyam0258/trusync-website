"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Quote } from "lucide-react";

export default function EducationPage() {
    const testimonials = [
        {
            name: "John Doe",
            institution: "ABC School",
            feedback: "ERPNext transformed our administrative processes, making them more efficient and transparent.",
            rating: 5,
            avatar: "/avatars/john-doe.jpg"
        },
        {
            name: "Jane Smith",
            institution: "XYZ University",
            feedback: "The student management module has revolutionized how we handle student records and faculty coordination.",
            rating: 5,
            avatar: "/avatars/jane-smith.jpg"
        },
        {
            name: "Robert Johnson",
            institution: "DEF Academy",
            feedback: "With ERPNext, we've streamlined our fee collection and accounting, reducing errors and saving time.",
            rating: 4,
            avatar: "/avatars/robert-johnson.jpg"
        }
    ];

    return (
        <Section id="education" className="bg-slate-50">
            <Container>
                {/* Education section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            Education Solutions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext for Educational Institutions</h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                            Tailored ERPNext solutions to manage academic, administrative, and financial operations seamlessly.
                        </p>
                    </motion.div>
                </div>
                
                {/* Features section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li>Student Information Management</li>
                                <li>Attendance and Timetable Scheduling</li>
                                <li>Fee Billing and Payment Processing</li>
                                <li>Examination and Grade Management</li>
                                <li>Library and Inventory Management</li>
                                <li>HR and Payroll for Staff</li>
                                <li>Alumni and Donation Management</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li>Improved operational efficiency</li>
                                <li>Enhanced communication between stakeholders</li>
                                <li>Data-driven decision making</li>
                                <li>Regulatory compliance and reporting</li>
                                <li>Scalable for institutions of all sizes</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                
                {/* Testimonials section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4 mb-4">
                                                <Quote className="h-5 w-5 text-primary mb-2" />
                                                <div>
                                                    <h4 className="font-medium text-slate-900">{testimonial.name}</h4>
                                                    <p className="text-sm text-slate-500">{testimonial.institution}</p>
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} width="12" height="12" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor">
                                                                <polygon points="12,2 15,5 19,5 13,8 15,11 12,8 9,11 11,8 5,5 9,2" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 italic">{testimonial.feedback}</p>
                                            {testimonial.avatar && (
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mt-4" />
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
