/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};
// next.config.js

module.exports = {
  devIndicators: {
      buildActivity: false
  }
}

module.exports = nextConfig;