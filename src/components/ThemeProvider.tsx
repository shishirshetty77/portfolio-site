'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const initialTheme = savedTheme || 'dark'
    setTheme(initialTheme)
    
    // Apply theme immediately
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    document.documentElement.classList.toggle('light', initialTheme === 'light')
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  // Prevent flash by rendering children in dark mode until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-black dark">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {}
    }
  }
  return context
}
