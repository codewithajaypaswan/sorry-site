/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // tells Next.js to create static files
  distDir: 'docs',                // output build to docs/ folder for GitHub Pages
  images: { unoptimized: true },  // disable image optimization for static hosting
  basePath: '/sorry-site',        // your repository name (IMPORTANT)
  assetPrefix: '/sorry-site/',    // ensures assets load correctly
};

export default nextConfig;
