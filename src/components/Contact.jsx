import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s build something great</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Open to collaborations, consulting, and full‑time roles. Share some context about your goals and timeline and I’ll get back within 24 hours.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-teal-500 hover:bg-teal-400 text-black font-semibold px-5 py-3 transition-colors">
            <Mail className="h-5 w-5" /> Email me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/30 px-5 py-3 transition-colors">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/30 px-5 py-3 transition-colors">
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
