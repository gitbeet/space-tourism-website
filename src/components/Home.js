import React from 'react'
import '../css/Home.css'
import Background from './Background'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <Background page={'home'}/>
      <div className='wrapper home-wrapper text-center'>
      <div class="home-top">
        <h5 className='home-subheading'>SO, YOU WANT TO TRAVEL TO</h5>
        <h2 className='home-heading color-white'>SPACE</h2>
        <p className='home-text' >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
      </div>
      <Link to='/destination'>
      <div className='explore-button'>
        <p className='font-one color-dark'>EXPLORE</p>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Home
