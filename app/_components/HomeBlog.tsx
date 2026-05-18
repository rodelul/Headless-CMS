import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import { formatDate, getFeaturedImageUrl } from "@/lib/wordpress";
import { Post } from "@/types/wordpress";

interface HomeBlogProps {
  posts: Post[];
}

export default function HomeBlog({ posts }: HomeBlogProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="label-accent mb-4">Blog</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Ultimele Articole
              </h2>
            </div>
            <Link href="/blog" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Vezi toate articolele <span className="text-lg">→</span>
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: Post, i: number) => {
            const imageUrl = getFeaturedImageUrl(post);
            return (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="card overflow-hidden group block">
                  <div className="relative aspect-video overflow-hidden bg-black border-b border-white/5">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700" />
                    )}
                  </div>
                  <div className="p-6">
                    {post.categories?.nodes?.[0] && (
                      <span className="text-[10px] text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20 font-bold uppercase tracking-wider mb-4 inline-block">
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold mb-3 tracking-tight text-white group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted font-medium">{formatDate(post.date)}</p>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
