'use client';

import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState, useCallback, useMemo } from 'react';

const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          // Update active section
          const scrollPosition = window.scrollY + 100;
          for (const item of navItems) {
            const element = document.getElementById(item.id === 'home' ? '' : item.id);
            if (element) {
              const offsetTop = item.id === 'home' ? 0 : element.offsetTop;
              const offsetHeight = item.id === 'home' ? window.innerHeight : element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(item.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const containerClass = useMemo(() => 
    `relative flex items-center justify-between px-2 sm:px-3 py-2 rounded-2xl transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20' 
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/30 dark:border-white/5'
    }`
  , [isScrolled]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className={containerClass}>
            
            {/* Logo / Name */}
            <button 
              onClick={() => handleNavClick('#')}
              className="px-3 py-1.5 font-oswald font-bold text-sm tracking-tight hover:text-violet-500 transition-colors"
            >
              SS
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-500/10'
                      : 'text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-500 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl border border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl overflow-hidden shadow-xl"
            >
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
