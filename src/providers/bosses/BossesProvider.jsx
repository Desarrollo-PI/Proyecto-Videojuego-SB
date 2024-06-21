import { createContext, useContext, useEffect, useState } from 'react'
import { socket } from '../../socket/socket-manager'

export const BossesContext = createContext()

export function BossesProvider({ children }) {
  const [bosses, setBosses] = useState({
    troll: { isDeath: false },
    spider: { isDeath: false },
    dementor: { isDeath: false },
    darkWizard: { isDeath: false },
  })

  const handleDeathBoss = (boss) => {
    setBosses((prev) => ({
      ...prev,
      [boss]: { isDeath: true },
    }))
    if (boss === 'darkWizard') {
      socket.emit('boss-dead')
    }
  }

  const handleDeathBossNoEmit = (boss) => {
    console.log("Boss murio")
    setBosses((prev) => ({
      ...prev,
      [boss]: { isDeath: true },
    }))
  }

  const handleLiveBoss = (boss) => {
    setBosses((prev) => ({
      ...prev,
      [boss]: { isDeath: false },
    }))
  }

  const reviveBosses = () => {
    setBosses({
      troll: { isDeath: false },
      spider: { isDeath: false },
      dementor: { isDeath: false },
      darkWizard: { isDeath: false },
    })
  }

  const values = {
    bosses,
  }

  const functions = {
    handleDeathBoss,
    handleDeathBossNoEmit,
    handleLiveBoss,
    reviveBosses,
  }

  return (
    <BossesContext.Provider value={{ ...values, ...functions }}>
      {children}
    </BossesContext.Provider>
  )
}

export const useBosses = () => {
  const context = useContext(BossesContext)
  if (!context) {
    console.error('Error creating bosses context')
  }
  return context
}
