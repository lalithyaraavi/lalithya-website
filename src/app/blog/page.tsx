import FadeIn from "@/components/FadeIn";
import Blobs from "@/components/Blobs";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-8 md:px-20 overflow-hidden">
      <Blobs />
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-base text-rose-DEFAULT tracking-widest mb-4">WRITING</p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-ink-DEFAULT mb-6 leading-tight">
            Blog
          </h1>
          <p className="font-body text-ink-muted text-xl max-w-xl leading-relaxed">
            Notes on design, engineering, student life, and whatever else is on my mind. Thoughts coming soon :)
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
