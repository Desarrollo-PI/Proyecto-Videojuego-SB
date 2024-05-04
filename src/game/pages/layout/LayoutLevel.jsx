import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import {
  Center,
  Float,
  KeyboardControls,
  OrbitControls,
  Text3D,
} from '@react-three/drei'
import { Text } from '@react-three/drei'

import Controls from '../../globals/controls/Control'
import InterfaceGame from './InterfaceGame'
import Loader from './Loader'
import Player from '../../globals/player/Player'
import Ecctrl from 'ecctrl'
import StormEnvironment from '../../globals/StormEnvironment'

import { useMenu } from '../../../providers/menu/MenuProvider'
import { useMusic } from '../../../providers/music/MusicProvider'
import { useAuth } from '../../../providers/auth/AuthProvider'
import { Outlet } from 'react-router-dom'

import useMovements from '../../../utils/key-movements'

import {
  GiBoltSpellCast,
  GiFireSpellCast,
  GiIceSpellCast,
} from 'react-icons/gi'
import { FaWandSparkles } from 'react-icons/fa6'

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

  const {
    state,
    toggleMenu,
    toggleControls,
    toggleSettings,
    closeMenu,
    closeControls,
    closeSettings,
  } = useMenu()
  const { state: userState } = useAuth()
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
    return () => {
      closeMenu()
      closeControls()
      closeSettings()
    }
  }, [])

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

  const chooseText = () => {
    switch (location.pathname) {
      case '/level/one':
        return 'NIVEL 1'
      case '/level/two':
        return 'NIVEL 2'
      case '/level/three':
        return 'NIVEL 3'
      case '/level/four':
        return 'NIVEL 4'
      default:
        return 'BIENVENIDO'
    }
  }

  return (
    <Suspense fallback={<Loader hasText />}>
      <>
        <InterfaceGame
          handleExit={handleExit}
          isOpenMenu={state.isOpenMenu}
          isOpenControls={state.isOpenControls}
          toggleMenu={toggleMenu}
          toggleControls={toggleControls}
          toggleSettings={toggleSettings}
          spells={spells}
          selectedSpell={selectedSpell}
          selectedSpellIndex={selectedSpellIndex}
          maxHearts={1}
        />
        <KeyboardControls map={movements}>
          <Canvas shadows dpr={[1, 1.5]}>
            {location.pathname === '/level/one' && (
              <Float speed={10} rotationIntensity={0.1} floatIntensity={2}>
                <Center></Center>
                <Text
                  position={[-8, 3, 0]}
                  fontSize={0.5}
                  anchorX="center"
                  anchorY="middle"
                  rotation={[0, Math.PI / 2, 0]}
                  textAlign="center"
                >
                  W - Mover adelante{'\n'}S - Mover atras{'\n'}A - Mover
                  izquierda
                  {'\n'}D - Mover derecha{'\n'}F - Lanzar hechizo{'\n'}
                  Espacio - Saltar{'\n'}Shift - Correr{'\n'}Esc - Menu
                </Text>
              </Float>
            )}
            <Float>
              <Center position={[0, 7, -5]}>
                <Text3D font="/assets/fonts/HarryPotter7_Regular.json">
                  <meshStandardMaterial attach="material" color="#b0955e" />
                  {chooseText()}
                </Text3D>
              </Center>
            </Float>
            <StormEnvironment {...chooseProps()} />
            <OrbitControls />
            <Physics debug={false}>
              <Outlet />
              <Ecctrl
                camInitDis={-3}
                camMaxDis={-3}
                maxVelLimit={1.6}
                sprintMult={4}
                jumpVel={5}
                sprintJumpMult={1}
                position={[0, 2.5, 0]}
                characterInitDir={Math.PI}
                camInitDir={{ x: 0, y: Math.PI }}
              >
                <Player />
              </Ecctrl>
            </Physics>
            <Controls />
          </Canvas>
        </KeyboardControls>
      </>
    </Suspense>
  )
}

export default LayoutLevel
