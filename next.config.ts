import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  async redirects() {
    return [
      {
        source: "/ethics-debate",
        destination: "/the-great-aussie-ai-ethics-debate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
