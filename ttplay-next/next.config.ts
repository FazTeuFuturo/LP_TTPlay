import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export para deploy no Vercel como site estático
  output: 'export',

  // Trailing slashes para URLs limpas
  trailingSlash: true,

  // Otimização de imagens desabilitada para static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
