import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <div className="text-7xl mb-6 animate-float">🌸</div>
      <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">404</p>
      <h1 className="font-display text-5xl font-light text-ink-DEFAULT mb-4">Page not found</h1>
      <p className="font-body text-ink-muted mb-8">Looks like this page wandered off. Let&apos;s get you back.</p>
      <Link href="/" className="px-7 py-3 rounded-full bg-rose-DEFAULT text-cream-DEFAULT font-body hover:bg-rose-dark transition-colors">
        Back home →
      </Link>
    </div>
  );
}
