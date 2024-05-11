const GameOver = ({ isOpenGameOver, handleExit }) => {
  if (!isOpenGameOver) {
    return null
  }

  return (
    <div className="gameover-container">
      <div className="gameover">
        <h1>HAS MUERTO!</h1>
        <div className="gameover-buttons">
          <button onClick={() => window.location.reload()}>Reiniciar</button>
          <button onClick={handleExit}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
