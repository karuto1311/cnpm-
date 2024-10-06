import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
  </div>
  )
}

export default App
