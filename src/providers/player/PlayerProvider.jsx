import { createContext, useContext, useState } from 'react'

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
    hearts: 1,
    life: 100,
    mana: 100,
  })

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}
