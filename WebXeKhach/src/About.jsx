import AboutContent from "./Components/AboutContent"
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NavbarUser from "./Components/NavbarUser"

function About() {
    return (
      <div className='About'>
          <NavbarUser />
          <AboutContent />
          <Footer />
      </div>
    )
  }
  
  export default About