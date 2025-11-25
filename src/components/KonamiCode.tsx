'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export function KonamiCode() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [inputHistory, setInputHistory] = useState<string[]>([]);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      const newHistory = [...inputHistory, e.key];
      if (newHistory.length > konamiCode.length) {
        newHistory.shift();
      }
      setInputHistory(newHistory);

      if (JSON.stringify(newHistory) === JSON.stringify(konamiCode)) {
        triggerEasterEgg();
        setInputHistory([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputHistory]);

  const triggerEasterEgg = () => {
    setShowEasterEgg(true);
    
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366F1', '#EC4899', '#14B8A6']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366F1', '#EC4899', '#14B8A6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => setShowEasterEgg(false), 5000);
  };

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
