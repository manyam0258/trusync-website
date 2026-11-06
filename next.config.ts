import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
