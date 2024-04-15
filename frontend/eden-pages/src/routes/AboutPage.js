import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Intro from '../components/AboutPage/Intro'
import Servs from '../components/AboutPage/Servs'
import Team from '../components/AboutPage/Team'
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Servs/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default AboutPage;
