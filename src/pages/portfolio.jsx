//import { useState } from 'react'
import "../css/portfolio.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

function Portfolio() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <section id='home-section'>
        <div className='profile-div'>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="profile-picture" />
        </div>
        <div className='intro-text'>
          <h1>Azer Omar</h1>
          <p>computer engineer with interest in embedded systems, web and cybersecurity</p>
          <div className='intro-buttons'>
            <a href='https://github.com/azazarino'><button><FaGithub></FaGithub></button></a>
            <a href="https://www.linkedin.com/in/azer-omar-128882229/"><button><FaLinkedin></FaLinkedin></button></a>
            <button><IoIosSend /></button>
          </div>
        </div>
      </section >
    </>
  )
}

export default Portfolio
