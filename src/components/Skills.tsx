'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
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
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: typeof skillsData[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-5 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-2xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary/20 overflow-hidden cursor-default"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${skill.color.replace('text-', 'rgb(var(--color-'))}20, transparent)`
        }}
      />
      
      {/* Glowing orb effect - signature wow moment */}
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl ${skill.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />
      
      <div className="flex items-center gap-3 relative z-10">
        {/* Pulsing dot indicator with glow */}
        <motion.div 
          animate={isHovered ? {
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 0 0 rgba(var(--color-primary), 0)',
              `0 0 12px 4px ${skill.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : skill.color.includes('purple') ? 'rgba(139, 92, 246, 0.4)' : skill.color.includes('green') ? 'rgba(16, 185, 129, 0.4)' : skill.color.includes('yellow') ? 'rgba(251, 191, 36, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
              '0 0 0 0 rgba(var(--color-primary), 0)',
            ]
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className={`w-2.5 h-2.5 rounded-full ${skill.color.replace('text-', 'bg-')} shadow-lg group-hover:scale-125 transition-transform duration-300`}
        />
        
        <span className="font-mono text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-foreground transition-colors duration-300">
          {skill.name}
        </span>
      </div>
      
      {/* Subtle shimmer effect on corner */}
      <motion.div
        animate={isHovered ? {
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 0.8],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${skill.color.replace('text-', 'from-')} to-transparent rounded-tr-2xl opacity-0`}
      />
    </motion.div>
  );
}
