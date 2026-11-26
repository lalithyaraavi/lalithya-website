import type { Award } from "@/data/content";

/** Shared SVG ink filter: rough edges and patchy coverage, like a real rubber stamp. */
export function StampInkFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <filter id="la-ink" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="4" result="warp" />
        <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.5" result="rough" />
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="11" result="speck" />
        <feColorMatrix in="speck" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.8 1.75" result="holes" />
        <feComposite in="rough" in2="holes" operator="in" />
      </filter>
    </svg>
  );
}

let uid = 0;

export default function PassportStamp({ award }: { award: Award }) {
  const s = award.stamp ?? { shape: "rect" as const, top: award.issuer.toUpperCase(), main: award.title.toUpperCase(), sub: award.year };
  const id = `st${uid++}`;

  if (s.shape === "circle") {
    return (
      <svg viewBox="0 0 200 200" className="la-ps-svg circle" role="img" aria-label={award.title}>
        <defs>
          <path id={`${id}t`} d="M 31,100 A 69,69 0 1,1 169,100" />
          <path id={`${id}b`} d="M 38,100 A 62,62 0 0,0 162,100" />
        </defs>
        <g filter="url(#la-ink)" fill="currentColor" stroke="currentColor">
          <circle cx="100" cy="100" r="94" fill="none" strokeWidth="4" />
          <circle cx="100" cy="100" r="86" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="47" fill="none" strokeWidth="1.5" />
          <text fontSize={s.top.length > 20 ? 11.5 : 13.5} letterSpacing="2" stroke="none" fontWeight="600">
            <textPath href={`#${id}t`} startOffset="50%" textAnchor="middle">{s.top}</textPath>
          </text>
          <text fontSize="11" letterSpacing="2" stroke="none">
            <textPath href={`#${id}b`} startOffset="50%" textAnchor="middle">★ {award.year.replace(", ", " · ")} ★</textPath>
          </text>
          <text x="100" y="102" textAnchor="middle" fontSize={s.main.length > 6 ? 16 : 20} fontWeight="700" letterSpacing="1" stroke="none">{s.main}</text>
          <text x="100" y="119" textAnchor="middle" fontSize="9" letterSpacing="1.2" stroke="none">{s.sub}</text>
        </g>
      </svg>
    );
  }

  // Rectangular entry stamp; long titles wrap onto two lines
  const words = s.main.split(" ");
  const lines = s.main.length > 14 && words.length > 1
    ? [words.slice(0, Math.ceil(words.length / 2)).join(" "), words.slice(Math.ceil(words.length / 2)).join(" ")]
    : [s.main];
  return (
    <svg viewBox="0 0 240 150" className="la-ps-svg rect" role="img" aria-label={award.title}>
      <g filter="url(#la-ink)" fill="currentColor" stroke="currentColor">
        <rect x="3" y="3" width="234" height="144" rx="12" fill="none" strokeWidth="4" />
        <rect x="11" y="11" width="218" height="128" rx="7" fill="none" strokeWidth="1.5" />
        <text x="120" y="34" textAnchor="middle" fontSize={s.top.length > 22 ? 10.5 : 12} letterSpacing="2" stroke="none" fontWeight="600">{s.top}</text>
        <line x1="24" y1="44" x2="216" y2="44" strokeWidth="1.2" />
        {lines.map((l, i) => (
          <text key={i} x="120" y={lines.length === 2 ? 74 + i * 24 : 86} textAnchor="middle" fontSize={lines.length === 2 ? 20 : 24} fontWeight="700" letterSpacing="1" stroke="none">{l}</text>
        ))}
        <line x1="24" y1="113" x2="216" y2="113" strokeWidth="1.2" />
        <text x="120" y="130" textAnchor="middle" fontSize="11" letterSpacing="2" stroke="none">{s.sub}</text>
      </g>
    </svg>
  );
}
