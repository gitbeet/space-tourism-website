import React from 'react'
import '../css/MobileMenu.css'
import {Link} from 'react-router-dom'
import * as ReactDOM from 'react-dom'

function MobileMenu({toggleMobileMenu,showMobileMenu}) {
  return ( ReactDOM.createPortal(
    <>
    <div onClick={toggleMobileMenu}
         className={`${showMobileMenu ? 'mobile-menu-backdrop' : 'mobile-menu-backdrop mobile-menu-backdrop-hidden'}`}></div>
    <div className={`${showMobileMenu ? 'mobile-menu' : 'mobile-menu mobile-menu-hidden'}`}>
        <svg onClick={toggleMobileMenu} className='mobile-menu-close-button' svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9"/>
        <rect x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9"/>
        </svg>
        <div class="mobile-menu-elements">
            <Link to='/'><div className='mobile-menu-element  color-white nav-text'><span className='color-white bold'>00</span><span>HOME</span></div></Link>
            <Link to='/destination'><div className='mobile-menu-element  color-white nav-text'><span className='color-white bold'>01</span><span>DESTINATION</span></div></Link>
            <Link to='crew'><div className='mobile-menu-element  color-white nav-text'><span className='color-white bold'>02</span><span>CREW</span></div></Link>
            <Link to='/technology'><div className='mobile-menu-element  color-white nav-text'><span className='color-white bold'>03</span><span>TECHNOLOGY</span></div></Link>
        </div> 
    </div>
    </> , 
    document.getElementById('mobile-menu')
  )

  )
}

export default MobileMenu
