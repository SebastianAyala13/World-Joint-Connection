import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Asegurar que las rutas estén bien configuradas
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
