import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import useWindowDimensions from '../hooks/useWindowDimensions'

function Background({page}) {

  // useEffect(() => {
  //   import(`../assets/${page}/background-${page}-mobile.jpg`).then( bg => setBackground(bg.default))
  // },[page])
  
  let p = document.querySelector('body')
  const {width,height} = useWindowDimensions()
  
  useEffect(() => {
    p.style.backgroundImage = `url(../assets/${page}/background-${page}-mobile.jpg)`
  
  
    if(width > 768 && width < 1440){
      p.style.backgroundImage = `url(../assets/${page}/background-${page}-tablet.jpg)`
    }
    if(width >1440){
      p.style.backgroundImage = `url(../assets/${page}/background-${page}-desktop.jpg)`
    } 

  },[page])

  
  return (ReactDOM.createPortal(
    <div style={{   
    }}>   
    </div>,
    document.querySelector('body')
  )
  )
}

export default Background
