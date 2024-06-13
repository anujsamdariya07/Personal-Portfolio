import React from 'react'
import './projects.css'
import arrow_icon from '../../assets/arrow_icon.svg'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        <div className="projects-format">
          <h3>01</h3>
          <h2>Javascript Projects</h2>
          <p>After learning the basics of Javascript, I made some basic projects with it.</p>
          <div className='projects-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="projects-format">
          <h3>02</h3>
          <h2>React Projects</h2>
          <p>After learning the basics of React JS, I made some projects with it.</p>
          <div className='projects-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="projects-format">
          <h3>03</h3>
          <h2>Backend Projects</h2>
          <p>After learning the basics of Node JS, Express JS and connection with MongoDB, I made some projects with it.</p>
          <div className='projects-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects