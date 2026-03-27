import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../utils/data';
import { motionVariants } from '../animations/motionVariants';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-2">Professional Experience</h2>
          <p className="text-white/40 font-mono text-sm">Career trajectory and key achievements.</p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-transparent">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-blue bg-background text-neon-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-lg hover:border-neon-blue/50 transition-colors duration-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white group-hover:text-neon-blue transition-colors">{exp.role}</h3>
                </div>
                <div className="text-neon-accent text-sm font-mono mb-4">{exp.company}</div>
                <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono mb-4">
                  <Calendar size={12} /> {exp.period}
                </div>
                <p className="text-sm text-white/60 font-mono leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
