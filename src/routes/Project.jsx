import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Technologies from '../components/Technologies'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Discover my projects."/>
      <Work/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default Project