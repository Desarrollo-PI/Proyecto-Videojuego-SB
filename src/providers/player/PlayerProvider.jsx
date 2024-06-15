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
    spellGlacius: false,
    spellIncendio: false,
    selectedSpell: 'spellExpelliarmus',
    spellInitRotation: [0, 0, 0],
    spellInitPosition: [0, 0, 0],
    leader: true,
  })

  const [nearDementor, setNearDementor] = useState(false)
  const [inMaze, setInMaze] = useState(false)
  const [isPoisoned, setIsPoisoned] = useState(false)
  const [isHitPoisoned, setIsHitPoisoned] = useState(false)
  const [teleportPosition, setTeleportPosition] = useState(null)

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

  const handleNearDementor = (near) => {
    setNearDementor(near)
  }

  const handleInMaze = (maze) => {
    setInMaze(maze)
  }

  const imediatelyDeath = () => {
    setPlayer((prev) => ({ ...prev, hearts: 0 }))
  }

  const handleIsPosioned = (posioned) => {
    setIsHitPoisoned(true)
  }

  const resetStates = () => {
    setPlayer({
      hearts: null,
      life: 100,
      mana: 100,
      spellExpelliarmus: false,
      spellGlacius: false,
      spellIncendio: false,
      selectedSpell: 'spellExpelliarmus',
      spellInitRotation: [0, 0, 0],
      spellInitPosition: [0, 0, 0],
      leader: true,
    })
    setNearDementor(false)
    setInMaze(false)
    setIsPoisoned(false)
    setIsHitPoisoned(false)
  }

  useEffect(() => {
    let positionTimer

    if (isPoisoned) {
      clearTimeout(positionTimer)
      positionTimer = setTimeout(() => {
        setIsPoisoned(false)
      }, 5000)
    }

    if (isHitPoisoned) {
      setIsPoisoned(true)
      setIsHitPoisoned(false)
    }

    return () => clearTimeout(positionTimer)
  }, [isHitPoisoned])

  useEffect(() => {
    let interval
    if (isPoisoned) {
      interval = setInterval(() => {
        takeLife(5)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isPoisoned, player.life])

  const values = {
    player,
    nearDementor,
    inMaze,
    isPoisoned,
    teleportPosition,
    currentHearts: player.hearts,
    currentHealth: player.life,
    currentMana: player.mana,
  }

  const functions = {
    setPlayer,
    takeLife,
    chooseSpell,
    handleNearDementor,
    imediatelyDeath,
    handleInMaze,
    handleIsPosioned,
    resetStates,
    setTeleportPosition,
  }

  return (
    <PlayerContext.Provider value={{ ...values, ...functions }}>
      {children}
    </PlayerContext.Provider>
  )
}
