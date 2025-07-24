//import { useState } from 'react'
import './css/App.css'
import Portfolio from './pages/portfolio'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'

function App() {
  return (
    <>
    <main className='main-content'>
      <Navbar />
        <Portfolio />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
