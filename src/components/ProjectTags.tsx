import Link from "next/link";
import type { Project } from "@/data/content";

const TAG_COLOURS = ["var(--brick)", "var(--denim)", "var(--forest)", "var(--ink)", "var(--plum)", "var(--mustard)"];

/** Projects as luggage tags: colour strip, punched hole, cover image. */
export default function ProjectTags({ items }: { items: Project[] }) {
  return (
    <div className="la-carousel">
      {items.map((p, i) => {
        const img = p.images?.[0] ?? p.image;
        return (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="la-tag la-r" style={{ ["--c" as string]: TAG_COLOURS[i % TAG_COLOURS.length] }}>
            <span className="hole" />
            <span className="vert">{p.slug.replace(/[^a-z]/g, "").slice(0, 4).toUpperCase()}</span>
            {img && <div className="shot"><img src={img} alt={p.title} loading="lazy" /></div>}
            <div className="top"><span className="la-mono">{p.year}</span><span className="la-mono">→</span></div>
            <h3>{p.title}</h3>
            <p>{p.tagline}</p>
            <div className="chips">{p.tags.join(" · ")}</div>
          </Link>
        );
      })}
    </div>
  );
}
