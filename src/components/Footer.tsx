import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rose-light/40 px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-cream-warm">
      <p className="font-display italic text-ink-muted text-sm">
        Built with Next.js, Framer Motion, and too many figma frames
      </p>
      <p className="font-mono text-xs text-ink-muted/60">© Lalithya Raavi</p>
    </footer>
  );
}
