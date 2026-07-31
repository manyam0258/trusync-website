import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";

export default function Home() {
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
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
