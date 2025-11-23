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
      className="py-20 px-4 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="bg-secondary/10 text-secondary px-4 py-1 font-mono font-bold text-sm uppercase tracking-widest rounded-full">
              Portfolio
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto text-lg"
          >
            Deploying scalable solutions and engineering digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="neo-card h-full flex flex-col">
                
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 text-xs font-bold font-mono rounded-full flex items-center border border-yellow-200 dark:border-yellow-800">
                      <Sparkles className="w-3 h-3 mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Project Icon */}
                <div className="mb-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary`}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10 flex-grow">
                  <motion.h3
                    className="text-2xl font-oswald font-bold text-foreground mb-3 uppercase"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm font-medium"
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
                        className="px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold font-mono rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800"
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
                    className="flex items-center space-x-2 text-sm font-bold font-mono text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
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
                    className="flex items-center space-x-2 text-sm font-bold font-mono text-primary bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
