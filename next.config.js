/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['heyfahim.com'],
    unoptimized: true,
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
