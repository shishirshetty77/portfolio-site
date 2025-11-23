'use client';

import { useTheme } from '@/components/ThemeProvider';
import { useCatMode } from '@/context/CatModeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isCatMode } = useCatMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNavHovered, setIsNavHovered] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === 'home' ? '' : sectionId);
        if (element) {
          const offsetTop = sectionId === 'home' ? 0 : element.offsetTop;
          const offsetHeight = sectionId === 'home' ? window.innerHeight : element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(2, 4, 8, 0.8)'
            : 'transparent'
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 0%, rgba(0, 240, 255, 0.1) 50%, transparent 100%)',
              'linear-gradient(45deg, transparent 0%, rgba(112, 0, 255, 0.1) 50%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Dynamic Light Beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.05), transparent 40%)`
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 0%, rgba(0, 240, 255, 0.1) 50%, transparent 100%)',
              'linear-gradient(45deg, transparent 0%, rgba(112, 0, 255, 0.1) 50%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Dynamic Light Beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.05), transparent 40%)`
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating Particles - Only on desktop */}
        {isNavHovered && typeof window !== 'undefined' && window.innerWidth >= 768 && Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full pointer-events-none bg-cyan-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [64, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: '100%'
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <motion.div 
                className="relative bg-black/40 backdrop-blur-md rounded-none p-1.5 lg:p-2 border border-cyan-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-none bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-sm"
                  animate={{
                    opacity: isNavHovered ? 0.8 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative flex items-baseline space-x-0.5 lg:space-x-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative px-2 lg:px-4 py-1.5 lg:py-2 rounded-none text-xs lg:text-sm font-mono transition-all duration-300 group ${
                        activeSection === item.id
                          ? 'text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                          : 'text-gray-400 hover:text-cyan-200'
                      }`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active indicator with gradient */}
                      {activeSection === item.id && (
                        <>
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/50"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                          {/* Sparkle effects */}
                          <motion.div
                            className="absolute -top-0.5 lg:-top-1 -right-0.5 lg:-right-1"
                            animate={{
                              rotate: [0, 180, 360],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          >
                            <Sparkles className="w-2 lg:w-3 h-2 lg:h-3 text-cyan-300" />
                          </motion.div>
                        </>
                      )}
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/10 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{
                          boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)'
                        }}
                      />
                      
                      <span className="relative z-10 tracking-wide uppercase text-xs">{item.label}</span>
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-cyan-500"
                        initial={{ width: 0 }}
                        animate={{
                          width: activeSection === item.id ? '100%' : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Theme Toggle - Right Side */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={toggleTheme}
              className="hidden lg:block group relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Magical glow effect */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              
              <div className="relative w-14 lg:w-16 h-7 lg:h-8 bg-black border border-cyan-500/50 rounded-full p-1 transition-all duration-500 shadow-lg">
                {/* Track decoration */}
                <div className="absolute inset-1 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full" />
                
                <motion.div
                  className="relative w-5 lg:w-6 h-5 lg:h-6 bg-cyan-900 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 border border-cyan-500"
                  animate={{
                    x: theme === 'dark' ? 20 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                >
                  <motion.div
                    animate={{
                      rotate: theme === 'dark' ? 360 : 0,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 0.6 },
                      scale: { duration: 1.5, repeat: Infinity }
                    }}
                    className="text-sm lg:text-base"
                  >
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </motion.div>
                </motion.div>
              </div>
            </motion.button>

            {/* Mobile/Tablet Navigation */}
            <div className="lg:hidden flex items-center justify-center flex-1">
              {/* Compact Navigation for tablets */}
              <div className="hidden md:flex lg:hidden items-center space-x-1 bg-white/5 dark:bg-gray-800/20 backdrop-blur-md rounded-xl p-1 border border-white/20 dark:border-gray-700/30">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet actions */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              {/* Mobile Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    rotate: theme === 'dark' ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center"
                >
                  {theme === 'dark' ? '🦉' : '☀️'}
                </motion.div>
              </motion.button>
              
              {/* Mobile menu button - only show on small screens */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 90, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/30"
            >
              {/* Background gradient for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-gray-800/10 pointer-events-none" />
              
              <div className="relative px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 relative overflow-hidden ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-gray-200/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50'
                    }`}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobileActiveTab"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10 font-semibold tracking-wide">{item.label}</span>
                    
                    {/* Sparkle for active item */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        animate={{
                          rotate: [0, 180, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
}
