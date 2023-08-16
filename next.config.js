/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/atooldev.github.io',
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'profile-images.xing.com',
  ],
  },
}

module.exports = nextConfig
