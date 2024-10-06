import React from 'react'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent';
import Footer from './Components/Footer'


function Home() {

  return (
    <div className="Home">
        <Navbar />
        <MainContent />
        <Footer />
    </div>  )
}

export default Home