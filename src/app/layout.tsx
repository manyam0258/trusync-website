import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <script
          data-embed-id="3db2db9f-6b4c-40d5-9a17-5bc3b04f301d"
          data-base-api-url="https://anythingllm.tridasa.cloud/api/embed"
          src="https://anythingllm.tridasa.cloud/embed/anythingllm-chat-widget.min.js"
        ></script>
        {/* AnythingLLM (https://anythingllm.com) */}
      </body>
    </html>
  );
}