import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { MusicProvider } from './music/MusicProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MusicProvider>{children}</MusicProvider>
    </AuthProvider>
  )
}

export default RootProvider
