// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goa-adventures-bucket.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};
