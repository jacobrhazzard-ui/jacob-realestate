/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      { source: '/home-value', destination: '/sell#property-valuation', permanent: false },
      { source: '/whats-my-home-worth', destination: '/sell#property-valuation', permanent: false },
    ];
  },
};

export default nextConfig;
