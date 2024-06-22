import React, { useState, useEffect } from 'react'
import { IvyServer } from '../../../globals/obstacles/IvyServer'
import KeyServer from '../../../globals/obstacles/KeyServer'
import BoxServer from '../../../globals/obstacles/BoxServer'
import BlackWallServer from '../../../globals/obstacles/BlackWallServer'
import { socket } from '../../../../socket/socket-manager'
import { usePlayer } from '../../../../providers/player/PlayerProvider'
import { CuboidCollider } from '@react-three/rapier'

const Obstacles = () => {
  const { imediatelyDeath } = usePlayer()

  const [ivys, setIvys] = useState([
    { id: 1, isFired: false, isBurned: false },
    { id: 2, isFired: false, isBurned: false },
    { id: 3, isFired: false, isBurned: false },
    { id: 4, isFired: false, isBurned: false },
    { id: 5, isFired: false, isBurned: false },
    { id: 6, isFired: false, isBurned: false },
    { id: 7, isFired: false, isBurned: false },
    { id: 8, isFired: false, isBurned: false },
  ])

  const [keys, setKeys] = useState([
    { id: 1, isCollected: false },
    { id: 2, isCollected: false },
  ])

  const [blackWall, setBlackWall] = useState([
    { id: 1, isDestroyed: false },
    { id: 2, isDestroyed: false },
  ])

  useEffect(() => {
    socket.emit('values-ivys')
    socket.emit('values-keys')
    // socket.emit('values-blackWall')
  }, [])

  useEffect(() => {
    return () => {
      socket.off('updates-values-ivy')
      socket.off('updates-values-keys')
      // socket.off('updates-values-blackWall')
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

  // socket.on('updates-values-blackWall', (data) => {
  //   setBlackWall(data)
  // })

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

  const handleIntersectionPlayer = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      imediatelyDeath()
    }
  }

  return (
    <>
      {!ivys[0]?.isBurned && (
        <IvyServer
          idIvy={1}
          position={[-1, -2, -10]}
          rotation={[0, -Math.PI / 2, 0]}
          isFired={ivys[0]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[1]?.isBurned && (
        <IvyServer
          idIvy={2}
          position={[3, -2, -10]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[1]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[2]?.isBurned && (
        <IvyServer
          idIvy={3}
          position={[-1, 2.1, -47.8]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[2]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[3]?.isBurned && (
        <IvyServer
          idIvy={4}
          position={[3, 2.1, -47.8]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[3]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[4]?.isBurned && (
        <IvyServer
          idIvy={5}
          position={[-1, 2.3, -92.2]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[4]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[5]?.isBurned && (
        <IvyServer
          idIvy={6}
          position={[3, 2.3, -92.2]}
          rotation={[0, Math.PI / 2, 0]}
          isFired={ivys[5]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[6]?.isBurned && (
        <IvyServer
          idIvy={7}
          position={[13, -0.2, -160]}
          rotation={[0, 0, 0]}
          isFired={ivys[6]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!ivys[7]?.isBurned && (
        <IvyServer
          idIvy={8}
          position={[13, -0.2, -156]}
          rotation={[0, 0, 0]}
          isFired={ivys[7]?.isFired}
          burnIvy={burnIvy}
        />
      )}
      {!keys[0]?.isCollected && (
        <KeyServer
          idKey={1}
          position={[17, 2, -158]}
          rotation={[0, 0, 0]}
          handleKeyCollected={handleKeyCollected}
        />
      )}
      {!keys[1]?.isCollected && !keys[0]?.isCollected && (
        <KeyServer
          idKey={2}
          position={[25, 8, -159]}
          rotation={[0, 0, 0]}
          handleKeyCollected={handleKeyCollected}
        />
      )}
      {!keys[0]?.isCollected && (
        <BlackWallServer
          idBlackWall={1}
          position={[0, 0, -90]}
          rotation={[0, 0, 0]}
          scale={[13, 40, 1]}
        />
      )}
      <BoxServer idBox={1} position={[0.5, 3.5, -43.8]} scale={[1, 1.5, 1]} />
      <BoxServer idBox={2} position={[4.5, 3.5, -43.8]} scale={[1, 1.5, 1]} />
      <BoxServer idBox={3} position={[-3, 3.5, -43.8]} scale={[1, 1.5, 1]} />
      <BoxServer idBox={4} position={[0.5, 4.2, -88.2]} scale={[1, 1.5, 1]} />
      <BoxServer idBox={5} position={[4.5, 4.2, -88.2]} scale={[1, 1.5, 1]} />
      <BoxServer idBox={6} position={[-3, 4.2, -88.2]} scale={[1, 1.5, 1]} />
      <CuboidCollider
        args={[30, 0.5, 10]}
        position={[0, -5, -60]}
        sensor
        onIntersectionEnter={handleIntersectionPlayer}
      />
    </>
  )
}

export default Obstacles
