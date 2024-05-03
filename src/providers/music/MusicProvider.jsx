import React, { createContext, useState, useContext, useEffect } from 'react'
import { Howl } from 'howler'

const MusicContext = createContext()

const initialState = {
  mainTheme: new Howl({
    src: ['/assets/music/main-theme.mp3'],
    loop: true,
  }),
  thunder: new Howl({
    src: ['/assets/sounds/thunder.mp3'],
    loop: true,
  }),
  level: new Howl({
    src: ['/assets/music/level-theme.mp3'],
    loop: true,
  }),
  collect: new Howl({
    src: ['/assets/sounds/collect.mp3'],
  }),
}

export const MusicProvider = ({ children }) => {
  const [sounds, setSounds] = useState(initialState)
  const [activeSound, setActiveSound] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  const playSound = (soundKey) => {
    if (sounds[soundKey] && isPlaying) {
      sounds[soundKey].play()
      setActiveSound([...activeSound, soundKey])
    }
  }

  const pauseSound = (soundKey) => {
    if (sounds[soundKey]) {
      sounds[soundKey].pause()
    }
  }

  const stopSound = (soundKey) => {
    if (sounds[soundKey]) {
      sounds[soundKey].stop()
      setActiveSound(activeSound.filter((sound) => sound !== soundKey))
    }
  }

  const unmute = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      activeSound.forEach((sound) => {
        sounds[sound].play()
      })
    }
  }

  const mute = () => {
    if (isPlaying) {
      setIsPlaying(false)
      activeSound.forEach((sound) => {
        sounds[sound].pause()
      })
    }
  }

  const values = {
    isPlaying,
    activeSound,
    sounds,
  }

  const functions = {
    playSound,
    pauseSound,
    stopSound,
    unmute,
    mute,
  }

  return (
    <MusicContext.Provider
      value={{
        ...values,
        ...functions,
      }}
    >
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
