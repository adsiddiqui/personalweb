/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: '../personal webs',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static exports
  basePath: '',
  assetPrefix: './'
};

export default nextConfig; 