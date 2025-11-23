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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -120, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 120, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A colorful and dynamic overview of my technical skills
          </motion.p>
        </motion.div>

        {/* Magical Floating Skills */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 p-8">
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
                  scale: 1.5,
                  y: -25,
                  textShadow: `0 0 8px rgba(255,255,255,0.8), 0 0 20px ${skill.color.replace('text-', '')}`,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: [0, -10 - Math.random() * 10, 0],
                  x: [0, Math.sin(index * 0.5) * 10, 0],
                  rotate: [0, Math.sin(index * 0.3) * 5, 0]
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.1
                }}
                className={`
                  text-2xl md:text-3xl font-bold cursor-pointer select-none
                  ${skill.color}
                  hover:z-10 relative
                  transition-all duration-300
                  drop-shadow-lg
                `}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                }}
                suppressHydrationWarning
              >
                {skill.name}

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Neon Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
