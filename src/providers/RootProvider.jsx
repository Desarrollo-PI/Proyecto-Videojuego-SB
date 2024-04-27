import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { AvatarProvider } from './avatar/AvatarProvider'
import { MusicProvider } from './music/MusicProvider'
import { MenuProvider } from './menu/MenuProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AvatarProvider>
        <MusicProvider>
          <MenuProvider>{children}</MenuProvider>
        </MusicProvider>
      </AvatarProvider>
    </AuthProvider>
  )
}

export default RootProvider
