import React, { useEffect, useState } from 'react'
import '../css/Destination.css'
import data from '../data.json'
import Background from './Background'



function Destination() {

  const [destination,setDestination] = useState('Moon')
  const [image,setImage] = useState()

  let currentDestination = data['destinations'].find(dest => dest.name === destination)

  useEffect(() => {
    import(`../assets/destination/image-${destination.toLocaleLowerCase()}.png`).then( image => setImage(image.default))
  },[destination]) 

  return (
    <div className='container'>
      <Background page={'destination'}/>
      <div class="wrapper">
        <img className='planet-image' src={image} alt='destination' />
        <div className='planet-text-wrapper'>
          <div className='planet-text'>
            <div className='button-container'>
              {data['destinations'].map(dest => <button
                                                    className={`${dest.name === destination ? 'button active' : 'button'}`}
                                                    onClick={() => setDestination(dest.name)}>{dest.name.toUpperCase()}</button>)}
            </div>
            <h3 className='planet-name color-white text-uppercase'>{currentDestination.name}</h3>
            <p className='planet-description border-bottom text-center'>{currentDestination.description}</p>
            <div className='planet-tablet-footer'>
              <div>
                <h5 className='destination-small-text subheading-two text-center'>AVG.DISTANCE</h5>
                <h5 className='destination-medium-text font-one color-white text-center'>{currentDestination.distance}</h5>
              </div>
              <div>
                <h5 className='destination-small-text subheading-two text-center'>EST. TRAVEL TIME</h5>
                <h5 className='destination-medium-text text-uppercase font-one color-white text-center'>{currentDestination.travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
