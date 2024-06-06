import React from 'react'
import Portal from '../../../globals/portal/Portal'
import { usePlayer } from '../../../../providers/player/PlayerProvider'

const Portals = () => {
  const { setTeleportPosition } = usePlayer()

  const onTeleport = (e, position) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      setTeleportPosition(position)
    }
  }

  return (
    <>
      <Portal
        position={[11.2, 0.3, -30]}
        onTeleport={onTeleport}
        teleportPosition={[-12, 1.2, -40]}
      />
      <Portal
        position={[-6.2, 0.3, -19]}
        onTeleport={onTeleport}
        teleportPosition={[22, 1.2, -57]}
      />
    </>
  )
}

export default Portals
