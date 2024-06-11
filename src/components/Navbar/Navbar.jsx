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
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
      <button className='nav-connect'>Connect With Me</button>
    </div>
  )
}

export default Navbar