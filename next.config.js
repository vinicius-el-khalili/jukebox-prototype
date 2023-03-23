/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'charts-static.billboard.com',
      'cdn.shopify.com'
    ],
  },
  
}

module.exports = nextConfig
