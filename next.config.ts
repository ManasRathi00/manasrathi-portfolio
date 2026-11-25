import type { NextConfig } from "next";

// standalone output keeps the Cloud Run image small
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
