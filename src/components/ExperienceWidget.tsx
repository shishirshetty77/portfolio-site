'use client';

import { TacticalCard } from './TacticalCard';
import { experienceData } from '@/data/experience';
import { Network } from 'lucide-react';

export function ExperienceWidget() {
  const recentExperience = experienceData.slice(0, 2);

  return (
    <TacticalCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 flex flex-col h-full bg-[#0d0d0d]">
      <div className="flex justify-between items-center mb-4 border-b border-[#262626] pb-2">
        <h3 className="text-[#a3a3a3] font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          <Network className="w-4 h-4" />
          SYS.CAREER_LOGS
        </h3>
        <div className="flex gap-1.5 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
          <span className="text-xs font-mono text-[#00ff41]">LIVE</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4">
        {recentExperience.map((exp, index) => (
          <div key={index} className="relative pl-4 border-l border-[#262626] hover:border-[#00ff41] transition-colors group">
            {/* Blinking connection node */}
            <div className="absolute -left-[3.5px] top-1.5 w-[6px] h-[6px] bg-[#1c1c1c] border border-[#525252] group-hover:bg-[#00ff41] group-hover:border-[#00ff41] group-hover:shadow-[0_0_8px_rgba(0,255,65,0.4)] transition-all"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
              <h4 className="text-[#e5e5e5] font-bold text-sm group-hover:text-white transition-colors flex items-center gap-2">
                {exp.title}
                <span className="text-[#525252] text-xs font-mono hidden md:inline">@ {exp.company}</span>
              </h4>
              <span className="text-xs font-mono text-[#737373] bg-[#121212] px-1.5 py-0.5 rounded border border-[#1c1c1c] mt-1 md:mt-0 max-w-fit">
                {exp.period}
              </span>
            </div>
            
            <p className="text-[#525252] text-xs md:hidden mb-2 font-mono">
              @ {exp.company}
            </p>

            <div className="text-xs text-[#a3a3a3] line-clamp-2 leading-relaxed font-sans">
              {exp.description[0]}
            </div>
          </div>
        ))}
      </div>
    </TacticalCard>
  );
}
