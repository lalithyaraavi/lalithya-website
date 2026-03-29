"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────
// Add your real award/press cards here.
// Each card has a title, source, year, emoji, and optional link.
// ─────────────────────────────────────────────────────────
const newsItems = [
  { emoji: "🏅", title: "Loran Scholar Semi-Finalist", source: "Loran Scholars Foundation", year: "2023", href: "#" },
  { emoji: "🥇", title: "Canada Wide Science Fair — Gold Medal", source: "Youth Science Canada", year: "2023", href: "#" },
  { emoji: "🥈", title: "Canada Wide Science Fair — Silver Medal", source: "Youth Science Canada", year: "2023", href: "#" },
  { emoji: "✨", title: "TC Energy STEM Scholarship", source: "TC Energy", year: "2023", href: "#" },
  { emoji: "🏆", title: "Finning Canada STEM Award", source: "Finning Canada", year: "2023", href: "#" },
  { emoji: "🎓", title: "President's Scholarship", source: "University of Waterloo", year: "2023", href: "#" },
];

// Duplicate for seamless infinite loop
const doubled = [...newsItems, ...newsItems];

export default function InTheNews() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="in-the-news" className="py-20 bg-cream-warm border-y border-rose-light/30 overflow-hidden">
      <div className="px-8 md:px-20 mb-10">
        <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-2">RECOGNITION</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-ink-DEFAULT">In the News ✦</h2>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-cream-warm to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-cream-warm to-transparent pointer-events-none" />

        <motion.div
          ref={ref}
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-72 p-6 rounded-4xl border border-rose-light/40 bg-cream-DEFAULT hover:border-rose-DEFAULT/50 hover:shadow-lg hover:shadow-rose-light/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-medium text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="font-mono text-xs text-ink-muted/60">{item.source}</p>
                <span className="font-mono text-xs text-rose-DEFAULT">{item.year}</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
