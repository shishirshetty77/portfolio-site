'use client';

import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Cpu, Globe, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden pt-20">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      
      {/* Decorative Background Elements - Soft Tech Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl hidden md:block animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl hidden md:block animate-pulse delay-700" />
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl hidden md:block animate-pulse delay-1000" />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-mono font-bold text-sm tracking-wide rounded-full border border-green-200 dark:border-green-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* Name Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mb-6 relative"
        >
          <h1 className="text-7xl md:text-9xl font-oswald font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
            SHISHIR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              SHETTY
            </span>
          </h1>
        </motion.div>

        {/* Role & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="flex flex-wrap justify-center gap-4 font-mono font-bold text-sm md:text-base">
            <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Terminal className="w-4 h-4 text-primary" /> DevOps
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Cpu className="w-4 h-4 text-secondary" /> Cloud
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Globe className="w-4 h-4 text-tertiary" /> Automation
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-center mx-auto max-w-lg">
            Architecting scalable infrastructure and automating the future.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
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
              className="group relative px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-oswald font-bold text-lg tracking-wide shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all flex items-center gap-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="w-6 h-6" />
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
}
