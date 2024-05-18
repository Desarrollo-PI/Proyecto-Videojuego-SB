import Expelliarmus from './Expelliarmus'
import Glacius from './Glacius'
import { usePlayer } from '../../../providers/player/PlayerProvider'
const Spells = () => {
  const { player, setPlayer } = usePlayer()
  return (
    <>
      {player.spellExpelliarmus && (
        <Expelliarmus
          initRotation={player.spellInitRotation}
          initPosition={player.spellInitPosition}
        />
      )}
      {player.spellGlacius && (
        <Glacius
          initRotation={player.spellInitRotation}
          initPosition={player.spellInitPosition}
        />
      )}
    </>
  )
}
export default Spells
