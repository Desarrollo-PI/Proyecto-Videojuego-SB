import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { AvatarProvider } from './avatar/AvatarProvider'
import { MusicProvider } from './music/MusicProvider'
import { MenuProvider } from './menu/MenuProvider'
import { DialogProvider } from './dialog/DialogProvider'
import { PlayerProvider } from './player/PlayerProvider'
import { BossesProvider } from './bosses/BossesProvider'
import { AlertProvider } from './alert/AlertProvider'

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AvatarProvider>
        <AlertProvider>
          <MusicProvider>
            <MenuProvider>
              <BossesProvider>
                <PlayerProvider>
                  <DialogProvider>{children}</DialogProvider>
                </PlayerProvider>
              </BossesProvider>
            </MenuProvider>
          </MusicProvider>
        </AlertProvider>
      </AvatarProvider>
    </AuthProvider>
  )
}

export default RootProvider
