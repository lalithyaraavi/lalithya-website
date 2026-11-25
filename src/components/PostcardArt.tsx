import type { BlogPost } from "@/data/content";

// [card, hills, sun, front hills]
export const PALETTES = [
  ["--denim", "--forest", "--mustard", "--sand"],
  ["--brick", "--plum", "--mustard", "--rose"],
  ["--forest", "--olive", "--rose", "--sand"],
  ["--plum", "--brick", "--sand", "--rose"],
  ["--mustard", "--brick", "--paper", "--forest"],
  ["--rose", "--denim", "--paper", "--olive"],
];

export const paletteStyle = (i: number) => {
  const p = PALETTES[i % PALETTES.length];
  return { "--c1": `var(${p[0]})`, "--c2": `var(${p[1]})`, "--c3": `var(${p[2]})`, "--c4": `var(${p[3]})` } as React.CSSProperties;
};

export function PosterFront({ post, flipHint = true }: { post: BlogPost; flipHint?: boolean }) {
  return (
    <div className="pc-poster">
      <div className="pc-sun" />
      <div className="pc-band pc-b1" />
      <div className="pc-band pc-b2" />
      <div className="pc-band pc-b3" />
      <div className="pc-greet"><small>Greetings from</small><h3>{post.from ?? post.tag}</h3></div>
      <span className="pc-cat">{post.tag}</span>
      {flipHint && <span className="pc-flipme">flip me ↻</span>}
    </div>
  );
}

