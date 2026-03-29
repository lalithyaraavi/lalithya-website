"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ProjectCarousel({ images, color, title }: { images: string[]; color: string; title: string }) {
  const [[index, dir], setIndex] = useState([0, 0]);

  const paginate = (newDir: number) =>
    setIndex(([prev]) => [(prev + newDir + images.length) % images.length, newDir]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-4xl overflow-hidden" style={{ backgroundColor: color }}>
      <AnimatePresence custom={dir} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} — image ${index + 1}`}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) paginate(1);
            else if (info.offset.x > 60) paginate(-1);
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing select-none"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-DEFAULT/80 backdrop-blur border border-rose-light/40 flex items-center justify-center text-ink-DEFAULT hover:text-rose-DEFAULT hover:border-rose-DEFAULT/50 transition-all text-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-DEFAULT/80 backdrop-blur border border-rose-light/40 flex items-center justify-center text-ink-DEFAULT hover:text-rose-DEFAULT hover:border-rose-DEFAULT/50 transition-all text-lg"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "w-5 h-2 bg-cream-DEFAULT" : "w-2 h-2 bg-cream-DEFAULT/50 hover:bg-cream-DEFAULT/80"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
