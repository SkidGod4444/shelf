import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Let browsers keep covers and thumbnails for 31 days. A replaced
        // image needs a new filename to show up before then.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2678400" }],
      },
    ];
  },
  images: {
    // Serve images as-is. The files in public/images are already small WebP,
    // and this keeps the site off Vercel's image optimization quota.
    unoptimized: true,
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
