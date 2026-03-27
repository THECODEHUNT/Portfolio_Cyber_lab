import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Modules } from './components/Modules';
import { CaseFiles } from './components/CaseFiles';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CursorGlow } from './components/CursorGlow';
import { Background3D } from './components/Background3D';
import { playCyberBeep } from './utils/sound';

export default function App() {
  useEffect(() => {
    const handleGlobalClick = () => playCyberBeep(880, 0.1);
    window.addEventListener('click', handleGlobalClick);

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-neon-blue/30 selection:text-neon-blue overflow-x-hidden">
      {/* Global Effects */}
      <Background3D />
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <CursorGlow />
      <div className="scanline" />
      
      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center pointer-events-none">
        <div className="text-neon-blue font-bold tracking-tighter text-xl pointer-events-auto cursor-pointer">
          PAWANPREET_KAUR<span className="animate-pulse">_</span>
        </div>
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {['modules', 'cases', 'experience', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-neon-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Modules />
        <CaseFiles />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/5 bg-black/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 font-mono text-[10px] tracking-widest">
            © 2026 PAWANPREET KAUR // CYBER_LAB_PORTFOLIO
          </div>
          <div className="flex gap-6 text-white/20 font-mono text-[10px] tracking-widest">
            <span>IIT MANDI (MINOR CS)</span>
            <span>BHARATI COLLEGE, DU</span>
          </div>
          <div className="text-white/20 font-mono text-[10px] tracking-widest uppercase">
            Encrypted with AES-256
          </div>
        </div>
      </footer>
    </div>
  );
}
