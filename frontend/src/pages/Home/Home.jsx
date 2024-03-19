import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallery from './Gallery/Gallery'
import PopularClasses from './PopularClasses/PopularClasses'

const Home = () => {
  return (
    <div>
      <HeroContainer/>
      <div className='max-w-screenxl mx-auto'>
        <Gallery/>
        <PopularClasses/>
      </div>
    </div>
  )
}

export default Home
