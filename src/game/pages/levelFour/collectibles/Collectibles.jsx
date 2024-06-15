import { useAuth } from '../../../../providers/auth/AuthProvider'
import { useDialog } from '../../../../providers/dialog/DialogProvider'
import { useMusic } from '../../../../providers/music/MusicProvider'
import { TimeTurner } from './TimeTurner'
import { ResurrectionStone } from './ResurrectionStone'
import { PhilosopherStone } from './PhilosopherStone'
import { Profeta } from './Profeta'
import { EyeOjoLoco } from './EyeOjoLoco'

const Collectibles = () => {
  const { collectiblesLevelFour, onCollect } = useAuth()
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
      <TimeTurner
        name="El Giratiempo"
        isCollected={collectiblesLevelFour.TimeTurner}
        onCollect={handleOnCollect}
        position={[4, 0, -2]}
      />
      <ResurrectionStone
        name="La Piedra de la Resurrección"
        isCollected={collectiblesLevelFour.ResurrectionStone}
        onCollect={handleOnCollect}
        position={[2, -0.5, -2]}
      />
      <PhilosopherStone
        name="La Piedra Filosofal"
        isCollected={collectiblesLevelFour.PhilosopherStone}
        onCollect={handleOnCollect}
        position={[0, 0, -2]}
      />
      <Profeta
        name="El Profeta"
        isCollected={collectiblesLevelFour.Profeta}
        onCollect={handleOnCollect}
        position={[-2, 0, -2]}
      />
      <EyeOjoLoco
        name="El Ojo Loco de Moody"
        isCollected={collectiblesLevelFour.EyeOjoLoco}
        onCollect={handleOnCollect}
        position={[-4, 0, -2]}
      />
    </>
  )
}

export default Collectibles
