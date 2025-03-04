const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // Enabled React Strict Mode

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },

  // Optional: Add custom Webpack configuration if needed
  webpack: (config, { isServer }) => {
    // Add custom Webpack configuration here if needed
    return config;
  },
};

module.exports = nextConfig;