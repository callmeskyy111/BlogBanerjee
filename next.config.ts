import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "global.discourse-cdn.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        hostname: "miro.medium.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
