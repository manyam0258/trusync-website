import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ERPNext Services & Frappe Partner in Hyderabad | TruSync",
  description: "TruSync is a certified Frappe and ERPNext partner in Hyderabad, Telangana. We deliver custom ERP implementation, CRM integrations, and smart AI workflow automation for SMEs.",
  icons: {
    icon: '/Trusync-icon-tinified.png',
    shortcut: '/Trusync-icon-tinified.png',
    apple: '/Trusync-icon-tinified.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* AnythingLLM Chat Widget */}
        <Script
          src="https://anythingllm.tridasa.cloud/embed/anythingllm-chat-widget.min.js"
          data-embed-id="3db2db9f-6b4c-40d5-9a17-5bc3b04f301d"
          data-base-api-url="https://anythingllm.tridasa.cloud/api/embed"
          strategy="afterInteractive"
        />
        {/* AnythingLLM (https://anythingllm.com) */}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6NYR2EEYG4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6NYR2EEYG4');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yswoc5dkok");
            `,
          }}
        />
      </body>
    </html>
  );
}