import nextMdx from "@next/mdx";
import { createWebpackPlugin } from "unplugin";

const withMdx = nextMdx();

const plugin = createWebpackPlugin(() => ({
  name: "test",
  load(id) {
    if (id === "virtual-example") {
      console.log(this);

      console.log(this.addWatchFile("#/blog/test.mdx"));
      console.log(this.addWatchFile("#/blog/test2.mdx"));

      return `
        export const posts = {
          test: () => import('#/blog/test.mdx'),
          test2: () => import('#/blog/test2.mdx'),
          test3: () => import('#/blog/test3.mdx'),
          test4: () => import('#/blog/test4.mdx'),
          test5: () => import('#/blog/test5.mdx'),
          test6: () => import('#/blog/test6.mdx'),
          test7: () => import('#/blog/test7.mdx'),
        }

        export const bla = ${Math.random()}
      `;
    }

    return null;
  },
  resolveId: (id) => {
    if (id.includes("virtual-example")) return "virtual-example";

    return null;
  },
}));

const pluginBla = plugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: true,
    mdxRs: true,
  },
  webpack: (config) => {
    config.plugins.push(pluginBla);

    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMdx(nextConfig);
