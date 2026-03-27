import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import { motionVariants } from '../animations/motionVariants';
import { playCyberBeep } from '../utils/sound';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Popup = ({ isOpen, onClose, title, children }: PopupProps) => {
  useEffect(() => {
    if (isOpen) {
      playCyberBeep(440, 0.2, 'sine'); // Low pitch for opening
    }
  }, [isOpen]);

  const handleClose = () => {
    playCyberBeep(330, 0.1, 'sine'); // Even lower for closing
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            variants={motionVariants.terminal}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-4xl terminal-window max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2 text-neon-blue text-xs font-mono">
                <TerminalIcon size={14} />
                <span>{title}</span>
              </div>
              <button 
                onClick={handleClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
