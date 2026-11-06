import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function RealEstatePage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Real Estate Solutions</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Complete property management ERPNext solution powered by Tridasa
                </p>
                {/* Real estate service details */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Tridasa Integration</h2>
                    <p className="text-slate-600">
                        End-to-end property management, sales, and rental solution
                    </p>
                </div>
            </Container>
        </Section>
    );
}
