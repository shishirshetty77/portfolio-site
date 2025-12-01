'use client';

import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Terminal } from 'lucide-react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { DevOpsPipeline } from './DevOpsPipeline';

export function Hero() {
  const [isClient, setIsClient] = useState(false);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Smooth parallax values - memoized config
  const springConfig = useMemo(() => ({ damping: 25, stiffness: 150 }), []);
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), springConfig);
  const moveXReverse = useSpring(useTransform(mouseX, [0, 1], [15, -15]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);

  if (!isClient) return null;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 selection:bg-primary/30"
    >
      
      {/* Multi-layered Background System */}
      <div className="absolute inset-0 z-0">
        {/* Modern multi-color gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50/50 to-rose-50/30 dark:from-blue-950/40 dark:via-violet-950/30 dark:to-rose-950/20" />
        
        {/* Animated aurora effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-blue-500/20 via-violet-500/20 via-fuchsia-500/15 via-rose-500/10 to-blue-500/20 animate-spin-slow opacity-30 dark:opacity-40 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-emerald-500/15 via-cyan-500/20 via-blue-500/15 to-emerald-500/15 animate-spin-slow-reverse opacity-25 dark:opacity-35 blur-3xl" />
        </div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-mesh-gradient animate-mesh" />
        </div>
        
        {/* Ambient gradient orbs - premium depth */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          className="absolute top-[10%] left-[5%] w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-50 blur-3xl bg-gradient-radial from-blue-400/40 via-violet-500/25 to-transparent animate-glow-pulse"
        />
        <motion.div 
          style={{ x: moveXReverse, y: moveYReverse }}
          className="absolute bottom-[5%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full opacity-40 blur-3xl bg-gradient-radial from-fuchsia-400/30 via-rose-500/20 to-transparent"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-25 blur-3xl bg-gradient-radial from-cyan-400/25 via-blue-500/15 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-6 sm:space-y-8 relative">
          
          {/* Status Badge - Enhanced with subtle animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-gray-600 dark:text-gray-300">
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline - Premium Typography with Gradient */}
          <div className="relative">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-oswald font-bold tracking-tighter leading-[0.9]"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                SHISHIR
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400"
              >
                SHETTY
              </motion.span>
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 mt-4 sm:mt-6 origin-left rounded-full"
            />
          </div>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-mono font-semibold text-blue-600 dark:text-blue-400">
              Cloud Engineer
            </span>
          </motion.div>

          {/* Subheadline - Clean & Readable */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg"
          >
            Building <span className="font-medium text-foreground">production-grade infrastructure</span> with Kubernetes, AWS, Terraform, and modern CI/CD practices.
          </motion.p>

          {/* Tech Stack Pills - Compact and elegant */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {[
              { name: 'Kubernetes', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-600 dark:text-blue-400' },
              { name: 'AWS', color: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30 text-orange-600 dark:text-orange-400' },
              { name: 'Terraform', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-600 dark:text-violet-400' },
              { name: 'CI/CD', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' },
              { name: 'Python', color: 'from-yellow-500/20 to-green-500/20 border-yellow-500/30 text-yellow-600 dark:text-yellow-400' },
            ].map((tech, i) => (
              <motion.span 
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.08) }}
                className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-gradient-to-r ${tech.color} border backdrop-blur-sm hover:scale-105 transition-transform cursor-default`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons - Modern gradient style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-2"
          >
            <a 
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full hover:bg-white dark:hover:bg-white/10 hover:border-violet-500/50 hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social Links - Compact and stylish */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-3 pt-2"
          >
            {[
              { icon: Github, href: 'https://github.com/shishirshetty77', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shishir-shetty-715028230/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shishirshetty77@gmail.com', label: 'Email' },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 hover:text-violet-500 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: DevOps Pipeline Visualization */}
        <div className="relative hidden lg:flex items-center justify-center h-[550px] w-full">
          <DevOpsPipeline mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </section>
  );
}
