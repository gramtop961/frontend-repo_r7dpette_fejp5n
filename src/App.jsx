import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-black/50">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Flames — Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-md bg-teal-500 hover:bg-teal-400 text-black font-semibold px-3 py-1.5">Hire me</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="container mx-auto px-6 md:px-10 py-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Flames. All rights reserved.</p>
          <p>Built with love — UI/UX • Dev • AI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
