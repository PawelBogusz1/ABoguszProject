import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

import Work from '../components/Work'

const Opinie = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="OPINIE" text="Aby zostawić opinie na temat biblioteki wypełnij formularz w polu KONTAKT"/>
      <Work/>
   
      <Footer/>
    </div>
  )
}

export default Opinie