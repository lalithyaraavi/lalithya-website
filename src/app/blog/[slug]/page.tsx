import { blogPosts } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { PosterFront, paletteStyle } from "@/components/PostcardArt";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const index = blogPosts.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const post = blogPosts[index];

  return (
    <div className="min-h-screen pt-32 pb-24 px-7">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-ink-muted hover:text-rose transition-colors mb-10 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> All postcards
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="pc-front rounded-md overflow-hidden h-56 mb-10 shadow-[0_22px_40px_-26px_rgba(34,40,31,.55)]" style={paletteStyle(index)}>
            <PosterFront post={post} flipHint={false} />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-mono text-[11px] uppercase tracking-[.12em] text-ink-muted/70 mb-4">
            {post.date} · {post.tag} · {post.readTime} read
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ink mb-8 leading-[1.02]">{post.title}</h1>
          <p className="font-body text-lg text-ink-muted leading-relaxed mb-10 border-b border-rose-light pb-10">{post.excerpt}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-hand text-3xl text-rose">Full postcard coming soon :)</p>
        </FadeIn>
      </div>
    </div>
  );
}
