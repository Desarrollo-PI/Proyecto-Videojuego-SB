import React from 'react'
import Header from './Header'
import FooterButtons from './FooterButtons'
import { Outlet } from 'react-router'

const LayoutMain = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <FooterButtons />
      <div className="background-container">
        <div className="castle"></div>
      </div>
    </div>
  )
}

export default LayoutMain
