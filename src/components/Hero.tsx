'use client';

import { useTheme } from '@/components/ThemeProvider';
import { useCatMode } from '@/context/CatModeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { isCatMode, toggleCatMode } = useCatMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; opacity: number }>
  >([]);
  const [nameParticles, setNameParticles] = useState<
    Array<{ id: number; x: number; y: number; moveX: number; moveY: number }>
  >([]);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    // Initialize particles only on client
    if (typeof window !== 'undefined') {
      const initialParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.2,
      }));
      setParticles(initialParticles);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNameClick = () => {
    setShowMatrix(true);
    setTimeout(() => setShowMatrix(false), 3000);
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden cursor-none pt-16"
      style={{
        background:
          theme === 'dark'
            ? 'linear-gradient(45deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #1a1a2e 100%)'
            : 'linear-gradient(45deg, #FFF8DC 0%, #FEF3C7 25%, #F4E4C7 50%, #FFF8DC 75%, #FEF3C7 100%)',
      }}
    >
      {/* Invisible clickable div */}
      <div
        onClick={toggleCatMode}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '20px',
          height: '20px',
          cursor: 'pointer',
        }}
      />

      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed pointer-events-none z-40 w-6 h-6 rounded-full mix-blend-difference"
        style={{
          background: theme === 'dark' ? '#ffffff' : '#000000',
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: theme === 'dark' ? '#60a5fa' : '#1e40af',
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            x: [particle.x, particle.x + 50, particle.x],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Matrix Rain Effect */}
      <AnimatePresence>
        {showMatrix && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 pointer-events-none"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 text-sm font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {Math.random().toString(36).substring(2, 8)}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-500/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-500/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Elegant Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <motion.div
            onClick={handleNameClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="cursor-pointer select-none relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-wide mb-3"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
                textShadow:
                  theme === 'dark'
                    ? '0 0 30px rgba(96, 165, 250, 0.3)'
                    : '0 0 30px rgba(30, 64, 175, 0.2)',
              }}
            >
              {['S', 'h', 'i', 's', 'h', 'i', 'r'].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.2,
                    color: theme === 'dark' ? '#60a5fa' : '#3b82f6',
                  }}
                  className="inline-block transition-all duration-300"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="mx-4 text-gray-400 dark:text-gray-600">•</span>
              {['S', 'h', 'e', 't', 't', 'y'].map((letter, index) => (
                <motion.span
                  key={index + 7}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + 7) * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.2,
                    color: theme === 'dark' ? '#a78bfa' : '#8b5cf6',
                  }}
                  className="inline-block transition-all duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Floating Particles around name */}
            {isClient &&
              Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  suppressHydrationWarning
                />
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative"
          >
            <motion.p
              className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 tracking-wider"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Dream it Build it.
            </motion.p>

            {/* Elegant Underline Animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-4 origin-center"
            />
          </motion.div>
        </motion.div>

        {/* Floating Action Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center space-x-12 mb-20"
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/shishirshetty77',
              color: 'hover:bg-gray-600',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/shishir-shetty-715028230/',
              color: 'hover:bg-blue-600',
            },
            {
              icon: Mail,
              href: 'mailto:shishirshetty77@gmail.com',
              color: 'hover:bg-red-600',
            },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700 ${color} transition-all duration-300`}
              whileHover={{
                scale: 1.3,
                rotate: 10,
                y: -10,
              }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Cat Mode Badge */}
      <AnimatePresence>
        {isCatMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-20 left-8 z-40 bg-purple-500/90 backdrop-blur-lg rounded-full px-6 py-3 flex items-center space-x-2 border border-purple-400/30"
          >
            <span className="text-white font-medium">Cat Mode ON 🐾</span>
            <button
              onClick={toggleCatMode}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cat Emojis */}
      <AnimatePresence>
        {isCatMode && isClient && (
          <div className="fixed inset-0 pointer-events-none z-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [100, -100, 100],
                  x: [0, Math.random() * 200 - 100, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute text-4xl select-none"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                suppressHydrationWarning
              >
                {['🐱', '🐾', '😸', '😺', '🙀', '😿', '😹', '😻'][i]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Paw Print Confetti */}
      <AnimatePresence>
        {isCatMode && isClient && (
          <div className="fixed inset-0 pointer-events-none z-30">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: -50 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: ['-10vh', '110vh'],
                  x: [0, Math.random() * 100 - 50],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute text-2xl select-none"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
                suppressHydrationWarning
              >
                🐾
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="text-sm font-medium tracking-wider">
            EXPLORE MORE
          </span>
          <motion.div
            animate={{ rotate: [0, 180, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
