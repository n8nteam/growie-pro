const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/:locale/guides/first-grow', destination: '/:locale/guides/basics/first-grow', permanent: true },
      { source: '/:locale/guides/choosing-equipment', destination: '/:locale/guides/growbox/choosing-equipment', permanent: true },
      { source: '/:locale/guides/climate-control', destination: '/:locale/guides/growing/climate-control', permanent: true },
      { source: '/:locale/guides/watering-feeding', destination: '/:locale/guides/nutrients/watering-feeding', permanent: true },
      { source: '/:locale/guides/troubleshooting', destination: '/:locale/guides/plant-problems/troubleshooting', permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
