import React from 'react'
import { Image } from 'react-bootstrap'

const Loader = ({ hasText }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <Image
          src="/assets/img/sombrero-seleccionador.png"
          alt="loader"
          height={100}
        />
      </div>
      {hasText && <div className="loader-text">CARGANDO...</div>}
    </div>
  )
}

export default Loader
