/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
          domains: ["links.papareact.com", "image.tmdb.org", "static.xx.fbcdn.net", "platform-lookaside.fbsbx.com"],
  },
  experimental: {
    appDir: true,
  },
};
