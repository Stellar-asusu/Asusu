import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@asusu/types", "@asusu/stellar-utils"],
};

export default nextConfig;
