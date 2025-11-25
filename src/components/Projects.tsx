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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 tracking-tight">
            FEATURED <span className="text-gray-400 font-light">WORK</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A selection of projects that demonstrate my passion for building scalable, resilient, and automated infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neo-card group flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="p-8 pb-0 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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

                <h3 className="text-2xl font-bold mb-3 font-oswald tracking-wide group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Card Footer - Tech Stack */}
              <div className="p-8 pt-0 mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-6" />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-foreground/5 rounded-full border border-transparent hover:border-foreground/10 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
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
