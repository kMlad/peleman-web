/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'peleman.underdog.mk',
        
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/doma',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
