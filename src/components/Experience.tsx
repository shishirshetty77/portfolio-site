'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { Building, Calendar, ChevronRight, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            My professional journey and the experiences that have shaped my
            career
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden lg:block" />

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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10 hidden lg:block" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0
                      ? 'lg:text-right lg:pr-8'
                      : 'lg:text-left lg:pl-8'
                  }`}
                >
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
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
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2"
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${exp.color}`}
                      >
                        {exp.type}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.ul
                      className="space-y-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
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
                      className="flex flex-wrap gap-2"
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
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
