/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
  env: {
    razorPayKey: "rzp_live_NWrWwtSkfRgG8q",
    razorPaySecret: "O8SpgHnsaG4UzYd766qI8Xqk",
    razorPayTestKey: "rzp_test_u8LRGgtlScCOgs",
    razorPayTestSecret: "D0BjF7qoSQc7zoPwmbolEG2d",
  },
};

export default nextConfig;
