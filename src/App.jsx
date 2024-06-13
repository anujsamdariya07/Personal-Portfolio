import React from 'react'
import { About, Contact, Footer, Home, Navbar, Projects } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App