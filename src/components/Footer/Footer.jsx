import React from 'react'
import './footer.css'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div className='footer unselectable'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>ANUJ</h1>
          <p>I have some experience in Frontend Development with some fresh knowledge in Backend technologies as well.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Anuj Samdariya. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer