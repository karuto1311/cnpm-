import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <header>
      <Navbar />
    </header>
    <main>
      <MainContent />
    </main>
  </div>
  )
}

export default App
