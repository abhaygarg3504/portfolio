import React, { useContext } from 'react';
import user from "../assets/user_icon.svg";
import { motion } from 'motion/react'
import { ThemeContext } from '../Context/DarkLightMode';
import linkdein from "../assets/linkdein.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twiter.svg";

const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

const Footer = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <footer className={theme == "dark" ? "bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 px-6 md:px-12 py-12" : "bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700 px-6 md:px-12 py-12"}>
      <div className='container mx-auto max-w-6xl'>
        
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12'>

          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center md:text-left space-y-4'
          >
            <h3 className='text-xl font-bold text-white mb-3'>Abhay Garg</h3>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I am a Competitive Programmer & Web Developer
            </p>
            <p className='text-sm text-gray-400 mt-2'>
              Passionate about creating innovative solutions and building exceptional digital experiences.
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col items-center md:items-start gap-6'
          >
            <h4 className='text-lg font-semibold text-white'>Connect with Me</h4>
            <div className='flex gap-5'>
              <a 
                href="https://www.instagram.com/abhaygarg_354/" 
                target='_blank' 
                rel='noopener noreferrer'
                className='group relative p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <img className='w-6 h-6 filter invert' src={instagram} alt='Instagram' />
                <div className='absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </a>
              <a 
                href="https://x.com/abhayga615785" 
                target='_blank' 
                rel='noopener noreferrer'
                className='group relative p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <img className='w-6 h-6 filter invert' src={twitter} alt='Twitter' />
                <div className='absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </a>
              <a 
                href="https://www.linkedin.com/in/abhay-garg-a49817257/" 
                target='_blank' 
                rel='noopener noreferrer'
                className='group relative p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <img className='w-6 h-6 filter invert' src={linkdein} alt='LinkedIn' />
                <div className='absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </a>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col items-center md:items-start gap-6'
          >
            <h4 className='text-lg font-semibold text-white'>Stay Updated</h4>
            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
              <div className='relative flex-1'>
                <img 
                  src={user} 
                  alt='User Icon' 
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70' 
                />
                <input
                  type='email'
                  className='pl-12 pr-4 py-3 w-full bg-gray-800/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300'
                  placeholder='Enter your email'
                />
              </div>
              <button className='px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 hover:from-purple-700 hover:via-purple-600 hover:to-orange-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='relative mb-8'>
          <hr className='border-gray-600' />
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-orange-500/20 h-px'></div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-400'
        >
          <p className='text-center lg:text-left'>
            © 2025 Abhay Garg | All Rights Reserved
          </p>
          <div className='flex flex-wrap justify-center lg:justify-end gap-8'>
            <p className='cursor-pointer hover:text-purple-400 transition-colors duration-300 relative group'>
              Terms of Services
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full'></span>
            </p>
            <p className='cursor-pointer hover:text-purple-400 transition-colors duration-300 relative group'>
              Privacy Policy
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full'></span>
            </p>
            <p 
              onClick={() => scrollToSection("contact")} 
              className='cursor-pointer hover:text-orange-400 transition-colors duration-300 relative group'
            >
              Connect With Me
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
