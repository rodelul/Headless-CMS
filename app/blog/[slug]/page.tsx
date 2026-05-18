import { getPostBySlug, getAllPostSlugs, getFeaturedImageUrl, getSeoMetadata } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostHeader from "./_components/BlogPostHeader";
import BlogPostContent from "./_components/BlogPostContent";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Articol negăsit" };

  return getSeoMetadata(post.seo);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);

  return (
    <article className="max-w-6xl mx-auto px-6 lg:px-8 pt-40 pb-20">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} imageUrl={imageUrl} />
    </article>
  );
}
