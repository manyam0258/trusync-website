import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext for EPC & Engineering Companies in Hyderabad | TruSync",
  description: "Manage project lifecycle, procurement, and billing. Deploy ERPNext for EPC with certified Hyderabad-based Frappe implementation partners.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
