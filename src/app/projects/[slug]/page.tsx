import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProjectCarousel from "@/components/ProjectCarousel";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const images = project.images ?? (project.image ? [project.image] : []);

  return (
    <div className="min-h-screen pt-28 pb-24">

      {/* Back link */}
      <div className="px-8 md:px-20 mb-10">
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> All projects
          </Link>
        </FadeIn>
      </div>

      {/* Full-width carousel */}
      {images.length > 0 && (
        <FadeIn delay={0.1}>
          <div className="px-8 md:px-20 mb-16">
            <ProjectCarousel images={images} color={project.color} title={project.title} />
          </div>
        </FadeIn>
      )}

      {/* Editorial content — single column */}
      <div className="px-8 md:px-20 max-w-4xl">

        {/* Header */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-xs text-ink-muted/50 tracking-widest">{project.year}</span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-rose-DEFAULT text-cream-DEFAULT text-xs font-mono">✦ Featured</span>
            )}
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT leading-[1.05] mb-4">
            {project.title}
          </h1>
          <p className="font-body text-xl text-rose-DEFAULT mb-8">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-cream-warm border border-rose-light/40 text-sm font-body text-ink-muted">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.2}>
          <div className="w-16 h-px bg-rose-DEFAULT/40 mb-12" />
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.22}>
          <p className="font-body text-ink-DEFAULT leading-loose text-lg mb-14 whitespace-pre-line">
            {project.description}
          </p>
        </FadeIn>

        {/* Outcome */}
        {project.outcome && (
          <FadeIn delay={0.26}>
            <div className="p-8 rounded-3xl bg-rose-light/30 border border-rose-light/50 mb-12">
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">OUTCOME</p>
              <p className="font-body text-ink-DEFAULT leading-relaxed">{project.outcome}</p>
            </div>
          </FadeIn>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <FadeIn delay={0.3}>
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
          </FadeIn>
        )}
      </div>
    </div>
  );
}
