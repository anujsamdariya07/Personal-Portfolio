import React from 'react'
import './contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available for work, internships, and hackathons.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>anujsamdariya18@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>(+91)-9893380468</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
                <p>Jabalpur, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows='8' placeholder='Enter Your Message'></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact