import React from 'react'
import './projects.css'
import arrow_icon from '../../assets/arrow_icon.svg'

function Projects() {
  return (
    <>
      <div className='projects' id='projects'>
        <div className="projects-title">
          <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          <a target='_blank' href='https://github.com/anujsamdariya07/SavvyShop'>
            <div className="projects-format">
              <h3>01</h3>
              <h2>SavvyShop (E-commerce Website)</h2>
              <p>A complete full stack project with admin page</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/anujsamdariya07/Blogging-Website'>
            <div className="projects-format">
              <h3>02</h3>
              <h2>WriteWise (Blogging Website)</h2>
              <p>A react project using Appwrite</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/anujsamdariya07/Bank-Management-System'>
            <div className="projects-format">
              <h3>03</h3>
              <h2>Automated Teller Machine</h2>
              <p>A project using JFrame library, ActionListener interface, and MySQL</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* <div className='projects' id='projects'>
        <div className="projects-title">
          <h1>Other Projects</h1>
        </div>
        <div className="projects-container">
          <a target='_blank' href='https://github.com/anujsamdariya07/SavvyShop'>
            <div className="projects-format">
              <h3>01</h3>
              <h2>SavvyShop (E-commerce Website)</h2>
              <p>A complete full stack project with admin page</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/anujsamdariya07/Blogging-Website'>
            <div className="projects-format">
              <h3>02</h3>
              <h2>WriteWise (Blogging Website)</h2>
              <p>A react project using Appwrite</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/anujsamdariya07/Bank-Management-System'>
            <div className="projects-format">
              <h3>03</h3>
              <h2>Automated Teller Machine</h2>
              <p>A project using JFrame library, ActionListener interface, and MySQL</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div> */}
    </>
  )
}

export default Projects