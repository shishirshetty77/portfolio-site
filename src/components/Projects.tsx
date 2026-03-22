'use client';

import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { memo, useState } from 'react';

const ProjectCard = memo(function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof projectsData[0]; 
  index: number 
}) {
  const IconComponent = project.Icon;
  const isFirst = index === 0;
  const [isHovered, setIsHovered] = useState(false);
  
  // Assign brutalist accent colors cyclically
  const brutalColors = ['border-primary text-primary', 'border-secondary text-secondary', 'border-tertiary text-tertiary'];
  const bgColors = ['bg-primary', 'bg-secondary', 'bg-tertiary'];
  const shadows = ['rgba(255,69,0,1)', 'rgba(234,179,8,1)', 'rgba(163,230,53,1)'];
  
  const colorIndex = index % 3;
  const borderColor = brutalColors[colorIndex];
  const bgColor = bgColors[colorIndex];
  const shadowColor = shadows[colorIndex];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative ${isFirst ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      {/* Brutalist Card container */}
      <div 
        className={`relative h-full bg-background border-2 transition-all duration-200 ${isHovered ? borderColor.split(' ')[0] : 'border-border-color'} ${isFirst ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}
        style={{
          boxShadow: isHovered 
            ? `8px 8px 0px ${shadowColor}` 
            : '4px 4px 0px rgba(255,255,255,0.1)',
          transform: isHovered ? 'translate(-4px, -4px)' : 'none'
        }}
      >
        
        {/* Header section */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          {/* Icon container */}
          <div className={`relative ${isFirst ? 'p-5' : 'p-4'} border-2 transition-colors duration-200 ${isHovered ? `${bgColor} text-background border-transparent` : 'border-border-color text-foreground'}`}>
            <IconComponent className={`${isFirst ? 'w-8 h-8' : 'w-6 h-6'}`} />
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border-2 border-border-color text-gray-400 hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border-2 border-border-color text-gray-400 hover:text-foreground hover:border-secondary hover:bg-secondary/10 transition-all duration-200"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content section */}
        <div className="relative z-10">
          <h3 className={`${isFirst ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-oswald font-black mb-4 tracking-wide uppercase transition-colors duration-200 ${isHovered ? borderColor.split(' ')[1] : 'text-foreground'}`}>
            {project.title}
          </h3>
          
          <p className={`${isFirst ? 'text-lg' : 'text-base'} text-gray-300 mb-8 leading-relaxed font-mono bg-black/40 p-4 border border-white/10`}>
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
                className="px-3 py-1.5 text-xs font-mono font-bold uppercase text-gray-300 border-2 border-border-color hover:border-current transition-colors duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-tertiary" />
      
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
            <div className="h-3 w-8 bg-primary" />
            <span className="text-sm font-mono font-bold tracking-widest text-primary uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-black mb-6 tracking-tight uppercase text-foreground">
            Featured <span className="text-secondary" style={{ textShadow: '4px 4px 0px rgba(234,179,8,0.2)' }}>Projects</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl text-lg font-mono leading-relaxed bg-black/40 p-4 border border-white/10">
            <span className="text-secondary font-bold mr-2">{'>_'}</span>
            Real-world DevOps and cloud infrastructure projects showcasing Kubernetes orchestration, 
            CI/CD automation, Infrastructure as Code, and production-grade system architecture.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
            className="neo-button-secondary group inline-flex"
          >
            <Github className="w-5 h-5 mr-3" />
            <span className="relative z-10">View all projects on GitHub</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
