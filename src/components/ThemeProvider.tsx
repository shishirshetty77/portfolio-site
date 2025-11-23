'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default to light for Bold Pop theme
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.body.classList.add('dark')
        document.body.classList.remove('light')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {!mounted ? (
        <div className="min-h-screen bg-white">{children}</div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {}
    }
  }
  return context
}
