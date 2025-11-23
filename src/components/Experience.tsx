'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
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
            <div className="bg-primary/10 text-primary px-4 py-1 font-mono font-bold text-sm uppercase tracking-widest rounded-full">
              Career
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto text-lg"
          >
            My professional journey through the digital landscape.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800 hidden lg:block" />

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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary rounded-full z-10 hidden lg:block shadow-sm" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0
                      ? 'lg:text-right lg:pr-8'
                      : 'lg:text-left lg:pl-8'
                  }`}
                >
                  <div className="neo-card p-8 relative h-full">
                    
                    {/* Header */}
                    <div className="relative z-10 flex flex-col mb-4">
                      <motion.h3
                        className="text-2xl font-oswald font-bold text-foreground mb-2 uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {exp.title}
                      </motion.h3>
                      
                      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} space-y-2 text-gray-600 dark:text-gray-400 mb-4`}>
                        <div className="flex items-center space-x-2 font-bold text-foreground">
                          <Building className="w-4 h-4" />
                          <span className="font-mono">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-mono bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-secondary/10 text-secondary ${index % 2 === 0 ? 'lg:self-end' : 'lg:self-start'} self-start`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-6 relative z-10 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 relative z-10 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold font-mono rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
