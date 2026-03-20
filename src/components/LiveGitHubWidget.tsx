'use client';

import useSWR from 'swr';
import { TacticalCard } from './TacticalCard';
import { Github, Users } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function LiveGitHubWidget() {
  const { data, error, isLoading } = useSWR('https://api.github.com/users/shishirshetty77', fetcher);

  return (
    <TacticalCard className="col-span-1 border border-[#262626] bg-[#0a0a0a] flex flex-col justify-between group h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-[#a3a3a3] font-mono text-sm uppercase tracking-widest">
          <Github className="w-4 h-4" />
          GITHUB_SYS
        </div>
        <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : error ? 'bg-red-500' : 'bg-green-500'}`}></div>
      </div>

      <div className="flex-1 flex flex-col justify-end gap-2">
        {isLoading ? (
          <div className="flex items-center gap-2 text-[#737373] text-sm font-mono">
            <span className="w-4 h-4 border-2 border-[#737373] border-t-transparent rounded-full animate-spin"></span>
            FETCHING_DATA...
          </div>
        ) : error ? (
          <div className="text-red-500 text-sm font-mono tracking-wider">ERROR_FETCHING</div>
        ) : (
          <>
            <div className="text-2xl font-heading text-[#d4d4d4] group-hover:text-[#00ff41] transition-colors leading-none tracking-tight">
              {data?.public_repos || 0}
            </div>
            <div className="text-[#a3a3a3] text-xs font-mono uppercase tracking-widest border-t border-[#262626] pt-1">
              PUBLIC REPOSITORIES
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#737373] group-hover:text-[#d4d4d4] transition-colors font-mono">
                <Users className="w-3.5 h-3.5" />
                <span>{data?.followers || 0} FLLW</span>
              </div>
            </div>
          </>
        )}
      </div>
    </TacticalCard>
  );
}
