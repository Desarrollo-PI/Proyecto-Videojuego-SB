import React, { useEffect } from 'react'
import { IoCaretBack } from 'react-icons/io5'

const ControlsGame = ({ isOpenControls, toggleControls }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpenControls])

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      if (isOpenControls) {
        toggleControls()
      }
    }
  }

  const controls = [
    {
      key: 'W',
      description: 'Mover hacia adelante',
    },
    {
      key: 'A',
      description: 'Mover hacia la izquierda',
    },
    {
      key: 'S',
      description: 'Mover hacia atrás',
    },
    {
      key: 'D',
      description: 'Mover hacia la derecha',
    },
    {
      key: 'F',
      description: 'Lanzar Hechizo',
    },
    {
      key: 'Shift',
      description: 'Correr',
    },
    {
      key: '1',
      description: 'Seleccionar Expelliarmus',
    },
    {
      key: '2',
      description: 'Seleccionar Lumos',
    },
    {
      key: '3',
      description: 'Seleccionar Incendio',
    },
    {
      key: '4',
      description: 'Seleccionar Glacius',
    },
  ]

  if (!isOpenControls) return null

  return (
    <div>
      <div className="menu-container">
        <div className="control">
          <div className="control-header">
            <h2>Instrucciones</h2>
            <button onClick={toggleControls} className="control-back">
              <IoCaretBack size={35} />
            </button>
          </div>
          <p>Utiliza las teclas:</p>
          <div className="control-list">
            {controls.map((control, index) => (
              <div key={index} className="control-item">
                <div className="control-description">{control.description}</div>
                <div className="control-key">{control.key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlsGame
