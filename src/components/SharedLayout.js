import React from 'react'
import Navigation from './Navigation'
import {Outlet} from 'react-router-dom'
import MobileMenu from './MobileMenu'
import Header from './Header'

function SharedLayout({showMobileMenu,toggleMobileMenu}) {
  return (
    <>
        <Navigation toggleMobileMenu={toggleMobileMenu}/> 
        <Header />
        <MobileMenu toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />
        <Outlet />
    </>
  )
}

export default SharedLayout
