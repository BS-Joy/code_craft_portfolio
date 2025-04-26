/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "cdn.iconscout.com",
      // },
    ],
  },
};

export default nextConfig;
