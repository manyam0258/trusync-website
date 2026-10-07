import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/services/crm-module',
          destination: 'https://wp.trusync.in/crm-module/',
        },
        {
          source: '/services/crm-module/:path*',
          destination: 'https://wp.trusync.in/crm-module/:path*',
        },
        {
          source: '/services/hr-payroll-module',
          destination: 'https://wp.trusync.in/hrms-payroll/',
        },
        {
          source: '/services/hr-payroll-module/:path*',
          destination: 'https://wp.trusync.in/hrms-payroll/:path*',
        },
      ]
    };
  },
};

export default nextConfig;
