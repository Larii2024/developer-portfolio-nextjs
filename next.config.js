const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // Enabled React Strict Mode

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
