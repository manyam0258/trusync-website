"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
        name: "Solutions",
        href: "#",
        children: [
            { name: "Frappe Framework", href: "/solutions/frappe-framework" },
            { name: "Frappe CRM", href: "/services/crm-module" },
            { name: "Frappe Helpdesk", href: "/services/helpdesk-module" },
            { name: "Frappe Insights", href: "/solutions/frappe-insights" },
            { name: "Frappe LMS", href: "/solutions/frappe-lms" },
        ]
    },
    {
        name: "Innovation",
        href: "#",
        children: [
            { name: "AI Automation", href: "/innovation/ai-automation" },
            { name: "DPDP Compliance", href: "/innovation/dpdp-compliance" },
            { name: "Open Source Integrations", href: "/innovation/open-source-integrations" },
        ]
    },
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Contact", href: "/#contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileSubmenu, setMobileSubmenu] = React.useState<string | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="TruSync Logo"
                            width={240}
                            height={80}
                            className="h-20 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            item.children ? (
                                <div key={item.name} className="relative group">
                                    <button
                                        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                                    >
                                        {item.name}
                                        <ChevronDown size={16} />
                                    </button>
                                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-2 flex flex-col gap-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="text-sm text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-2 rounded-md transition-colors block"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                        <Button size="sm" asChild>
                            <Link href="#contact">Get in Touch</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col gap-4">
                            {navigation.map((item) => (
                                item.children ? (
                                    <div key={item.name} className="flex flex-col">
                                        <button
                                            onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                                            className="flex items-center justify-between text-sm font-medium text-foreground py-2"
                                        >
                                            {item.name}
                                            <ChevronDown size={16} className={cn("transition-transform", mobileSubmenu === item.name ? "rotate-180" : "")} />
                                        </button>
                                        {mobileSubmenu === item.name && (
                                            <div className="pl-4 flex flex-col gap-2 mt-2 mb-2 border-l-2 border-slate-100">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="text-sm text-muted-foreground py-2 hover:text-primary"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-medium text-foreground py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                            <Button className="w-full" asChild>
                                <Link href="#contact" onClick={() => setIsOpen(false)}>
                                    Get in Touch
                                </Link>
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
