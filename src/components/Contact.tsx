'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-4 sm:mb-6 tracking-tight px-4">
            GET IN <span className="text-gray-400 font-light">TOUCH</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
            Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Email Card */}
          <motion.a
            href="mailto:shishirshetty77@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl hover:border-primary/50 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Email</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-all">shishirshetty77@gmail.com</p>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+919483243509"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-6 sm:p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl sm:rounded-3xl hover:border-primary/50 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 sm:mb-8">
              <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Phone</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">+91 9483243509</p>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-6 sm:p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl sm:rounded-3xl hover:border-primary/50 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 sm:mb-8">
              <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Location</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Udupi, Karnataka</p>
          </motion.div>

          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-6 sm:p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl sm:rounded-3xl hover:border-primary/50 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div className="flex gap-4 mb-6 sm:mb-8">
              <a 
                href="https://github.com/shishirshetty77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-foreground/5 text-foreground hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shishir-shetty-715028230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-foreground/5 text-foreground hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Social Profiles</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Connect with me</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
