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
          destination: 'https://wp.trusync.in/hr-payroll-module/',
        },
        {
          source: '/services/hr-payroll-module/:path*',
          destination: 'https://wp.trusync.in/hr-payroll-module/:path*',
        },
        {
          source: '/industries/construction',
          destination: 'https://wp.trusync.in/construction/',
        },
        {
          source: '/industries/construction/:path*',
          destination: 'https://wp.trusync.in/construction/:path*',
        },
      ]
    };
  },
};

export default nextConfig;
