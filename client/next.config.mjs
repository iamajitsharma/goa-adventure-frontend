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
  },
};

export default nextConfig;
