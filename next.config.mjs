/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: '../personal webs',  // Output directly to the GitHub Pages directory
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static exports
  assetPrefix: './',
};

export default nextConfig; 