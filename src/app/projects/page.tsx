import type { Metadata } from "next";
import { projects } from "@/data/content";
import ProjectTags from "@/components/ProjectTags";
import LaEffects from "@/components/LaEffects";

export const metadata: Metadata = { title: "Projects · Lalithya Raavi" };

export default function ProjectsPage() {
  return (
    <div className="la-wrap pb-10">
      <LaEffects />
      <header className="la-section" style={{ paddingTop: 140 }}>
        <div className="la-head la-r">
          <div>
            <p className="la-mono">Baggage claim · All carousels</p>
            <h1 className="la-h2" style={{ fontSize: "clamp(56px,8vw,96px)" }}>Things I&apos;ve packed</h1>
            <p style={{ color: "var(--soft)", fontSize: 18, lineHeight: 1.65, maxWidth: 560, marginTop: 16 }}>
              Welcome to my portfolio. Here you&apos;ll find a collection of design and research projects, exploring systems thinking and problem solving as I navigate the world of engineering.
            </p>
          </div>
          <p className="la-mono">{projects.length} bags checked</p>
        </div>
      </header>
      <ProjectTags items={projects} />
    </div>
  );
}
