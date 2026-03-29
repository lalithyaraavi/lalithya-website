import { blogPosts } from "@/data/content";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">WRITING</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT mb-6 leading-tight">
            Blog
          </h1>
          <p className="font-body text-ink-muted text-lg max-w-xl leading-relaxed mb-16">
            Notes on design, engineering, student life, and whatever else is on my mind.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.09}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-start gap-6 p-8 rounded-4xl border border-rose-light/40 hover:border-rose-DEFAULT/50 bg-cream-DEFAULT hover:bg-rose-light/10 transition-all duration-300 hover:shadow-lg hover:shadow-rose-light/20"
              >
                {/* Date + tag column */}
                <div className="md:w-40 shrink-0">
                  <span className="block font-mono text-xs text-ink-muted/60 mb-2">{post.date}</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-cream-warm text-xs font-mono text-rose-DEFAULT border border-rose-light/40">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-2xl font-light text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="font-mono text-xs text-rose-DEFAULT">{post.readTime} read →</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Empty state / coming soon hint */}
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center py-10 rounded-4xl border border-dashed border-rose-light/50">
            <p className="font-mono text-xs text-ink-muted/50 tracking-widest">MORE POSTS COMING SOON ✦</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
