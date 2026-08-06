import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/b/**",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
        pathname: "/s-cvc90x9929/images/stencil/**",
      },
      {
        protocol: "https",
        hostname: "www.carocci.it",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
