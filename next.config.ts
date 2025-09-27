import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
      '/images': {
        target: 'http://localhost:3000'
      }
    }
  }
};

export default nextConfig;
