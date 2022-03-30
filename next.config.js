/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  trailingSlash: true,
};
