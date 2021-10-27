/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    loader: 'imgix',
    path: 'https://blabla.bla/',
  },
};
