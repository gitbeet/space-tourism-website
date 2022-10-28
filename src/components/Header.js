import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

function Header() {

  const location = useLocation()
  const [header,setHeader] = useState(['',''])  
  
    useEffect(() => {
        location.pathname === '/technology' ? setHeader(['03','SPACE LAUNCH 101'])
      : location.pathname === '/destination' ? setHeader(['01','PICK YOUR DESTINATION'])
      : location.pathname === '/crew' ? setHeader(['02','PICK YOUR CREW'])
      : setHeader(['',''])
    },[location.pathname])



  return (
    <>
      <p className='header'><span className='header-number'>{header[0]}</span><span className='header-text'>{header[1]}</span></p>
    </>
  )
}

export default Header
