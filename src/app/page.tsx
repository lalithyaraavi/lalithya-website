import Link from "next/link";
import { projects, awards } from "@/data/content";
import LaEffects, { PLANE } from "@/components/LaEffects";
import PassportPhotos from "@/components/PassportPhotos";
import ProjectTags from "@/components/ProjectTags";

const ticker = ["SQL", "Python", "Power BI", "Tableau", "SAS", "C++", "A/B Testing", "Web Scraping", "Figma", "UX Design", "Product Design", "Systems Thinking", "Jira", "Git and GitHub", "Please keep your curiosity fastened"];

const experience = [
  { code: "ORB26", role: "Product Data Analyst", company: "ORBCOMM", period: "Sept 2026 – Present", live: true },
  { code: "SUN26", role: "Data Analyst", company: "Suncor Energy", period: "Jan 2026 – Apr 2026" },
  { code: "FMC25", role: "Customer Insights Coordinator", company: "The Fort McMurray Chamber of Commerce", period: "Jun 2025 – Aug 2025" },
  { code: "WWT21", role: "Founder and Technical Program Lead", company: "W. Women In Tech", period: "Sept 2021 – July 2025" },
];

const stampStyle = [
  { cls: "round", r: "-12deg", c: "var(--brick)" },
  { cls: "rect", r: "6deg", c: "var(--denim)" },
  { cls: "rect", r: "-4deg", c: "var(--forest)" },
  { cls: "round", r: "12deg", c: "var(--plum)" },
  { cls: "rect", r: "-7deg", c: "var(--mustard)" },
];

const Plane = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" style={style} aria-hidden><path fill="currentColor" d={PLANE} /></svg>
);

export default function Home() {
  const tickerItems = [...ticker, ...ticker];
  return (
    <div className="pb-10">
      <LaEffects />

      <div className="la-wrap">
        {/* ── Boarding pass hero ── */}
        <header className="la-hero">
          <p className="la-mono la-r">Now arriving · Gate SYDE</p>
          <h1 className="la-r">Hi! I&apos;m <span>Lali</span>.</h1>
          <div className="la-pa la-r" role="note" aria-label="Arrival announcement">
            <div className="la-pa-head">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path fill="currentColor" d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>
              <span>We&apos;ve landed</span>
              <i className="la-pa-wave" aria-hidden><b /><b /><b /></i>
            </div>
            <p><span>To our visitors:</span> welcome.</p>
            <p><span>To those returning:</span> welcome home.</p>
            <p><span>To recruiters:</span> my work is waiting in <a href="#projects">baggage claim</a> below.</p>
          </div>

          <div className="la-pass la-r">
            <div className="la-pass-main">
              <div className="la-pass-top"><span className="la-airline">LALI AIR · BOARDING PASS</span><span className="la-mono">Flight LR 2030</span></div>
              <div className="la-cities">
                <div><div className="la-code">YMM</div><small>Fort McMurray, AB</small></div>
                <div className="la-leg"><Plane style={{ transform: "rotate(90deg)" }} /></div>
                <div style={{ textAlign: "right" }}><div className="la-code">YKF</div><small>Waterloo, ON</small></div>
              </div>
              <div className="la-details">
                <div><span className="la-mono">Passenger</span><b>RAAVI/LALITHYA</b></div>
                <div><span className="la-mono">Class</span><b>SYDE &apos;30</b></div>
                <div><span className="la-mono">Current stop</span><b>YOW · Kanata</b></div>
                <div><span className="la-mono">Next departure</span><b>Summer 2027</b></div>
              </div>
              <a href="#about" className="la-cta">Learn more about me ↓</a>
            </div>
            <div className="la-stub">
              <img src="/photos/me.jpg" alt="Lali" />
              <div className="la-stub-info">
                <div className="la-seat">
                  <div><span className="la-mono">Seat</span><b>2A</b></div>
                  <div style={{ textAlign: "right" }}><span className="la-mono">Gate</span><b>W</b></div>
                </div>
                <div className="la-barcode" />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ── Cabin announcement ticker ── */}
      <div className="la-ticker" aria-label="Skills">
        <div className="track">
          {tickerItems.map((t, i) => <span key={i}><i>✈</i>{i % ticker.length === 0 ? `Now boarding: ${t}` : t}</span>)}
        </div>
      </div>

      <div className="la-wrap">
        {/* ── Departures (experience) ── */}
        <section className="la-section" id="experience">
          <div className="la-head la-r">
            <div><p className="la-mono">Departures</p><h2 className="la-h2">Where I&apos;ve flown</h2></div>
            <p className="la-mono">Local time <span id="la-clock">--:--</span></p>
          </div>
          <div className="la-board la-r">
            <div className="la-bh"><span>Flight</span><span>Role</span><span>Carrier</span><span>Time</span><span>Status</span></div>
            {experience.map((e) => (
              <div className="la-row" key={e.code}>
                <span className="la-flap" data-t={e.code}>{e.code.split("").map((c, i) => <s key={i}>{c}</s>)}</span>
                <span className="la-role">{e.role}</span>
                <span className="la-co">{e.company}</span>
                <span className="la-co">{e.period}</span>
                <span className={`la-st ${e.live ? "on" : "done"}`}>{e.live ? "IN FLIGHT" : "LANDED"}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Baggage claim (projects) ── */}
        <section className="la-section" id="projects">
          <div className="la-head la-r">
            <div><p className="la-mono">Baggage claim · Carousel 1</p><h2 className="la-h2">Things I&apos;ve packed</h2></div>
            <Link href="/projects" className="la-mono" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ink)" }}>All projects →</Link>
          </div>
          <ProjectTags items={projects.slice(0, 6)} />
        </section>

        {/* ── Route map teaser → travel log ── */}
        <section className="la-section">
          <div className="la-head la-r">
            <div><p className="la-mono">Route map</p><h2 className="la-h2">The journey so far</h2></div>
            <Link href="/travel" className="la-mono" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ink)" }}>Open travel log →</Link>
          </div>
          <Link href="/travel" className="la-map la-r" aria-label="Open the travel log">
            <svg viewBox="0 0 1000 300" role="img" aria-label="Route from Fort McMurray to Waterloo to Kanata">
              <path d="M60 250 Q 140 40 520 40 T 960 120" fill="none" stroke="var(--rule)" strokeWidth="1" />
              <path className="arc" d="M110 200 Q 380 20 690 190" pathLength={600} />
              <path className="arc" d="M690 190 Q 760 90 860 130" pathLength={600} style={{ transitionDelay: "1.2s" }} />
              <circle cx="110" cy="200" r="7" fill="var(--brick)" /><circle cx="110" cy="200" r="15" fill="none" stroke="var(--brick)" opacity=".3" />
              <circle cx="690" cy="190" r="7" fill="var(--ink)" />
              <circle cx="860" cy="130" r="7" fill="var(--denim)" /><circle cx="860" cy="130" r="15" fill="none" stroke="var(--denim)" opacity=".3" />
              <text x="110" y="240" textAnchor="middle">YMM</text><text x="110" y="258" textAnchor="middle" className="sub">HOME</text>
              <text x="690" y="230" textAnchor="middle">YKF</text><text x="690" y="248" textAnchor="middle" className="sub">SCHOOL</text>
              <text x="860" y="170" textAnchor="middle">YOW</text><text x="860" y="188" textAnchor="middle" className="sub">NOW</text>
            </svg>
          </Link>
        </section>

        {/* ── Passport (about) ── */}
        <section className="la-section" id="about">
          <div className="la-head la-r"><div><p className="la-mono">Passport</p><h2 className="la-h2">A little bit about me</h2></div></div>
          <div className="la-passport la-r">
            <div className="la-ppl">
              <div className="photo">
                <PassportPhotos />
                <dl>
                  <div><dt>Surname</dt><dd>RAAVI</dd></div>
                  <div><dt>Given name</dt><dd>LALITHYA</dd></div>
                  <div><dt>Program</dt><dd>SYSTEMS DESIGN</dd></div>
                  <div><dt>Base</dt><dd>WATERLOO, ON</dd></div>
                </dl>
              </div>
              <div className="la-mrz">P&lt;LRAIR&lt;RAAVI&lt;&lt;LALITHYA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />SYDE2030&lt;&lt;YMM&lt;YKF&lt;YOW&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
            </div>
            <div className="la-ppr">
              <p className="la-mono">Visas and entries</p>
              <p>I&apos;m Lali, a Systems Design Engineering student at Waterloo. Give me something messy that nobody can quite explain and I&apos;ll pull the data, sketch it out, and keep asking questions until it makes sense.</p>
              <p>So far that&apos;s meant Power BI dashboards at Suncor and ORBCOMM, an accessibility study of 422 Shopify stores, and a lot of Figma.</p>
              <p>Outside of work, I started W. Women in Tech back home and ran it for four years, and I still love mentoring younger students. Otherwise I&apos;m probably reading, baking something ambitious, or planning the next trip.</p>
              <div className="la-stamps">
                {awards.map((a, i) => {
                  const base = stampStyle[i % stampStyle.length];
                  const s = { ...base, cls: a.title.length > 26 ? "rect" : base.cls };
                  const style = { ["--r" as string]: s.r, color: s.c, transitionDelay: `${0.1 + i * 0.18}s` };
                  return a.link ? (
                    <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer" className={`la-stamp ${s.cls}`} style={style} title="Read the article">
                      {a.title}
                    </a>
                  ) : (
                    <div key={a.title} className={`la-stamp ${s.cls}`} style={style}>{a.title}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Postcard (contact) ── */}
        <section className="la-section" id="contact">
          <div className="la-postcard la-r">
            <div className="la-pc-left">
              <p className="la-mono">Arrivals · Get in touch</p>
              <h2>Wish you were here.</h2>
              <p className="note">Whether it&apos;s an idea, a co-op, or just a chat, I&apos;m always happy to connect!</p>
            </div>
            <div className="la-pc-right">
              <div className="la-postmark">WATERLOO<br />ON<br />2026</div>
              <div className="la-pstamp"><div>LALI<br />AIR<br />✈</div></div>
              <div className="la-lines">
                <a href="mailto:lraavi@uwaterloo.ca">lraavi@uwaterloo.ca <span>→</span></a>
                <a href="https://www.linkedin.com/in/lalithyaraavi/" target="_blank" rel="noopener noreferrer">LinkedIn <span>→</span></a>
                <a href="https://github.com/lalithyaraavi" target="_blank" rel="noopener noreferrer">GitHub <span>→</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
