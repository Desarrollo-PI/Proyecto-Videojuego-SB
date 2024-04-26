import React, { useEffect, useState } from 'react'

import { KeyboardControls, Loader, OrbitControls, Sky } from '@react-three/drei'
import Controls from '../../globals/controls/Control'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'

import { Html } from '@react-three/drei'

import useMovements from '../../../utils/key-movements'
import GameIndicators from '../layout/GameIndicators'

import { GiBoltSpellCast } from 'react-icons/gi'
import { GiFireSpellCast } from 'react-icons/gi'
import { GiIceSpellCast } from 'react-icons/gi'
import { FaWandSparkles } from 'react-icons/fa6'

import { useLocation, useNavigate } from 'react-router-dom'

import { useMenu } from '../../../providers/menu/MenuProvider'
import { useMusic } from '../../../providers/music/MusicProvider'
import { Outlet } from 'react-router-dom'
import Player from '../../globals/player/Player'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import StormEnvironment from '../../globals/StormEnvironment'

const LayoutLevel = () => {
  const lightsPropsLevelOne = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
  }

  const lightsPropsLevelFour = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
  }

  const _spells = [
    {
      id: 0,
      icon: <FaWandSparkles color="white" size={25} />,
      name: 'Expelliarmus',
      key: '1',
    },
    {
      id: 1,
      icon: <GiBoltSpellCast color="yellow" size={25} />,
      name: 'Lumos',
      key: '2',
    },
    {
      id: 2,
      icon: <GiFireSpellCast color="red" size={25} />,
      name: 'Incendio',
      key: '3',
    },
    {
      id: 3,
      icon: <GiIceSpellCast color="cyan" size={25} />,
      name: 'Glacius',
      key: '4',
    },
  ]

  const { state, toggleMenu, toggleControls, toggleSettings, closeMenu } =
    useMenu()
  const movements = useMovements()
  const navigate = useNavigate()
  const location = useLocation()
  const { playSound, stopSound } = useMusic()

  const [spells, setSpells] = useState(_spells)
  const [selectedSpell, setSelectedSpell] = useState({
    ..._spells[0],
    icon: <FaWandSparkles color="white" size={50} />,
  })
  const [selectedSpellIndex, setSelectedSpellIndex] = useState(0)

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
          setSelectedSpellIndex(0)
          setSelectedSpell({
            ..._spells[0],
            icon: <FaWandSparkles color="white" size={50} />,
          })
          break
        case '2':
          setSelectedSpellIndex(1)
          setSelectedSpell({
            ..._spells[1],
            icon: <GiBoltSpellCast color="yellow" size={50} />,
          })
          break
        case '3':
          setSelectedSpellIndex(2)
          setSelectedSpell({
            ..._spells[2],
            icon: <GiFireSpellCast color="red" size={50} />,
          })
          break
        case '4':
          setSelectedSpellIndex(3)
          setSelectedSpell({
            ..._spells[3],
            icon: <GiIceSpellCast color="cyan" size={50} />,
          })
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleExit = () => {
    playSound('mainTheme')
    stopSound('level')
    stopSound('thunder')
    navigate('/level-router')
    closeMenu()
  }

  const chooseProps = () => {
    switch (location.pathname) {
      case '/level/one':
        return lightsPropsLevelOne
      case '/level/four':
        return lightsPropsLevelFour
      default:
        return lightsPropsLevelOne
    }
  }

  return (
    <>
      <GameIndicators
        handleExit={handleExit}
        isOpenMenu={state.isOpenMenu}
        toggleMenu={toggleMenu}
        toggleControls={toggleControls}
        toggleSettings={toggleSettings}
        closeMenu={closeMenu}
        spells={spells}
        selectedSpell={selectedSpell}
        selectedSpellIndex={selectedSpellIndex}
      />
      <KeyboardControls map={movements}>
        <Canvas shadows dpr={[1, 1.5]}>
          <StormEnvironment {...chooseProps()} />
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <OrbitControls />
            <Physics debug>
              <Outlet />
              <Ecctrl
                camInitDis={-2}
                camMaxDis={-2}
                maxVelLimit={5}
                jumpVel={4}
                position={[0, 2, 0]}
              >
                <Player />
              </Ecctrl>
            </Physics>
          </Suspense>
          <Controls />
        </Canvas>
      </KeyboardControls>
    </>
  )
}

export default LayoutLevel
