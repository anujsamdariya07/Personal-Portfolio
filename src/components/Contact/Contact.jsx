import React, { useState } from 'react'
import './contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b058ea1f-113c-4c58-9b4b-a98d51f12437");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <div className='contact' id='contact'>
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
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' value={name} onChange={(event) => setName(event.target.value)} />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows='8' placeholder='Enter Your Message' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact