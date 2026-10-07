import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: '/crm',
        destination: 'https://wp.trusync.in/crm-module/',
      },
      {
        source: '/crm/:path*',
        destination: 'https://wp.trusync.in/crm-module/:path*',
      },
    ];
  },
};

export default nextConfig;
