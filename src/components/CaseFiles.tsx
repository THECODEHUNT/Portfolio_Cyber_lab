import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { CASE_FILES } from '../utils/data';
import { motionVariants } from '../animations/motionVariants';
import { playCyberBeep } from '../utils/sound';

export const CaseFiles = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const toggleCase = (id: string) => {
    const isExpanding = expandedCase !== id;
    setExpandedCase(isExpanding ? id : null);
    playCyberBeep(isExpanding ? 770 : 550, 0.1, 'sine');
  };

  return (
    <section id="cases" className="py-24 px-4 relative z-10 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Case Files</h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto" />
        </div>

        <motion.div 
          variants={motionVariants.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {CASE_FILES.map((caseFile) => (
            <motion.div
              key={caseFile.id}
              variants={motionVariants.slideUp}
              whileHover={{ 
                scale: 1.01, 
                borderColor: 'rgba(155, 92, 255, 0.5)',
                boxShadow: '0 0 25px rgba(155, 92, 255, 0.15)'
              }}
              className={`border border-white/10 rounded-lg overflow-hidden transition-colors duration-300 group ${
                expandedCase === caseFile.id ? 'bg-white/5 border-neon-purple/30' : 'bg-black/40'
              }`}
            >
              <button
                onClick={() => toggleCase(caseFile.id)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-neon-purple font-mono text-xl font-bold group-hover:glow-purple transition-all duration-300">{caseFile.id}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-neon-purple transition-colors duration-300">{caseFile.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-white/40 font-mono group-hover:border-neon-purple/30 transition-colors duration-300">
                      {caseFile.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-[10px] font-mono text-neon-accent">STATUS: {caseFile.status}</span>
                  {expandedCase === caseFile.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {expandedCase === caseFile.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <FileText size={12} /> Description
                          </h4>
                          <p className="text-sm text-white/70 font-mono leading-relaxed">
                            {caseFile.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <ExternalLink size={12} /> Key Findings
                          </h4>
                          <div className="p-4 bg-black/40 border border-neon-purple/20 rounded font-mono text-xs text-neon-purple leading-relaxed">
                            {caseFile.findings}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button className="text-[10px] font-bold tracking-widest text-white/40 hover:text-neon-purple transition-colors uppercase">
                          Download Full Report .PDF
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
