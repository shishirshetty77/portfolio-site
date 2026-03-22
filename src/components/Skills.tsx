'use client'

import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background border-t-2 border-border-color">
      
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/20 rotate-12" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-secondary/20 -rotate-6" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-8 bg-tertiary" />
            <span className="text-sm font-mono font-bold tracking-widest text-tertiary uppercase">Arsenal</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-black mb-4 sm:mb-6 tracking-tight uppercase">
            DEVOPS & CLOUD <span className="text-primary block sm:inline mt-2 sm:mt-0" style={{ textShadow: '4px 4px 0px rgba(255,69,0,0.2)' }}>STACK</span>
          </h2>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg md:text-xl font-mono leading-relaxed mt-6 bg-black/40 border border-white/10 p-4">
            <span className="text-primary font-bold mr-2">{'>_'}</span>
            Production-proven tools and technologies I leverage to build, deploy, and scale cloud-native infrastructure with enterprise-grade reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
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
  
  // Assign brutalist accent colors cyclically
  const brutalColors = ['border-primary text-primary', 'border-secondary text-secondary', 'border-tertiary text-tertiary'];
  const hoverBgs = ['bg-primary', 'bg-secondary', 'bg-tertiary'];
  const shadows = ['rgba(255,69,0,1)', 'rgba(234,179,8,1)', 'rgba(163,230,53,1)'];
  
  const colorIndex = index % 3;
  const borderColor = brutalColors[colorIndex];
  const hoverBg = hoverBgs[colorIndex];
  const shadowColor = shadows[colorIndex];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-4 sm:p-5 md:p-6 bg-background border-2 border-border-color transition-all duration-200 cursor-default overflow-hidden ${isHovered ? borderColor : ''}`}
      style={{
        boxShadow: isHovered 
          ? `4px 4px 0px ${shadowColor}` 
          : 'none',
        transform: isHovered ? 'translate(-2px, -2px)' : 'none'
      }}
    >
      {/* Sharp grid overlay on hover */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200 ${hoverBg}`}
      />
      
      <div className="flex items-center gap-3 relative z-10">
        {/* Geometric marker */}
        <motion.div 
          animate={isHovered ? {
            rotate: [0, 90],
          } : {}}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`w-3 h-3 border-2 border-current transition-colors duration-200 ${isHovered ? hoverBg.replace('bg-', 'bg-') : 'bg-transparent text-gray-400'}`}
        />
        
        <span className={`font-mono text-sm sm:text-base font-bold uppercase tracking-wider transition-colors duration-200 ${isHovered ? '' : 'text-gray-300'}`}>
          {skill.name}
        </span>
      </div>
      
      {/* Decorative corner slice */}
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${borderColor}`} />
    </motion.div>
  );
}
