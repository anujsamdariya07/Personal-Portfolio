import React, { useRef, useState } from 'react'
import './navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className='navbar'>
      <h1 className='logo' >ANUJ</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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