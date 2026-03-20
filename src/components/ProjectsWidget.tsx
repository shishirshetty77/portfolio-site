'use client';

import { TacticalCard } from './TacticalCard';
import { projectsData } from '@/data/projects';
import { FolderGit2, ExternalLink } from 'lucide-react';

export function ProjectsWidget() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <TacticalCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 flex flex-col group h-full">
      <div className="flex justify-between items-center mb-4 border-b border-[#262626] pb-2">
        <h3 className="text-[#a3a3a3] font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          <FolderGit2 className="w-4 h-4" />
          ACTIVE_PROJECTS
        </h3>
        <span className="text-xs font-mono bg-[#1c1c1c] text-[#737373] px-2 py-0.5 rounded border border-[#262626]">
          {featuredProjects.length} OF {projectsData.length}
        </span>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
        {featuredProjects.map((project, i) => (
          <a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between bg-[#121212] border border-[#262626] p-3 rounded-md hover:border-[#00ff41] transition-colors group/item relative overflow-hidden h-full"
          >
            {/* Background scanline effect on hover */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex justify-between items-start mb-2">
                <project.Icon className="w-5 h-5 text-[#737373] group-hover/item:text-[#00ff41] transition-colors" />
                <ExternalLink className="w-3 h-3 text-[#525252] group-hover/item:text-[#00ff41] transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#d4d4d4] group-hover/item:text-white mb-1 line-clamp-1">
                {project.title}
              </h4>
              <p className="text-xs text-[#737373] line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="relative z-10 w-full mt-3 flex flex-wrap gap-1">
              {project.technologies.slice(0, 2).map((tech, j) => (
                <span key={j} className="text-[9px] uppercase tracking-wider bg-[#1c1c1c] border border-[#262626] text-[#a3a3a3] px-1.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className="text-[9px] uppercase tracking-wider text-[#737373] px-1 py-0.5">
                  +{project.technologies.length - 2}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </TacticalCard>
  );
}
