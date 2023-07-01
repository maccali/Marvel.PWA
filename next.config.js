/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const cacheTime = 365 * 24 * 60 * 60; // 365 days

runtimeCaching.map((item) => {
  item.options.expiration.maxAgeSeconds = cacheTime;
  if (item.options.cacheName === "others") {
    item.options.expiration.maxEntries = 200;
  }
  if (item.options.cacheName === "static-image-assets") {
    item.options.expiration.maxEntries = 100;
  }
});

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    mode: "production",
  },
  env: {
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
    APP_URL: process.env.APP_URL,
  },
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.annihil.us",
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
});
