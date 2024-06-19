import React, { useState, useEffect } from 'react'
import { IvyServer } from '../../../globals/obstacles/IvyServer'
import { socket } from '../../../../socket/socket-manager'

const Obstacles = () => {
  const [ivys, setIvys] = useState([
    { id: 1, isFired: false, isBurned: false },
    { id: 2, isFired: false, isBurned: false },
  ])

  useEffect(() => {
    socket.emit('values-ivys')
  }, [])

  useEffect(() => {
    return () => {
      socket.off('updates-values-ivy')
      socket.off('fire-ivy')
    }
  }, [])

  socket.on('updates-values-ivys', (data) => {
    console.log(data)
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

  return (
    <>
      <IvyServer
        idIvy={1}
        position={[2, -1, -10]}
        rotation={[0, Math.PI / 2, 0]}
        isFired={ivys[0].isFired}
        isBurned={ivys[0].isBurned}
        burnIvy={burnIvy}
      />
      <IvyServer
        idIvy={2}
        position={[-2, -1, -10]}
        rotation={[0, Math.PI / 2, 0]}
        isFired={ivys[1].isFired}
        isBurned={ivys[1].isBurned}
        burnIvy={burnIvy}
      />
    </>
  )
}

export default Obstacles
