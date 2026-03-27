import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { playCyberBeep } from '../utils/sound';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const fullText = "Initializing Cyber Lab...\nAccess Granted";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setIsAccessGranted(true);
          playCyberBeep(1200, 0.3, 'sine'); // High pitch beep for access granted
        }, 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="z-10 max-w-4xl w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-sm font-mono"
        >
          <Terminal size={16} />
          <span>SYSTEM STATUS: OPERATIONAL</span>
        </motion.div>

        <div className="mb-6 h-12 font-mono text-xl text-neon-accent md:text-2xl whitespace-pre-line">
          {text}
          <span className="animate-pulse">_</span>
        </div>

        {isAccessGranted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-neon-purple uppercase">
              Pawanpreet Kaur
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-mono max-w-2xl mx-auto">
              Cybersecurity | OSINT | Digital Forensics | Web Developer
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-4 justify-center"
            >
              <a href="#modules" className="px-8 py-3 bg-neon-blue text-black font-bold rounded-sm hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm">
                Initialize Modules
              </a>
              <a href="#cases" className="px-8 py-3 border border-neon-blue text-neon-blue font-bold rounded-sm hover:bg-neon-blue/10 transition-colors duration-300 uppercase tracking-widest text-sm">
                View Case Files
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent mx-auto" />
      </div>
    </section>
  );
};
