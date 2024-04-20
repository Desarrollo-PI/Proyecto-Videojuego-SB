import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderForm from './HeaderForm'

const LayoutAuthForm = ({ children }) => {
  return (
    <div className="main-container">
      <HeaderForm />
      {children}
      <div className="background-container">
        <div className="castle"></div>
      </div>
    </div>
  )
}

export default LayoutAuthForm
