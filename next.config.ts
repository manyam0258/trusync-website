import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Same-origin framing is needed for the admin's Live Preview panel.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
    : []),
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    // Setting localPatterns blocks every local image that is not listed,
    // so list uploaded media (served by Payload) and the site's own static files.
    localPatterns: [
      { pathname: "/api/media/file/**" },
      { pathname: "/assets/**", search: "" },
      { pathname: "/logo.png", search: "" },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
