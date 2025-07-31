//import { useState } from 'react'
import './css/App.css'
import Portfolio from './pages/portfolio'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <main className="main-content">
        <Navbar />
        <Portfolio />
        <About />
        <Projects />
      </main>
    </ThemeProvider>
  );
}


export default App
