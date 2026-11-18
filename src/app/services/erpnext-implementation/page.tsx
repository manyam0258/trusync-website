import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "ERPNext Implementation Services in Hyderabad | TruSync",
    description: "Complete ERPNext implementation services tailored to your business requirements. TruSync is an ERPNext implementation partner in Hyderabad delivering ERPNext services from discovery through go-live.",
    keywords: [
        "erpnext implementation services",
        "erpnext implementation partner",
        "erpnext implementation company",
        "erpnext services",
        "erpnext implementation in hyderabad",
        "erpnext consulting services",
    ],
};

export default function ERPNextImplementationPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext Implementation Services in Hyderabad</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Complete ERPNext implementation services tailored to your business requirements. From discovery through configuration, customization, integration, data migration, testing, and deployment, TruSync delivers ERPNext services as a certified Frappe partner in Hyderabad.
                </p>
                {/* Implementation service details */}
            </Container>
        </Section>
    );
}
