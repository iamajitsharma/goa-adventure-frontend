// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goaadventure.in",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};
