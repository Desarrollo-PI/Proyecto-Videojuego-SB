import { useAuth } from '../../../../providers/auth/AuthProvider'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { Broom } from './Broom'
import { Cup } from './Cup'
import { Diary } from './Diary'
import { Map } from './Map'
import { Wand } from './Wand'

const Collectibles = () => {
  const { collectiblesLevelTwo, onCollect } = useAuth()
  const { openDialog } = useDialog()
  const { handleSound } = useMusic()

  const handleOnCollect = (name, level, collectible) => {
    openDialog('!Has encontrado un coleccionable: ' + name + '!')
    handleSound(['collect'])
    onCollect(level, collectible)
  }

  return (
    <>
      <Wand
        name="La Varita de Sauco"
        isCollected={collectiblesLevelTwo.wand}
        onCollect={handleOnCollect}
        position={[0, 0, -5]}
      />
      <Map
        name="Mapa del Merodeador"
        isCollected={collectiblesLevelTwo.map}
        onCollect={handleOnCollect}
        position={[0, -0.5, -3]}
      />
      <Cup
        name="La Copa de Helga Hufflepuff"
        isCollected={collectiblesLevelTwo.cup}
        onCollect={handleOnCollect}
        position={[0, 0, -7]}
      />
      <Broom
        name="La Saeta de Fuego"
        isCollected={collectiblesLevelTwo.broom}
        onCollect={handleOnCollect}
        position={[0, 0, -9]}
      />
      <Diary
        name="El Diario de Tom Riddle"
        isCollected={collectiblesLevelTwo.diary}
        onCollect={handleOnCollect}
        position={[0, 0, -11]}
      />
    </>
  )
}

export default Collectibles
