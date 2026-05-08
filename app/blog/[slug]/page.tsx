import { getPostBySlug, getAllPostSlugs, getFeaturedImageUrl, formatDate, getSeoMetadata } from "@/lib/wordpress";
import { Category } from "@/types/wordpress";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        <span className="text-white truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Categories */}
      {post.categories?.nodes && post.categories.nodes.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {post.categories.nodes.map((cat: Category) => (
            <span key={cat.slug} className="text-[11px] text-accent bg-accent-dim px-3 py-1 rounded-md font-medium">
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter mb-6">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-accent-dim rounded-full flex items-center justify-center text-accent text-xs font-semibold">
            {(post.author?.node?.name || "A").charAt(0)}
          </div>
          <span>{post.author?.node?.name || "Admin"}</span>
        </div>
        <span className="text-dark-600">•</span>
        <time>{formatDate(post.date)}</time>
      </div>

      {/* Featured image */}
      {imageUrl && (
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-white/[0.06]">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      {/* Back */}
      <div className="mt-16 pt-8 border-t border-white/[0.06]">
        <Link href="/blog" className="text-accent font-medium hover:text-accent-dark transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Înapoi la blog
        </Link>
      </div>
    </article>
  );
}
