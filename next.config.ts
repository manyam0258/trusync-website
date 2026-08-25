import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/sentinel/:path*",
        destination: "https://dev-tridasa.frappe.cloud/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy/:path*",
      },
    ];
  },
};

export default nextConfig;
