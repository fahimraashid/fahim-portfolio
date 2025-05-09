/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/fahim-portfolio',
  assetPrefix: '/fahim-portfolio/',
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
