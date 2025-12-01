'use client';

import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof projectsData[0]; 
  index: number 
}) {
  const IconComponent = project.Icon;
  const isFirst = index === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${isFirst ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      {/* Card container */}
      <div className={`relative h-full rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 ${isFirst ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
        
        {/* Ambient hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
        
        {/* Top corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header section */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          {/* Icon container */}
          <div className={`relative ${isFirst ? 'p-5' : 'p-4'} rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <IconComponent className={`${isFirst ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content section */}
        <div className="relative z-10">
          <h3 className={`${isFirst ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-oswald font-bold mb-3 tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 transition-all duration-300`}>
            {project.title}
          </h3>
          
          <p className={`${isFirst ? 'text-base' : 'text-sm'} text-gray-400 mb-6 leading-relaxed font-light`}>
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tag, tagIndex) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + tagIndex * 0.03 }}
                className="px-3 py-1.5 text-xs font-mono font-medium text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/5 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
});

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-sm font-mono font-medium tracking-wider text-violet-400 uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-6 tracking-tight">
            <span className="text-white">Projects</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Real-world DevOps and cloud infrastructure projects showcasing Kubernetes orchestration, 
            CI/CD automation, Infrastructure as Code, and production-grade system architecture.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <a 
            href="https://github.com/shishirshetty77" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-full hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 group"
          >
            <Github className="w-4 h-4" />
            <span>View all projects on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
