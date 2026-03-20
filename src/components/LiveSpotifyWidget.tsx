'use client';

import useSWR from 'swr';
import { TacticalCard } from './TacticalCard';
import { Music, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

// Mock fetcher to simulate varying data if needed structure
const mockFetcher = () => new Promise<{isPlaying: boolean, title: string, artist: string}>(resolve => {
  setTimeout(() => resolve({
    isPlaying: true,
    title: 'The Matrix Score',
    artist: 'Don Davis',
  }), 1000);
});

export function LiveSpotifyWidget() {
  const { data, isLoading } = useSWR('spotify-mock', mockFetcher, { fallbackData: { isPlaying: false, title: 'Not Playing', artist: '' } });
  
  // Audio spectrum visualizer mock
  const [bars, setBars] = useState<number[]>(Array(8).fill(10));
  
  useEffect(() => {
    if (!data?.isPlaying) return;
    
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 20) + 5));
    }, 150);
    
    return () => clearInterval(interval);
  }, [data?.isPlaying]);

  return (
    <TacticalCard className="col-span-1 border border-[#262626] bg-[#0d0d0d] flex flex-col justify-between group h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-[#a3a3a3] font-mono text-sm uppercase tracking-widest">
          <Music className="w-4 h-4" />
          MEDIA_SYS
        </div>
        <Activity className={`w-4 h-4 ${data?.isPlaying ? 'text-[#00ff41]' : 'text-[#525252]'}`} />
      </div>

      <div className="flex-1 flex flex-col justify-end gap-3">
        {isLoading ? (
          <div className="text-[#525252] font-mono text-sm">INITIALIZING...</div>
        ) : (
          <>
            <div className="flex items-end gap-1 h-6">
              {data?.isPlaying ? bars.map((height, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-[#00ff41] transition-all duration-150 ease-linear rounded-t-sm"
                  style={{ height: `${height}px` }}
                ></div>
              )) : (
                <div className="h-0.5 w-full bg-[#262626]"></div>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-[#d4d4d4] truncate leading-tight">
                {data?.title}
              </div>
              <div className="text-[#737373] text-xs font-mono uppercase tracking-widest truncate">
                {data?.artist || 'SYSTEM IDLE'}
              </div>
            </div>
          </>
        )}
      </div>
    </TacticalCard>
  );
}
