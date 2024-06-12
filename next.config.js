/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      {
        protocol: 'https',
        hostname: 'flagpack.xyz',
        pathname: '_nuxt',
      },
    ],
  },
};

module.exports = nextConfig;
