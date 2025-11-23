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
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Here are some of my recent projects that showcase my skills in
            modern web development and design.
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
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6">
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Icon */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <motion.h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-3"
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
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
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
