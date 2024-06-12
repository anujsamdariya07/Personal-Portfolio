import React from 'react'
import { About, Contact, Home, Navbar, Projects } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App