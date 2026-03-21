'use client';

import { ReactNode } from 'react';

interface TacticalCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TacticalCard({ children, className = '', onClick }: TacticalCardProps) {
  return (
    <div
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
    </div>
  );
}
