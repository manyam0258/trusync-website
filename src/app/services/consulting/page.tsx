import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "ERPNext Consulting Services in Hyderabad | TruSync",
    description: "Expert ERPNext consulting services in Hyderabad. TruSync delivers ERPNext consulting services to optimize business processes, ERP strategy, and implementation planning.",
    keywords: [
        "erpnext consulting services",
        "erpnext consultant",
        "erpnext consulting company",
        "erpnext services",
        "erpnext implementation consulting",
        "erpnext consulting in hyderabad",
    ],
};

export default function ConsultingPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext Consulting Services in Hyderabad</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Expert ERPNext consulting services in Hyderabad. TruSync helps organizations optimize business processes, ERP strategy, and implementation planning with ERPNext.
                </p>
                {/* Consulting service details */}
            </Container>
        </Section>
    );
}
