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

const App = () => {
  const {theme, fontColor} = useContext(ThemeContext)
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen'> 
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/contact' element={<Context/>}/>
      <Route path='/profile' element={<Services/>}/>
    </Routes>  
    </div>
  )
}

export default App
 // <div className=' bg-gradient-to-br from-black via-gray-900 to-purple-600 flex flex-col gap-25'>
   