import { createContext, useContext, useState } from 'react'

export const AvatarContext = createContext()

export const useAvatar = () => {
  const context = useContext(AvatarContext)
  if (!context) {
    console.error('Error creating avatar context')
  }
  return context
}

export function AvatarProvider({ children }) {

  const [avatar, setAvatar] = useState({
    ref: null,
    body: null,
    animation: 'Idle',
  })

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  )
}
