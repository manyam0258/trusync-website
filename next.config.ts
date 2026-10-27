import { source } from "framer-motion/client";
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
        {
          source: '/innovation/ai-automation',
          destination: 'https://wp.trusync.in/ai-automation/',
        },
        {
          source: '/innovation/ai-automation/:path*',
          destination: 'https://wp.trusync.in/ai-automation/:path*',
        },
        {
          source: '/solutions/frappe-lms',
          destination: 'https://wp.trusync.in/frappe-lms/'
        },
        {
          source: '/solutions/frappe-lms/:path*',
          destination: 'https://wp.trusync.in/frappe-lms/:path*'
        },
        {
          source: '/industries/real-estate',
          destination: 'https://wp.trusync.in/real-estate/'
        },
        {
          source: '/industries/real-estate/:path*',
          destination: 'https://wp.trusync.in/real-estate/:path*'
        },
        {
          source: '/services/erpnext-implementation',
          destination: 'https://wp.trusync.in/erpnext-implementation/'
        },
        {
          source: '/services/erpnext-implementation/:path*',
          destination: 'https://wp.trusync.in/erp-implementation/:path*'
        },
        {
          source: '/innovation/dpdp-compliance',
          destination: 'https://wp.trusync.in/dpdp-compliance/'
        },
        {
          source: '/innovation/dpdp-compliance/:path*',
          destination: 'https://wp.trusync.in/dpdp-compliance/:path*'
        },
        {
          source: '/industries/healthcare',
          destination: 'https://wp.trusync.in/healthcare/'
        },
        {
          source: '/industries/healthcare/:path*',
          destination: 'https://wp.trusync.in/healthcare/:path*'
        },
      ]
    };
  },
};

export default nextConfig;
