'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Photo Section - Minimal & Clean */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Ambient glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-0 border border-black/5 dark:border-white/10" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl dark:shadow-primary/20 border border-white/20">
                <Image
                  src="/munnar.jpeg"
                  alt="Shishir Shetty"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 tracking-tight">
                ABOUT <span className="text-gray-400 font-light">ME</span>
              </h2>
              <div className="h-px w-20 bg-foreground/20" />
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-400 font-light leading-relaxed">
              <p>
                I&apos;m a DevOps Engineer and Cloud Architect driven by a simple philosophy: <span className="text-foreground font-medium">automate everything that can be automated.</span>
              </p>
              
              <p>
                My journey started with a curiosity about how large-scale systems operate. That curiosity evolved into a career building resilient infrastructure, optimizing CI/CD pipelines, and ensuring that code moves from development to production with zero friction.
              </p>

              <p>
                When I&apos;m not configuring Kubernetes clusters or writing Terraform modules, I&apos;m exploring new technologies, contributing to open source, or finding the perfect cup of coffee.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/18HrkA_pEJEOhqNaFsAsuC38xTU1R-DrJ/view?usp=drive_link'
                  )
                }
                className="neo-button"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.button>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-foreground transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
