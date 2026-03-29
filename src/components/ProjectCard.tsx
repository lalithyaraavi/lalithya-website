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
        {/* Colour swatch header */}
        <div className="h-40 relative overflow-hidden" style={{ backgroundColor: project.color }}>
          {/* Blob decoration */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-40 blob" style={{ backgroundColor: project.color, filter: "saturate(1.4) brightness(0.9)" }} />
          <div className="absolute bottom-4 left-6">
            {project.featured && (
              <span className="inline-block px-3 py-1 rounded-full bg-rose-DEFAULT text-cream-DEFAULT text-xs font-mono mb-2">
                ✦ Featured
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-cream-DEFAULT">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display text-2xl font-light text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-ink-muted mt-1.5 shrink-0">{project.year}</span>
          </div>
          <p className="font-body text-sm text-ink-muted mb-4 leading-relaxed">{project.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-cream-warm text-ink-muted text-xs font-body border border-rose-light/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
