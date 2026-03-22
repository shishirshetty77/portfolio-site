'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden bg-background border-t-8 border-primary">
      {/* Brutalist Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 bg-primary/10 border-2 border-primary px-4 py-2"
          >
            <div className="w-3 h-3 bg-primary animate-pulse" />
            <span className="text-sm font-mono font-bold tracking-widest text-primary uppercase">Ready for deployment</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black tracking-tighter mb-6 uppercase text-foreground"
          >
            LET&apos;S BUILD
            <span className="block text-primary mt-2" style={{ textShadow: '6px 6px 0px rgba(255,69,0,0.2)' }}>
              SOMETHING GREAT
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-mono text-lg mb-10 max-w-lg mx-auto bg-black/40 p-4 border border-white/10"
          >
            <span className="text-primary font-bold mr-2">{'>_'}</span>
            Got a project in mind? Let&apos;s discuss how I can help bring your infrastructure to life.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:shishirshetty77@gmail.com"
            className="neo-button text-lg group inline-flex"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-6 h-6 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Links & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t-2 border-border-color">
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/shishirshetty77', label: 'GitHub', hoverColor: 'hover:border-primary hover:text-primary hover:bg-primary/10' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shishir-shetty-715028230/', label: 'LinkedIn', hoverColor: 'hover:border-secondary hover:text-secondary hover:bg-secondary/10' },
              { icon: Mail, href: 'mailto:shishirshetty77@gmail.com', label: 'Email', hoverColor: 'hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 border-2 border-border-color bg-background text-gray-400 transition-all duration-200 ${social.hoverColor}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="p-3 border-2 border-border-color bg-black/40">
            <p className="text-sm text-gray-400 font-mono uppercase tracking-widest font-bold">
              © {currentYear} Shishir Shetty
            </p>
          </div>

          {/* Easter egg hint */}
          <motion.div 
            className="text-xs text-secondary font-mono font-bold cursor-help uppercase tracking-widest hidden md:block border-2 border-secondary/30 p-2 bg-secondary/10"
            whileHover={{ scale: 1.05, borderColor: '#EAB308', backgroundColor: 'rgba(234,179,8,0.2)' }}
            title="Try: ↑ ↑ ↓ ↓ ← → ← → B A"
          >
            ↑↑↓↓←→←→BA
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
