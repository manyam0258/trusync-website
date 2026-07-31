# TruSync Website

**A modern marketing website for TruSync, showcasing industry‑specific ERP/CRM solutions built on the Frappe Framework.**

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
  - [Architecture Overview](#architecture-overview)
  - [Data Flow & State Management](#data-flow--state-management)
  - [Styling & UI Components](#styling--ui-components)
- [Components Overview](#components-overview)
- [Utilities](#utilities)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Overview
The TruSync website is a Next.js 13 (App Router) application built with TypeScript and Tailwind CSS. It serves as a public‑facing site that presents TruSync’s industry solutions, services, and innovative offerings. The site leverages the Vercel‑optimized `output: "standalone"` configuration for efficient deployment.

## Features
- **Industry‑specific pages** – dedicated sections for Construction, Crowdfunding, Dairy, Distribution, EPC, HR/Payroll, Manufacturing, NBFC, Textile.
- **Service modules** – detailed pages for Accounting, Asset Management, CRM, Helpdesk, HR/Payroll, Order Management, Website.
- **Solution showcases** – Frappe Framework, Frappe Insights, Frappe LMS.
- **Innovation highlights** – AI Automation, PDPA Compliance, Open‑Source Integrations.
- **Reusable UI component library** – Button, Card, Container, Section, Toast, etc.
- **Section‑based layout** – Hero, Features, About, Services, Why Choose Us, Contact, etc.
- **Lead capture & WhatsApp float** – LeadMagnet and WhatsAppFloat components for conversions.
- **SEO‑ready** – JSON‑LD schema via `JsonLd.tsx`.
- **Optimized font handling** – uses `next/font` with Geist.

## Tech Stack
- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom reusable primitives (Button, Card, etc.)
- **State Management:** React Context / `useState`/`useEffect` (no global state library)
- **Deploy:** Vercel (output: standalone)
- **Optional Backend:** Supabase (via `@supabase/supabase-js`)
- **Linting:** ESLint (eslint-config-next)

## Folder Structure
```
trusync-website/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  ├─ actions/
│  │  │   └─ contact.ts
│  │  ├─ industries/          ← industry‑specific pages
│  │  ├─ industries/construction/page.tsx
│  │  ├─ industries/crowdfunding/page.tsx
│  │  ├─ industries/dairy/page.tsx
│  │  ├─ industries/distribution/page.tsx
│  │  ├─ industries/epc/page.tsx
│  │  ├─ industries/hr-payroll/page.tsx
│  │  ├─ industries/manufacturing/page.tsx
│  │  ├─ industries/nbfc/page.tsx
│  │  ├─ industries/epc/page.tsx
│  │  ├─ industries/textile/page.tsx
│  │  ├─ services/            ← service‑module pages
│  │  ├─ services/accounting-module/page.tsx
│  │  ├─ services/asset-management-module/page.tsx
│  │  ├─ services/crm-module/page.tsx
│  │  ├─ services/helpdesk-module/page.tsx
│  │  ├─ services/hr-payroll-module/page.tsx
│  │  ├─ services/order-management-module/page.tsx
│  │  ├─ services/website-module/page.tsx
│  │  ├─ solutions/           ← solution showcases
│  │  ├─ solutions/frappe-framework/page.tsx
│  │  ├─ solutions/frappe-insights/page.tsx
│  │  ├─ solutions/frappe-lms/page.tsx
│  │  ├─ innovation/
│  │  │  ├─ ai-automation/page.tsx
│  │  │  ├─ dpdp-compliance/page.tsx
│  │  │  ├─ open-source-integrations/page.tsx
│  │  ├─ components/
│  │  │  ├─ layout/
│  │  │  │  ├─ Header.tsx
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ sections/
│  │  │  │  ├─ Hero.tsx
│  │  │  │  ├─ About.tsx
│  │  │  │  ├─ Services.tsx
│  │  │  │  ├─ Industries.tsx
│  │  │  │  ├─ WhyChooseUs.tsx
│  │  │  │  ├─ Contact.tsx
│  │  │  │  ├─ LeadMagnet.tsx
│  │  │  │  ├─ WhatsAppFloat.tsx
│  │  │  │  ├─ StickyCTA.tsx
│  │  │  │  └─ ServicePageLayout.tsx
│  │  │  ├─ sections/framework/
│  │  │  │  ├─ FrameworkHero.tsx
│  │  │  │  ├─ ArchitectureSection.tsx
│  │  │  │  ├─ BuilderSection.tsx
│  │  │  │  ├─ ComparisonSection.tsx
│  │  │  │  ├─ CRMHelpdeskSection.tsx
│  │  │  │  ├─ ERPFlowSection.tsx
│  │  │  │  ├─ ERPNextSection.tsx
│  │  │  │  ├─ HRSection.tsx
│  │  │  │  ├─ InsightsSection.tsx
│  │  │  │  ├─ POSSection.tsx
│  │  │  │  ├─ PricingSection.tsx
│  │  │  │  └─ VerticalsSection.tsx
│  │  │  ├─ ui/
│  │  │  │  ├─ Button.tsx
│  │  │  │  ├─ Card.tsx
│  │  │  │  ├─ Container.tsx
│  │  │  │  ├─ Section.tsx
│  │  │  │  └─ Toast.tsx
│  │  │  ├─ crm/
│  │  │  │  ├─ HeroImage.tsx
│  │  │  │  └─ CRMImage.tsx
│  │  │  ├─ JsonLd.tsx
│  │  ├─ lib/
│  │  │  ├─ utils.ts
│  │  │  └─ supabase.ts
│  ├─ public/
│  │  ├─ assets/
│  │  │  ├─ crm/
│  │  │  └─ manufacturing/
│  ├─ globals.css
│  ├─ next.config.ts
│  ├─ package.json
│  ├─ package-lock.json
│  ├─ postcss.config.mjs
│  ├─ eslint.config.mjs
│  ├─ tsconfig.json
│  └─ README.md
```

## Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone <repo-url>
   cd trusync-website
   ```
2. **Install dependencies**  
   ```bash
   npm install   # or yarn / pnpm / bun
   ```
3. **Set up environment variables** (create `.env.local` at the project root)  
   ```dotenv
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   # Optional: NEXT_PUBLIC_GA_ID=your_ga_id
   ```
4. **Run the development server**  
   ```bash
   npm run dev   # or yarn dev / pnpm dev / bun dev
   ```
5. Open <http://localhost:3000> in your browser.

## Usage
- Edit pages under `src/app/` – changes hot‑reload via Next.js fast refresh.
- Add new industry or service pages by creating a new folder/page under `src/app/industries/` or `src/app/services/`.
- Reuse UI components from `src/app/components/ui/` and section blocks from `src/app/components/sections/`.
- Update SEO via `JsonLd.tsx` or page‑level `metadata` exports (Next.js).

## How It Works

### Architecture Overview
- **Next.js App Router** handles routing via the `app/` directory.
- Each route (`page.tsx`) acts as a route segment; layout is shared via `layout.tsx`.
- No custom server; all logic lives in React Server Components (by default) or Client Components where needed (marked with `"use client"`).

### Data Flow & State Management
- Data fetching occurs in Server Components using `fetch` or the Supabase client (`src/lib/supabase.ts`).
- Minimal client‑side state: form states, UI toggles (mobile menu, modals) handled with React `useState`.
- No global store; context is used only where needed (e.g., theme, if added later).

### Styling & UI Components
- Tailwind CSS provides utility‑first classes; custom components encapsulate recurring patterns.
- `globals.css` imports Tailwind base/utilities and may contain global overrides.
- Component hierarchy:  
  `layout.tsx` → `<Header/>`, `<main>` (page content), `<Footer/>`.
- Sections (`Hero.tsx`, `About.tsx`, etc.) are assembled inside page files to build landing‑page style layouts.

## Components Overview
| Category | Components |
|----------|------------|
| **UI Primitives** | `Button`, `Card`, `Container`, `Section`, `Toast` |
| **Layout** | `Header`, `Footer` |
| **Sections** | `Hero`, `About`, `Services`, `Industries`, `WhyChooseUs`, `Contact`, `LeadMagnet`, `WhatsAppFloat`, `StickyCTA`, `ServicePageLayout` |
| **Framework Sections** (used on solution/industry pages) | `FrameworkHero`, `ArchitectureSection`, `BuilderSection`, `ComparisonSection`, `CRMHelpdeskSection`, `ERPFlowSection`, `ERPNextSection`, `HRSection`, `InsightsSection`, `POSSection`, `PricingSection`, `VerticalsSection` |
| **CRM‑specific** | `HeroImage`, `CRMImage` |
| **Utility** | `JsonLd` (SEO schema) |
| **Lib** | `utils.ts` (helpers), `supabase.ts` (Supabase client) |

## Deployment
The project is pre‑configured for Vercel:
```bash
vercel
```
or push to a GitHub/GitLab/Bitbucket repository connected to Vercel.  
The `next.config.ts` setting `output: "standalone"` ensures a minimal Node‑only output for faster cold starts.

## Environment Variables
| Variable | Description | Required? |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes (if using Supabase) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon‑public key | Yes |
| `NEXT_PUBLIC_GA_ID` (optional) | Google Analytics measurement ID | No |
| Any other custom keys (e.g., API keys for third‑party services) | As needed | – |

Add them to `.env.local` (never commit this file).

## License
This project is licensed under the **MIT License** – see the `LICENSE` file in the repository root for details.

---  

*Documentation generated using the **application‑documentation** skill, based on source code inspection of the TruSync website.*