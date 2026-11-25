"use client";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/data/content";
import { PosterFront, paletteStyle } from "@/components/PostcardArt";

const TILTS = [-1.6, 1.2, -0.8, 1.8, -1.3, 0.9];

export default function Postcards({ posts }: { posts: BlogPost[] }) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];
  const toggle = (slug: string) => setFlipped((f) => ({ ...f, [slug]: !f[slug] }));

  return (
    <>
      <div className="pc-head">
        <div>
          <p className="la-mono">Blog · Postcards home</p>
          <h1>Wish you<br />were <em>here</em></h1>
          <p className="sub">Notes on design, engineering, student life, and whatever else is on my mind. Tap a postcard to flip it.</p>
        </div>
        <div className="pc-rack" style={cats.length <= 2 ? { display: "none" } : undefined}>
          {cats.map((c) => <button key={c} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>)}
        </div>
      </div>

      <div className="pc-grid">
        {posts.map((post, i) => {
          if (cat !== "All" && post.tag !== cat) return null;
          const featured = i === 0 && cat === "All";
          return (
            <article
              key={post.slug}
              className={`pc-card la-r${featured ? " featured" : ""}${flipped[post.slug] ? " flipped" : ""}`}
              style={{ ...paletteStyle(i), ["--r" as string]: featured ? "0deg" : `${TILTS[i % TILTS.length]}deg` }}
              onClick={() => toggle(post.slug)}
              onKeyDown={(e) => { if (e.key === "Enter") toggle(post.slug); }}
              tabIndex={0}
              role="button"
              aria-label={`${post.title}, flip postcard`}
            >
              <div className="pc-inner">
                <div className="pc-face pc-front"><PosterFront post={post} /></div>
                <div className="pc-face pc-back">
                  <div className="pc-msg">
                    <span className="date">{post.date} · {post.readTime} read</span>
                    <p>{post.excerpt}</p>
                    <span className="sig">— Lali</span>
                  </div>
                  <div className="pc-addr">
                    <div className="pc-pm">{(post.from ?? "").slice(0, 12)}<br />{post.date}</div>
                    <div className="pc-stamp"><div>LALI<br />AIR<br />✈</div></div>
                    <div className="pc-lines"><div>{post.title}</div><div>To: whoever&apos;s reading</div></div>
                    <Link href={`/blog/${post.slug}`} className="pc-read" onClick={(e) => e.stopPropagation()}>Read the full postcard →</Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
