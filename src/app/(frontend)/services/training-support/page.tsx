import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function TrainingAndSupportPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Training and Support Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Comprehensive training and ongoing support for ERPNext users
                </p>
                {/* Training and support service details */}
            </Container>
        </Section>
    );
}
