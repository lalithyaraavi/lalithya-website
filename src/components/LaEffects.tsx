"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** Scroll reveals, split-flap codes, passport stamps, the scrolling plane and the board clock. */
export default function LaEffects({ showRoute = true }: { showRoute?: boolean }) {
  const pathname = usePathname();
  const trail = useRef<HTMLDivElement>(null);
  const plane = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];

    const flip = (el: HTMLElement) => {
      if (reduce) return;
      const t = el.dataset.t ?? "";
      Array.from(el.children).forEach((c, i) => {
        let n = 0;
        const max = 6 + i * 3;
        const id = window.setInterval(() => {
          c.textContent = n >= max ? t[i] : CHARS[(Math.random() * CHARS.length) | 0];
          if (n++ >= max) window.clearInterval(id);
        }, 55);
        timers.push(id);
      });
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>(".la-flap").forEach((f, i) => timers.push(window.setTimeout(() => flip(f), i * 180)));
          el.querySelectorAll<HTMLElement>(".la-stamps").forEach((s) => timers.push(window.setTimeout(() => s.classList.add("in"), 400)));
          io.unobserve(el);
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll<HTMLElement>(".la-r").forEach((el) => {
      const sib = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains("la-r"));
      el.style.transitionDelay = `${(sib.indexOf(el) % 4) * 80}ms`;
      io.observe(el);
    });

    let ticking = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = (max > 0 ? window.scrollY / max : 0) * window.innerHeight;
      if (trail.current) trail.current.style.height = `${y}px`;
      if (plane.current) plane.current.style.top = `${y}px`;
      ticking = false;
    };
    const handler = () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();

    const clock = () => {
      const c = document.getElementById("la-clock");
      if (c) c.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    clock();
    const clockId = window.setInterval(clock, 30000);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handler);
      window.clearInterval(clockId);
      timers.forEach((t) => { window.clearTimeout(t); window.clearInterval(t); });
    };
  }, [pathname]);

  if (!showRoute) return null;
  return (
    <div className="la-route" aria-hidden>
      <div className="trail" ref={trail} />
      <svg className="plane" ref={plane} viewBox="0 0 24 24"><path fill="currentColor" d={PLANE} /></svg>
    </div>
  );
}

export const PLANE =
  "M12 2c.6 0 1 .9 1 2v5.2l7 4.1v1.9l-7-2.1v4.6l2.2 1.6V21L12 20l-3.2 1v-1.7l2.2-1.6v-4.6l-7 2.1v-1.9l7-4.1V4c0-1.1.4-2 1-2z";
