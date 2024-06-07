import React, { Suspense } from 'react';

const WorldLevelThree = React.lazy(() => import('./World'));
const Lights = React.lazy(() => import('./Lights'));
const Collectibles = React.lazy(() => import('./collectibles/Collectibles'));
const Checkpoints = React.lazy(() => import('./checkpoints/Checkpoints'));
const Obstacles = React.lazy(() => import('./obstacles/Obstacles'));
const Enemies = React.lazy(() => import('./enemies/Enemies'));
const Portals = React.lazy(() => import('./elements/Portals'));
const Signs = React.lazy(() => import('./elements/Signs'));

const LevelThreePage = () => {
  return (
    <Suspense fallback={null}>
      {/* <Lights /> */}
      <WorldLevelThree />
      <Collectibles />
      <Checkpoints />
      <Obstacles />
      <Enemies />
      <Portals />
      <Signs />
    </Suspense>
  )
}

export default LevelThreePage
