import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="block">
                            <Image
                                src="/logo.png"
                                alt="TruSync Logo"
                                width={180}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-slate-400">
                            Transforming Businesses with Smart ERP & AI Automation. Your trusted ERPNext partner.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#services" className="hover:text-primary transition-colors">ERPNext Modules</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Product Engineering</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Hire Team</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Case Studies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#industries" className="hover:text-primary transition-colors">Industries</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                                <span>H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet, Hyderabad, Telangana 500056, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:surendhranath@trusync.in" className="hover:text-white">surendhranath@trusync.in</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                <a href="tel:+918143483438" className="hover:text-white">+91 81434 83438</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2025 TRUSYNC TECHNOLOGIES LLP. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
