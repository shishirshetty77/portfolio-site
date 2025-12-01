'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function KonamiCode() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const inputHistoryRef = useRef<string[]>([]);

  const triggerEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    
    // Single confetti burst for performance
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#EC4899', '#14B8A6']
    });

    setTimeout(() => setShowEasterEgg(false), 4000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newHistory = [...inputHistoryRef.current, e.key].slice(-KONAMI_CODE.length);
      inputHistoryRef.current = newHistory;
      
      if (JSON.stringify(newHistory) === JSON.stringify(KONAMI_CODE)) {
        triggerEasterEgg();
        inputHistoryRef.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerEasterEgg]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border-4 border-primary shadow-2xl text-center transform rotate-3">
            <h2 className="text-4xl font-oswald font-bold text-primary mb-2 uppercase">
              Level Up!
            </h2>
            <p className="text-xl font-mono font-bold text-gray-700 dark:text-gray-300">
              Cheat Code Activated
            </p>
            <div className="mt-4 text-6xl">🚀</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
