"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block rounded-4xl overflow-hidden border border-rose-light/40 hover:border-rose-DEFAULT/60 transition-all duration-300 hover:shadow-xl hover:shadow-rose-light/30">
        {/* Card header */}
        {project.image || project.images?.[0] ? (
          <div className="overflow-hidden">
            <img
              src={project.images?.[0] ?? project.image}
              alt={project.title}
              className="w-full h-auto block"
              style={{ filter: "none", mixBlendMode: "normal" }}
            />
          </div>
        ) : (
          <div className="h-40 relative overflow-hidden" style={{ backgroundColor: project.color }}>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-40 blob" style={{ backgroundColor: project.color, filter: "saturate(1.4) brightness(0.9)" }} />
          </div>
        )}

        {/* Content */}
        <div className="p-3 bg-cream-DEFAULT">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-sm font-light text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors leading-snug">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] text-ink-muted mt-0.5 shrink-0">{project.year}</span>
          </div>
          <p className="font-body text-xs text-ink-muted mb-2 leading-relaxed">{project.tagline}</p>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-cream-warm text-ink-muted text-[10px] font-body border border-rose-light/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
