'use client';

import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-black/10 dark:border-white/20 shadow-xl dark:shadow-2xl dark:shadow-primary/10' 
              : 'bg-white/50 dark:bg-black/50 backdrop-blur-md border border-black/5 dark:border-white/10'
          }`}>
            
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick('#')}
                className="text-xl font-oswald font-bold uppercase tracking-tight text-foreground hover:opacity-70 transition-opacity"
              >
                SHISHIR<span className="text-primary">.</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-foreground bg-foreground/5'
                      : 'text-gray-500 dark:text-gray-400 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/20 text-foreground hover:bg-white dark:hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:opacity-70 transition-opacity"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              transition={{ duration: 0.3, ease: "circOut" }}
              className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl overflow-hidden shadow-xl"
            >
              <div className="p-2 space-y-1 flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 font-oswald font-bold uppercase text-sm rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-foreground/5 text-foreground'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-foreground/5 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-2 border-t border-black/5 dark:border-white/5 mt-2">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 font-oswald font-bold uppercase text-sm rounded-xl hover:bg-foreground/5 transition-all"
                  >
                    {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
