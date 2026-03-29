import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <FadeIn>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors mb-10 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> All projects
        </Link>
      </FadeIn>

      {/* Hero swatch */}
      <FadeIn delay={0.1}>
        <div className="w-full h-64 rounded-4xl mb-12 relative overflow-hidden" style={{ backgroundColor: project.color }}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 blob opacity-40" style={{ background: `radial-gradient(circle at 70% 50%, ${project.color}CC, transparent)` }} />
          )}
          {project.featured && (
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full bg-rose-DEFAULT text-cream-DEFAULT text-xs font-mono">✦ Featured Project</span>
            </div>
          )}
        </div>
      </FadeIn>

      <div className="max-w-3xl">
        <FadeIn delay={0.15}>
          <div className="flex items-start justify-between gap-6 mb-3">
            <h1 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT">{project.title}</h1>
            <span className="font-mono text-sm text-ink-muted mt-3 shrink-0">{project.year}</span>
          </div>
          <p className="font-body text-xl text-rose-DEFAULT mb-6">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-cream-warm border border-rose-light/40 text-sm font-body text-ink-muted">{tag}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-stone max-w-none mb-10">
            <p className="font-body text-ink-DEFAULT leading-relaxed text-lg">{project.description}</p>
          </div>
        </FadeIn>

        {project.outcome && (
          <FadeIn delay={0.25}>
            <div className="p-6 rounded-3xl bg-rose-light/30 border border-rose-light/50">
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-2">OUTCOME</p>
              <p className="font-body text-ink-DEFAULT">{project.outcome}</p>
            </div>
          </FadeIn>
        )}

        {project.links && project.links.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">VIEW PROJECT</p>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rose-DEFAULT text-rose-DEFAULT font-body text-sm hover:bg-rose-DEFAULT hover:text-cream-DEFAULT transition-all"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
