"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────
// Add your own photos here!
// Put image files in the /public/photos/ folder and update
// the `src` paths below. Labels are optional captions.
// ─────────────────────────────────────────────────────────
const photos = [
  { src: "/photos/photo1.jpg", label: "📍 Waterloo" },
  { src: "/photos/photo2.jpg", label: "✨ Good times" },
  { src: "/photos/photo3.jpg", label: "🌸 Fort Mac" },
  { src: "/photos/photo4.jpg", label: "🎓 Campus" },
  { src: "/photos/photo5.jpg", label: "💛 Me!" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
};

export default function PhotoCarousel() {
  const [[index, dir], setIndex] = useState([0, 0]);

  const paginate = (newDir: number) => {
    setIndex(([prev]) => [(prev + newDir + photos.length) % photos.length, newDir]);
  };

  const current = photos[index];

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      {/* Main card */}
      <div className="relative w-full aspect-[3/4] rounded-4xl overflow-hidden bg-cream-warm border border-rose-light/40 shadow-xl shadow-rose-light/20">
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {/* Placeholder shown when no real photo exists */}
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-light/60 via-cream-warm to-lavender/30 relative">
              {/* Try to load real image; falls back to placeholder */}
              <img
                src={current.src}
                alt={current.label}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* Placeholder behind image */}
              <div className="relative z-0 flex flex-col items-center justify-center gap-3 text-center px-8">
                <div className="text-6xl animate-float">🌸</div>
                <p className="font-mono text-xs text-rose-DEFAULT tracking-widest">ADD YOUR PHOTO</p>
                <p className="font-body text-xs text-ink-muted/60 leading-relaxed">
                  Drop an image in<br />
                  <code className="text-rose-DEFAULT">/public/photos/photo{index + 1}.jpg</code>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Caption pill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-cream-DEFAULT/80 backdrop-blur border border-rose-light/40">
          <p className="font-mono text-xs text-ink-DEFAULT whitespace-nowrap">{current.label}</p>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-cream-DEFAULT/80 backdrop-blur border border-rose-light/40 flex items-center justify-center text-ink-muted hover:text-rose-DEFAULT hover:border-rose-DEFAULT/50 transition-all"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-cream-DEFAULT/80 backdrop-blur border border-rose-light/40 flex items-center justify-center text-ink-muted hover:text-rose-DEFAULT hover:border-rose-DEFAULT/50 transition-all"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-2 bg-rose-DEFAULT"
                : "w-2 h-2 bg-rose-light hover:bg-rose-DEFAULT/50"
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      <p className="font-mono text-xs text-ink-muted/50 tracking-widest">DRAG TO SWIPE</p>
    </div>
  );
}
