'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-4 relative overflow-hidden border-t border-foreground/10">
      {/* Ambient footer background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-oswald font-bold tracking-tighter mb-8">
              LET&apos;S WORK <br />
              <span className="text-gray-400">TOGETHER</span>
            </h2>
            <a  
              href="mailto:shishirshetty77@gmail.com"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-light hover:text-primary transition-colors group"
            >
              shishirshetty77@gmail.com
              <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="flex flex-col gap-4 text-left md:text-right">
              <a href="https://github.com/shishirshetty77" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/shishir-shetty-715028230/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/5">
          <p className="text-sm text-gray-500 font-mono">
            © 2025 Shishir Shetty. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <motion.div 
              className="text-[10px] text-gray-300 dark:text-gray-700 font-mono cursor-help uppercase tracking-widest"
              whileHover={{ scale: 1.1, color: '#6366F1' }}
              title="Try: ↑ ↑ ↓ ↓ ← → ← → B A"
            >
              Konami Code Enabled
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
