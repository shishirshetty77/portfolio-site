'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      {/* Ambient footer background */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-bold tracking-tighter mb-6"
          >
            LET&apos;S BUILD
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500">
              SOMETHING GREAT
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto"
          >
            Got a project in mind? Let&apos;s discuss how I can help bring your infrastructure to life.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:shishirshetty77@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300 group"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Links & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-200/50 dark:border-white/5">
          {/* Social Links */}
          <div className="flex gap-3">
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
                className="p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 hover:text-violet-500 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
            © {currentYear} Shishir Shetty
          </p>

          {/* Easter egg hint */}
          <motion.div 
            className="text-[10px] text-gray-300 dark:text-gray-700 font-mono cursor-help uppercase tracking-widest hidden md:block"
            whileHover={{ scale: 1.05, color: '#8B5CF6' }}
            title="Try: ↑ ↑ ↓ ↓ ← → ← → B A"
          >
            ↑↑↓↓←→←→BA
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
