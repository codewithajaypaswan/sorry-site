/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true },
  basePath: '/sorry-site',
  assetPrefix: '/sorry-site/',
  trailingSlash: true,
};

export default nextConfig;
