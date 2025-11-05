import { Brush, Code2, Cpu, Database } from 'lucide-react';

function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white text-gray-800 border border-black/10 px-3 py-1 text-xs font-medium shadow-sm">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Capabilities</h2>
          <p className="mt-3 text-gray-600">A multi‑disciplinary toolkit spanning research, design, engineering, and applied AI.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Brush className="h-5 w-5 text-pink-600" /> UI/UX
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillBadge>Product thinking</SkillBadge>
              <SkillBadge>Wireframing</SkillBadge>
              <SkillBadge>Prototyping</SkillBadge>
              <SkillBadge>Design systems</SkillBadge>
              <SkillBadge>Accessibility</SkillBadge>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Code2 className="h-5 w-5 text-blue-600" /> Frontend
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillBadge>React</SkillBadge>
              <SkillBadge>TypeScript</SkillBadge>
              <SkillBadge>Tailwind</SkillBadge>
              <SkillBadge>Framer Motion</SkillBadge>
              <SkillBadge>Shadcn/Radix</SkillBadge>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Database className="h-5 w-5 text-emerald-600" /> Backend
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillBadge>FastAPI</SkillBadge>
              <SkillBadge>Node/Express</SkillBadge>
              <SkillBadge>Postgres</SkillBadge>
              <SkillBadge>MongoDB</SkillBadge>
              <SkillBadge>Cloud & DevOps</SkillBadge>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Cpu className="h-5 w-5 text-purple-600" /> AI/ML
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillBadge>LLMs</SkillBadge>
              <SkillBadge>RAG</SkillBadge>
              <SkillBadge>LangChain</SkillBadge>
              <SkillBadge>OpenAI/Anthropic</SkillBadge>
              <SkillBadge>Prompt design</SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
