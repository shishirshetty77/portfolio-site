'use client';

import { useCatMode } from '@/context/CatModeContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { toggleCatMode } = useCatMode();

  return (
    <footer className="w-full py-8 px-4 border-t border-gray-800 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm font-mono">
              © 2025 Shishir Shetty. <span className="text-cyan-500">System_Status: Online</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-gray-500 text-sm font-mono">
              Built_With: <span className="text-cyan-400">Next.js</span> + <span className="text-purple-400">Tailwind</span>
            </div>

            <motion.button
              onClick={toggleCatMode}
              className="text-gray-600 hover:text-red-500 text-xs font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer select-none border border-transparent hover:border-red-500/30 px-2 py-1 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ DO_NOT_ACCESS_PROTOCOL_77 ] 🐾
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
