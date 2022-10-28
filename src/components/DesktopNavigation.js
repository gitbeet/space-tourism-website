import React from 'react'
import data from '../data.json'
import {Link , useLocation} from 'react-router-dom'
import '../css/DesktopNavigation.css'

function DesktopNavigation() {

    const location = useLocation()

    console.log(location.pathname)

  return (
    <>
        <div className='button-container desktop-navigation'>
          <Link to={`/`}><button className={`${ location.pathname === '/' ? 'nav-button nav-active' : 'nav-button'}`}><span className='nav-button-number'>00</span> HOME</button></Link>
          <Link to={`/destination`}><button className={`${ location.pathname === '/destination' ? 'nav-button nav-active' : 'nav-button'}`}><span className='nav-button-number'>01</span> DESTINATION</button></Link>
          <Link to={`/crew`}><button className={`${ location.pathname === '/crew' ? 'nav-button nav-active' : 'nav-button'}`}><span className='nav-button-number'>02</span> CREW</button></Link>
          <Link to={`/technology`}><button className={`${ location.pathname === '/technology' ? 'nav-button nav-active' : 'nav-button'}`}><span className='nav-button-number'>03</span> TECHNOLOGY</button></Link>
        </div>
    </>
  )
}

export default DesktopNavigation
