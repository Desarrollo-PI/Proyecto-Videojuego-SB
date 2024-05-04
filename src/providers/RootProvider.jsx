import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { AvatarProvider } from './avatar/AvatarProvider'
import { MusicProvider } from './music/MusicProvider'
import { MenuProvider } from './menu/MenuProvider'
import { DialogProvider } from './dialog/DialogProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AvatarProvider>
        <MusicProvider>
          <MenuProvider>
            <DialogProvider>{children}</DialogProvider>
          </MenuProvider>
        </MusicProvider>
      </AvatarProvider>
    </AuthProvider>
  )
}

export default RootProvider
