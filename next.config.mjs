/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async headers() {
    // Lets Jacob's brand images be pulled into his Google/Apple/Yelp profiles.
    return [{ source: '/brand/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] }];
  },
  async redirects() {
    return [
      { source: '/home-value', destination: '/sell#property-valuation', permanent: false },
      { source: '/review', destination: 'https://g.page/r/CaPyILGdFWCxEBM/review', permanent: false },
      { source: '/reviews', destination: 'https://g.page/r/CaPyILGdFWCxEBM/review', permanent: false },
      { source: '/whats-my-home-worth', destination: '/sell#property-valuation', permanent: false },
    ];
  },
};

export default nextConfig;
