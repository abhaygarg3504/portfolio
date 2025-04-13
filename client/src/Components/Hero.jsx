import React, { useContext } from 'react';
import profileimg from "../assets/profile.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div 
      id='home' 
      className={`flex flex-col items-center gap-6 text-center px-4 md:px-12 lg:px-24 py-16 
        ${theme === 'dark' ? ' bg-gradient-to-br from-black via-gray-900 to-purple-600 text-white' : 'bg-white text-black'}`}
    >
      {/* Profile Image */}
      <img 
        className='w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full' 
        src={profileimg} 
        alt='Profile' 
      />

      {/* Heading */}
      <motion.h1 
        className='text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-b from-purple-500 to-orange-500 bg-clip-text text-transparent'
      >
        I am Abhay Garg,
        <span className={`block mt-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Competitive Programmer and Web Developer
        </span>
      </motion.h1>

      {/* Subtext */}
      <p className={`w-full md:w-3/4 lg:w-1/2 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        I am a 3rd-year Electrical Engineering student from MANIT Bhopal.
      </p>

      {/* Buttons */}
      <motion.div className='flex flex-col md:flex-row gap-6 items-center text-lg font-medium mt-4'>
        <button 
          className='px-6 py-3 text-white rounded-full hover:scale-105 transition-all 
          bg-gradient-to-b from-purple-500 to-orange-500'
        >
          Connect with Me
        </button>
        <a 
          href='/' 
          download 
          className={`px-6 py-3 rounded-full border hover:scale-105 transition-all 
            ${theme === 'dark' ? 'border-white text-white' : 'border-black text-black'}`}
        >
          My Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
