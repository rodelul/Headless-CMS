import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/wordpress";

interface BlogPostContentProps {
  post: Post;
  imageUrl: string | null;
}

export default function BlogPostContent({ post, imageUrl }: BlogPostContentProps) {
  return (
    <>
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
    </>
  );
}
