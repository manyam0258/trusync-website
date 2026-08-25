import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function AgriculturePage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Agriculture Solutions</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Specialized ERPNext solutions for agricultural businesses powered by DS Agro
                </p>
                {/* Agriculture service details */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">DS Agro Integration</h2>
                    <p className="text-slate-600">
                        Comprehensive agricultural management solution built on ERPNext platform
                    </p>
                </div>
            </Container>
        </Section>
    );
}
