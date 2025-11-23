'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { Building, Calendar, ChevronRight, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
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
              <span className="font-mono text-sm tracking-widest uppercase">Career</span>
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
            &lt;Experience /&gt;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            My professional journey through the digital landscape.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border border-cyan-500 rounded-full z-10 hidden lg:block shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                  <div className="absolute inset-0 bg-cyan-500/50 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0
                      ? 'lg:text-right lg:pr-8'
                      : 'lg:text-left lg:pl-8'
                  }`}
                >
                  <div className="border border-gray-800 bg-black/40 backdrop-blur-sm p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-300">
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header */}
                    <div className="relative z-10 flex flex-col mb-4">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2 font-mono"
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? 20 : -20,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.div
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} space-y-2 text-gray-400 mb-4`}
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? 20 : -20,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-2 text-cyan-400">
                          <Building className="w-4 h-4" />
                          <span className="font-medium font-mono">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-mono">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`inline-block px-3 py-1 border border-cyan-500/30 text-cyan-300 text-xs font-mono bg-cyan-900/10 ${index % 2 === 0 ? 'lg:self-end' : 'lg:self-start'} self-start`}
                      >
                        {exp.type}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.ul
                      className={`space-y-2 mb-6 relative z-10 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`flex items-start space-x-2 text-gray-400 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}
                        >
                          <ChevronRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className={`flex flex-wrap gap-2 relative z-10 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-xs font-mono hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 group-hover:border-cyan-500 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-cyan-500 transition-colors" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
