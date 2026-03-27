import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldAlert, Activity, Terminal, ChevronRight } from 'lucide-react';
import { LAB_MODULES } from '../utils/data';
import { Popup } from './Popup';
import { motionVariants } from '../animations/motionVariants';
import { playCyberBeep } from '../utils/sound';

const iconMap: any = {
  Search,
  ShieldAlert,
  Activity,
  Terminal
};

export const Modules = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const handleModuleClick = (id: string) => {
    setActiveModule(id);
    playCyberBeep(660, 0.15, 'triangle'); // Different tone for module init
  };

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'osint':
        return (
          <div className="space-y-4 font-mono text-sm">
            <p className="text-neon-blue"># OSINT Laboratory v1.0.4</p>
            <p className="text-white/80">Gathering intelligence from publicly available sources. Focus on digital footprinting and threat actor profiling.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <h4 className="text-neon-accent mb-2">Tools</h4>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  <li>Maltego</li>
                  <li>Shodan</li>
                  <li>SpiderFoot</li>
                  <li>Custom Python Scrapers</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <h4 className="text-neon-accent mb-2">Techniques</h4>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  <li>Metadata Analysis</li>
                  <li>Social Media Mapping</li>
                  <li>Domain Reconnaissance</li>
                  <li>WHOIS Deep-dive</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'forensics':
        return (
          <div className="space-y-4 font-mono text-sm">
            <p className="text-neon-purple"># Digital Forensics Lab v2.1.0</p>
            <p className="text-white/80">Preserving, identifying, extracting, and documenting digital evidence.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <h4 className="text-neon-purple mb-2">Capabilities</h4>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  <li>Memory Forensics</li>
                  <li>Disk Imaging</li>
                  <li>Registry Analysis</li>
                  <li>Artifact Recovery</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <h4 className="text-neon-purple mb-2">Environment</h4>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  <li>Autopsy</li>
                  <li>FTK Imager</li>
                  <li>Volatility Framework</li>
                  <li>SANS SIFT Workstation</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'network':
        return (
          <div className="space-y-4 font-mono text-sm">
            <p className="text-neon-accent"># Network Analysis Module</p>
            <p className="text-white/80">Real-time monitoring and packet-level inspection of network traffic.</p>
            <div className="mt-6 p-4 bg-black border border-neon-accent/30 rounded">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-neon-accent">LIVE TRAFFIC MONITOR</span>
                <span className="text-[10px] text-white/40">ETX: 0.02ms</span>
              </div>
              <div className="space-y-2 opacity-70">
                <div className="flex gap-4 text-[10px]">
                  <span className="text-neon-accent">192.168.1.105</span>
                  <span className="text-white/40">-{">"}</span>
                  <span className="text-red-500">104.26.10.228</span>
                  <span className="ml-auto">TLSv1.3 [ACK]</span>
                </div>
                <div className="flex gap-4 text-[10px]">
                  <span className="text-neon-accent">192.168.1.105</span>
                  <span className="text-white/40">-{">"}</span>
                  <span className="text-neon-blue">8.8.8.8</span>
                  <span className="ml-auto">DNS [QUERY]</span>
                </div>
                <div className="flex gap-4 text-[10px]">
                  <span className="text-red-500">45.33.2.11</span>
                  <span className="text-white/40">-{">"}</span>
                  <span className="text-neon-accent">192.168.1.1</span>
                  <span className="ml-auto">TCP [SYN] PORT 22</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'exploit':
        return (
          <div className="space-y-4 font-mono text-sm">
            <p className="text-red-500"># Exploits Lab (Restricted Access)</p>
            <p className="text-white/80">Controlled environment for testing vulnerabilities and understanding exploit mechanics.</p>
            <div className="mt-6 space-y-4">
              <div className="p-4 border border-red-500/20 bg-red-500/5 rounded">
                <h4 className="text-red-500 mb-2 font-bold uppercase text-xs">Vulnerability: SQL Injection</h4>
                <code className="block p-2 bg-black text-white/40 text-xs mb-2">
                  SELECT * FROM users WHERE id = '1' OR '1'='1';
                </code>
                <p className="text-xs text-white/60">Demonstrating how unvalidated input can lead to unauthorized data access.</p>
              </div>
              <div className="p-4 border border-red-500/20 bg-red-500/5 rounded">
                <h4 className="text-red-500 mb-2 font-bold uppercase text-xs">Vulnerability: XSS</h4>
                <code className="block p-2 bg-black text-white/40 text-xs mb-2">
                  &lt;script&gt;alert(document.cookie)&lt;/script&gt;
                </code>
                <p className="text-xs text-white/60">Analyzing script injection vectors in web applications.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="modules" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-2 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-neon-blue" />
            Cyber Lab Modules
          </h2>
          <p className="text-white/40 font-mono text-sm">Select a module to initialize the interface.</p>
        </div>

        <motion.div 
          variants={motionVariants.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LAB_MODULES.map((module) => {
            const Icon = iconMap[module.icon];
            return (
              <motion.div
                key={module.id}
                variants={motionVariants.slideUp}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => handleModuleClick(module.id)}
                className="group relative p-8 glass-panel cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-${module.color} opacity-50`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-${module.color}/20 transition-colors duration-300`}>
                    <Icon className={`text-${module.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-neon-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-white/40 font-mono leading-relaxed">
                    {module.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] text-neon-blue font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    INITIALIZE <ChevronRight size={12} />
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${module.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Popup 
        isOpen={!!activeModule} 
        onClose={() => setActiveModule(null)}
        title={`MODULE_INIT: ${activeModule?.toUpperCase()}`}
      >
        {renderModuleContent()}
      </Popup>
    </section>
  );
};
