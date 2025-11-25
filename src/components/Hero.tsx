'use client';

import { motion, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Server, Cloud, Database, Zap, LucideIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Smooth parallax values
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
  const moveXReverse = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

  if (!isClient) return null;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden pt-20 selection:bg-primary/30"
    >
      
      {/* Multi-layered Background System */}
      <div className="absolute inset-0 z-0">
        {/* Base layer */}
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay" />
        
        {/* Ambient gradient orbs - premium depth */}
        <motion.div 
          style={{ 
            x: moveX, 
            y: moveY,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)'
          }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-glow-pulse"
        />
        <motion.div 
          style={{ 
            x: moveXReverse, 
            y: moveYReverse,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)'
          }}
          className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-10 relative">
          
          {/* Status Badge - Refined with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-xl border-2 border-gray-300 dark:border-white/20 shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-200">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline - Premium Typography */}
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl md:text-9xl font-oswald font-bold tracking-tighter leading-[0.85] text-foreground"
            >
              SHISHIR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-gray-500 to-foreground animate-gradient-x bg-[length:200%_auto]">
                SHETTY
              </span>
            </motion.h1>
            
            {/* Decorative line - Minimal */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
              className="h-px w-32 bg-gradient-to-r from-foreground to-transparent mt-8 origin-left opacity-50"
            />
          </div>

          {/* Subheadline - Clean & Readable */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl"
          >
            <span className="font-medium text-foreground">DevOps Engineer</span> & <span className="font-medium text-foreground">Cloud Architect</span> crafting scalable infrastructure and automating the future of software delivery.
          </motion.p>

          {/* Tech Stack Pills - Enhanced glass effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python'].map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                className="px-5 py-2 text-sm font-mono font-semibold tracking-wide border-2 border-gray-300 dark:border-white/20 rounded-full text-gray-800 dark:text-gray-200 bg-white/90 dark:bg-white/10 backdrop-blur-md hover:bg-white dark:hover:bg-white/20 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons - Handcrafted */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <a 
              href="#projects"
              className="neo-button"
            >
              <span className="relative z-10">View Work</span>
              <ArrowDown className="w-4 h-4 relative z-10" />
            </a>
            <a 
              href="mailto:shishirshetty77@gmail.com"
              className="neo-button-secondary"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links - Minimal */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 pt-4"
          >
            {[
              { icon: Github, href: 'https://github.com/shishirshetty77' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shishir-shetty-715028230/' },
              { icon: Mail, href: 'mailto:shishirshetty77@gmail.com' },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Abstract Visual - Enhanced floating cards */}
        <div className="relative hidden lg:block h-[600px] w-full">
          <FloatingCard 
            icon={Server} 
            title="Infrastructure" 
            subtitle="IaC & Cloud Native" 
            delay={0} 
            x={-40} y={-120} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Cloud} 
            title="Cloud Architecture" 
            subtitle="AWS & GCP" 
            delay={0.2} 
            x={160} y={-60} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Zap} 
            title="Automation" 
            subtitle="CI/CD Pipelines" 
            delay={0.4} 
            x={-30} y={110} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Database} 
            title="Scalability" 
            subtitle="High Availability" 
            delay={0.6} 
            x={190} y={130} 
            mouseX={mouseX} mouseY={mouseY}
          />
          
          {/* Central Abstract Shape - Enhanced pulse with gradient */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.3))'
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay: number;
  x: number;
  y: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingCard({ icon: Icon, title, subtitle, delay, x, y, mouseX, mouseY }: FloatingCardProps) {
  const xMotion = useTransform(mouseX, [0, 1], [x - 15, x + 15]);
  const yMotion = useTransform(mouseY, [0, 1], [y - 15, y + 15]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      style={{ x: xMotion, y: yMotion, left: '50%', top: '50%' }}
      className="absolute p-6 bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-white/60 dark:border-white/20 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-primary/10 flex items-center gap-5 w-72 z-20 hover:scale-110 hover:bg-white/95 dark:hover:bg-black/80 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 cursor-default group"
    >
      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-foreground group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500 shadow-lg">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-bold text-base text-foreground tracking-tight mb-1">{title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">{subtitle}</p>
      </div>
      
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-secondary/0 to-tertiary/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
