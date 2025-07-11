/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching: require("next-pwa/cache"),
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = withPWA(nextConfig);