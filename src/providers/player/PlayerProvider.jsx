import { createContext, useContext, useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

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
    spellGlacius: false,
    selectedSpell: 'spellExpelliarmus',
    spellInitRotation: [0, 0, 0],
    spellInitPosition: [0, 0, 0],
    expelliarmusInitRotation: [0, 0, 0],
    expelliarmusInitPosition: [0, 0, 0],
    glaciusInitRotation: [0, 0, 0],
    glaciusInitPosition: [0, 0, 0],
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

  const chooseSpell = (selectedSpell) => {
    setPlayer((prev) => ({ ...prev, selectedSpell }))
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
    chooseSpell,
  }

  return (
    <PlayerContext.Provider value={{ ...values, ...functions }}>
      {children}
    </PlayerContext.Provider>
  )
}
