"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#about",   label: "About" },
  { href: "/travel",   label: "Travel log" },
  { href: "/blog",     label: "Postcards" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen ? "bg-cream-warm/85 backdrop-blur-md shadow-[0_1px_0_#DED3BE]" : ""}`}
    >
      <div className="max-w-[1080px] mx-auto px-7 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-mono font-semibold text-[13px] tracking-[.08em] text-ink">
          <b className="bg-ink text-cream px-[7px] py-[3px] rounded">LR</b>LALI AIR
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`relative font-mono text-xs uppercase tracking-[.1em] transition-colors hover:text-rose ${pathname === l.href ? "text-rose" : "text-ink-muted"}`}>
              {l.label}
              {pathname === l.href && <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-rose" />}
            </Link>
          ))}
          <a href="https://github.com/lalithyaraavi" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[.1em] text-ink-muted hover:text-rose transition-colors">
            GitHub ↗
          </a>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-px bg-ink" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-ink" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-px bg-ink" />
        </button>
      </div>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-cream-warm/95 backdrop-blur-md border-b border-rose-light flex flex-col items-center gap-6 py-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl text-ink hover:text-rose transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="https://github.com/lalithyaraavi" target="_blank" rel="noopener noreferrer" className="font-display text-3xl text-ink hover:text-rose">GitHub ↗</a>
        </motion.div>
      )}
    </header>
  );
}
