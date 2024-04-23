import { Html } from '@react-three/drei'

import MenuGame from './MenuGame'

import { FaHeart } from 'react-icons/fa'
import { FaHeartBroken } from 'react-icons/fa'

const HeartBar = ({ currentHearts, maxHearts }) => {
  return (
    <div className="heart-bar">
      {Array.from({ length: maxHearts }, (_, index) => (
        <div key={index} className="heart">
          {index < currentHearts ? (
            <FaHeart color="#AF2929" size={50} className="heart" />
          ) : (
            <FaHeartBroken color="#1C1E28" size={50} className="heart" />
          )}
        </div>
      ))}
    </div>
  )
}

const HealthBar = ({ health, maxHealth }) => {
  const healthPercentage = (health / maxHealth) * 100
  return (
    <div className="health-bar">
      <div
        style={{
          width: `${healthPercentage}%`,
        }}
        className="health-bar-inner"
      ></div>
    </div>
  )
}

const ManaBar = ({ mana, maxMana }) => {
  const manaPercentage = (mana / maxMana) * 100
  return (
    <div className="mana-bar">
      <div
        style={{
          width: `${manaPercentage}%`,
        }}
        className="mana-bar-inner"
      ></div>
    </div>
  )
}

const ChooseSpell = ({ selectedSpell }) => {
  return (
    <div className="choose-spell">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1c1e28',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="selected-spell">
          <div className="selected-spell-icon">{selectedSpell?.icon}</div>
          <div className="selected-spell-name">
            <h2>{selectedSpell?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

const OptionSpell = ({ spell }) => {
  return (
    <div className="option-spell">
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#1c1e28',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {spell?.icon}
      </div>
      <div className="key-indicator">{spell?.key}</div>
    </div>
  )
}

const GameIndicators = ({
  isOpenMenu,
  handleExit,
  toggleSettings,
  toggleControls,
  toggleMenu,
  closeMenu,
  spells,
  selectedSpell,
  selectedSpellIndex,
}) => {
  return (
    <Html fullscreen>
      <div className="game-indicators-container">
        <div className="game-indicators-info">
          <HeartBar currentHearts={1} maxHearts={3} />
          <div className="game-indicators-health">
            <HealthBar health={80} maxHealth={100} />
            <ManaBar mana={50} maxMana={100} />
          </div>
        </div>
        <div className="game-indicators-spells">
          <ChooseSpell selectedSpell={selectedSpell} />
          <div className="options-spells">
            {spells.map(
              (spell, index) =>
                spell?.id !== selectedSpellIndex && (
                  <OptionSpell key={spell.id} spell={spell} />
                )
            )}
          </div>
        </div>
        <MenuGame
          handleExit={handleExit}
          isOpenMenu={isOpenMenu}
          toggleSettings={toggleSettings}
          toggleControls={toggleControls}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </div>
    </Html>
  )
}

export default GameIndicators
