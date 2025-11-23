'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-black/80 border border-cyan-500/50 text-cyan-400 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500 opacity-50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500 opacity-50" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
