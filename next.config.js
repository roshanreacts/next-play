/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: ["https://cdn.jsdelivr.net/gh/"],
  },
};

module.exports = nextConfig;
