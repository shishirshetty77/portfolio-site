'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Brutalist Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Photo Section - Brutalist */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 p-4 border-2 border-border-color bg-background"
                 style={{ boxShadow: '8px 8px 0px rgba(163,230,53,1)' }}>
              {/* Sharp decorative accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-tertiary" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-tertiary" />
              
              <div className="relative h-full w-full border-2 border-border-color overflow-hidden bg-foreground">
                <Image
                  src="/munnar.jpeg"
                  alt="Shishir Shetty"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                  className="object-cover hover:scale-[1.03] transition-transform duration-500 grayscale hover:grayscale-0"
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
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-8 bg-tertiary" />
                <span className="text-sm font-mono font-bold tracking-widest text-tertiary uppercase">Identity</span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-black mb-4 sm:mb-6 tracking-tight uppercase text-foreground">
                ABOUT <span className="text-tertiary" style={{ textShadow: '4px 4px 0px rgba(163,230,53,0.2)' }}>ME</span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-300 font-mono leading-relaxed bg-black/40 p-6 border-2 border-border-color border-l-4 border-l-tertiary">
              <p>
                <span className="text-tertiary font-bold">{'>'}</span> I&apos;m a Cloud Engineer focused on <span className="text-foreground font-bold">infrastructure automation and cloud-native architecture</span>. I design and implement scalable, highly available systems for mission-critical applications.
              </p>
              
              <p>
                <span className="text-tertiary font-bold">{'>'}</span> My core strengths include <span className="text-foreground font-bold">Kubernetes orchestration, multi-cloud deployments on AWS and GCP, Infrastructure as Code with Terraform</span>, and creating efficient CI/CD pipelines using GitOps practices. I&apos;ve delivered solutions that significantly reduced deployment time and improved system reliability.
              </p>

              <p>
                <span className="text-tertiary font-bold">{'>'}</span> Outside of work, I contribute to DevOps open-source projects, explore new cloud technologies, and share knowledge with the engineering community.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <button
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1aiIl9yEuoGpzx-Qa3Eh_njbCAjTIcAZw/view?usp=sharing'
                  )
                }
                className="neo-button"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              
              <a 
                href="#contact"
                className="neo-button-secondary group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
