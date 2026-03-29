"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import PhotoCarousel from "@/components/PhotoCarousel";

const ticker = ["UX Design ✦", "Systems Thinking ✦", "C++ ✦", "React ✦", "Figma ✦", "Product Design ✦", "TypeScript ✦", "Speculative Design ✦", "Waterloo SYDE ✦", "Frontend Dev ✦"];

const experience = [
  { role: "Co-op Student", company: "Suncor Energy", period: "2024", type: "Work" },
  { role: "Women in Tech Initiative", company: "University of Waterloo", period: "2023–present", type: "Leadership" },
  { role: "Systems Design Engineering", company: "University of Waterloo", period: "2023–2027", type: "Education" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-28 pb-20 overflow-hidden">
        <div className="absolute top-24 right-10 w-72 h-72 rounded-full blob opacity-25" style={{ background: "radial-gradient(circle, #F2DEED 0%, #C4788A 100%)" }} />
        <div className="absolute bottom-20 left-5 w-52 h-52 rounded-full blob blob-delay opacity-15" style={{ background: "radial-gradient(circle, #E8E2F5 0%, #ADBCA5 100%)" }} />

        <div className="relative w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left - text */}
          <div className="flex-1 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-sm text-rose-DEFAULT mb-5 tracking-wider"
            >
              systems design engineering @ university of waterloo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl md:text-8xl font-light leading-[1.05] text-ink-DEFAULT mb-7"
            >
              Hi! I&apos;m{" "}
              <em className="not-italic text-rose-DEFAULT">Lali</em>
              <span className="text-rose-light">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-body text-lg text-ink-muted max-w-md leading-relaxed mb-10"
            >
              So glad you&apos;re here! I love working on things that make people&apos;s lives a little easier, and a little more interesting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap gap-4"
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

          {/* Right - single photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-64 md:w-72 lg:w-80 shrink-0"
          >
            <div className="relative aspect-[3/4] rounded-4xl overflow-hidden border border-rose-light/40 shadow-xl shadow-rose-light/20 bg-cream-warm">
              <img
                src="/photos/me.jpg"
                alt="Lali"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
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
      <section id="projects" className="px-8 md:px-20 py-24">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">SELECTED WORK</p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT">Projects</h2>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-body text-ink-muted hover:text-rose-DEFAULT transition-colors group">
              All projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/projects" className="text-sm font-body text-rose-DEFAULT underline underline-offset-4">
            See all projects →
          </Link>
        </div>
      </section>

      {/* ── 3. ABOUT + EXPERIENCE ─────────────────────────── */}
      <section id="about" className="px-8 md:px-20 py-24 bg-cream-warm border-y border-rose-light/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-3">ABOUT ME</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink-DEFAULT mb-12 leading-tight">
              A little about <em className="text-rose-DEFAULT">me</em>
            </h2>
          </FadeIn>

          {/* Bio + photo carousel */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn delay={0.1}>
              <div className="space-y-4 font-body text-ink-muted leading-relaxed">
                <p>
                  I&apos;m a <span className="text-ink-DEFAULT font-medium">Systems Design Engineering</span> student at the University of Waterloo.
                </p>
                <p>
                  I care about designing things that are actually useful - products, tools, and experiences that sit at the intersection of people and technology.
                </p>
                <p>
                  Outside of school, I&apos;m involved in Women in Tech on campus, I bake a lot, and I&apos;m always working on a side project.
                </p>
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-rose-DEFAULT text-rose-DEFAULT font-body hover:bg-rose-DEFAULT hover:text-cream-DEFAULT transition-all group"
              >
                <span>Download Resume</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="max-w-xs"><PhotoCarousel /></div>
            </FadeIn>
          </div>

          {/* Experience timeline */}
          <FadeIn delay={0.2}>
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-6">EXPERIENCE</p>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.role} className="flex items-start gap-6 p-5 rounded-3xl bg-cream-DEFAULT border border-rose-light/30 hover:border-rose-DEFAULT/40 transition-all">
                  <span className="font-mono text-xs text-ink-muted/50 pt-0.5 w-24 shrink-0">{exp.period}</span>
                  <div className="flex-1">
                    <p className="font-body font-medium text-ink-DEFAULT">{exp.role}</p>
                    <p className="font-body text-sm text-ink-muted">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cream-warm text-xs font-mono text-rose-DEFAULT border border-rose-light/40 shrink-0">{exp.type}</span>
                </div>
              ))}
            </div>
          </FadeIn>
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
                href="tel:7807990779"
                className="group flex flex-col gap-3 p-6 rounded-4xl border border-rose-light/40 bg-cream-DEFAULT hover:border-rose-DEFAULT/50 hover:bg-rose-light/10 transition-all hover:shadow-lg hover:shadow-rose-light/20"
              >
                <span className="text-3xl">📱</span>
                <div>
                  <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-1">PHONE</p>
                  <p className="font-body text-sm text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors">(780) 799-0779</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
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
