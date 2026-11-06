import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function DevelopmentPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Custom Development Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Tailored ERPNext development to extend functionality for your unique business needs
                </p>
                {/* Development service details */}
            </Container>
        </Section>
    );
}
