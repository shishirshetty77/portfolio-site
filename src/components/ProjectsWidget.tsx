'use client';

import { TacticalCard } from './TacticalCard';
import { projectsData } from '@/data/projects';
import { FolderGit2, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Unique accent gradients per project
const PROJECT_ACCENTS = [
  { gradient: 'from-[#00ff41] to-cyan-400', glow: 'hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]', dot: 'bg-[#00ff41]' },
  { gradient: 'from-cyan-400 to-blue-500', glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]', dot: 'bg-cyan-400' },
  { gradient: 'from-violet-400 to-purple-500', glow: 'hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]', dot: 'bg-violet-400' },
  { gradient: 'from-amber-400 to-orange-500', glow: 'hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]', dot: 'bg-amber-400' },
  { gradient: 'from-rose-400 to-pink-500', glow: 'hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]', dot: 'bg-rose-400' },
];

// Tech tag color mapping
const TECH_BADGE: Record<string, string> = {
  // Infra
  'Apache Kafka': 'badge-cyan', Kubernetes: 'badge-cyan', Docker: 'badge-cyan',
  GKE: 'badge-cyan', Ingress: 'badge-cyan',
  // IaC
  Terraform: 'badge-violet', 'Docker Compose': 'badge-violet', Helm: 'badge-violet',
  // CI/CD
  'CI/CD': 'badge-green', ArgoCD: 'badge-green', Jenkins: 'badge-green',
  // Monitoring
  Prometheus: 'badge-amber', Grafana: 'badge-amber',
  // Languages
  'Node.js': 'badge-rose', Python: 'badge-green', Go: 'badge-cyan',
  Java: 'badge-amber', Rust: 'badge-rose', Flask: 'badge-green',
  FastAPI: 'badge-green',
  // Frontend
  React: 'badge-rose',
  // Data
  Redis: 'badge-rose', PostgreSQL: 'badge-violet', MongoDB: 'badge-green',
};

function getTechBadge(tech: string): string {
  return TECH_BADGE[tech] || 'badge-cyan';
}

export function ProjectsWidget() {
  return (
    <TacticalCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 flex flex-col group h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-[#262626] pb-2 shrink-0">
        <h3 className="text-[#a3a3a3] font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          <FolderGit2 className="w-4 h-4" />
          <span className="gradient-text font-bold">ACTIVE_PROJECTS</span>
        </h3>
        <span className="badge badge-cyan">
          {projectsData.filter(p => p.featured).length} FEATURED · {projectsData.length} TOTAL
        </span>
      </div>

      {/* Scrollable project grid */}
      <div className="flex-1 overflow-y-auto scrollbar-thin pr-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projectsData.map((project, i) => {
            const accent = PROJECT_ACCENTS[i % PROJECT_ACCENTS.length];
            return (
              <motion.a
                key={i}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`flex flex-col justify-between bg-[#121212] border border-[#262626] rounded-md transition-all group/item relative overflow-hidden h-full ${accent.glow}`}
              >
                {/* Accent gradient strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${accent.gradient} opacity-60 group-hover/item:opacity-100 transition-opacity`}></div>

                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.015)_50%)] bg-[length:100%_4px] opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="relative z-10 w-full p-3">
                  {/* Icon + Featured badge + external link */}
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded bg-[#1c1c1c] border border-[#262626] group-hover/item:border-[#525252] transition-colors`}>
                        <project.Icon className="w-4 h-4 text-[#737373] group-hover/item:text-[#00ff41] transition-colors" />
                      </div>
                      {project.featured && (
                        <span className="badge badge-amber text-[8px]">
                          <Star className="w-2.5 h-2.5" fill="currentColor" />
                          FEATURED
                        </span>
                      )}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#525252] group-hover/item:text-[#00ff41] transition-colors" />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-[#d4d4d4] group-hover/item:text-white mb-1.5 line-clamp-1">
                    {project.title}
                  </h4>
                  {/* Description */}
                  <p className="text-xs text-[#737373] line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tech tags — show more */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, j) => (
                      <span key={j} className={`badge ${getTechBadge(tech)} text-[8px]`}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="badge badge-violet text-[8px] opacity-70">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </TacticalCard>
  );
}
