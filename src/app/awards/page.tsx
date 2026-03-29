import { awards } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function AwardsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">RECOGNITION</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT mb-6 leading-tight">
            Awards &amp; Honours
          </h1>
          <p className="font-body text-ink-muted text-lg max-w-xl leading-relaxed mb-16">
            A few things I&apos;m proud of — from science fairs to scholarships.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {awards.map((award, i) => (
            <FadeIn key={award.title} delay={i * 0.08}>
              <div className="group flex items-center gap-6 p-7 rounded-4xl border border-rose-light/40 hover:border-rose-DEFAULT/50 bg-cream-DEFAULT hover:bg-rose-light/10 transition-all duration-300 hover:shadow-lg hover:shadow-rose-light/20">
                <span className="text-4xl">{award.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-2xl font-light text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors">
                    {award.title}
                  </h2>
                  <p className="font-body text-sm text-ink-muted mt-1">{award.issuer}</p>
                </div>
                <span className="font-mono text-sm text-ink-muted/60 shrink-0">{award.year}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Decorative quote */}
        <FadeIn delay={0.4}>
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-rose-light/60 to-lavender/30 blob" />
              <blockquote className="relative rounded-4xl border border-rose-light/40 bg-cream-DEFAULT/80 backdrop-blur px-10 py-10 max-w-xl">
                <p className="font-display text-2xl italic font-light text-ink-DEFAULT leading-relaxed">
                  &ldquo;Science fair was where I fell in love with building things that answer real questions.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-xs text-rose-DEFAULT tracking-widest">— LALITHYA</footer>
              </blockquote>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
