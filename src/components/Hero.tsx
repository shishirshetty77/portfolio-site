'use client';

import { useTheme } from '@/components/ThemeProvider';
import { useCatMode } from '@/context/CatModeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, X, Terminal, Cpu, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const { theme } = useTheme();
  const { isCatMode, toggleCatMode } = useCatMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden pt-16 bg-grid"
    >
      {/* Invisible clickable div for Cat Mode */}
      <div
        onClick={toggleCatMode}
        className="fixed bottom-5 right-5 w-5 h-5 cursor-pointer z-50 opacity-0"
      />

      {/* Cyber Grid Background Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020408_100%)]" />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Decorative Tech Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{ scaleX: [0.8, 1.2, 0.8] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* System Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono text-cyan-400 tracking-wider">SYSTEM ONLINE</span>
        </motion.div>

        {/* Name Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 select-none relative z-10">
            SHISHIR
            <br />
            SHETTY
          </h1>
          
          {/* Glitch Effect Layers */}
          <motion.h1 
            className="absolute inset-0 text-6xl md:text-9xl font-bold tracking-tighter text-cyan-500/20 select-none z-0"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
          >
            SHISHIR
            <br />
            SHETTY
          </motion.h1>
          <motion.h1 
            className="absolute inset-0 text-6xl md:text-9xl font-bold tracking-tighter text-purple-500/20 select-none z-0"
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "mirror" }}
          >
            SHISHIR
            <br />
            SHETTY
          </motion.h1>
        </motion.div>

        {/* Role & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="flex items-center justify-center space-x-4 text-cyan-400 font-mono text-sm md:text-base">
            <span className="flex items-center"><Terminal className="w-4 h-4 mr-2" /> DevOps</span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center"><Cpu className="w-4 h-4 mr-2" /> Cloud</span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> Automation</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Architecting scalable infrastructure and automating the future.
            <br />
            <span className="text-cyan-500/80">Building the bridge between code and deployment.</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {[
            { icon: Github, href: 'https://github.com/shishirshetty77', label: 'GITHUB' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shishir-shetty-715028230/', label: 'LINKEDIN' },
            { icon: Mail, href: 'mailto:shishirshetty77@gmail.com', label: 'EMAIL' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center space-x-2 relative z-10">
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-cyan-400 transition-colors tracking-wider">{item.label}</span>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600 group-hover:border-cyan-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-600 group-hover:border-cyan-500 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Cat Mode Overlay (Hacker Cat Style) */}
      <AnimatePresence>
        {isCatMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 pointer-events-none"
          >
            <div className="absolute top-20 left-8 bg-black/90 border border-green-500 p-4 font-mono text-green-500 text-sm shadow-[0_0_20px_rgba(0,255,0,0.2)]">
              <p>{'>'} CAT_MODE_ACTIVATED</p>
              <p>{'>'} INITIATING_MEOW_PROTOCOL...</p>
              <p className="animate-pulse">{'>'} SYSTEM_OVERRIDE_COMPLETE</p>
            </div>
            
            {/* Matrix Rain of Cats */}
            {isClient && Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: ['0vh', '100vh'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity,
                  delay: i * 0.5 
                }}
                className="absolute text-green-500 font-mono text-xl"
                style={{ left: `${Math.random() * 100}%` }}
              >
                {['🐱', '0', '1', '🐾', 'MEOW'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">Scroll to Initialize</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
