import nextMdx from "@next/mdx";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production builds
  // In development, allow dynamic routes for new blog posts
  ...(process.env.NODE_ENV === "production" && { output: "export" }),

  trailingSlash: false,

  images: {
    unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    // Exclude vtnweb folder from build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/**', '**/vtnweb/**'],
    };
    return config;
  },
};

export default withMDX(nextConfig);
