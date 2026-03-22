'use client';

import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { memo, useState } from 'react';

const ExperienceCard = memo(function ExperienceCard({ 
  exp, 
  index 
}: { 
  exp: typeof experienceData[0]; 
  index: number 
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Assign brutalist accent colors cyclically
  const brutalColors = ['border-primary text-primary', 'border-secondary text-secondary', 'border-tertiary text-tertiary'];
  const bgColors = ['bg-primary', 'bg-secondary', 'bg-tertiary'];
  const shadowColors = ['rgba(255,69,0,1)', 'rgba(234,179,8,1)', 'rgba(163,230,53,1)'];
  
  const colorIndex = index % 3;
  const borderColor = brutalColors[colorIndex];
  const bgColor = bgColors[colorIndex];
  const shadowColor = shadowColors[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brutalist Timeline Square */}
      <div 
        className={`absolute -left-[11px] top-2 w-5 h-5 border-2 bg-background z-10 transition-colors duration-200 ${isHovered ? bgColor + ' border-current' : 'border-border-color'}`} 
      />

      <div className={`p-6 border-2 transition-all duration-200 bg-background ${isHovered ? borderColor.split(' ')[0] : 'border-border-color'}`}
        style={{
          boxShadow: isHovered 
            ? `6px 6px 0px ${shadowColor}` 
            : '0px 0px 0px transparent',
          transform: isHovered ? 'translate(-2px, -2px)' : 'none'
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-4">
          <h3 className={`text-2xl sm:text-3xl font-black font-oswald tracking-wide uppercase transition-colors duration-200 ${isHovered ? borderColor.split(' ')[1] : 'text-foreground'}`}>
            {exp.title}
          </h3>
          <span className="font-mono text-xs sm:text-sm font-bold text-gray-300 bg-black/40 px-3 py-1 border border-white/10 uppercase tracking-widest self-start sm:self-center">
            {exp.period}
          </span>
        </div>

        <div className="mb-6">
          <div className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">
            {exp.company}
          </div>
          <div className="flex items-center gap-4 text-sm font-mono font-bold text-gray-400 uppercase">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {exp.location}
            </span>
            <span className="w-2 h-2 bg-border-color" />
            <span>{exp.type}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {exp.description.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="text-gray-300 font-mono leading-relaxed text-sm sm:text-base pl-4 border-l-4 border-border-color hover:border-current transition-colors duration-200 flex items-start"
            >
              <span className="mr-3 mt-1 text-current font-bold">{'>'}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono font-bold text-gray-300 border-2 border-border-color uppercase hover:border-current transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background border-t-2 border-border-color">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-8 bg-current text-white" />
            <span className="text-sm font-mono font-bold tracking-widest text-white uppercase">History</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-black mb-4 sm:mb-6 tracking-tight uppercase">
            CAREER <span className="text-primary" style={{ textShadow: '4px 4px 0px rgba(255,69,0,0.2)' }}>JOURNEY</span>
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg md:text-xl font-mono leading-relaxed bg-black/40 p-4 border border-white/10 mt-6">
            <span className="text-primary font-bold mr-2">{'>_'}</span>
            My professional path through the digital landscape, building systems and leading teams.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-border-color ml-3 md:ml-6 space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
