/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'agrolith-backend.up.railway.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://agrolith-backend.up.railway.app/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
