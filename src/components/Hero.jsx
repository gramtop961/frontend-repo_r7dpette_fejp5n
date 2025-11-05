import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient and noise overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-purple-600" />
              Interactive 3D • Tech • Modern
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Product Designer, Full‑Stack Developer, and AI Engineer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
              I craft delightful end‑to‑end experiences — from pixel‑perfect UI/UX to robust systems and applied AI. I love turning complex ideas into playful, modern products.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white font-medium shadow hover:opacity-90 transition">
                <Rocket className="h-4 w-4" />
                View Selected Work
              </a>
              <a href="#skills" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-gray-900 font-medium border border-black/10 shadow-sm hover:shadow transition">
                <Cpu className="h-4 w-4" />
                Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
