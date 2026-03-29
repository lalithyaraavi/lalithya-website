import FadeIn from "@/components/FadeIn";

const skills = [
  { category: "Design", items: ["Figma", "UX Research", "Speculative Design", "Prototyping", "Systems Thinking"] },
  { category: "Engineering", items: ["TypeScript", "React", "Next.js", "C++", "Python", "Node.js", "SQL"] },
  { category: "Tools", items: ["Framer Motion", "Git", "Vercel", "Tailwind CSS", "Notion"] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">ABOUT ME</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT mb-10 leading-tight">
            Designer.<br />
            <em className="text-rose-DEFAULT">Engineer</em>.<br />
            Fort Mac kid.
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <FadeIn delay={0.1}>
            <div className="space-y-5 font-body text-ink-muted leading-relaxed">
              <p>
                I&apos;m Lalithya — a <span className="text-ink-DEFAULT font-medium">Systems Design Engineering</span> student at the University of Waterloo (Class of 2027) with a passion for UX, product design, and frontend development.
              </p>
              <p>
                I grew up in Fort McMurray, Alberta — which gave me a very specific kind of resourcefulness and a deep curiosity about how systems (social, environmental, technological) interact.
              </p>
              <p>
                My work tends to live at the intersection of <span className="text-ink-DEFAULT font-medium">intuition</span> and <span className="text-ink-DEFAULT font-medium">systems</span>: I&apos;m drawn to problems that are messy, human, and a little bit speculative.
              </p>
              <p>
                When I&apos;m not designing or coding, you&apos;ll find me baking something ambitious, reading, or advocating for women in tech through campus initiatives.
              </p>
            </div>
          </FadeIn>

          {/* Fun facts card */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-rose-light to-lavender/40 blob" />
              <div className="relative rounded-4xl bg-cream-DEFAULT/80 backdrop-blur p-8 border border-rose-light/40">
                <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-6">QUICK FACTS</p>
                <ul className="space-y-4">
                  {[
                    { icon: "📍", text: "From Fort McMurray, AB" },
                    { icon: "🎓", text: "SYDE '27 at UWaterloo" },
                    { icon: "💼", text: "Previously at Suncor Energy" },
                    { icon: "🏆", text: "Loran Semi-Finalist" },
                    { icon: "🌸", text: "Women in Tech advocate" },
                    { icon: "🍞", text: "Bread baker (obsessively)" },
                  ].map((fact) => (
                    <li key={fact.text} className="flex items-center gap-3 font-body text-sm text-ink-DEFAULT">
                      <span className="text-xl">{fact.icon}</span>
                      {fact.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Skills */}
        <FadeIn delay={0.2}>
          <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-8">SKILLS & TOOLS</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="p-6 rounded-4xl bg-cream-warm border border-rose-light/30">
                <p className="font-display text-lg text-ink-DEFAULT mb-4">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-full bg-cream-DEFAULT text-xs font-body text-ink-muted border border-rose-light/40">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Experience */}
        <FadeIn delay={0.25}>
          <div className="mt-20">
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-8">EXPERIENCE</p>
            <div className="space-y-6">
              {[
                { role: "Co-op Student", company: "Suncor Energy", period: "2024", type: "work" },
                { role: "Women in Tech Initiative", company: "University of Waterloo", period: "2023–present", type: "leadership" },
                { role: "Systems Design Engineering", company: "University of Waterloo", period: "2023–2027", type: "education" },
              ].map((exp) => (
                <div key={exp.role} className="flex items-start gap-6 p-6 rounded-3xl border border-rose-light/30 hover:border-rose-DEFAULT/40 hover:bg-rose-light/10 transition-all">
                  <span className="font-mono text-xs text-ink-muted/60 pt-0.5 w-20 shrink-0">{exp.period}</span>
                  <div>
                    <p className="font-body font-medium text-ink-DEFAULT">{exp.role}</p>
                    <p className="font-body text-sm text-ink-muted">{exp.company}</p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full bg-cream-warm text-xs font-mono text-rose-DEFAULT border border-rose-light/40 shrink-0">{exp.type}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
