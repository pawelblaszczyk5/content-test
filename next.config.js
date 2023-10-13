import nextMdx from "@next/mdx";

const withMdx = nextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: true,
    mdxRs: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMdx(nextConfig);
