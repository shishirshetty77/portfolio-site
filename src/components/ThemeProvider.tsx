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
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0C0A09] transition-opacity duration-500 ${mounted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transitionDelay: '1.4s' }}
        >
          <div className="relative flex flex-col items-center gap-8 max-w-xs w-full px-6">
            {/* Brutalist Logo Block */}
            <div className="relative p-6 border-4 border-primary bg-background shadow-[8px_8px_0_rgba(255,69,0,0.3)] animate-brutalist-pulse">
              <span className="text-6xl font-oswald font-black text-primary tracking-tighter uppercase">
                SS
              </span>
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-tertiary" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary" />
            </div>
            
            <div className="w-full space-y-4">
              {/* Terminal Text */}
              <div className="font-mono text-xs font-bold tracking-widest text-primary/80 uppercase flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <span className="text-tertiary">{">"}</span> INITIALIZING_SYSTEM...
                </span>
                <span className="flex items-center gap-2 animate-terminal-flicker" style={{ animationDelay: '0.4s' }}>
                  <span className="text-tertiary">{">"}</span> CLOUD_ENGINEER_BOOTLOADER_v2.0
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-4 border-2 border-border-strong bg-background p-0.5">
                <div className="h-full bg-primary animate-loader-block" />
              </div>

              <div className="flex justify-between font-mono text-[10px] font-bold text-gray-500 uppercase">
                <span>Memory: OK</span>
                <span className="animate-pulse">Status: Syncing...</span>
              </div>
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
