'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TacticalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export function TacticalCard({ children, className = '', delay = 0, onClick }: TacticalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      onClick={onClick}
      className={`tactical-panel tactical-shadow bracket-corners p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Subtle corner tech accents */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-slate-500/30"></div>
      <div className="absolute top-2 right-2 w-1 h-1 bg-slate-500/30"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-slate-500/30"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-slate-500/30"></div>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
