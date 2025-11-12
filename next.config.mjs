/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true },
  basePath: '', // no subpath for local testing
  assetPrefix: './', // relative paths fix local & GitHub Pages 404s
  trailingSlash: true,
};

export default nextConfig;
