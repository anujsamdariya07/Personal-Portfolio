import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className='image' ></div>
      <h1><span>I'm Anuj Samdariya,</span> Fullstack Developer from Jabalpur, Madhya Pradesh</h1>
      <p>I am a newbie exploring various domains, solving problems approaching them with a fresh perspective!</p>
      <div className='home-action'>
        <button className="home-connect">
          <a href="https://www.linkedin.com/in/anuj-samdariya-569162254/" target='_blank'>Connect With Me</a>
        </button>
        <button className="home-resume">My Resume</button>
      </div>
    </div>
  )
}

export default Home