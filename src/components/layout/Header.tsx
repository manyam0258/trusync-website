"use client";

import type { BrandImage } from "@/lib/brand";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { DPDP_HOME, DPDP_MENU } from "@/lib/dpdp-menu";

interface NavigationItem {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
    /** Shows the Sentinel DPDP mega menu (columns from src/lib/dpdp-menu.ts) instead of a plain list. */
    mega?: boolean;
}

const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
        name: "Solutions",
        href: "#",
        children: [
            { name: "Framework", href: "/solutions/frappe-framework" },
            { name: "CRM", href: "/services/crm-module" },
            { name: "Order Management", href: "/services/order-management-module" },
            { name: "Helpdesk", href: "/services/helpdesk-module" },
            { name: "HRMS", href: "/services/hr-payroll-module" },
            { name: "Manufacturing Software", href: "/industries/manufacturing" },
            { name: "Insights", href: "/solutions/frappe-insights" },
            { name: "LMS", href: "/solutions/frappe-lms" },
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
    { name: DPDP_HOME.name, href: DPDP_HOME.href, mega: true },
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
];

export function Header({ logo }: { logo?: BrandImage | null }) {
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
                    <Link href="/" className="flex shrink-0 items-center">
                        <Image
                            src={logo?.url ?? "/logo.png"}
                            alt={logo?.alt ?? "TruSync Logo"}
                            width={logo?.width ?? 240}
                            height={logo?.height ?? 80}
                            className="h-20 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {navigation.map((item) => (
                            item.mega ? (
                                <div key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus:outline-none"
                                    >
                                        {item.name}
                                        <ChevronDown size={16} />
                                    </Link>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[min(860px,calc(100vw-2rem))] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-3 gap-6">
                                            {DPDP_MENU.map((col) => (
                                                <div key={col.title}>
                                                    <Link href={col.href} className="block text-xs font-bold uppercase tracking-wider text-primary mb-3 hover:underline">
                                                        {col.title}
                                                    </Link>
                                                    <div className="flex flex-col">
                                                        {col.links.map((link) => (
                                                            <Link
                                                                key={link.href}
                                                                href={link.href}
                                                                className="text-sm text-slate-600 hover:text-primary hover:bg-slate-50 px-2 py-1.5 -mx-2 rounded-md transition-colors"
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : item.children ? (
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
                        className="lg:hidden p-2 text-foreground"
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
                        className="lg:hidden bg-white border-b overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col gap-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
                            {navigation.map((item) => (
                                item.mega ? (
                                    <div key={item.name} className="flex flex-col">
                                        <button
                                            onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                                            className="flex items-center justify-between text-sm font-semibold text-primary py-2"
                                        >
                                            {item.name}
                                            <ChevronDown size={16} className={cn("transition-transform", mobileSubmenu === item.name ? "rotate-180" : "")} />
                                        </button>
                                        {mobileSubmenu === item.name && (
                                            <div className="pl-4 flex flex-col gap-1 mt-2 mb-2 border-l-2 border-slate-100">
                                                <Link href={item.href} className="text-sm font-medium text-foreground py-2 hover:text-primary" onClick={() => setIsOpen(false)}>
                                                    Overview
                                                </Link>
                                                {DPDP_MENU.map((col) => (
                                                    <div key={col.title} className="flex flex-col">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-3 mb-1">{col.title}</span>
                                                        {col.links.map((link) => (
                                                            <Link
                                                                key={link.href}
                                                                href={link.href}
                                                                className="text-sm text-muted-foreground py-1.5 hover:text-primary"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : item.children ? (
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
