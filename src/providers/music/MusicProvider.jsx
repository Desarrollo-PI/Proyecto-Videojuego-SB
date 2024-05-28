import React, { createContext, useState, useContext, useEffect } from 'react'
import { Howl } from 'howler'

const MusicContext = createContext()

const initialState = {
  mainTheme: new Howl({
    src: ['/assets/music/main-theme.mp3'],
    loop: true,
  }),
  collect: new Howl({
    src: ['/assets/sounds/collect.mp3'],
  }),
  hurt: new Howl({
    src: ['/assets/sounds/hurt.mp3'],
  }),
  mace: new Howl({
    src: ['/assets/sounds/punch.mp3'],
  }),
  hit: new Howl({
    src: ['/assets/sounds/hit.mp3'],
  }),
  hitDementor: new Howl({
    src: ['/assets/sounds/hitDementor.mp3'],
  }),
}

const music = ['mainTheme', 'thunder', 'level', 'heartbeat']
const soundsEffects = [
  'collect',
  'gameover',
  'hurt',
  'mace',
  'spell',
  'win',
  'hit',
  'hitDementor',
]

export const MusicProvider = ({ children }) => {
  const [sounds, setSounds] = useState(initialState)
  const [activeSounds, setActiveSounds] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  const [positionalSounds, setPositionalSounds] = useState({
    thunder: true,
    level: true,
    gameover: false,
    heartbeat: false,
    win: false,
  })

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

  const handlePositionalSound = (soundKeysActive, soundsKeysDesactive) => {
    let _sounds = { ...positionalSounds }
    if (soundKeysActive && soundKeysActive.length > 0) {
      soundKeysActive.forEach((soundKey) => {
        if (isPlaying) {
          _sounds = {
            ..._sounds,
            [soundKey]: true,
          }
        }
      })
    }
    if (soundsKeysDesactive && soundsKeysDesactive.length > 0) {
      soundsKeysDesactive.forEach((soundKey) => {
        _sounds = {
          ..._sounds,
          [soundKey]: false,
        }
      })
    }

    setPositionalSounds(_sounds)
  }

  const resetPositionalSound = () => {
    setPositionalSounds({
      thunder: true,
      level: true,
      gameover: false,
      heartbeat: false,
      win: false,
    })
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
    positionalSounds,
  }

  const functions = {
    handleSound,
    handlePositionalSound,
    resetPositionalSound,
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
