import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "ERPNext & Frappe Software Development Services | TruSync",
    description: "Tailored ERPNext software development and Frappe development services to extend ERPNext functionality for your unique business needs.",
    keywords: [
        "erpnext software development",
        "erpnext development services",
        "frappe development services",
        "erpnext development company",
        "custom erpnext development",
        "frappe development services",
        "erpnext custom development",
    ],
};

export default function DevelopmentPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext & Frappe Software Development Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Tailored ERPNext development and Frappe development services to extend functionality for your unique business needs.
                </p>
                {/* Development service details */}
            </Container>
        </Section>
    );
}
