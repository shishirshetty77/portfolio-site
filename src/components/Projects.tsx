'use client';

import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight
} from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Multi-layered Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-4 sm:mb-6 tracking-tight px-4">
            INFRASTRUCTURE <span className="text-gray-400 font-light">PROJECTS</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
            Real-world DevOps and cloud infrastructure projects showcasing Kubernetes orchestration, CI/CD automation, Infrastructure as Code, and production-grade system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neo-card group flex flex-col h-full backdrop-blur-xl bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10"
            >
              {/* Ambient glow on hover */}
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary/0 via-secondary/0 to-tertiary/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Card Header */}
              <div className="p-6 sm:p-8 pb-0 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 text-foreground group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500 shadow-lg">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-foreground/5 text-gray-400 hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-foreground/5 text-gray-400 hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 font-oswald tracking-wide group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-800 dark:text-gray-400 mb-6 leading-relaxed text-sm font-medium">
                  {project.description}
                </p>
              </div>

              {/* Card Footer - Tech Stack */}
              <div className="p-6 sm:p-8 pt-0 mt-auto relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-6" />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 text-xs font-mono font-semibold text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-black/10 dark:border-white/20 hover:border-primary/50 hover:bg-white dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <a 
            href="https://github.com/shishirshetty77" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1"
          >
            View all projects on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
