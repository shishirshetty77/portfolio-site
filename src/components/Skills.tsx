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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
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
              <span className="font-mono text-sm tracking-widest uppercase">Arsenal</span>
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
            &lt;Tech Stack /&gt;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            My arsenal of tools for building digital worlds.
          </motion.p>
        </motion.div>

        {/* Floating Skills Grid */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Central Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-6 p-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: isClient ? Math.random() * 400 - 200 : 0,
                  y: isClient ? Math.random() * 400 - 200 : 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: [0, -10 - Math.random() * 10, 0],
                  x: [0, Math.sin(index * 0.5) * 5, 0],
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.1
                }}
                className={`
                  relative group cursor-pointer select-none
                  bg-black/60 backdrop-blur-md px-6 py-3 
                  border border-gray-800 hover:border-cyan-500/50
                  transition-colors duration-300
                `}
                suppressHydrationWarning
              >
                <span className={`text-lg font-mono font-bold ${skill.color} group-hover:text-white transition-colors`}>
                  {skill.name}
                </span>

                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600 group-hover:border-cyan-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-600 group-hover:border-cyan-500 transition-colors" />
                
                {/* Scanline on hover */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines (Decorative) */}
          <svg className="absolute inset-0 pointer-events-none opacity-20" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
