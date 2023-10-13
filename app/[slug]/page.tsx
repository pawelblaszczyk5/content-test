import { notFound } from "next/navigation";
import { posts } from "virtual-example";

export const dynamic = "force-dynamic";

const BlogPage = async ({ params }) => {
  if (!posts[params.slug]) notFound();

  const module = await posts[params.slug]();
  const Component = module.default;

  return <Component></Component>;
};

export default BlogPage;
