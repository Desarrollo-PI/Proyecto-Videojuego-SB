import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { AvatarProvider } from './avatar/AvatarProvider'
import { MusicProvider } from './music/MusicProvider'
import { MenuProvider } from './menu/MenuProvider'
import { DialogProvider } from './dialog/DialogProvider'
import { PlayerProvider } from './player/PlayerProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AvatarProvider>
        <MusicProvider>
          <MenuProvider>
            <PlayerProvider>
              <DialogProvider>{children}</DialogProvider>
            </PlayerProvider>
          </MenuProvider>
        </MusicProvider>
      </AvatarProvider>
    </AuthProvider>
  )
}

export default RootProvider
