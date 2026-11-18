import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "Data Migration Services to ERPNext in Hyderabad | TruSync",
    description: "Seamless data migration services from legacy systems to ERPNext. TruSync ERPNext migration services for data, application, and integration migrations with minimal business disruption.",
    keywords: [
        "data migration services in hyderabad",
        "erpnext migration services",
        "erp next migration services",
        "application and data migration services in hyderabad",
        "data migration services erpnext",
        "legacy to erpnext migration",
    ],
};

export default function MigrationsPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Data Migration Services to ERPNext in Hyderabad</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Seamless data migration services from legacy systems to ERPNext. Our ERPNext migration services cover data, application, and integration moves while keeping day-to-day operations running.
                </p>
                {/* Migration service details */}
            </Container>
        </Section>
    );
}
