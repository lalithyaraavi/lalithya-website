import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rose-light/40 px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-cream-warm">
      <p className="font-display italic text-ink-muted text-sm">
        Designed with care (and too much coffee) ☕
      </p>
      <div className="flex gap-6 text-sm font-body text-ink-muted">
        <Link href="https://linkedin.com" target="_blank" className="hover:text-rose-DEFAULT transition-colors">LinkedIn</Link>
        <Link href="https://github.com" target="_blank" className="hover:text-rose-DEFAULT transition-colors">GitHub</Link>
        <a href="mailto:hello@lalithya.com" className="hover:text-rose-DEFAULT transition-colors">Email</a>
      </div>
      <p className="font-mono text-xs text-ink-muted/60">© 2025 Lalithya Potturu</p>
    </footer>
  );
}
