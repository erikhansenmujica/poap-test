/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.poap.xyz",
      },
    ],
  },
};

module.exports = nextConfig;
