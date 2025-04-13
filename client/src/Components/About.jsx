import React, { useContext } from 'react'
import themepattern from "../assets/theme_pattern.svg"
import underline from "../assets/nav_underline.svg"
import { motion } from 'framer-motion'
import { ThemeContext } from '../Context/DarkLightMode'

const About = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <motion.div 
      id='about'
      initial={{ opacity: 0.1, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center justify-center gap-20 py-16  px-6 
        ${theme === 'dark' ? ' bg-gradient-to-br from-black via-gray-900 to-purple-600 text-white' : 'bg-white text-gray-900'}`}
    >
      {/* Title */}
      <div className="relative">
        <h1 className={`text-4xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          About Me
          <img width={150} src={underline} alt="" className="mx-auto" />
        </h1>
        <img className={`absolute bottom-0 right-0 z-[-1] opacity-50 ${theme === 'dark' ? 'opacity-75' : 'opacity-50'}`} src={themepattern} alt="" />
      </div>

      {/* Profile & Skills Section */}
      <motion.div 
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 items-center"
      >

        {/* Description */}
        <div className="flex flex-col gap-4 text-center">
          <div className={`text-3xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <p>I am a Competitive Programmer and Web Developer</p>
            <p className="mt-2">My skills include:</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-5 justify-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Html-1.svg/640px-Html-1.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
              "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/640px-Mongodb-icon.svg.png",
              "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
              "https://cdn-icons-png.flaticon.com/256/5968/5968381.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
            ].map((src, index) => (
              <div
                key={index}
                className={`w-20 h-20 p-2 rounded-lg shadow-md transition-all duration-300 hover:scale-110 
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
              >
                <img src={src} alt="Tech Logo" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
