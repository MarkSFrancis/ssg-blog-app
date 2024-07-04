import Image from "next/image";

const fakeBlogs = [
  {
    title: "Blog 1",
    slug: "blog-1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni perspiciatis quidem ducimus corrupti rerum aut, numquam mollitia illo deserunt dolorum quos asperiores atque debitis quam necessitatibus cum distinctio, culpa blanditiis.`,
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda similique officia dolor fugit facere magnam, odio iste, vitae, voluptate quidem quo laudantium explicabo illum. Similique assumenda in magni. Quos.`,
  },
];

async function fetchBlog(slug: string) {
  const blog = fakeBlogs.find((b) => b.slug === slug);
  if (!blog) throw new Error(`Could not find blog: ${slug}`);

  return blog;
}

export async function generateStaticParams() {
  return fakeBlogs.map((b) => ({ slug: b.slug }));
}

type Blog = (typeof fakeBlogs)[number];

export default async function Blog(props: { params: { slug: string } }) {
  const blog = await fetchBlog(props.params.slug);

  return (
    <main>
      <h1 className="text-xl">{blog.title}</h1>
      <p>{blog.content}</p>
    </main>
  );
}
