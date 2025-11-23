'use client';

import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 dark:border-gray-800 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick('#')}
                className="text-2xl font-oswald font-bold uppercase tracking-tighter bg-primary text-white px-3 py-1 rounded-lg shadow-sm hover:bg-indigo-600 transition-all"
              >
                PORTFOLIO
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 font-oswald font-bold uppercase text-sm tracking-wide rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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
                className="hidden lg:flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-all"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3 flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 font-oswald font-bold uppercase text-lg rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={toggleTheme}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-oswald font-bold uppercase text-lg border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                  >
                    {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
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
