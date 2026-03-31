"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const img = project.images?.[0] ?? project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-2xl overflow-hidden bg-cream-warm hover:shadow-lg hover:shadow-rose-light/25 transition-all duration-300"
      >
        {/* Image */}
        {img ? (
          <div className="overflow-hidden">
            <motion.img
              src={img}
              alt={project.title}
              className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
              style={{ filter: "none", mixBlendMode: "normal" }}
            />
          </div>
        ) : (
          <div className="h-32" style={{ backgroundColor: project.color }} />
        )}

        {/* Meta */}
        <div className="px-3 py-2.5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-body text-xs font-medium text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors leading-snug">
              {project.title}
            </h3>
            <span className="font-mono text-[9px] text-ink-muted/60 shrink-0 mt-px">{project.year}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="font-mono text-[8px] text-rose-DEFAULT/70 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
