"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    addHover();
    const obs = new MutationObserver(addHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => { window.removeEventListener("mousemove", move); obs.disconnect(); };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-rose-DEFAULT mix-blend-multiply"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovered ? 1.6 : 1, opacity: 0.7 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.5 }}
        style={{ width: 40, height: 40 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-rose-DEFAULT"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovered ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}
