/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      {
        protocol: 'https',
        hostname: 'https://flagpack.xyz',
        pathname: '_nuxt',
      },
    ],
  },
};

module.exports = nextConfig;
