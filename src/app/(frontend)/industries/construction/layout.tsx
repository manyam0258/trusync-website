import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext for Construction and Real Estate in Hyderabad | TruSync",
  description: "Custom ERPNext solutions for real estate and infrastructure development. Manage projects, inventory, accounts, and subcontracts with certified Frappe developers in Hyderabad.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
