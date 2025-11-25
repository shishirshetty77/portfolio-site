'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 tracking-tight">
            CAREER <span className="text-gray-400 font-light">JOURNEY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            My professional path through the digital landscape, building systems and leading teams.
          </p>
        </motion.div>

        <div className="relative border-l border-foreground/10 ml-3 md:ml-6 space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground ring-4 ring-background" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold font-oswald tracking-wide text-foreground">
                  {exp.title}
                </h3>
                <span className="font-mono text-sm text-gray-500 dark:text-gray-400 bg-foreground/5 px-3 py-1 rounded-full">
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
                    className="text-gray-600 dark:text-gray-400 leading-relaxed text-base pl-4 border-l-2 border-foreground/5 hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-foreground/5 rounded-md border border-transparent hover:border-foreground/10 transition-colors cursor-default"
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
