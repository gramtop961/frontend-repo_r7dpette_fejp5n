import { ExternalLink, Github } from 'lucide-react';

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

function ProjectCard({ title, description, tags = [], link = '#', repo = '#', accent = 'from-indigo-500 to-purple-500' }) {
  return (
    <div className="group relative rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${accent}`} />
      <div className="relative p-6">
        <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-black/5 flex items-center justify-center">
          <span className="text-slate-400 text-sm">Live preview</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3 py-2 text-white text-sm font-medium hover:opacity-90 transition"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-gray-900 text-sm font-medium border border-black/10 shadow-sm hover:shadow transition"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A mix of product design, full‑stack engineering, and AI‑powered experiences.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="AI Product Studio"
            description="End‑to‑end design system and RAG‑powered workflow builder for enterprise teams."
            tags={["Design system", "RAG", "LLMs", "React", "FastAPI"]}
            accent="from-fuchsia-500 to-violet-500"
          />
          <ProjectCard
            title="Realtime Collab Canvas"
            description="Multiplayer whiteboard with presence, comments, and delightful micro‑interactions."
            tags={["UX", "WebSockets", "Framer Motion", "Tailwind"]}
            accent="from-emerald-500 to-teal-500"
          />
          <ProjectCard
            title="DevOps Metrics Portal"
            description="Observability dashboard with custom visualizations and role‑based access."
            tags={["Next.js", "Postgres", "D3", "RBAC"]}
            accent="from-sky-500 to-indigo-500"
          />
        </div>

        <div className="mt-14 rounded-2xl border border-black/10 bg-gradient-to-br from-white to-slate-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Have a challenge in mind?</h3>
          <p className="mt-2 text-gray-600">I’m open to freelance, advisory, and full‑time opportunities.</p>
          <div className="mt-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:opacity-90">Let’s talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
