'use client';

import { useTheme } from '@/components/ThemeProvider';
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
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-dots z-0" />
      <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay" />
      
      {/* Premium Spotlight Effect */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full blur-[120px] opacity-60 pointer-events-none mix-blend-screen dark:mix-blend-screen" 
      />
      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tl from-tertiary/20 via-primary/10 to-transparent rounded-full blur-[120px] opacity-50 pointer-events-none mix-blend-screen dark:mix-blend-screen" 
      />

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-10 relative">
          
          {/* Status Badge - Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-gray-600 dark:text-gray-300">
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

          {/* Tech Stack Pills - Glassy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 text-xs font-mono font-medium tracking-wide border border-black/5 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default">
                {tech}
              </span>
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

        {/* Right Column: Abstract Visual - Refined Glass Cards */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
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
          
          {/* Central Abstract Shape - Subtle Pulse */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none"
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
      className="absolute p-5 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-4 w-64 z-20 hover:scale-105 hover:bg-white/80 dark:hover:bg-black/60 transition-all duration-300 cursor-default group"
    >
      <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-bold text-sm text-foreground tracking-wide">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{subtitle}</p>
      </div>
    </motion.div>
  );
}
}

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  delay: number;
  x: number;
  y: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingCard({ icon: Icon, title, subtitle, color, delay, x, y, mouseX, mouseY }: FloatingCardProps) {
  const xMotion = useTransform(mouseX, [0, 1], [x - 20, x + 20]);
  const yMotion = useTransform(mouseY, [0, 1], [y - 20, y + 20]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ x: xMotion, y: yMotion, left: '50%', top: '50%' }}
      className="absolute p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl flex items-center gap-4 w-64 z-20 hover:scale-105 transition-transform cursor-default"
    >
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-white`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div>
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}
