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
      
      {/* Dynamic Gradient Orbs */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" 
      />
      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-tertiary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-8 relative">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-gray-600 dark:text-gray-300">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-oswald font-bold tracking-tighter leading-[0.9] text-foreground"
            >
              SHISHIR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary animate-gradient-x bg-[length:200%_auto]">
                SHETTY
              </span>
            </motion.h1>
            
            {/* Decorative line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
              className="h-1 w-32 bg-foreground mt-6 origin-left"
            />
          </div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-xl"
          >
            <span className="font-semibold text-foreground">DevOps Engineer</span> & <span className="font-semibold text-foreground">Cloud Architect</span> crafting scalable infrastructure and automating the future of software delivery.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm font-mono border border-gray-200 dark:border-white/10 rounded-md text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-white/5 backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-foreground text-background rounded-none font-oswald font-bold text-lg tracking-widest overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors">VIEW WORK</span>
            </a>
            <a 
              href="mailto:shishirshetty77@gmail.com"
              className="group px-8 py-4 border border-foreground/20 hover:border-foreground text-foreground rounded-none font-oswald font-bold text-lg tracking-widest transition-all duration-300"
            >
              CONTACT ME
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 pt-8"
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
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Abstract Visual */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
          <FloatingCard 
            icon={Server} 
            title="Infrastructure" 
            subtitle="IaC & Cloud Native" 
            color="bg-blue-500" 
            delay={0} 
            x={-50} y={-100} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Cloud} 
            title="Cloud Architecture" 
            subtitle="AWS & GCP" 
            color="bg-purple-500" 
            delay={0.2} 
            x={150} y={-50} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Zap} 
            title="Automation" 
            subtitle="CI/CD Pipelines" 
            color="bg-yellow-500" 
            delay={0.4} 
            x={-20} y={100} 
            mouseX={mouseX} mouseY={mouseY}
          />
          <FloatingCard 
            icon={Database} 
            title="Scalability" 
            subtitle="High Availability" 
            color="bg-emerald-500" 
            delay={0.6} 
            x={180} y={120} 
            mouseX={mouseX} mouseY={mouseY}
          />
          
          {/* Central Abstract Shape */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-foreground/10 rounded-full flex items-center justify-center"
          >
            <div className="w-48 h-48 border border-foreground/10 rounded-full flex items-center justify-center">
               <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </motion.div>
    </section>
  );
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
