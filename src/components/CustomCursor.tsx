"use client";
import { useEffect, useRef } from "react";

/**
 * A small plane that follows the mouse, turns toward the direction it's moving,
 * and leaves a faint dotted contrail. Only on devices with a real mouse.
 */
const TRAIL = 10;
const PLANE =
  "M12 2c.6 0 1 .9 1 2v5.2l7 4.1v1.9l-7-2.1v4.6l2.2 1.6V21L12 20l-3.2 1v-1.7l2.2-1.6v-4.6l-7 2.1v-1.9l7-4.1V4c0-1.1.4-2 1-2z";

export default function CustomCursor() {
  const planeRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    document.documentElement.classList.add("la-plane-cursor");

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let angle = 0;
    let hover = false;
    const trail = Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 }));
    let raf = 0;
    let frame = 0;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as Element | null;
      hover = !!el?.closest?.("a, button, [role='button'], input, textarea, select, label");
    };
    const leave = () => { target.x = -100; target.y = -100; };

    const tick = () => {
      const ease = reduce ? 1 : 0.28;
      const dx = target.x - pos.x, dy = target.y - pos.y;
      pos.x += dx * ease;
      pos.y += dy * ease;
      if (Math.hypot(dx, dy) > 1.5) {
        const want = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        let diff = ((want - angle + 540) % 360) - 180;
        angle += diff * 0.2;
      }
      const p = planeRef.current;
      if (p) p.style.transform = `translate(${pos.x - 11}px, ${pos.y - 11}px) rotate(${angle}deg) scale(${hover ? 1.35 : 1})`;

      if (!reduce && frame++ % 2 === 0) {
        trail.pop();
        trail.unshift({ x: pos.x, y: pos.y });
      }
      dotsRef.current.forEach((d, i) => {
        if (!d) return;
        const t = trail[i];
        d.style.transform = `translate(${t.x - 1.5}px, ${t.y - 1.5}px)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("la-plane-cursor");
    };
  }, []);

  return (
    <div className="la-cursor" aria-hidden>
      {Array.from({ length: TRAIL }, (_, i) => (
        <span key={i} ref={(el) => { dotsRef.current[i] = el; }} className="la-cursor-dot" style={{ opacity: 0.5 * (1 - i / TRAIL) }} />
      ))}
      <div ref={planeRef} className="la-cursor-plane">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d={PLANE} /></svg>
      </div>
    </div>
  );
}
