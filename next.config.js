/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org"
      }
    ]
  }
};

module.exports = nextConfig;
