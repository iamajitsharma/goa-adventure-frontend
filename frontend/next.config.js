// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    razorPayKey: "rzp_live_NWrWwtSkfRgG8q",
    razorPaySecret: "O8SpgHnsaG4UzYd766qI8Xqk",
  },
};
