import React, { createContext, useState, useContext, useEffect } from 'react'
import { Howl } from 'howler'

const MusicContext = createContext()

export const MusicProvider = ({ children }) => {
  const [sound] = useState(
    new Howl({
      src: ['/assets/music/main-theme.mp3'],
      loop: true,
    })
  )

  useEffect(() => {
    playSound()

    return () => {
      stopSound()
    }
  }, [sound])

  const playSound = () => {
    sound.play()
  }

  const stopSound = () => {
    sound.stop()
  }

  return (
    <MusicContext.Provider value={{ playSound, stopSound }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const context = useContext(MusicContext)

  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider')
  }

  return context
}
