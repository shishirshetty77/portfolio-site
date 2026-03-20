'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Github, Briefcase, Mail, Code, X, Music } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  const dispatchNav = useCallback((id: string) => {
    // Close the palette first, then dispatch event after a tick
    // so the carousel is not competing with React's unmount cycle
    setIsOpen(false);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('CMD_NAVIGATE', { detail: id }));
    }, 50);
  }, [setIsOpen]);

  const items = [
    { id: 'bio', label: 'View Bio', icon: Terminal, action: () => dispatchNav('bio') },
    { id: 'experience', label: 'Work History', icon: Briefcase, action: () => dispatchNav('experience') },
    { id: 'projects', label: 'Explore Projects', icon: Code, action: () => dispatchNav('projects') },
    { id: 'github-widget', label: 'GitHub Stats', icon: Github, action: () => dispatchNav('github') },
    { id: 'spotify-widget', label: 'Now Playing', icon: Music, action: () => dispatchNav('spotify') },
    { id: 'github-link', label: 'Open GitHub Profile', icon: Github, action: () => window.open('https://github.com/shishirshetty77', '_blank') },
    { id: 'contact', label: 'Send Email', icon: Mail, action: () => { window.location.href = 'mailto:shishirshetty77@gmail.com'; } },
  ];

  const filteredItems = items.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg p-4"
          >
            <div className="tactical-panel tactical-shadow bracket-corners w-full overflow-hidden flex flex-col pointer-events-auto shadow-2xl">
              {/* Header/Input */}
              <div className="relative flex items-center p-4 border-b border-[#262626]">
                <Search className="absolute left-4 w-5 h-5 text-[#737373]" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-[#d4d4d4] placeholder-[#737373] outline-none pl-10 pr-10 md:text-lg focus:ring-0 font-mono"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 p-1 hover:bg-[#262626] rounded-sm transition-colors"
                >
                  <X className="w-4 h-4 text-[#737373]" />
                </button>
              </div>

              {/* Results list */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="p-4 text-center text-[#737373] font-mono text-sm">
                    No results found.
                  </div>
                ) : (
                  <ul>
                    {filteredItems.map((item, index) => (
                      <li key={item.id}>
                        <button
                          onClick={item.action}
                          className="w-full text-left flex items-center gap-3 p-3 rounded-md hover:bg-[#262626] focus:bg-[#262626] outline-none transition-colors group cursor-pointer"
                        >
                          <item.icon className="w-4 h-4 text-[#737373] group-hover:text-[#00ff41] transition-colors" />
                          <span className="text-[#a3a3a3] group-hover:text-white transition-colors">{item.label}</span>
                          {index === 0 && search === '' && (
                            <span className="ml-auto text-[10px] bg-[#1c1c1c] text-[#737373] px-1.5 py-0.5 rounded uppercase tracking-wider border border-[#262626]">
                              Enter
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-3 bg-[#121212] border-t border-[#262626] flex justify-between items-center text-xs text-[#525252] font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><kbd className="bg-[#1c1c1c] px-1.5 rounded border border-[#262626]">↑↓</kbd> to navigate</span>
                  <span className="flex items-center gap-1"><kbd className="bg-[#1c1c1c] px-1.5 rounded border border-[#262626]">esc</kbd> to close</span>
                </div>
                <span>SYS.CMD_PALETTE</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
