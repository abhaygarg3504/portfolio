import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Context from './Components/Context'
import Footer from './Components/Footer'
import { ThemeContext } from './Context/DarkLightMode'
import { Route, Routes } from 'react-router-dom'
import MouseGlowEffect from './Context/MousGlowEffect'

const App = () => {
  const {theme, fontColor} = useContext(ThemeContext)
  return (
    <div className={`min-h-screen relative transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white' 
        : 'bg-white text-black'
    }`}> 
      <MouseGlowEffect />
      <div className="relative z-10">
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/contact' element={<Context/>}/>
          <Route path='/profile' element={<Services/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App