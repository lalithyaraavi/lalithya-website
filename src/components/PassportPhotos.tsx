"use client";
import { useEffect, useState } from "react";
import { photos } from "@/components/PhotoCarousel";

/** Crossfading photo carousel styled as the passport ID photo. */
export default function PassportPhotos() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setI((n) => (n + d + photos.length) % photos.length);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 3500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <figure className="la-pp" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="la-pp-frame">
        {photos.map((p, n) => (
          <img key={p.src} src={p.src} alt={p.label.replace(/^\W+\s*/, "")} className={n === i ? "on" : ""} loading={n === 0 ? "eager" : "lazy"} />
        ))}
        <button className="la-pp-arrow l" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
        <button className="la-pp-arrow r" onClick={() => go(1)} aria-label="Next photo">›</button>
      </div>
      <figcaption>
        <span className="la-mono">{photos[i].label}</span>
        <span className="la-pp-dots">
          {photos.map((_, n) => <button key={n} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Photo ${n + 1}`} />)}
        </span>
      </figcaption>
    </figure>
  );
}
