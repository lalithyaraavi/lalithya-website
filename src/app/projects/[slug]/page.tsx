import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProjectCarousel from "@/components/ProjectCarousel";
import Blobs from "@/components/Blobs";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const images = project.images ?? (project.image ? [project.image] : []);

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-8 md:px-20 overflow-hidden">
      <Blobs />

      {/* Back link */}
      <FadeIn>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors group mb-10 block">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> All projects
        </Link>
      </FadeIn>

      {/* Two-column layout: text left, carousel right */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Left — text content */}
        <div className="flex-1 min-w-0">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-xs text-ink-muted/50 tracking-widest">{project.year}</span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-rose-DEFAULT text-cream-DEFAULT text-xs font-mono">✦ Featured</span>
              )}
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT leading-[1.05] mb-4">
              {project.title}
            </h1>
            <p className="font-body text-xl text-rose-DEFAULT mb-8">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-cream-warm border border-rose-light/40 text-sm font-body text-ink-muted">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="w-12 h-px bg-rose-DEFAULT/40 mb-10" />
          </FadeIn>

          {project.links && project.links.length > 0 && (
            <FadeIn delay={0.2}>
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">VIEW PROJECT</p>
              <div className="flex flex-wrap gap-3 mb-10">
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

          <FadeIn delay={0.25}>
            <p className="font-body text-ink-DEFAULT leading-loose text-base mb-12 whitespace-pre-line">
              {project.description}
            </p>
          </FadeIn>

          {project.outcome && (
            <FadeIn delay={0.3}>
              <div className="p-6 rounded-3xl bg-rose-light/30 border border-rose-light/50 mb-10">
                <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">{project.outcomeLabel ?? "OUTCOME"}</p>
                {project.outcomeLabel === "AWARDS" ? (
                  <ul className="space-y-1">
                    {project.outcome!.split("\n").map((item) => (
                      <li key={item} className="font-body text-ink-DEFAULT flex items-start gap-2">
                        <span className="text-rose-DEFAULT mt-1 shrink-0">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-ink-DEFAULT leading-relaxed">{project.outcome}</p>
                )}
              </div>
            </FadeIn>
          )}
        </div>

        {/* Right — carousel */}
        {images.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="w-full md:w-[380px] lg:w-[420px] shrink-0 sticky top-28">
              <ProjectCarousel images={images} color={project.color} title={project.title} />
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
