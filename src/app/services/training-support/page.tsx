import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "ERPNext & Frappe Training & Support Services | TruSync",
    description: "Comprehensive ERPNext and Frappe training and support services for your team. TruSync provides ERPNext training, onboarding, and ongoing support services, including Frappe support.",
    keywords: [
        "erpnext training services",
        "erpnext support services",
        "frappe support",
        "frappe training",
        "erpnext training and support",
    ],
};

export default function TrainingAndSupportPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext & Frappe Training & Support Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Comprehensive ERPNext and Frappe training and support services for your team. TruSync provides ERPNext training, onboarding, and ongoing support services, including Frappe support.
                </p>
                {/* Training and support service details */}
            </Container>
        </Section>
    );
}
