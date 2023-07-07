/** @type {import('next').NextConfig} */
const path = require("path");
const withPWAInit = require("next-pwa");
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

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve("next-pwa");
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, "register.js");

  return entry().then((entries) => {
    // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
    if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
      if (Array.isArray(entries["main-app"])) {
        entries["main-app"].unshift(registerJs);
      } else if (typeof entries["main-app"] === "string") {
        entries["main-app"] = [registerJs, entries["main-app"]];
      }
    }
    return entries;
  });
};

const withPWA = withPWAInit({
  dest: "public",
  runtimeCaching,
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ["app-build-manifest.json"],
  mode: "production",
});

module.exports = withPWA({
  // pwa: {
  //   dest: "public",
  //   runtimeCaching,
  //   mode: "production",
  // },
  webpack: (config, { dev }) => {
    if (!dev) {
      const entry = generateAppDirEntry(config.entry);
      config.entry = () => entry;
    }

    return config;
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
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    styledComponents: true,
  },
});
