import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <FadeIn>
        <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">SELECTED WORK</p>
        <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT mb-4">Projects</h1>
        <p className="font-body text-ink-muted max-w-xl mb-16 text-lg leading-relaxed">
          A collection of design, engineering, and speculative futures work — from safety apps to soil sensors.
        </p>
      </FadeIn>

      <div className="columns-2 md:columns-3 gap-4">
        {projects.map((p, i) => (
          <div key={p.slug} className="break-inside-avoid mb-4">
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
