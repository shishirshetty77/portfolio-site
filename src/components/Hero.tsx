'use client';

import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Terminal } from 'lucide-react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { DevOpsPipeline } from './DevOpsPipeline';

const typewriterSentences = [
  "Building production-grade infrastructure with Kubernetes",
  "Deploying scalable cloud systems on AWS",
  "Automating environments with Terraform",
  "Delivering modern CI/CD solutions",
  "Orchestrating containers at scale",
];

export function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
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

  useEffect(() => {
    if (!isClient) return;
    
    const currentSentence = typewriterSentences[currentSentenceIndex];
    const typeSpeed = 50;
    const deleteSpeed = 30;
    const pauseTime = 2000;
    
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting) {
      if (displayedText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % typewriterSentences.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentSentenceIndex, isClient]);

  const springConfig = useMemo(() => ({ damping: 25, stiffness: 150 }), []);
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), springConfig);
  const moveXReverse = useSpring(useTransform(mouseX, [0, 1], [15, -15]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);

  if (!isClient) return null;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 selection:bg-primary/50 text-foreground bg-background"
    >
      
      {/* Brutalist Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-solid" />
        
        {/* Subtle grid pattern for technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
        
        {/* Sharp geometric flares instead of soft orbs */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] opacity-20 bg-gradient-to-br from-primary to-transparent rotate-45 blur-2xl"
        />
        <motion.div 
          style={{ x: moveXReverse, y: moveYReverse }}
          className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] opacity-10 bg-gradient-to-tl from-secondary to-transparent -rotate-12 blur-3xl"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-6 sm:space-y-8 relative">
          
          {/* Status Badge - Brutalist style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-background border-2 border-tertiary/50 shadow-[4px_4px_0_rgba(163,230,53,0.3)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 bg-tertiary"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-tertiary uppercase">
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline - Brutalist Typography */}
          <div className="relative py-4 sm:py-6">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-oswald font-black tracking-tighter leading-[0.9] uppercase"
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "circOut" }}
                className="block text-foreground"
              >
                SHISHIR
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
                className="block text-primary mt-2"
                style={{ textShadow: '4px 4px 0px rgba(255,69,0,0.2)' }}
              >
                SHETTY
              </motion.span>
            </motion.h1>
            
            {/* Hard geometric underline */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              className="h-3 w-32 bg-secondary mt-8 origin-left"
            />
          </div>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border-l-4 border-secondary"
          >
            <Terminal className="w-5 h-5 text-secondary" />
            <span className="text-sm font-mono font-bold text-secondary uppercase tracking-wider">
              Cloud Engineer
            </span>
          </motion.div>

          {/* Typewriter Animation - Terminal style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-14 sm:h-16 flex items-center bg-black/40 border border-white/10 p-4 w-full max-w-lg"
          >
            <p className="text-sm sm:text-base text-gray-300 font-mono tracking-tight">
              <span className="text-primary font-bold mr-3">{'>_'}</span>
              <span>{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-2.5 h-5 bg-tertiary ml-1 align-middle"
              />
            </p>
          </motion.div>

          {/* Tech Stack Pills - Brutalist tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { name: 'Kubernetes', color: 'border-primary text-primary hover:bg-primary hover:text-background' },
              { name: 'AWS', color: 'border-secondary text-secondary hover:bg-secondary hover:text-background' },
              { name: 'Terraform', color: 'border-tertiary text-tertiary hover:bg-tertiary hover:text-background' },
              { name: 'CI/CD', color: 'border-white/40 text-white hover:bg-white hover:text-background' },
            ].map((tech, i) => (
              <motion.span 
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                className={`px-3 py-1 text-xs font-mono font-bold uppercase border-2 transition-colors cursor-default ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons - Brutalist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="#projects" className="neo-button group">
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="neo-button-secondary">
              Let&apos;s Talk
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 ml-4">
              {[
                { icon: Github, href: 'https://github.com/shishirshetty77', label: 'GitHub', hover: 'hover:text-primary hover:-translate-y-1' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shishir-shetty-715028230/', label: 'LinkedIn', hover: 'hover:text-secondary hover:-translate-y-1' },
                { icon: Mail, href: 'mailto:shishirshetty77@gmail.com', label: 'Email', hover: 'hover:text-tertiary hover:-translate-y-1' },
              ].map((social, i) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? "_blank" : undefined}
                  rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                  className={`text-gray-400 transition-all duration-200 block ${social.hover}`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: DevOps Pipeline Visualization */}
        <div className="relative hidden lg:flex items-center justify-center h-[550px] w-full mix-blend-screen opacity-90">
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
        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-primary">Scroll</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </motion.div>
    </section>
  );
}
