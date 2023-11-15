/** @type {import('next').NextConfig} */
const nextConfig = {
  parallelRoutes: [
    "/feed",
    "/trending",
    "/explore",
    "/notifications",
    "/bookmarksFeed",
  ],
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
    domains: ["uploadthing.com", "lh3.googleusercontent.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
