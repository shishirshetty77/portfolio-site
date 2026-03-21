'use client';

import { TacticalCard } from './TacticalCard';
import { Play, Pause, Volume2, VolumeX, Disc3 } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function LiveSpotifyWidget() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bars, setBars] = useState<number[]>(Array(24).fill(2));
  const [rotation, setRotation] = useState(0);

  // Spectrum — two rows of asymmetric bars for a waveform feel
  useEffect(() => {
    if (!isPlaying) {
      setBars(Array(24).fill(2));
      return;
    }
    const interval = setInterval(() => {
      setBars(() =>
        Array(24).fill(0).map((_, i) => {
          // Create a wave shape — higher in the middle
          const center = 12;
          const dist = Math.abs(i - center);
          const base = Math.max(4, 20 - dist * 1.5);
          return Math.floor(base + Math.random() * 10);
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Vinyl rotation
  useEffect(() => {
    if (!isPlaying) return;
    let raf: number;
    const spin = () => {
      setRotation(prev => (prev + 0.8) % 360);
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying]);

  // Audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); } else { audio.play(); }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  }, [duration]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <TacticalCard className="col-span-1 border border-[#262626] bg-[#0d0d0d] flex flex-col justify-between group h-full overflow-hidden">
      <audio ref={audioRef} src="/jadu.mp3" preload="metadata" />

      {/* Visual section — album art / vinyl */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Ambient glow behind vinyl */}
        <div className={`absolute w-32 h-32 rounded-full blur-3xl transition-opacity duration-700 ${
          isPlaying ? 'opacity-30' : 'opacity-0'
        }`} style={{
          background: 'radial-gradient(circle, rgba(0,255,65,0.4) 0%, rgba(34,211,238,0.2) 50%, transparent 70%)',
        }}></div>

        {/* Vinyl disc */}
        <div
          className="relative w-28 h-28 md:w-36 md:h-36 cursor-pointer group/vinyl"
          onClick={togglePlay}
        >
          {/* Outer ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
              isPlaying ? 'border-[#00ff41]/40' : 'border-[#262626]'
            }`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* Vinyl grooves */}
            <div className="absolute inset-2 rounded-full border border-[#1a1a1a]"></div>
            <div className="absolute inset-4 rounded-full border border-[#181818]"></div>
            <div className="absolute inset-6 rounded-full border border-[#1a1a1a]"></div>
            <div className="absolute inset-8 rounded-full border border-[#181818]"></div>
            <div className="absolute inset-10 rounded-full border border-[#1a1a1a]"></div>
            {/* Center label */}
            <div className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] border border-[#333] flex items-center justify-center">
              <Disc3 className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isPlaying ? 'text-[#00ff41]' : 'text-[#525252]'}`} />
            </div>
            {/* Shine streak */}
            <div className="absolute top-2 left-1/2 w-[1px] h-[40%] bg-gradient-to-b from-white/10 to-transparent rotate-[30deg] origin-bottom"></div>
          </div>

          {/* Play/Pause overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/vinyl:opacity-100 transition-opacity bg-black/20 rounded-full">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white drop-shadow-lg" />
            ) : (
              <Play className="w-8 h-8 text-white drop-shadow-lg ml-1" />
            )}
          </div>
        </div>
      </div>

      {/* Waveform visualizer */}
      <div className="flex items-end justify-center gap-[2px] h-8 px-4 mb-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className="w-[3px] rounded-t-sm transition-all duration-100 ease-out"
            style={{
              height: `${isPlaying ? height : 2}px`,
              background: isPlaying
                ? `linear-gradient(to top, #00ff41 ${30 - i}%, #22d3ee ${80 + i}%)`
                : '#262626',
              opacity: isPlaying ? 0.7 + Math.random() * 0.3 : 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Track info */}
      <div className="px-4 mb-2 text-center">
        <div className="text-sm font-bold text-[#e5e5e5] truncate">Jadu</div>
        <div className="text-[10px] font-mono text-[#525252] uppercase tracking-[0.15em]">
          local · portfolio vibes
        </div>
      </div>

      {/* Scrubber / progress */}
      <div className="px-4 mb-1">
        <div
          className="relative w-full h-1.5 bg-[#1a1a1a] rounded-full cursor-pointer group/bar overflow-hidden"
          onClick={handleSeek}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#00ff41] to-cyan-400 transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          ></div>
          {/* Playhead dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_6px_rgba(0,255,65,0.5)] opacity-0 group-hover/bar:opacity-100 transition-opacity"
            style={{ left: `calc(${progress}% - 6px)` }}
          ></div>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-[#3a3a3a] mt-0.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[#1a1a1a]">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
            isPlaying
              ? 'bg-[#00ff41]/10 border-[#00ff41]/30 text-[#00ff41]'
              : 'bg-[#1c1c1c] border-[#262626] text-[#737373] hover:border-[#525252] hover:text-[#d4d4d4]'
          }`}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          <span className="text-[10px] font-mono tracking-wider">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
        </button>

        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-[#1c1c1c] transition-colors cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-[#3a3a3a]" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#525252] hover:text-[#a3a3a3] transition-colors" />
          )}
        </button>
      </div>
    </TacticalCard>
  );
}
