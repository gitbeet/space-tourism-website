import React from 'react'
import '../css/Navigation.css'
import DesktopNavigation from './DesktopNavigation'
import {Link} from 'react-router-dom'

function Navigation({toggleMobileMenu}) {
  return (
    <div className='nav'>
      <Link to='/'>
        <svg className='logo' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z" fill="#0B0D17"/>
        </svg>
      </Link>
        <svg onClick={toggleMobileMenu } className='mobile-menu-icon' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="3" fill="#D0D6F9"/>
        <rect y="9" width="24" height="3" fill="#D0D6F9"/>
        <rect y="18" width="24" height="3" fill="#D0D6F9"/>
        </svg>
        <div className='navigation-line'></div>
        <DesktopNavigation />
    </div>
  )
}

export default Navigation
