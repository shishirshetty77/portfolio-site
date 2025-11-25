'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 tracking-tight">
            TECHNICAL <span className="text-gray-400 font-light">ARSENAL</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A curated stack of technologies I use to build resilient, scalable, and automated systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')} opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />
                <span className="font-mono text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
