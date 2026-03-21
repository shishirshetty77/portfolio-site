'use client';

import { TacticalCard } from './TacticalCard';
import { experienceData } from '@/data/experience';
import { Network, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Color mapping based on role type
const TYPE_CONFIG: Record<string, { badge: string; borderColor: string; glowClass: string }> = {
  'Full-time': {
    badge: 'badge-green',
    borderColor: 'border-l-[#00ff41]',
    glowClass: 'group-hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]',
  },
  'Internship': {
    badge: 'badge-amber',
    borderColor: 'border-l-amber-400',
    glowClass: 'group-hover:shadow-[0_0_12px_rgba(251,191,36,0.15)]',
  },
};

// Tech color mapping
const TECH_COLORS: Record<string, string> = {
  // Cloud/Infra
  GCP: 'badge-cyan', AWS: 'badge-cyan', Kubernetes: 'badge-cyan', Docker: 'badge-cyan',
  Terraform: 'badge-violet', Ansible: 'badge-violet', Helm: 'badge-violet',
  // CI/CD
  'CI/CD': 'badge-green', ArgoCD: 'badge-green', GitOps: 'badge-green', Jenkins: 'badge-green',
  // Monitoring
  Prometheus: 'badge-amber', Grafana: 'badge-amber',
  // Dev
  'Next.js': 'badge-rose', 'Node.js': 'badge-rose', React: 'badge-rose', Redis: 'badge-rose',
  Razorpay: 'badge-amber', PostgreSQL: 'badge-violet',
  // General
  JavaScript: 'badge-amber', HTML5: 'badge-rose', HTML: 'badge-rose', CSS: 'badge-cyan',
  Git: 'badge-violet', Python: 'badge-green',
};

function getTechBadge(tech: string): string {
  return TECH_COLORS[tech] || 'badge-cyan';
}

export function ExperienceWidget() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <TacticalCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 flex flex-col h-full bg-[#0d0d0d]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-[#262626] pb-2 shrink-0">
        <h3 className="text-[#a3a3a3] font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          <Network className="w-4 h-4" />
          <span className="gradient-text font-bold">SYS.CAREER_LOGS</span>
        </h3>
        <div className="flex gap-2 items-center">
          <span className="badge badge-green">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
            {experienceData.length} ENTRIES
          </span>
        </div>
      </div>

      {/* Scrollable timeline */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-1 pr-1">
        {experienceData.map((exp, index) => {
          const config = TYPE_CONFIG[exp.type] || TYPE_CONFIG['Full-time'];
          const isExpanded = expandedIndex === index;
          const isCurrent = index === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`relative pl-4 border-l-2 ${config.borderColor} transition-all group cursor-pointer rounded-r-md hover:bg-[#121212] ${config.glowClass}`}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              {/* Timeline node */}
              <div className={`absolute -left-[5px] top-3 w-[8px] h-[8px] rounded-full border-2 transition-all ${
                isCurrent
                  ? 'bg-[#00ff41] border-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.6)]'
                  : 'bg-[#1c1c1c] border-[#525252] group-hover:bg-[#00ff41] group-hover:border-[#00ff41]'
              }`}></div>

              <div className="py-3 pr-2">
                {/* Role + Company + Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {exp.type === 'Internship' ? (
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-[#00ff41] shrink-0" />
                    )}
                    <h4 className="text-[#e5e5e5] font-bold text-sm group-hover:text-white transition-colors">
                      {exp.title}
                    </h4>
                    <span className={`badge ${config.badge} text-[8px]`}>{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#737373] bg-[#121212] px-1.5 py-0.5 rounded border border-[#1c1c1c] whitespace-nowrap">
                      {exp.period}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#525252]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-[#525252]" />
                    )}
                  </div>
                </div>

                {/* Company + Location */}
                <p className="text-[#737373] text-xs font-mono mb-1">
                  @ {exp.company} · {exp.location}
                </p>

                {/* First description line (always visible) */}
                <p className="text-xs text-[#a3a3a3] leading-relaxed font-sans line-clamp-2">
                  {exp.description[0]}
                </p>

                {/* Expanded details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {/* Additional descriptions */}
                      {exp.description.slice(1).map((desc, di) => (
                        <p key={di} className="text-xs text-[#a3a3a3] leading-relaxed font-sans mt-1.5 pl-2 border-l border-[#262626]">
                          {desc}
                        </p>
                      ))}

                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.technologies.map((tech, ti) => (
                          <span key={ti} className={`badge ${getTechBadge(tech)} text-[8px]`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </TacticalCard>
  );
}
