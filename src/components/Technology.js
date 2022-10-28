import React, { useEffect, useState } from 'react'
import '../css/Technology.css'
import data from '../data.json'
import Background from './Background'

function Technology() {

  const [technology,setTechnology] = useState('Launch vehicle')
  const [image,setImage] = useState()
  const [desktopImage,setDesktopImage] = useState()

  const currentTechnology = data['technology'].find(tech => tech.name === technology)
  const nameArray = technology.toLowerCase().split(' ')
  
  useEffect(() => {
    import(`../assets/technology/image${nameArray.map(name => `-${name}`).join('')}-portrait.jpg`).then( image => setDesktopImage(image.default))
    import(`../assets/technology/image${nameArray.map(name => `-${name}`).join('')}-landscape.jpg`).then( image => setImage(image.default))
  },[technology])


  return (
    <div className='container'>
      <Background page={'technology'}/>
      <div className="technology-container">
        <img className='technology-image' src={image} alt='technology' />
        <img className='technology-image-desktop' src={desktopImage} alt='technology' />
        <div class="technology-wrapper">
          <div className='button-container button-circle-container'>
               {data['technology'].map((tech,index)=> <div className={`${tech.name === technology ? 'button-circle button-circle-active' : 'button-circle'}`}
                                                      onClick={() => setTechnology(tech.name)}>{index+1}</div>)}
          </div>
          <div className="technology-text">
            <h5 className='technology-terminology'>THE TERMINOLOGY...</h5>
            <h5 className='technology-name color-white font-one'>{currentTechnology.name.toUpperCase()}</h5>
            <p className='technology-description text-center'>{currentTechnology.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
