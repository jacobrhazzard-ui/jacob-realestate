/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // MLS listing photos (CRMLS media server)
      { protocol: 'https', hostname: 'matrixmedia.crmls.org', pathname: '/mediaserver/GetMedia.ashx' },
    ],
  },
};

export default nextConfig;
