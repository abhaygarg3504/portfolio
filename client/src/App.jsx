import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Context from './Components/Context'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen'> 
    <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Context/>
      <Footer/>
      
    </div>
  )
}

export default App
 // <div className=' bg-gradient-to-br from-black via-gray-900 to-purple-600 flex flex-col gap-25'>
   