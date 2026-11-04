import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import Blobs from "@/components/Blobs";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 md:px-8 overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-base text-rose-DEFAULT tracking-widest mb-4">SELECTED WORK</p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-ink-DEFAULT mb-4">Projects</h1>
          <p className="font-body text-ink-muted text-xl leading-relaxed max-w-2xl mb-16">
            Welcome to my portfolio. Here you&apos;ll find a collection of design and research projects, exploring systems thinking and problem solving as I navigate the world of engineering.
          </p>
        </FadeIn>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {projects.map((p, i) => (
            <div key={p.slug} className="mb-5 break-inside-avoid">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
