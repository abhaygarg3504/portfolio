import React, { useContext } from 'react';
import user from "../assets/user_icon.svg";
import { motion } from 'motion/react'
import { ThemeContext } from '../Context/DarkLightMode';
const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

const Footer = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <footer className={ theme == "dark" ? "bg-black border-black px-6 md:px-12 py-8 " : `bg-gray-800/70 border border-gray-700 px-6 md:px-12 py-8`}>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>

       <div className='text-center md:text-left'>
          <p className='text-lg text-white'>
            I am a Competitive Programmer & Web Developer
          </p>
        </div>

        <div className='flex flex-col items-center md:items-start gap-4'>
          <p className='text-lg text-white'>Connect with Me</p>
          <div className='flex gap-4'>
            <a href="https://www.instagram.com/abhaygarg_354/" target='_blank' rel='noopener noreferrer'>
              <img className='w-8 h-8' src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='Instagram' />
            </a>
            <a href="https://x.com/abhayga615785" target='_blank' rel='noopener noreferrer'>
              <img className='w-8 h-8' src='https://upload.wikimedia.org/wikipedia/commons/1/19/X_logo_twitter_new_brand_icon.svg' alt='Twitter' />
            </a>
            <a href="https://www.linkedin.com/in/abhay-garg-a49817257/" target='_blank' rel='noopener noreferrer'>
              <img className='w-8 h-8' src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Linkedin-brands-solid.svg' alt='LinkedIn' />
            </a>
          </div>
        </div>


        <div className='flex flex-col items-center md:flex-row gap-4 w-full'>
          <div className='relative w-full md:w-auto'>
            <img src={user} alt='User Icon' className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5' />
            <input
              type='email'
              className='pl-12 pr-4 py-2 w-full md:w-64 bg-[#32323B] text-white border border-gray-600 rounded-md focus:outline-none'
              placeholder='Enter your email'
            />
          </div>
          <button className='px-6 py-2 text-white rounded-md bg-gradient-to-r from-purple-500 to-orange-500 hover:scale-105 transition'>
            Subscribe
          </button>
        </div>
      </div>

      <hr className='border-gray-600 my-6' />

      <div className='flex flex-col md:flex-row justify-between text-sm text-white text-center md:text-left'>
        <p>2025 Abhay Garg | All Rights Reserved</p>
        <div className='flex flex-wrap justify-center md:justify-start gap-6'>
          <p className='cursor-pointer hover:underline'>Terms of Services</p>
          <p className='cursor-pointer hover:underline'>Privacy Policy</p>
          <p onClick={() => scrollToSection("contact")} className='cursor-pointer hover:underline'>Connect With Me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;