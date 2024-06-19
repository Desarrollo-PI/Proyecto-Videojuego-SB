import React, { useState, useEffect } from 'react'
import { IvyServer } from '../../../globals/obstacles/IvyServer'
import KeyServer from '../../../globals/obstacles/KeyServer'
import BoxServer from '../../../globals/obstacles/BoxServer'
import { socket } from '../../../../socket/socket-manager'

const Obstacles = () => {
  const [ivys, setIvys] = useState([
    { id: 1, isFired: false, isBurned: false },
    { id: 2, isFired: false, isBurned: false },
  ])

  const [keys, setKeys] = useState([
    { id: 1, isCollected: false },
    { id: 2, isCollected: false },
  ])

  useEffect(() => {
    socket.emit('values-ivys')
    socket.emit('values-keys')
  }, [])

  useEffect(() => {
    return () => {
      socket.off('updates-values-ivy')
      socket.off('updates-values-keys')
      socket.off('fire-ivy')
      socket.off('collect-key')
    }
  }, [])

  socket.on('updates-values-keys', (data) => {
    setKeys(data)
  })

  socket.on('updates-values-ivys', (data) => {
    setIvys(data)
  })

  socket.on('fire-ivy', (data) => {
    setIvys((prev) =>
      prev.map((ivy) => {
        if (ivy.id === data.id) {
          return { ...ivy, isFired: true }
        }
        return ivy
      })
    )
  })

  socket.on('collect-key', (data) => {
    setKeys((prev) =>
      prev.map((key) => {
        if (key.id === data.id) {
          return { ...key, isCollected: true }
        }
        return key
      })
    )
  })

  const burnIvy = (id) => {
    setIvys((prev) =>
      prev.map((ivy) => {
        if (ivy.id === id) {
          return { ...ivy, isBurned: true }
        }
        return ivy
      })
    )
    socket.emit('burn-ivy', { id })
  }

  const handleKeyCollected = (e, id) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      socket.emit('user-collect-key', { id })
    }
  }

  return (
    <>
      {!ivys[0]?.isBurned && (
        <IvyServer
          idIvy={1}
          position={[-2, -1, -10]}
          rotation={[0, -Math.PI / 2, 0]}
          isFired={ivys[0]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[1]?.isBurned && (
        <IvyServer
          idIvy={2}
          position={[2, -1, -10]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[1]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!keys[0]?.isCollected && (
        <KeyServer
          idKey={1}
          position={[-2, 0, -9]}
          rotation={[0, 0, 0]}
          handleKeyCollected={handleKeyCollected}
        />
      )}
      {!keys[1]?.isCollected && (
        <KeyServer
          idKey={2}
          position={[2, 0, -9]}
          rotation={[0, 0, 0]}
          handleKeyCollected={handleKeyCollected}
        />
      )}
      <BoxServer idBox={1} position={[-2, -1.1, 2]} />
      <BoxServer idBox={2} position={[2, -1.1, 2]} />
    </>
  )
}

export default Obstacles
