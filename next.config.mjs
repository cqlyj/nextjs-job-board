import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nmt1v2goas2uqoaa.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
