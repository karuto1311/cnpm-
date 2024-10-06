import React from 'react'
import Navbar from './Components/Navbar'
import ScheduleContent from './Components/ScheduleContent'
import Footer from './Components/Footer'


function Schedule() {
  return (
    <div className='Schedule'>
        <Navbar />
        <ScheduleContent />
        <Footer />
    </div>
  )
}

export default Schedule