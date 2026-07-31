import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext for Manufacturing in Hyderabad | TruSync",
  description: "Boost shop floor efficiency and scale production. Custom ERPNext Manufacturing suites implemented by certified Frappe experts in Hyderabad, Telangana.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
