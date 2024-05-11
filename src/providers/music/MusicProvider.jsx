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
  gameover: new Howl({
    src: ['/assets/music/gameover.mp3'],
  }),
  heartbeat: new Howl({
    src: ['/assets/music/heartbeat.mp3'],
    loop: true,
  }),
  hurt: new Howl({
    src: ['/assets/sounds/hurt.mp3'],
  }),
}

const music = ['mainTheme', 'thunder', 'level', 'heartbeat']
const soundsEffects = ['collect', 'gameover', 'hurt']

export const MusicProvider = ({ children }) => {
  const [sounds, setSounds] = useState(initialState)
  const [activeSounds, setActiveSounds] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const activeSounds = JSON.parse(localStorage.getItem('activeSounds'))
    const isPlaying = JSON.parse(localStorage.getItem('isPlaying'))
    setIsPlaying(isPlaying ?? true)
    if (activeSounds) {
      setActiveSounds(activeSounds)
      activeSounds.forEach((sound) => {
        if (isPlaying) {
          sounds[sound].stop()
          sounds[sound].play()
        }
      })
    }
  }, [])

  const handleSound = (soundKeysActive, soundsKeysDesactive) => {
    let _sounds = [...activeSounds]
    if (soundKeysActive && soundKeysActive.length > 0) {
      soundKeysActive.forEach((soundKey) => {
        if (sounds[soundKey] && music.includes(soundKey)) {
          if (isPlaying) {
            sounds[soundKey].stop()
            sounds[soundKey].play()
          }
          _sounds.push(soundKey)
        }
        if (sounds[soundKey] && soundsEffects.includes(soundKey)) {
          if (isPlaying) {
            sounds[soundKey].stop()
            sounds[soundKey].play()
          }
        }
      })
    }

    if (soundsKeysDesactive && soundsKeysDesactive.length > 0) {
      soundsKeysDesactive.forEach((soundKey) => {
        if (sounds[soundKey]) {
          sounds[soundKey].stop()
          _sounds = _sounds.filter((sound) => sound !== soundKey)
        }
      })
    }

    setActiveSounds(_sounds)
    localStorage.setItem('activeSounds', JSON.stringify(_sounds))
  }

  const pauseSound = (soundKey) => {
    if (sounds[soundKey]) {
      sounds[soundKey].pause()
    }
  }

  const unmute = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      activeSounds.forEach((sound) => {
        sounds[sound].play()
      })
      localStorage.setItem('isPlaying', JSON.stringify(true))
    }
  }

  const mute = () => {
    if (isPlaying) {
      setIsPlaying(false)
      activeSounds.forEach((sound) => {
        sounds[sound].pause()
      })
      localStorage.setItem('isPlaying', JSON.stringify(false))
    }
  }

  const values = {
    isPlaying,
    activeSound: activeSounds,
    sounds,
  }

  const functions = {
    handleSound,
    pauseSound,
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
