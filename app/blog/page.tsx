import { getPosts, formatDate, cleanExcerpt, getFeaturedImageUrl, getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import { Post, Category } from "@/types/wordpress";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
  const { posts, hasNextPage } = await getPosts(12);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
      <div className="mb-14">
        <p className="label-accent mb-3">Articole</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter">Blog</h1>
        <p className="mt-4 text-lg text-muted">
          Ghiduri, tutoriale și perspective din lumea software development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post: Post) => {
          const imageUrl = getFeaturedImageUrl(post);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700" />
                )}
              </div>

              <div className="p-5">
                {post.categories?.nodes && post.categories.nodes.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.categories.nodes.map((cat: Category) => (
                      <span
                        key={cat.slug}
                        className="text-[11px] text-accent bg-accent-dim px-3 py-1 rounded-md font-medium"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="font-heading text-base font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>

                <p className="text-sm text-muted line-clamp-2 mb-3">
                  {cleanExcerpt(post.excerpt)}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted">{formatDate(post.date)}</time>
                  <span className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Citește →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {hasNextPage && (
        <div className="mt-16 text-center">
          <button className="btn-secondary">Încarcă mai multe</button>
        </div>
      )}
    </div>
  );
}
