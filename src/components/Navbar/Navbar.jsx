import React, { useState } from 'react'
import './navbar.css'

function Navbar() {

  return (
    <div className='navbar'>
      <h1 className='logo' >ANUJ</h1>
      <ul className='nav-menu'>
        <li>
          <div><a href="#home">HOME</a></div>
        </li>
        <li>
          <div><a href="#about">ABOUT</a></div>
        </li>
        <li>
          <div><a href="#projects">PROJECTS</a></div>
        </li>
        <li>
          <div><a href="#">PORTFOLIO</a></div>
        </li>
        <li>
          <div><a href="#contact">CONTACT</a></div>
        </li>
      </ul>
      <button className='nav-connect'>
        <a href="https://www.linkedin.com/in/anuj-samdariya-569162254/" target='_blank'>Connect With Me</a>
      </button>
    </div>
  )
}

export default Navbar