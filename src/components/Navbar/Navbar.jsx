import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='logo' >ANUJ</h1>
      <ul className='nav-menu'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
      <button className='nav-connect'>
        <a href="https://www.linkedin.com/in/anuj-samdariya-569162254/" target='_blank'>Connect With Me</a>
      </button>
    </div>
  )
}

export default Navbar