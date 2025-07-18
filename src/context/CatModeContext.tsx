'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Howl } from 'howler'
import confetti from 'canvas-confetti'

interface CatModeContextType {
  isCatMode: boolean
  toggleCatMode: () => void
  activateCatMode: () => void
  deactivateCatMode: () => void
}

const CatModeContext = createContext<CatModeContextType | undefined>(undefined)

export function CatModeProvider({ children }: { children: React.ReactNode }) {
  const [isCatMode, setIsCatMode] = useState(false)
  const [meowSound, setMeowSound] = useState<Howl | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Only run on client
    if (typeof window !== 'undefined') {
      const savedCatMode = localStorage.getItem('catMode') === 'true'
      setIsCatMode(savedCatMode)
      
      // Initialize cat meow sound
      const sound = new Howl({
        src: ['/cat.wav'], // Using cat.wav from public folder
        volume: 0.8,
        preload: true,
        onload: () => {
          console.log('Cat sound loaded successfully')
        },
        onloaderror: (id, error) => {
          console.error('Error loading cat sound:', error)
        },
        onplayerror: (id, error) => {
          console.error('Error playing cat sound:', error)
        }
      })
      setMeowSound(sound)

      // Apply cat mode styles if active
      if (savedCatMode) {
        document.body.classList.add('cat-mode')
      }

      // Cleanup function
      return () => {
        if (sound) sound.unload()
      }
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('catMode', isCatMode.toString())
      if (isCatMode) {
        document.body.classList.add('cat-mode')
      } else {
        document.body.classList.remove('cat-mode')
      }
    }
  }, [isCatMode, mounted])

  const triggerPawPrintConfetti = () => {
    // Custom paw print confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#ff9ff3'],
      shapes: ['square'],
      scalar: 1.2,
      drift: 0.5,
      ticks: 200,
      gravity: 0.8
    })

    // Additional burst for paw prints
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1']
      })
    }, 250)

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f9ca24', '#ff9ff3', '#ff6b6b']
      })
    }, 400)
  }

  const activateCatMode = () => {
    setIsCatMode(true)
    
    // Play meow sound with error handling
    if (meowSound) {
      try {
        console.log('Attempting to play cat sound...')
        const playResult = meowSound.play()
        
        // Handle promise-based play result
        if (playResult && typeof playResult === 'object' && 'then' in playResult) {
          (playResult as Promise<number>).catch((error) => {
            console.error('Failed to play cat sound:', error)
            // Fallback: try to unlock audio context on user interaction
            meowSound.once('unlock', () => {
              console.log('Audio context unlocked, retrying...')
              meowSound.play()
            })
          })
        }
      } catch (error) {
        console.error('Error playing cat sound:', error)
      }
    } else {
      console.warn('Meow sound not initialized')
    }
    
    // Trigger paw print confetti
    triggerPawPrintConfetti()
  }

  const deactivateCatMode = () => {
    setIsCatMode(false)
  }

  const toggleCatMode = () => {
    if (isCatMode) {
      deactivateCatMode()
    } else {
      activateCatMode()
    }
  }

  return (
    <CatModeContext.Provider value={{ 
      isCatMode, 
      toggleCatMode, 
      activateCatMode, 
      deactivateCatMode 
    }}>
      {children}
    </CatModeContext.Provider>
  )
}

export function useCatMode() {
  const context = useContext(CatModeContext)
  if (context === undefined) {
    // Safety fallback during development or if provider is not found
    console.warn('useCatMode used outside of CatModeProvider, using fallback')
    return {
      isCatMode: false,
      toggleCatMode: () => {},
      activateCatMode: () => {},
      deactivateCatMode: () => {}
    }
  }
  return context
}
