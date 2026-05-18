import Link from "next/link";
import { Category, Post } from "@/types/wordpress";
import { formatDate } from "@/lib/wordpress";

interface BlogPostHeaderProps {
  post: Post;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <>
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
    </>
  );
}
