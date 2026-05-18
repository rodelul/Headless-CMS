import { getPosts, getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";
import BlogHero from "@/components/sections/BlogHero";
import BlogGrid from "@/components/sections/BlogGrid";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug("blog").catch(() => null);
  if (pageData?.seo) {
    return getSeoMetadata(pageData.seo);
  }
  return {
    title: "Blog",
    description: "Articole, ghiduri și noutăți din lumea tech",
  };
}

export default async function BlogPage() {
  const [postsData, pageData] = await Promise.all([
    getPosts(12),
    getPageBySlug("blog").catch(() => null)
  ]);
  const { posts, hasNextPage } = postsData;

  return (
    <div className="bg-black min-h-screen">
      <BlogHero pageData={pageData} />
      <BlogGrid posts={posts} hasNextPage={hasNextPage} />
    </div>
  );
}
