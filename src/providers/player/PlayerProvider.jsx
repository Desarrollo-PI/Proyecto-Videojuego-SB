import { createContext, useContext, useEffect, useState } from 'react'

export const PlayerContext = createContext()

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    console.error('Error creating player context')
  }
  return context
}

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState({
    hearts: null,
    life: 100,
    mana: 100,
    spellExpelliarmus: false,
  })

  const takeLife = (damage) => {
    if (player.hearts <= 0) {
      return
    }

    const _player = { ...player }
    _player.life -= damage
    if (_player.life <= 0) {
      _player.hearts--
      _player.life = 100
      _player.mana = 100
    }

    setPlayer(_player)
  }

  const values = {
    player,
    currentHearts: player.hearts,
    currentHealth: player.life,
    currentMana: player.mana,
  }

  const functions = {
    setPlayer,
    takeLife,
  }

  return (
    <PlayerContext.Provider value={{ ...values, ...functions }}>
      {children}
    </PlayerContext.Provider>
  )
}
