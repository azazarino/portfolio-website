//import { useState } from 'react'
import './css/App.css'
import Portfolio from './pages/portfolio'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'

function App() {
  return (
    <>
      <Navbar />
      <main className='main-content'>
        <Portfolio />
        <About />
        <Projects />
      </main>

    </>
  )
}

export default App
