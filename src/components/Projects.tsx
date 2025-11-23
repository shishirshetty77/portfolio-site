'use client';

import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
} from 'lucide-react';

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 text-cyan-500 mb-2">
              <span className="h-px w-8 bg-cyan-500"></span>
              <span className="font-mono text-sm tracking-widest uppercase">Portfolio</span>
              <span className="h-px w-8 bg-cyan-500"></span>
            </div>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            &lt;Featured Projects /&gt;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Deploying scalable solutions and engineering digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-sm p-6 h-full overflow-hidden transition-colors duration-300 hover:border-cyan-500/50">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.featured && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-xs font-mono border-l border-b border-cyan-500/50 flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Project Icon */}
                <div className="mb-6 relative z-10">
                  <div
                    className={`w-12 h-12 border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mb-6 leading-relaxed text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-xs font-mono group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex space-x-4 mt-auto pt-4 border-t border-gray-800 group-hover:border-cyan-500/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>CODE</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </motion.a>
                  </motion.div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 group-hover:border-cyan-500 transition-colors z-20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-cyan-500 transition-colors z-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
