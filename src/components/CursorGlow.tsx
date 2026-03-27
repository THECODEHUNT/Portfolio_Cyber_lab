import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-neon-blue rounded-full" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 128,
          y: mousePos.y - 128,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150, mass: 1 }}
      />
    </>
  );
};
