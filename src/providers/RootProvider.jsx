import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { MusicProvider } from './music/MusicProvider'
import { MenuProvider } from './menuProvider/MenuProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MusicProvider>
        <MenuProvider>{children}</MenuProvider>
      </MusicProvider>
    </AuthProvider>
  )
}

export default RootProvider
