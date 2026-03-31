"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#about",   label: "About" },
  { href: "/blog",     label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Frosted glass pill */}
      <div className="absolute inset-0 backdrop-blur-md bg-cream-DEFAULT/70 border-b border-rose-light/30" />

      <Link href="/" className="relative z-10 font-display text-xl font-light tracking-tight text-ink-DEFAULT hover:text-rose-DEFAULT transition-colors">
        Lalithya Raavi
      </Link>

      {/* Desktop nav */}
      <nav className="relative z-10 hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="relative group font-body text-sm text-ink-muted hover:text-ink-DEFAULT transition-colors">
            {l.label}
            {pathname === l.href && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-rose-DEFAULT"
              />
            )}
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-rose-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        ))}
        <Link href="/contact" className="ml-2 px-4 py-1.5 rounded-full bg-rose-DEFAULT text-cream-DEFAULT text-sm font-body hover:bg-rose-dark transition-colors">
        </Link>
      </nav>

      {/* Mobile toggle */}
      <button
        className="relative z-10 md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-px bg-ink-DEFAULT transition-all" />
        <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-ink-DEFAULT" />
        <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-px bg-ink-DEFAULT" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-cream-DEFAULT/95 backdrop-blur-md border-b border-rose-light/30 flex flex-col items-center gap-6 py-8"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-2xl font-light text-ink-DEFAULT hover:text-rose-DEFAULT transition-colors">
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
