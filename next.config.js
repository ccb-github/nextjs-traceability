/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    //TODO this is enabled for quick deployment
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["chinatrace.org"],
  },
}

module.exports = nextConfig
