import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frappe Framework Custom Development in Hyderabad | TruSync",
  description: "Enterprise app development using Frappe Framework. Certified developers in Hyderabad building robust custom modules, APIs, and portals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
