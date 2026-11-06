import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function MigrationsPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Data Migration Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Seamless data migration from legacy systems to ERPNext
                </p>
                {/* Migration service details */}
            </Container>
        </Section>
    );
}
