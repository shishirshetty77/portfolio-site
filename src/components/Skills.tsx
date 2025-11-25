'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'

export function Skills() {
  const glowColors = [
    '#ef4444', // red
    '#3b82f6', // blue
    '#f97316', // orange
    '#a855f7', // purple
    '#22c55e', // green
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#eab308', // yellow
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
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
          {skillsData.map((skill, index) => {
            const color = glowColors[index % glowColors.length];
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${color}00`,
                    `0 0 20px ${color}60`,
                    `0 0 0px ${color}00`,
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: `0 0 30px ${color}`,
                  transition: { duration: 0.2 } 
                }}
                className="relative group cursor-pointer select-none rounded-2xl"
              >
                {/* Liquid Glass Container */}
                <div 
                  className="relative px-6 py-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-sm overflow-hidden"
                >
                  {/* Glossy Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
                  
                  <span 
                    className="relative z-10 text-lg font-oswald font-bold text-gray-800 dark:text-white uppercase tracking-wide"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                  >
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
