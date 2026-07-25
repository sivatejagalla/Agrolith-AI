/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'web-production-75741.up.railway.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://web-production-75741.up.railway.app/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
