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
        position={[2.7, 0.5, -54]}
      />
      <ResurrectionStone
        name="La Piedra de la Resurrección"
        isCollected={collectiblesLevelFour.ResurrectionStone}
        onCollect={handleOnCollect}
        position={[33, 1, -122]}
        scale = {[1.3, 1.3, 1.3]}
      />
      <PhilosopherStone
        name="La Piedra Filosofal"
        isCollected={collectiblesLevelFour.PhilosopherStone}
        onCollect={handleOnCollect}
        position={[-4, 8, -45]}
      />
      <Profeta
        name="El Profeta"
        isCollected={collectiblesLevelFour.Profeta}
        onCollect={handleOnCollect}
        position={[-24.5, 2, -145]}
      />
      <EyeOjoLoco
        name="El Ojo Loco de Moody"
        isCollected={collectiblesLevelFour.EyeOjoLoco}
        onCollect={handleOnCollect}
        position={[-7.5, 1, -190]}
        scale={[2, 2, 2]}
      />
    </>
  )
}

export default Collectibles
