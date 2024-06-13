import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'

function About() {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className='about-right'>
          <div className="about-para">
            <p>I have some experience in Frontend Development with some fresh knowledge in Backend technologies as well.</p>
            <p>I have also made some projects with the knowledge that I have gained from these technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>C </p>
              <hr style={{width: '20%'}} />
            </div>
            <div className="about-skill">
              <p>C++ </p>
              <hr style={{width: '90%'}} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{width: '50%'}} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{width: '60%'}} />
            </div>
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{width: '80%'}} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{width: '40%'}} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{width: '90%'}} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{width: '80%'}} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{width: '60%'}} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{width: '60%'}} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{width: '70%'}} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>70+</h1>
          <p>PROBLEMS SOLVED IN LEETCODE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROBLEMS SOLVED IN GFG</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROBLEMS SOLVED IN GFG</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROBLEMS SOLVED IN CODECHEF</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About