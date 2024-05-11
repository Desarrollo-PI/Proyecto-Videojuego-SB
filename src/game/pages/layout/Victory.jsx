const Victory = ({ isOpenVictory, handleExit }) => {
  if (!isOpenVictory) {
    return null
  }

  return (
    <div className="victory-container">
      <div className="victory">
        <h1>HAS COMPLETADO EL NIVEL!</h1>
        <div className="victory-buttons">
          <button onClick={handleExit}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default Victory
