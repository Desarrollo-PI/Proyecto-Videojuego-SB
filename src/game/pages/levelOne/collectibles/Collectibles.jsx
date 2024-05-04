import { Glasses } from './Glasses'
import { GreenPotion } from './GreenPotion'
import { Sword } from './Sword'
import { ThunderLight } from './ThunderLight'
import { WitchHat } from './WitchHat'

import { useAuth } from '../../../../providers/auth/AuthProvider'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'

const Collectibles = () => {
  const { collectiblesLevelOne, onCollect } = useAuth()
  const { openDialog } = useDialog()
  const { handleSound } = useMusic()

  const handleOnCollect = (name, level, collectible) => {
    openDialog('!Has encontrado un coleccionable: ' + name + '!')
    handleSound(['collect'])
    onCollect(level, collectible)
  }

  return (
    <>
      <Sword
        name="Espada de Godric Gryffindor"
        position={[0, 1, -5]}
        isCollected={collectiblesLevelOne.sword}
        onCollect={handleOnCollect}
      />
      <GreenPotion
        name="Pocion Felix Felicis"
        position={[14, 5.5, -85]}
        isCollected={collectiblesLevelOne.greenPotion}
        onCollect={handleOnCollect}
      />
      <Glasses
        name="Lentes de Harry Potter"
        position={[-8, 1, -35]}
        isCollected={collectiblesLevelOne.glasses}
        onCollect={handleOnCollect}
      />
      <ThunderLight
        name="Cicatriz de Harry Potter"
        position={[11.8, 9.6, -6.4]}
        isCollected={collectiblesLevelOne.thunderLight}
        onCollect={handleOnCollect}
      />
      <WitchHat
        name="Sombrero Seleccionador"
        position={[5, 1, -19]}
        isCollected={collectiblesLevelOne.witchHat}
        onCollect={handleOnCollect}
      />
    </>
  )
}

export default Collectibles
