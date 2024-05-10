import React, { useEffect } from 'react'

const MenuGame = ({
  isOpenMenu,
  isOpenGameOver,
  handleExit,
  toggleMenu,
  toggleControls,
  toggleSettings,
}) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && !isOpenGameOver) {
      toggleMenu()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpenGameOver])

  if (!isOpenMenu) return null

  return (
    <div className="menu-container">
      <div className="menu">
        <h2>Menú de Pausa</h2>
        <div className="menu-body">
          <button onClick={toggleMenu}>Continuar</button>
          <button onClick={toggleControls}>Controles</button>
          <button onClick={toggleSettings}>Configuraciones</button>
          <button onClick={handleExit}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default MenuGame
