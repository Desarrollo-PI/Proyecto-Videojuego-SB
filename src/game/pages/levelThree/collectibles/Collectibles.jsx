import { useAuth } from '../../../../providers/auth/AuthProvider'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { ChocolateFrog } from './ChocolateFrog'
import { Fawkes } from './Fawkes'
import { Nagini } from './Nagini'
import { Prongs } from './Prongs'
import { Diadem } from './Diadem'

const Collectibles = () => {
  const { collectiblesLevelThree, onCollect } = useAuth()
  const { openDialog } = useDialog()
  const { handleSound } = useMusic()

  const handleOnCollect = (name, level, collectible) => {
    openDialog(
      '!Has encontrado un coleccionable: ' + `<strong>${name}!</strong>`,
      'collectible'
    )
    handleSound(['collect'])
    onCollect(level, collectible)
  }

  return (
    <>
      <ChocolateFrog
        name="Una Rana de Chocolate"
        isCollected={collectiblesLevelThree.chocolateFrog}
        onCollect={handleOnCollect}
        position={[-2, 0, 0]}
      />
      <Fawkes
        name="Al Fénix Fawkes"
        isCollected={collectiblesLevelThree.fawkes}
        onCollect={handleOnCollect}
        position={[-4, 0, 0]}
      />
      <Nagini
        name="La Serpiente Nagini"
        isCollected={collectiblesLevelThree.nagini}
        onCollect={handleOnCollect}
        position={[-6, 0, 0]}
      />
      <Prongs
        name="Al Ciervo Prongs"
        isCollected={collectiblesLevelThree.prongs}
        onCollect={handleOnCollect}
        position={[-8, 0, 0]}
      />
      <Diadem
        name="La Diadema de Rowena Ravenclaw"
        isCollected={collectiblesLevelThree.diadem}
        onCollect={handleOnCollect}
        position={[-10, 0, 0]}
      />
    </>
  )
}

export default Collectibles
