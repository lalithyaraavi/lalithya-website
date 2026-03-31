"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { src: "/photos/photo.JPG", label: "📍 Waterloo" },
  { src: "/photos/photo2.JPG", label: "✨ Good times" },
  { src: "/photos/photo3.jpeg", label: "🌸 Fort Mac" },
  { src: "/photos/photo4.jpg", label: "🎓 Campus" },
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
      <div className="relative w-full rounded-4xl overflow-hidden bg-cream-warm border border-rose-light/40 shadow-xl shadow-rose-light/20">
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
            className="cursor-grab active:cursor-grabbing"
          >
            <img
              src={current.src}
              alt={current.label}
              className="w-full h-auto block"
              style={{ filter: "none", mixBlendMode: "normal" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
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
