import React from 'react'
import GrassPlatform from './GrassPlatform'

const GrassPlatforms = () => {
  return (
    <>
      <GrassPlatform
        initialPosition={[-20, -1, -54]}
        moveDirection={4}
        maxPosition={-57}
        speed={0}
      />
      <GrassPlatform
        initialPosition={[-5, -1, -68]}
        moveDirection={4}
        maxPosition={-54}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[-10, 0.5, -68]}
        moveDirection={4}
        maxPosition={-56}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[-15, -1, -68]}
        moveDirection={4}
        maxPosition={-57}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[0, 0.5, -68]}
        moveDirection={4}
        maxPosition={-54}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[5, -1, -68]}
        moveDirection={4}
        maxPosition={-53}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[10, 0.5, -68]}
        moveDirection={4}
        maxPosition={-57}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[15, -1, -68]}
        moveDirection={4}
        maxPosition={-57}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[20, 0.5, -68]}
        moveDirection={4}
        maxPosition={-57}
        speed={-0.08}
      />
      <GrassPlatform
        initialPosition={[25, -1, -67]}
        moveDirection={4}
        maxPosition={-57}
        speed={0}
      />
    </>
  )
}

export default GrassPlatforms
