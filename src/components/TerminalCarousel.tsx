'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Briefcase, Github, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { TerminalBioWidget } from './TerminalBioWidget';
import { ProjectsWidget } from './ProjectsWidget';
import { ExperienceWidget } from './ExperienceWidget';
import { LiveGitHubWidget } from './LiveGitHubWidget';
import { LiveSpotifyWidget } from './LiveSpotifyWidget';

const VIEWS = [
  { id: 'bio', label: 'SYS.BIO', icon: Terminal, component: TerminalBioWidget },
  { id: 'experience', label: 'LOGS.WORK', icon: Briefcase, component: ExperienceWidget },
  { id: 'projects', label: 'DIR.PROJECTS', icon: Code, component: ProjectsWidget },
  { id: 'github', label: 'NET.GITHUB', icon: Github, component: LiveGitHubWidget },
  { id: 'spotify', label: 'MEDIA.PLAY', icon: Music, component: LiveSpotifyWidget },
];

export function TerminalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((prev) => {
      if (newIndex === prev) return prev;
      setDirection(newIndex > prev ? 1 : -1);
      return newIndex;
    });
  }, []);

  // Listen for CMD_NAVIGATE custom events from CommandPalette
  useEffect(() => {
    const handleNav = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const target = customEvent.detail;
      const newIndex = VIEWS.findIndex(v => v.id === target);
      if (newIndex !== -1) {
        navigate(newIndex);
      }
    };
    window.addEventListener('CMD_NAVIGATE', handleNav);
    return () => window.removeEventListener('CMD_NAVIGATE', handleNav);
  }, [navigate]);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigate(Math.min(activeIndex + 1, VIEWS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        navigate(Math.max(activeIndex - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, navigate]);

  // Animation variants for sliding
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.92,
    }),
  };

  const ActiveComponent = VIEWS[activeIndex].component;

  return (
    <div className="w-full max-w-7xl mx-auto h-[85vh] md:h-[90vh] flex flex-col relative">
      
      {/* View Counter */}
      <div className="flex justify-between items-center px-6 py-2">
        <span className="font-mono text-[10px] text-[#525252] tracking-widest uppercase">
          [{String(activeIndex + 1).padStart(2, '0')}/{String(VIEWS.length).padStart(2, '0')}]
        </span>
        <span className="font-mono text-[10px] text-[#00ff41] tracking-widest uppercase">
          {VIEWS[activeIndex].label}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center px-4">
        {/* Left Arrow */}
        <button
          onClick={() => navigate(Math.max(activeIndex - 1, 0))}
          className={`absolute left-2 z-20 p-2 rounded-sm transition-all ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100 hover:bg-[#1c1c1c]'}`}
          disabled={activeIndex === 0}
        >
          <ChevronLeft className="w-5 h-5 text-[#737373]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => navigate(Math.min(activeIndex + 1, VIEWS.length - 1))}
          className={`absolute right-2 z-20 p-2 rounded-sm transition-all ${activeIndex === VIEWS.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100 hover:bg-[#1c1c1c]'}`}
          disabled={activeIndex === VIEWS.length - 1}
        >
          <ChevronRight className="w-5 h-5 text-[#737373]" />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full max-h-full mx-8"
          >
            <div className="w-full h-full [&>*]:h-full [&>*]:w-full">
              <ActiveComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tactical Bottom Navigation */}
      <div className="flex items-center justify-center py-4 z-30">
        <div className="flex bg-[#121212] border border-[#262626] rounded-sm p-1 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          {VIEWS.map((view, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={view.id}
                onClick={() => navigate(index)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-sm transition-all cursor-pointer ${isActive ? 'text-[#00ff41] bg-[#1c1c1c]' : 'text-[#737373] hover:text-[#d4d4d4] hover:bg-[#1a1a1a]'}`}
              >
                <view.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className={`hidden md:block font-mono text-xs tracking-widest transition-all duration-300 ${isActive ? 'opacity-100 max-w-[120px]' : 'opacity-0 max-w-0 overflow-hidden'}`}>
                  {view.label}
                </span>
                
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#00ff41]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
