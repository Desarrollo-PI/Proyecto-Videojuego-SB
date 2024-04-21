import React from 'react'
import Header from './Header'
import FooterButtons from './FooterButtons'

const LayoutMain = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
      <FooterButtons />
      <div className="background-container">
        <div className="castle"></div>
      </div>
    </div>
  )
}

export default LayoutMain
