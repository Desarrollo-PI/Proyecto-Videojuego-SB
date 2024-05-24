import React, { useEffect, useRef, useState } from 'react'
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
import { useDialog } from '../../../providers/dialog/DialogProvider'
import { usePlayer } from '../../../providers/player/PlayerProvider'
import { useBosses } from '../../../providers/bosses/BossesProvider'
import Spells from '../../globals/player/Spells'

const LayoutLevel = () => {
  const {
    state,
    toggleMenu,
    toggleControls,
    toggleSettings,
    closeMenu,
    closeControls,
    closeSettings,
  } = useMenu()

  const { isOpenDialog, message, closeDialog, dialogType } = useDialog()

  const {
    loading,
    maxHearts,
    posLevelOne,
    posLevelTwo,
    posLevelThree,
    posLevelFour,
    onPassLevel,
    collectiblesLevelOne,
    collectiblesLevelTwo,
    collectiblesLevelThree,
    collectiblesLevelFour,
  } = useAuth()

  const { player, setPlayer, chooseSpell, nearDementor, inMaze } = usePlayer()

  const { bosses, reviveBosses } = useBosses()

  const { handleSound, pauseSound, isPlaying } = useMusic()

  const movements = useMovements()

  const navigate = useNavigate()

  const location = useLocation()

  const [isVictory, setIsVictory] = useState(false)

  const _spells = [
    {
      id: 0,
      icon: <FaWandSparkles color="white" size={25} />,
      name: 'Expelliarmus',
      key: '1',
      show:
        location.pathname === '/level/one' ||
        location.pathname === '/level/two' ||
        location.pathname === '/level/three' ||
        location.pathname === '/level/four',
    },
    {
      id: 1,
      icon: <GiIceSpellCast color="cyan" size={25} />,
      name: 'Glacius',
      key: '2',
      show:
        location.pathname === '/level/two' ||
        location.pathname === '/level/three' ||
        location.pathname === '/level/four',
    },
    {
      id: 2,
      icon: <GiFireSpellCast color="red" size={25} />,
      name: 'Incendio',
      key: '3',
      show:
        location.pathname === '/level/three' ||
        location.pathname === '/level/four',
    },
    {
      id: 3,
      icon: <GiBoltSpellCast color="yellow" size={25} />,
      name: 'Lumos',
      key: '4',
      show: location.pathname === '/level/four',
    },
  ]

  const [spells, setSpells] = useState(_spells)
  const [selectedSpell, setSelectedSpell] = useState({
    ..._spells[0],
    icon: <FaWandSparkles color="white" size={50} />,
  })
  const [selectedSpellIndex, setSelectedSpellIndex] = useState(0)

  const lightsPropsLevelOne = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
    isFog: false,
  }

  const lightsPropsLevelTwo = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
    isFog: true,
    nearDementor: nearDementor,
    inMaze: inMaze,
  }

  const lightsPropsLevelThree = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
    isFog: true,
  }

  const lightsPropsLevelFour = {
    positionDirectionalLight: [20, 10, 0],
    intensityDirectionalLight: 2,
    intensityAmbientLight: 0.25,
    isFog: false,
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/level/one':
        if (bosses.troll.isDeath) {
          closeAll()
          setIsVictory(true)
          onPassLevel(2)
          handleSound(['win'], ['level', 'thunder'])
        }
      case '/level/two':
        if (bosses.spider.isDeath) {
          closeAll()
          setIsVictory(true)
          onPassLevel(3)
          handleSound(['win'], ['level', 'thunder'])
        }
      case '/level/three':
        if (bosses.dementor.isDeath) {
          closeAll()
          setIsVictory(true)
          onPassLevel(4)
          handleSound(['win'], ['level', 'thunder'])
        }
      case '/level/four':
        if (bosses.darkWizard.isDeath) {
          closeAll()
          setIsVictory(true)
          handleSound(['win'], ['level', 'thunder'])
        }
      default:
        break
    }
  }, [bosses])

  useEffect(() => {
    setPlayer({ ...player, hearts: maxHearts })
  }, [maxHearts])

  useEffect(() => {
    if (player.hearts === 1) {
      handleSound(['heartbeat'])
    }

    if (player.hearts === 0) {
      closeAll()
      handleSound(['gameover'], ['heartbeat'])
      pauseSound('level')
    } else {
      pauseSound('gameover')
    }
  }, [player.hearts])

  useEffect(() => {
    return () => {
      closeAll()
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
          if (spells[0].show) {
            setSelectedSpellIndex(0)
            setSelectedSpell({
              ..._spells[0],
              icon: <FaWandSparkles color="white" size={50} />,
            })
            chooseSpell('spellExpelliarmus')
          }
          break
        case '2':
          if (spells[1].show) {
            setSelectedSpellIndex(1)
            setSelectedSpell({
              ..._spells[1],
              icon: <GiIceSpellCast color="cyan" size={50} />,
            })
            chooseSpell('spellGlacius')
          }
          break
        case '3':
          if (spells[2].show) {
            setSelectedSpellIndex(2)
            setSelectedSpell({
              ..._spells[2],
              icon: <GiFireSpellCast color="red" size={50} />,
            })
            chooseSpell('spellIncendio')
          }
          break
        case '4':
          if (spells[3].show) {
            setSelectedSpellIndex(3)
            setSelectedSpell({
              ..._spells[3],
              icon: <GiBoltSpellCast color="yellow" size={50} />,
            })
            chooseSpell('spellLumos')
          }
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

  const closeAll = () => {
    closeMenu()
    closeControls()
    closeSettings()
    closeDialog()
  }

  const handleExit = async () => {
    navigate('/level-router')
    closeMenu()
    handleSound(['mainTheme'], ['level', 'thunder'])
    navigate('/level-router')
    pauseSound('gameover')
    reviveBosses()
  }

  const formatPosition = (pos) => {
    return [pos.x, pos.y, pos.z]
  }

  const choosePosition = () => {
    switch (location.pathname) {
      case '/level/one':
        return formatPosition(posLevelOne)
      case '/level/two':
        return formatPosition(posLevelTwo)
      case '/level/three':
        return formatPosition(posLevelThree)
      case '/level/four':
        return formatPosition(posLevelFour)
      default:
        return [0, 10, 0]
    }
  }

  const chooseProps = () => {
    switch (location.pathname) {
      case '/level/one':
        return lightsPropsLevelOne
      case '/level/two':
        return lightsPropsLevelTwo
      case '/level/three':
        return lightsPropsLevelThree
      case '/level/four':
        return lightsPropsLevelFour
      default:
        return lightsPropsLevelOne
    }
  }

  const chooseCollectibles = () => {
    switch (location.pathname) {
      case '/level/one':
        return collectiblesLevelOne
      case '/level/two':
        return collectiblesLevelTwo
      case '/level/three':
        return collectiblesLevelThree
      case '/level/four':
        return collectiblesLevelFour
      default:
        return collectiblesLevelOne
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

  const choosePropsECCtrl = () => {
    if (player.hearts > 0 && !state.isOpenMenu && !isVictory) {
      return {
        camInitDis: -3,
        camMaxDis: -3,
        maxVelLimit: 1.6,
        sprintMult: 4,
        jumpVel: 5,
        sprintJumpMult: 1,
        position: choosePosition(),
        characterInitDir: Math.PI,
        camInitDir: { x: 0, y: Math.PI },
        name: 'playerBody',
        type: 'dynamic',
        isPlayerDeath: false,
        isMenuOpen: false,
      }
    } else if (isVictory) {
      return {
        camInitDis: -3,
        camMaxDis: -3,
        maxVelLimit: 0,
        sprintMult: 0,
        jumpVel: 0,
        sprintJumpMult: 0,
        position: choosePosition(),
        characterInitDir: Math.PI,
        camInitDir: { x: 0, y: Math.PI },
        name: 'null',
        type: 'fixed',
        isPlayerDeath: false,
        isMenuOpen: false,
      }
    } else if (state.isOpenMenu) {
      return {
        camInitDis: -3,
        camMaxDis: -3,
        maxVelLimit: 0,
        sprintMult: 0,
        jumpVel: 0,
        sprintJumpMult: 0,
        position: choosePosition(),
        characterInitDir: Math.PI,
        camInitDir: { x: 0, y: Math.PI },
        name: 'null',
        type: 'fixed',
        isPlayerDeath: true,
        isMenuOpen: true,
      }
    } else {
      return {
        camInitDis: -3,
        camMaxDis: -3,
        maxVelLimit: 0,
        sprintMult: 0,
        jumpVel: 0,
        sprintJumpMult: 0,
        position: choosePosition(),
        characterInitDir: Math.PI,
        camInitDir: { x: 0, y: Math.PI },
        name: 'null',
        type: 'fixed',
        isPlayerDeath: true,
        isMenuOpen: false,
      }
    }
  }

  if (loading) return <Loader hasText />

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
          maxHearts={maxHearts}
          currentHearts={player.hearts}
          currentHealth={player.life}
          isOpenDialog={isOpenDialog}
          closeDialog={closeDialog}
          messageDialog={message}
          dialogType={dialogType}
          collelctibles={chooseCollectibles()}
          isOpenVictory={isVictory}
        />
        <KeyboardControls map={movements}>
          <Canvas shadows dpr={[1, 1.5]}>
            {location.pathname === '/level/one' && (
              <Float speed={10} rotationIntensity={0.1} floatIntensity={2}>
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
            <Physics>
              <Outlet />
              <Player {...choosePropsECCtrl()} />
              <Spells />
            </Physics>
            {player.hearts > 0 && !state.isOpenMenu && (
              <Controls
                isPlaying={isPlaying}
                isPlayerDeath={player.currentHearts === 0}
              />
            )}
          </Canvas>
        </KeyboardControls>
      </>
    </Suspense>
  )
}

export default LayoutLevel
