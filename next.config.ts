import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep optimized images cached for 31 days. A replaced image needs a new
    // filename to show up before then.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
};

export default nextConfig;
