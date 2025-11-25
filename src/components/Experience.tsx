'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-4 sm:mb-6 tracking-tight">
            CAREER <span className="text-gray-400 font-light">JOURNEY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed">
            My professional path through the digital landscape, building systems and leading teams.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-gradient-to-b from-primary/20 via-secondary/20 to-tertiary/20 ml-3 md:ml-6 space-y-12 md:space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Enhanced Timeline Dot with glow */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300 shadow-lg shadow-primary/50" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-oswald tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="font-mono text-sm text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-black/10 dark:border-white/20 shadow-sm">
                  {exp.period}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-lg font-medium text-primary mb-1">
                  {exp.company}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span>{exp.type}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-700 dark:text-gray-400 leading-relaxed text-base pl-4 border-l-2 border-gray-300 dark:border-white/10 hover:border-primary/50 hover:text-foreground transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-xs font-mono font-semibold text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-black/10 dark:border-white/20 hover:border-primary/50 hover:bg-white dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
