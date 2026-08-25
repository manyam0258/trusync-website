import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function MobileAppDevelopmentPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mobile App Development Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Custom mobile applications integrated with ERPNext
                </p>
                {/* Mobile app development service details */}
            </Container>
        </Section>
    );
}
