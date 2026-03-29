"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your preferred form backend (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left — copy */}
        <div>
          <FadeIn>
            <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-4">GET IN TOUCH</p>
            <h1 className="font-display text-6xl md:text-7xl font-light text-ink-DEFAULT mb-6 leading-tight">
              Say<br />
              <em className="text-rose-DEFAULT">hello</em> ✦
            </h1>
            <p className="font-body text-ink-muted leading-relaxed mb-8 text-lg">
              Whether you&apos;re looking to collaborate, hire, or just swap design recs — my inbox is always open.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: "✉️", label: "Email", value: "hello@lalithya.com", href: "mailto:hello@lalithya.com" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/lalithya", href: "https://linkedin.com" },
                { icon: "🐙", label: "GitHub", value: "github.com/lalithya", href: "https://github.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-3xl border border-rose-light/40 hover:border-rose-DEFAULT/50 bg-cream-DEFAULT hover:bg-rose-light/10 transition-all"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-0.5">{link.label}</p>
                    <p className="font-body text-sm text-ink-DEFAULT group-hover:text-rose-DEFAULT transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — form */}
        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-5xl bg-gradient-to-br from-rose-light/40 to-lavender/20 blob" />
            <div className="relative rounded-4xl bg-cream-DEFAULT border border-rose-light/40 p-8 shadow-xl shadow-rose-light/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4 animate-float">🌸</div>
                  <h2 className="font-display text-3xl font-light text-ink-DEFAULT mb-2">Got it!</h2>
                  <p className="font-body text-ink-muted">I&apos;ll get back to you soon ✦</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="font-mono text-xs text-rose-DEFAULT tracking-widest mb-6">SEND A MESSAGE</p>

                  {[
                    { id: "name", label: "Your name", type: "text", placeholder: "Ada Lovelace" },
                    { id: "email", label: "Your email", type: "email", placeholder: "ada@example.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block font-body text-xs text-ink-muted mb-1.5">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as "name" | "email"]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-rose-light/40 bg-cream-warm text-ink-DEFAULT font-body text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-rose-DEFAULT/60 focus:ring-2 focus:ring-rose-light/40 transition-all"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-body text-xs text-ink-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="I'd love to chat about..."
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-rose-light/40 bg-cream-warm text-ink-DEFAULT font-body text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-rose-DEFAULT/60 focus:ring-2 focus:ring-rose-light/40 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-full bg-rose-DEFAULT text-cream-DEFAULT font-body hover:bg-rose-dark transition-colors"
                  >
                    Send it ✦
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
