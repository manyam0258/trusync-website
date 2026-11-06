import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext HR & Payroll Implementation Services in Hyderabad | TruSync",
  description: "Automate biometric attendance, salary structures, tax calculations, and compliance with ERPNext HRMS. Local support in Hyderabad, Telangana.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
