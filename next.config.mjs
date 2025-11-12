/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/sorry-site' : '',
  assetPrefix: isProd ? '/sorry-site/' : '',
  images: { unoptimized: true }, // Required for static export
  trailingSlash: true, // Ensures correct static routing
};

export default nextConfig;
