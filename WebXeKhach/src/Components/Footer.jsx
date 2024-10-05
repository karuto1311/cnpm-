import React from 'react'
import '../assets/Css/Footer.css'


function Footer() {
  return (
    <footer className="footer">
    <div className="contact-info">
      <h4>Contact</h4>
      <p>Customer Service: 1234 5678</p>
      <p>Email: hotro@gmail.vn</p>
    </div>
    <div className="app-download">
      <h4>Download App</h4>
      <button>Google Play</button>
      <button>App Store</button>
    </div>
  </footer>
  )
}

export default Footer