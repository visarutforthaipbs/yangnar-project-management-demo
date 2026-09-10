import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/yangnar-project-management-demo' : '',
};

export default nextConfig;
