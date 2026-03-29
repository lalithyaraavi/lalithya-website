import { blogPosts } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors mb-10 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> All posts
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-cream-warm text-xs font-mono text-rose-DEFAULT border border-rose-light/40">
              {post.tag}
            </span>
            <span className="font-mono text-xs text-ink-muted/60">{post.date}</span>
            <span className="font-mono text-xs text-ink-muted/60">· {post.readTime} read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light text-ink-DEFAULT mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="font-body text-lg text-ink-muted leading-relaxed mb-10 border-b border-rose-light/30 pb-10">
            {post.excerpt}
          </p>
        </FadeIn>

        {/* Placeholder body */}
        <FadeIn delay={0.2}>
          <div className="space-y-5 font-body text-ink-DEFAULT leading-relaxed">
            <p className="text-ink-muted italic">
              ✦ Full post coming soon — this is a placeholder for when you&apos;re ready to write.
            </p>
            <p>
              Add your blog content here. You can use markdown with a library like{" "}
              <code className="font-mono text-sm bg-cream-warm px-2 py-0.5 rounded-lg text-rose-DEFAULT">
                next-mdx-remote
              </code>{" "}
              or{" "}
              <code className="font-mono text-sm bg-cream-warm px-2 py-0.5 rounded-lg text-rose-DEFAULT">
                contentlayer
              </code>{" "}
              to render rich long-form content.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
