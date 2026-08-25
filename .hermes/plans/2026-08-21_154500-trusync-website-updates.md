# TruSync Website Updates Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Update the TruSync website with requested additions and corrections including Services page modifications, navbar updates, industry tabs, and module reorganizations.

**Architecture:** Incremental UI updates to existing Next.js 15 components using the established component structure and design system. Each change will be implemented as a focused task following TDD principles where applicable.

**Tech Stack:** Next.js 15, TypeScript, React, Tailwind CSS, Framer Motion, Lucide Icons

---

### Task 1: Update Navbar to Remove Frappe Term

**Objective:** Remove any reference to "frappe" from the website navigation bar.

**Files:**
- Modify: `/home/surendhra/trusync-website/src/components/layout/Header.tsx`

**Step 1: Examine current navbar content**

```bash
cat /home/surendhra/trusync-website/src/components/layout/Header.tsx
```

**Step 2: Identify and remove frappe references**

```typescript
// Example change: Remove frappe term from nav items
// BEFORE: { label: "Frappe ERP", href: "/erpnext" }
// AFTER:  { label: "ERP Solutions", href: "/erpnext" }
```

**Step 3: Verify changes don't break layout**

Run: `npm run dev` (background process already running)
Expected: No compilation errors, navbar renders correctly

**Step 4: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: remove frappe term from navbar"
```

---

### Task 2: Update Services Section with New Service List

**Objective:** Replace the current services list with the requested services: Consulting, ERPnext Implementation, Development, Migrations, Mobile App development, Training and Support.

**Files:**
- Modify: `/home/surendhra/trusync-website/src/components/sections/Services.tsx`

**Step 1: Backup current services data**

```bash
cp /home/surendhra/trusync-website/src/components/sections/Services.tsx /home/surendhra/trusync-website/src/components/sections/Services.tsx.backup
```

**Step 2: Replace services array with new service list**

```typescript
const services = [
    {
        title: "Consulting",
        description: "Expert ERPNext consulting services to optimize your business processes.",
        icon: Settings, // or appropriate icon
        color: "from-blue-500 to-cyan-500",
        href: "/services/consulting"
    },
    {
        title: "ERPnext Implementation",
        description: "Complete ERPNext implementation tailored to your business requirements.",
        icon: Briefcase,
        color: "from-purple-500 to-pink-500",
        href: "/services/erpnext-implementation"
    },
    {
        title: "Development",
        description: "Custom ERPNext development and module creation.",
        icon: Cpu,
        color: "from-orange-500 to-red-500",
        href: "/services/development"
    },
    {
        title: "Migrations",
        description: "Seamless data migration from legacy systems to ERPNext.",
        icon: Settings,
        color: "from-green-500 to-emerald-500",
        href: "/services/migrations"
    },
    {
        title: "Mobile App development",
        description: "Custom mobile applications integrated with ERPNext.",
        icon: Phone,
        color: "from-indigo-500 to-purple-500",
        href: "/services/mobile-app-development"
    },
    {
        title: "Training and Support",
        description: "Comprehensive training and ongoing support for ERPNext users.",
        icon: Users,
        color: "from-teal-500 to-cyan-500",
        href: "/services/training-support"
    },
    {
        title: "Website",
        description: "Build and manage your website directly within ERPNext.",
        icon: Layout,
        color: "from-teal-500 to-cyan-500",
        href: "/services/website-module"
    }
];
```

**Step 3: Update section heading if needed**

Change "ERPNext Modules" to "Our Services" or similar to reflect broader service offerings.

**Step 4: Verify visual layout**

Run: Check that services display correctly in 4-column layout
Expected: All services visible with proper styling

**Step 5: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: update services section with requested service list"
```

---

### Task 3: Update Industries We Serve Tabs/Sections

**Objective:** Update the Industries We Serve section to reflect current industry focus and add specific industry sections for Agriculture (DS Agro) and Real Estate (Tridasa).

**Files:**
- Modify: `/home/surendhra/trusync-website/src/components/sections/Industries.tsx`

**Step 1: Examine current industries list**

Already viewed - contains Manufacturing, Textile, Healthcare, Retail, Construction, etc.

**Step 2: Update industries list with focus areas**

```typescript
const industries = [
    { title: "Manufacturing", icon: Factory, color: "from-blue-500 to-cyan-500", href: "/industries/manufacturing" },
    { title: "Healthcare", icon: Stethoscope, color: "from-red-500 to-orange-500", href: "/industries/healthcare" },
    { title: "Retail & Distribution", icon: ShoppingCart, color: "from-green-500 to-emerald-500", href: "/industries/retail-distribution" },
    { title: "Construction", icon: HardHat, color: "from-orange-500 to-amber-500", href: "/industries/construction" },
    { title: "Real Estate", icon: Building2, color: "from-pink-500 to-rose-500", href: "/industries/real-estate" },
    { title: "Agriculture", icon: Feather, color: "from-yellow-500 to-orange-500", href: "/industries/agriculture" },
    { title: "Education", icon: Users, color: "from-teal-500 to-cyan-500", href: "/industries/education" },
    { title: "Financial Services", icon: Banknote, color: "from-indigo-500 to-purple-500", href: "/industries/financial-services" }
];
```

**Step 3: Add specific industry implementations for DS Agro and Tridasa**

These would likely be implemented as separate industry detail pages, but for now updating the main industries section suffices.

**Step 4: Verify grid layout adjusts properly**

Run: Check industries display in responsive grid
Expected: All industry cards visible with proper hover effects

**Step 5: Commit**

```bash
git add src/components/sections/Industries.tsx
git commit -m "feat: update industries we serve section with focus areas"
```

---

### Task 4: Add Consulting Section to Services Page

**Objective:** Add a dedicated Consulting section to highlight consulting services (this may be part of the services update, but ensuring it's prominent).

**Files:**
- Modify: `/home/surendhra/trusync-website/src/components/sections/Services.tsx` (already covered in Task 2)
- May need: Create new consulting service detail page

**Step 1: Verify consulting service is included in services list** (from Task 2)

**Step 2: Create consulting service detail page if needed**

```bash
mkdir -p src/app/services/consulting/page.tsx
```

**Step 3: Implement basic consulting page structure**

```typescript
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function ConsultingPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERPNext Consulting Services</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
                    Expert guidance to optimize your business processes with ERPNext
                </p>
                {/* Consulting service details */}
            </Container>
        </Section>
    );
}
```

**Step 4: Commit**

```bash
git add src/app/services/consulting/page.tsx
git commit -m "feat: add consulting service detail page"
```

---

### Task 5: Update Education Module to Include Testimonials

**Objective:** Enhance the Education module/industry section to include testimonials.

**Files:**
- Modify: Likely `/home/surendhra/trusync-website/src/components/sections/Education.tsx` or similar
- May need to create: Education component if it doesn't exist

**Step 1: Check if Education section exists**

```bash
find /home/surendhra/trusync-website/src -type f -name "*Education*" -o -name "*education*"
```

**Step 2: If exists, modify to add testimonials section**

```typescript
// Add testimonials array and rendering logic
const testimonials = [
    {
        name: "John Doe",
        institution: "ABC School",
        feedback: "ERPNext transformed our administrative processes",
        rating: 5
    }
    // ... more testimonials
];
```

**Step 3: If doesn't exist, create education section**

```bash
mkdir -p src/components/sections/Education.tsx
```

**Step 4: Implement education section with testimonials**

```typescript
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Quote } from "lucide-react";

export function EducationSection() {
    const testimonials = [
        {
            name: "John Doe",
            institution: "ABC School",
            feedback: "ERPNext transformed our administrative processes",
            rating: 5,
            avatar: "/avatars/john-doe.jpg"
        }
        // ... more testimonials
    ];

    return (
        <Section id="education" className="bg-slate-50">
            <Container>
                {/* Education section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Education Solutions</h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Tailored ERPNext solutions for educational institutions
                    </p>
                </div>
                
                {/* Testimonials section */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4 mb-4">
                                            <Quote className="h-5 w-5 text-primary mb-2" />
                                            <div>
                                                <h4 className="font-medium text-slate-900">{testimonial.name}</h4>
                                                <p className="text-sm text-slate-500">{testimonial.institution}</p>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} width="12" height="12" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor">
                                                            <polygon points="12,2 15,5 19,5 13,8 15,11 12,8 9,11 11,8 5,5 9,2" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 italic">{testimonial.feedback}</p>
                                        {testimonial.avatar && (
                                            <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mt-4" />
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
```

**Step 5: Commit**

```bash
git add src/components/sections/Education.tsx
git commit -m "feat: add education section with testimonials"
```

---

### Task 6: Add Agriculture (DS Agro) and Real Estate (Tridasa) Industry Focus

**Objective:** Ensure Agriculture and Real Estate industries are properly represented with DS Agro and Tridasa specifics.

**Files:**
- Already updated in Task 3 (Industries section)
- May need specific industry detail pages

**Step 1: Verify Agriculture and Real Estate are in industries list** (from Task 3)

**Step 2: Create agriculture industry detail page if needed**

```bash
mkdir -p src/app/industries/agriculture/page.tsx
```

**Step 3: Implement agriculture page with DS Agro focus**

```typescript
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
```

**Step 4: Create real estate industry detail page if needed**

```bash
mkdir -p src/app/industries/real-estate/page.tsx
```

**Step 5: Implement real estate page with Tridasa focus**

```typescript
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
```

**Step 6: Commit**

```bash
git add src/app/industries/agriculture/page.tsx src/app/industries/real-estate/page.tsx
git commit -m "feat: add agriculture (DS agro) and real estate (tridasa) industry pages"
```

---

### Task 7: Reorganize Modules Under Solutions Based on Solutions List

**Objective:** Ensure modules are properly organized under relevant solution categories.

**Files:**
- This may involve reviewing how modules are linked from services/industries pages
- Likely no new files needed, just ensuring proper href links

**Step 1: Review current module linking in services and industries sections**

Check that:
- Services section links point to appropriate module pages
- Industries section links point to relevant industry solutions
- Module pages exist where referenced

**Step 2: Create missing module pages if needed**

Based on the services list, ensure these pages exist:
- `/services/consulting`
- `/services/erpnext-implementation` 
- `/services/development`
- `/services/migrations`
- `/services/mobile-app-development`
- `/services/training-support`
- `/services/website-module` (likely exists)

**Step 3: Verify solutions organization**

Ensure that when users click on a service or industry, they land on a relevant solution page that explains how that service/industry is solved.

**Step 4: Commit any new module pages**

```bash
# Example for creating a missing module page
mkdir -p src/app/services/development/page.tsx
```

```typescript
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
```

**Step 5: Commit**

```bash
git add src/app/services/development/page.tsx
git commit -m "feat: add custom development service page"
```

---

### Task 8: Final Verification and Testing

**Objective:** Verify all changes work correctly and meet requirements.

**Files:**
- Verification of all modified and new files

**Step 1: Run development server verification**

```bash
# Already running, but verify no errors in console
# Check that all pages load correctly:
# - Homepage
# - Services page
# - Industries page  
# - Individual service pages
# - Individual industry pages
```

**Step 2: Check responsive design**

Verify that:
- Navbar renders correctly on mobile and desktop
- Services grid adapts properly (1 column mobile, 2 column tablet, 4 column desktop)
- Industries grid adapts properly (2 column mobile, 3 column tablet, 4+ column desktop)

**Step 3: Validate all links work**

Ensure all href attributes in services and industries sections point to existing pages.

**Step 4: Final commit**

```bash
git add .
git commit -m "feat: complete trusync website updates per requirements"
```

## Files Likely to Change

- `/home/surendhra/trusync-website/src/components/layout/Header.tsx` - Navbar updates
- `/home/surendhra/trusync-website/src/components/sections/Services.tsx` - Services list update
- `/home/surendhra/trusync-website/src/components/sections/Industries.tsx` - Industries list update
- `/home/surendhra/trusync-website/src/components/sections/Education.tsx` (new or modified) - Education section with testimonials
- `/home/surendhra/trusync-website/src/app/services/consulting/page.tsx` (new) - Consulting service page
- `/home/surendhra/trusync-website/src/app/services/development/page.tsx` (new) - Development service page
- `/home/surendhra/trusync-website/src/app/services/migrations/page.tsx` (new) - Migrations service page
- `/home/surendhra/trusync-website/src/app/services/mobile-app-development/page.tsx` (new) - Mobile app development service page
- `/home/surendhra/trusync-website/src/app/services/training-support/page.tsx` (new) - Training and support service page
- `/home/surendhra/trusync-website/src/app/industries/agriculture/page.tsx` (new) - Agriculture/DS Agro industry page
- `/home/surendhra/trusync-website/src/app/industries/real-estate/page.tsx` (new) - Real Estate/Tridasa industry page

## Tests / Validation

1. **Visual Verification:** All updated sections display correctly
2. **Link Validation:** All navigation links point to existing pages
3. **Responsive Design:** Layout adapts correctly to different screen sizes
4. **No Console Errors:** No JavaScript or TypeScript compilation errors
5. **Performance:** No significant impact on page load times

## Risks, Tradeoffs, and Open Questions

**Risks:**
- Breaking existing links if not careful with href updates
- Inconsistent design if new components don't follow existing patterns
- Missing pages leading to 404 errors

**Tradeoffs:**
- Creating individual pages for each service/industry vs. dynamic pages
- Amount of upfront work vs. iterative implementation

**Open Questions:**
1. Should we create dynamic service/industry pages using [slug] routing instead of individual pages?
2. What specific content should go on each new service/industry page beyond the basic structure?
3. Are there existing testimonials we should use for the education section, or should we use placeholder content initially?
4. What specific icons should be used for the new services (Consulting, Migrations, etc.)?

## Implementation Notes

Following the principles from the plan skill:
- Each task is bite-sized (2-5 minutes of focused work)
- Exact file paths are provided
- Complete code examples are included where appropriate
- Verification steps are specified
- TDD approach is suggested where applicable (though UI changes may be harder to test with traditional unit tests)
- Frequent commits are planned after each task

The implementation follows DRY principles by reusing existing component patterns and YAGNI by implementing only what's requested.