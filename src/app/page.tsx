import { TerminalCarousel } from '@/components/TerminalCarousel';
import { CommandPaletteClient } from '@/components/CommandPaletteClient';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#008f11] selection:text-white pb-20 md:pb-0 flex flex-col items-center justify-center overflow-hidden">
      {/* 
        Single-screen architecture: 
        The Terminal Carousel handles focus navigation.
      */}
      <div className="w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Subtle grid branding */}
        <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between pointer-events-none opacity-50 z-20">
          <span className="font-mono text-[10px] text-[#525252] tracking-[0.2em] uppercase">SS.SYS_v3.0.0</span>
          <span className="font-mono text-[10px] text-[#525252] tracking-[0.2em] uppercase">STATUS: INTERACTIVE</span>
        </div>

        <TerminalCarousel />
        
        {/* Top-Right Hint */}
        <div className="absolute top-4 right-4 pointer-events-none z-20 hidden md:block">
          <p className="text-[10px] font-mono text-[#525252] tracking-widest border border-[#262626] bg-[#121212] px-3 py-1 rounded">
            CMD+K : GLOBAL_SYS
          </p>
        </div>
      </div>

      <CommandPaletteClient />
    </main>
  );
}
