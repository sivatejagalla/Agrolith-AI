/** @type {import('next').NextConfig} */
// Vercel Automatic GitHub Deployment Trigger: Agrolith-AI Next.js 15
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'krishimitra-backend.up.railway.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://krishimitra-backend.up.railway.app/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
