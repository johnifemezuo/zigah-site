/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "media.graphassets.com", "picsum.photos"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
