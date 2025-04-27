import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  // If not found or details are disabled, show 404
  if (!post || post.disableDetails) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="flex gap-4 text-gray-500 text-sm mb-6">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
