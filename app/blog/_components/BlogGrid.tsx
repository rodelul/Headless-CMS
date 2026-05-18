import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import { formatDate, cleanExcerpt, getFeaturedImageUrl } from "@/lib/wordpress";
import { Post, Category } from "@/types/wordpress";

interface BlogGridProps {
  posts: Post[];
  hasNextPage: boolean;
}

export default function BlogGrid({ posts, hasNextPage }: BlogGridProps) {
  return (
    <section className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post, i: number) => {
            const imageUrl = getFeaturedImageUrl(post);
            return (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card overflow-hidden group block border border-white/5 bg-dark-900/40 hover:bg-dark-800/60 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-white/5">
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

                  <div className="p-6">
                    {post.categories?.nodes && post.categories.nodes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.nodes.map((cat: Category) => (
                          <span
                            key={cat.slug}
                            className="text-[11px] text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20 font-bold uppercase tracking-wider"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-heading text-xl font-bold tracking-tight leading-snug text-white group-hover:text-accent transition-colors mb-3">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted line-clamp-2 mb-4">
                      {cleanExcerpt(post.excerpt)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <time className="text-xs text-muted font-medium">{formatDate(post.date)}</time>
                      <span className="text-xs text-accent font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        Citește →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        {hasNextPage && (
          <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all duration-300 hover:scale-105">
              Încarcă mai multe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
