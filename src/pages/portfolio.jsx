import { Element } from "react-scroll"
import "../css/portfolio.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

function Portfolio() {

  return (
    <Element name="home-element">
      <section id='home-section'>
        <div className='profile-div'>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="profile-picture" />
        </div>
        <div className='intro-text'>
          <h1>Azer Omar</h1>
          <p>computer engineer with interests in embedded systems, web and cybersecurity</p>
          <div className='intro-buttons'>
            <a href="https://github.com/azazarino" target="_blank"><button><FaGithub></FaGithub></button></a>
            <a href="https://www.linkedin.com/in/azer-omar-128882229/" target="_blank"><button><FaLinkedin></FaLinkedin></button></a>
            <a  href="mailto:azeromar2002@gmail.com" target="_blank" rel="noopener noreferrer"><button><IoIosSend /></button></a>
          </div>
        </div>
      </section >
    </Element>
  )
}

export default Portfolio
