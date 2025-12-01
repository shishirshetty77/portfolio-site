'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: 'dark'
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark' })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    setMounted(true)
    
    // Hide loader after animation
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1800)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {/* Loading Animation */}
      {showLoader && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0D0E] transition-opacity duration-500 ${mounted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transitionDelay: '1.2s' }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <div className="relative">
              <svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="animate-pulse"
              >
                <defs>
                  <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#loader-gradient)"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  strokeLinecap="round"
                  className="animate-loader-circle"
                />
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fill="url(#loader-gradient)"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="var(--font-oswald)"
                  className="animate-loader-text"
                >
                  SS
                </text>
              </svg>
              
              {/* Glow effect */}
              <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 animate-pulse" />
            </div>
            
            {/* Loading dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-loader-dot"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
