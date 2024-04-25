import React, { useEffect, useState } from 'react'

import { KeyboardControls, OrbitControls, Sky } from '@react-three/drei'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'

import Lights from '../../globals/Lights'
import Environments from '../../globals/Environments'
import useMovements from '../../../utils/key-movements'
import GameIndicators from '../layout/GameIndicators'
import {
  Environment,
} from '@react-three/drei'

import { GiBoltSpellCast } from 'react-icons/gi'
import { GiFireSpellCast } from 'react-icons/gi'
import { GiIceSpellCast } from 'react-icons/gi'
import { FaWandSparkles } from 'react-icons/fa6'

import { useNavigate } from 'react-router-dom'

import { useMenu } from '../../../providers/menu/MenuProvider'
import { useMusic } from '../../../providers/music/MusicProvider'
import { Outlet } from 'react-router-dom'

const LayoutLevel = () => {
  const { state, toggleMenu, toggleControls, toggleSettings, closeMenu } =
    useMenu()
  const movements = useMovements()
  const navigate = useNavigate()
  const { playSound } = useMusic()

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
    playSound()
    navigate('/level-router')
    closeMenu()
  }

  return (
    <KeyboardControls map={movements}>
      <Canvas shadows dpr={[1, 1.5]}>
        {/* <fog attach="fog" args={['#17171b', 30, 40]} /> */}
        <color attach="background" args={['#17171b']} />
        <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach="shadow-camera"
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight>
        <ambientLight intensity={0.25} />
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
        {!state.isOpenMenu && <OrbitControls />}
        <Suspense fallback={null}>
          <Physics>
            <Outlet />
          </Physics>
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </KeyboardControls>
  )
}

export default LayoutLevel
