import type { Metadata } from "next";
import { DraftBanner } from "@/components/cms/DraftBanner";
import { RenderBlocks } from "@/components/cms/RenderBlocks";
import { absoluteUrl, getPage, isMedia } from "@/lib/cms";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";

type Seo = { title?: string | null; description?: string | null; image?: unknown };

// The home page is the CMS page with the path "home". If it is missing or unpublished,
// the original code version below is shown so the site never has a blank front page.
export async function homeMetadata(preview: boolean): Promise<Metadata> {
  const { doc } = await getPage("home", preview).catch(() => ({ doc: null }));
  const meta = (doc?.meta ?? {}) as Seo;
  if (!doc || !meta.title) return {};
  return {
    title: meta.title,
    description: meta.description || undefined,
    openGraph: {
      title: meta.title,
      description: meta.description || undefined,
      images: isMedia(meta.image) && meta.image.url ? [{ url: absoluteUrl(meta.image.url) }] : undefined,
    },
  };
}

export async function HomeView({ preview }: { preview: boolean }) {
  // If the database cannot be reached the original code version is shown instead of an error.
  const { doc } = await getPage("home", preview).catch(() => ({ doc: null }));
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://trusync.in/#organization",
        "name": "TruSync Technologies LLP",
        "url": "https://trusync.in/",
        "logo": "https://trusync.in/logo.png",
        "image": "https://trusync.in/logo.png",
        "telephone": "+918143483438",
        "email": "surendhranath@trusync.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500056",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.4735",
          "longitude": "78.5367"
        },
        "sameAs": [
          "https://www.linkedin.com/company/trusync-technologies"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://trusync.in/#website",
        "url": "https://trusync.in/",
        "name": "TruSync",
        "publisher": {
          "@id": "https://trusync.in/#organization"
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={schemaData as any} />
      {doc ? (
        <>
          {preview && <DraftBanner status={doc._status} />}
          <RenderBlocks blocks={doc.layout as never} />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Services />
          <Industries />
          <WhyChooseUs />
          <Contact />
        </>
      )}
    </>
  );
}
