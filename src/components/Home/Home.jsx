import React from 'react'
import './home.css'
import profile_img from '../../assets/DP.jpg'

function Home() {
  return (
    <div className='home'>
      <img src={profile_img} alt="" width={300} height={300} />
      <h1><span>I'm Anuj Samdariya,</span> Fullstack Developer from Jabalpur, Madhya Pradesh</h1>
      <p>I am a newbie exploring various domains, solving problems approaching them with a fresh perspective!</p>
      <div className='home-action'>
        <button className="home-connect">Connect With Me</button>
        <button className="home-resume">My Resume</button>
      </div>
    </div>
  )
}

export default Home