import type { NextConfig } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://championslab.xyz";

const nextConfig: NextConfig = {
  // Types verified via standalone `npx tsc --noEmit --skipLibCheck`.
  // Next 16 Turbopack's built-in TS check OOMs on this project (16 GB RAM, 9 workers).
  typescript: { ignoreBuildErrors: true },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**",
      },
      {
        protocol: "https",
        hostname: "champions-lab-sprites.nbg1.your-objectstorage.com",
        pathname: "/sprites/**",
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ],
};

export default nextConfig;
