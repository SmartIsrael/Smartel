import React from 'react'
import we from '../../assets/we.jpg'
import './intro.css'
const Intro = () => {
  return (
    <div className='introduction'>
    <h1 className='intro'>What is Eden ?</h1>
    <div className='intro-sect'>
        <div className='image-cont'>
            <img src={we}/>
        </div>
        <div className='intro-txt'>
        <div className='overview'>
        <h2 className='sub-tit'>Overview:</h2>
        <p>At Eden, we believe that agriculture is not just a livelihood; it's a way of life. Our mission is to elevate the well-being of smallholder farmers by integrating them into sustainable value chains, fostering transparency, and providing access to cutting-edge agricultural technologies.
</p>
        </div>
        <div className='vision'>
        <h2 className='sub-tit'>Vision:</h2>
        <p>
        To be the leading force in transforming agriculture through technology, knowledge-sharing, and sustainable practices, creating a global community of empowered farmers and resilient ecosystems.
        </p>
        </div>

        </div>
    </div>
      
    </div>
  )
}

export default Intro
