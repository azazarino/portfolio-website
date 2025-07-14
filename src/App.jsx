//import { useState } from 'react'
import './css/App.css'
import Portfolio from './pages/portfolio'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import ContactMe from './pages/contactMe'

function App() {
  return (
    <>
    <main className='main-content'>
      <Navbar />
        <Portfolio />
        <About />
        <Projects />
        <ContactMe />
      </main>
    </>
  )
}

export default App
