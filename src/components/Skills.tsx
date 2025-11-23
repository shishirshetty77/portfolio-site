'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Skills() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="bg-tertiary/10 text-tertiary px-4 py-1 font-mono font-bold text-sm uppercase tracking-widest rounded-full">
              Arsenal
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TECH STACK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto text-lg"
          >
            My arsenal of tools for building digital worlds.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
                filter: [
                  'brightness(1)',
                  'brightness(1.3)',
                  'brightness(1)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, opacity: 1, filter: 'brightness(1.2)' }}
              className="relative group cursor-pointer select-none"
            >
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <span className="text-lg font-oswald font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
