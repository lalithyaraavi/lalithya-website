"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import PhotoCarousel from "@/components/PhotoCarousel";

const ticker = ["UX Design ✦", "Systems Thinking ✦", "C++ ✦", "React ✦", "Figma ✦", "Product Design ✦", "TypeScript ✦", "Speculative Design ✦", "Waterloo SYDE ✦", "Frontend Dev ✦"];

const experience = [
  { role: "Operations Analyst", company: "Suncor Energy", period: "Jan 2026 – Apr 2026", type: "Work" },
  { role: "Member Engagement Intern", company: "Fort McMurray Chamber of Commerce", period: "Jun 2025 – Aug 2025", type: "Work" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-28 pb-20 overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-16 right-8 w-80 h-80 rounded-full blob opacity-25" style={{ background: "radial-gradient(circle, #F2DEED 0%, #C4788A 100%)" }} />
        <div className="absolute bottom-24 left-4 w-56 h-56 rounded-full blob blob-delay opacity-15" style={{ background: "radial-gradient(circle, #E8E2F5 0%, #ADBCA5 100%)" }} />
        <div className="absolute top-1/2 left-[-6rem] w-64 h-64 rounded-full blob opacity-10" style={{ background: "radial-gradient(circle, #F9E4EC 0%, #C4788A 100%)", animationDelay: "1.2s" }} />
        <div className="absolute bottom-8 right-16 w-44 h-44 rounded-full blob blob-delay opacity-20" style={{ background: "radial-gradient(circle, #EDE8F5 0%, #9B8DB8 100%)", animationDelay: "0.6s" }} />
        <div className="absolute top-32 left-1/3 w-32 h-32 rounded-full blob opacity-10" style={{ background: "radial-gradient(circle, #FDEEF4 0%, #E8A0B0 100%)", animationDelay: "2s" }} />

        <div className="relative w-full flex flex-col items-center text-center gap-8">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-52 md:w-64 shrink-0"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-rose-light/50 shadow-xl shadow-rose-light/20 bg-cream-warm">
              <img
                src="/photos/me.jpg"
                alt="Lali"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-sm text-rose-DEFAULT mb-5 tracking-wider"
            >
              systems design engineering @ university of waterloo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl md:text-8xl font-light leading-[1.05] text-ink-DEFAULT mb-7"
            >
              Hi! I&apos;m{" "}
              <em className="not-italic text-rose-DEFAULT">Lali</em>
              <span className="text-rose-light">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-body text-lg text-ink-muted leading-relaxed mb-10"
            >
              So glad you&apos;re here! I love working on things that make people&apos;s lives a little easier, and a little more interesting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-DEFAULT text-cream-DEFAULT font-body hover:bg-rose-dark transition-all group"
              >
                Learn more about me
                <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-rose-light/60 text-ink-DEFAULT font-body hover:border-rose-DEFAULT hover:bg-rose-light/20 transition-all"
              >
                View my work →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-ink-muted/40 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-rose-DEFAULT/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Skills Ticker ─────────────────────────────────── */}
      <div className="py-5 bg-cream-warm border-y border-rose-light/30 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-block mx-6 font-mono text-sm text-ink-muted/70">{item}</span>
          ))}
        </div>
      </div>

      {/* ── 2. PROJECTS ───────────────────────────────────── */}
      <section id="projects" className="px-4 md:px-8 py-24">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">SELECTED WORK</p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT mb-3">Projects</h2>
              <p className="font-body text-ink-muted max-w-md leading-relaxed">
                Welcome to my portfolio. Here you&apos;ll find a collection of design and research projects, exploring systems thinking and problem solving as I navigate the world of engineering.
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors group shrink-0">
              All projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="columns-2 md:columns-3 gap-4">
          {projects.slice(0, 6).map((p, i) => (
            <div key={p.slug} className="break-inside-avoid mb-4">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/projects" className="text-sm font-body text-rose-DEFAULT underline underline-offset-4">
            See all projects →
          </Link>
        </div>
      </section>

      {/* ── 3. ABOUT + EXPERIENCE ─────────────────────────── */}
      <section id="about" className="px-8 md:px-16 py-24 bg-cream-warm border-y border-rose-light/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT mb-6 leading-tight">
              A little about <em className="text-rose-DEFAULT">me</em>
            </h2>
          </FadeIn>

          {/* Bio + photo carousel */}
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-stretch mb-20">
            <FadeIn delay={0.1}>
              <div className="flex flex-col justify-center h-full space-y-5 font-body text-ink-DEFAULT text-lg leading-relaxed">
                <p>
                  I&apos;m a <span className="font-semibold">Systems Design Engineering</span> student at the University of Waterloo.
                </p>
                <p>
                  I care about designing things that are actually useful — products, tools, and experiences that sit at the intersection of people and technology.
                </p>
                <p>
                  Outside of school, I&apos;m involved in Women in Tech on campus, I bake a lot, and I&apos;m always working on a side project.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full">
                <PhotoCarousel />
              </div>
            </FadeIn>
          </div>

          {/* Experience — vertical timeline */}
          <FadeIn delay={0.2}>
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-10">EXPERIENCE</p>
          </FadeIn>
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-rose-light/60" />
            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Dot on line */}
                  <div className="absolute -left-[1.375rem] top-1.5 w-3 h-3 rounded-full bg-rose-DEFAULT border-2 border-cream-warm" />
                  <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-1">{exp.period}</p>
                  <p className="font-body font-semibold text-ink-DEFAULT text-lg leading-snug">{exp.role}</p>
                  <p className="font-body text-ink-muted">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* ── 5. CONTACT ────────────────────────────────────── */}
      <section id="contact" className="px-8 md:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">GET IN TOUCH</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT mb-4">
              Say <em className="text-rose-DEFAULT">hello</em> ✦
            </h2>
            <p className="font-body text-ink-muted text-lg mb-12 max-w-md">
              Whether it&apos;s a collab, a co-op, or just a chat - I&apos;m always happy to connect.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            <FadeIn delay={0.08}>
              <a
                href="mailto:lraavi@uwaterloo.ca"
                className="group flex flex-col gap-3 p-6 rounded-4xl border border-rose-light/40 bg-cream-DEFAULT hover:border-rose-DEFAULT/50 hover:bg-rose-light/10 transition-all hover:shadow-lg hover:shadow-rose-light/20"
              >
                <span className="text-3xl">✉️</span>
                <div>
                  <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-1">EMAIL</p>
                  <p className="font-body text-sm text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors break-all">lraavi@uwaterloo.ca</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.14}>
              <a
                href="https://linkedin.com/in/lalithya-raavi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 rounded-4xl border border-rose-light/40 bg-cream-DEFAULT hover:border-rose-DEFAULT/50 hover:bg-rose-light/10 transition-all hover:shadow-lg hover:shadow-rose-light/20"
              >
                <span className="text-3xl">💼</span>
                <div>
                  <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-1">LINKEDIN</p>
                  <p className="font-body text-sm text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors">lalithya-raavi</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
