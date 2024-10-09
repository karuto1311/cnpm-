import AboutContent from "./Components/AboutContent"
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function About() {
    return (
      <div className='About'>
          <Navbar />
          <AboutContent />
          <Footer />
      </div>
    )
  }
  
  export default About