export default function Footer() {
  return (
    <footer className="relative z-[2] mt-24 border-t border-rose-light">
      <div className="max-w-[1080px] mx-auto px-7 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[.12em] text-ink-muted/70">Lali Air · Thanks for flying with us</p>
        <p className="font-display italic text-ink-muted text-base">Built with Next.js, TypeScript, Framer Motion, and too many Figma frames</p>
        <p className="font-mono text-[11px] uppercase tracking-[.12em] text-ink-muted/70">© Lalithya Raavi</p>
      </div>
    </footer>
  );
}
