import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { playCyberBeep } from '../utils/sound';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playCyberBeep(1000, 0.5, 'sine'); // Transmission start sound
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      playCyberBeep(1500, 0.2, 'sine'); // Success sound
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 bg-black/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6">Establish Connection</h2>
          <p className="text-white/60 font-mono mb-12 leading-relaxed">
            Ready to collaborate on security research or development projects? Send an encrypted transmission or reach out via secure channels.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:pawanpreet.kaur2000@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue transition-colors">
                <Mail className="text-white/40 group-hover:text-neon-blue" size={20} />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Email</div>
                <div className="text-white font-mono">pawanpreet.kaur2000@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-purple transition-colors">
                <Github className="text-white/40 group-hover:text-neon-purple" size={20} />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">GitHub</div>
                <div className="text-white font-mono">github.com/PawanpreetKaur</div>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-accent transition-colors">
                <Linkedin className="text-white/40 group-hover:text-neon-accent" size={20} />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">LinkedIn</div>
                <div className="text-white font-mono">linkedin.com/in/pawanpreet-kaur</div>
              </div>
            </a>
          </div>
        </div>

        <div className="terminal-window p-8">
          <div className="flex items-center gap-2 mb-8 text-neon-blue text-xs font-mono">
            <Terminal size={14} />
            <span>TRANSMISSION_PROTOCOL_V4.0</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] text-white/40 uppercase tracking-widest font-mono mb-2">Subject Name</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white font-mono focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="IDENTIFY YOURSELF"
              />
            </div>
            <div>
              <label className="block text-[10px] text-white/40 uppercase tracking-widest font-mono mb-2">Return Address</label>
              <input 
                type="email" 
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white font-mono focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="EMAIL@DOMAIN.COM"
              />
            </div>
            <div>
              <label className="block text-[10px] text-white/40 uppercase tracking-widest font-mono mb-2">Transmission Data</label>
              <textarea 
                rows={4} 
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white font-mono focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="ENTER MESSAGE CONTENT..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSent}
              className={`w-full py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                isSent 
                  ? 'bg-neon-accent text-black' 
                  : 'bg-neon-blue text-black hover:bg-white'
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">TRANSMITTING...</span>
              ) : isSent ? (
                <>SUCCESSFULLY TRANSMITTED</>
              ) : (
                <>
                  <Send size={16} />
                  Initiate Transmission
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
