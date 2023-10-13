export const dynamic = "force-dynamic";
export const runtime = "experimental-edge";

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const module = await import(`#/blog/${[params.slug]}.mdx`);
  const Component = module.default;

  return <Component></Component>;
};

export default BlogPage;
