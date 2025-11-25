'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Color mapping for vibrant gradients
const colorMap: { [key: string]: { from: string; to: string; glow: string; shadow: string } } = {
  'text-cyan-400': { from: '#06B6D4', to: '#0891B2', glow: 'rgba(6, 182, 212, 0.4)', shadow: 'rgba(6, 182, 212, 0.3)' },
  'text-blue-500': { from: '#3B82F6', to: '#2563EB', glow: 'rgba(59, 130, 246, 0.4)', shadow: 'rgba(59, 130, 246, 0.3)' },
  'text-pink-400': { from: '#F472B6', to: '#EC4899', glow: 'rgba(244, 114, 182, 0.4)', shadow: 'rgba(244, 114, 182, 0.3)' },
  'text-red-400': { from: '#F87171', to: '#EF4444', glow: 'rgba(248, 113, 113, 0.4)', shadow: 'rgba(248, 113, 113, 0.3)' },
  'text-green-400': { from: '#4ADE80', to: '#22C55E', glow: 'rgba(74, 222, 128, 0.4)', shadow: 'rgba(74, 222, 128, 0.3)' },
  'text-purple-400': { from: '#C084FC', to: '#A855F7', glow: 'rgba(192, 132, 252, 0.4)', shadow: 'rgba(192, 132, 252, 0.3)' },
  'text-orange-400': { from: '#FB923C', to: '#F97316', glow: 'rgba(251, 146, 60, 0.4)', shadow: 'rgba(251, 146, 60, 0.3)' },
  'text-pink-600': { from: '#DB2777', to: '#BE185D', glow: 'rgba(219, 39, 119, 0.4)', shadow: 'rgba(219, 39, 119, 0.3)' },
  'text-yellow-400': { from: '#FACC15', to: '#EAB308', glow: 'rgba(250, 204, 21, 0.4)', shadow: 'rgba(250, 204, 21, 0.3)' },
  'text-blue-300': { from: '#93C5FD', to: '#60A5FA', glow: 'rgba(147, 197, 253, 0.4)', shadow: 'rgba(147, 197, 253, 0.3)' },
  'text-indigo-400': { from: '#818CF8', to: '#6366F1', glow: 'rgba(129, 140, 248, 0.4)', shadow: 'rgba(129, 140, 248, 0.3)' },
  'text-blue-600': { from: '#2563EB', to: '#1D4ED8', glow: 'rgba(37, 99, 235, 0.4)', shadow: 'rgba(37, 99, 235, 0.3)' },
  'text-green-500': { from: '#22C55E', to: '#16A34A', glow: 'rgba(34, 197, 94, 0.4)', shadow: 'rgba(34, 197, 94, 0.3)' },
  'text-red-500': { from: '#EF4444', to: '#DC2626', glow: 'rgba(239, 68, 68, 0.4)', shadow: 'rgba(239, 68, 68, 0.3)' },
  'text-pink-500': { from: '#EC4899', to: '#DB2777', glow: 'rgba(236, 72, 153, 0.4)', shadow: 'rgba(236, 72, 153, 0.3)' },
  'text-teal-400': { from: '#2DD4BF', to: '#14B8A6', glow: 'rgba(45, 212, 191, 0.4)', shadow: 'rgba(45, 212, 191, 0.3)' },
};

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
  const colors = colorMap[skill.color] || colorMap['text-blue-500'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-6 bg-white/90 dark:bg-white/5 backdrop-blur-md border-2 border-gray-200/80 dark:border-white/10 rounded-2xl hover:border-transparent transition-all duration-500 hover:scale-110 overflow-hidden cursor-default"
      style={{
        boxShadow: isHovered 
          ? `0 20px 40px ${colors.shadow}, 0 0 30px ${colors.glow}` 
          : '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Vibrant gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${colors.from}15, ${colors.to}10)`
        }}
      />
      
      {/* Glowing orb effect - signature wow moment */}
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${colors.from}, ${colors.to})`
        }}
      />
      
      <div className="flex items-center gap-4 relative z-10">
        {/* Animated icon/dot with gradient glow */}
        <motion.div 
          animate={isHovered ? {
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="relative w-3 h-3 rounded-full transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            boxShadow: isHovered ? `0 0 20px ${colors.glow}, 0 0 40px ${colors.shadow}` : 'none'
          }}
        >
          {/* Pulsing ring */}
          {isHovered && (
            <motion.div
              animate={{
                scale: [1, 2, 2],
                opacity: [0.8, 0, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${colors.from}`,
              }}
            />
          )}
        </motion.div>
        
        <span 
          className="font-mono text-base font-bold transition-all duration-300"
          style={{
            color: isHovered ? colors.from : undefined
          }}
        >
          {skill.name}
        </span>
      </div>
      
      {/* Enhanced corner shimmer */}
      <motion.div
        animate={isHovered ? {
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.5, 0.5],
          rotate: [0, 90, 0],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${colors.from}40, transparent)`
        }}
      />
    </motion.div>
  );
}
