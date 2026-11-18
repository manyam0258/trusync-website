import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frappe Framework Development | Low Code Platform",
  description: "Enterprise app development using the Frappe Framework. Frappe framework development services in Hyderabad building robust custom modules, APIs, and portals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
