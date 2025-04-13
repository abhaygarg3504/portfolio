
import React, { useState, useContext } from 'react';
import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkLightToggle from './DarkLightToggle';
import { ThemeContext } from "../Context/DarkLightMode";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, fontColor } = useContext(ThemeContext);

  return (
    <nav className={`fixed top-0 w-full ${theme === "dark" ? "bg-black" : "bg-white"} shadow-md z-50`}>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <img src={logo} alt='Website Logo' className='h-10' />

        {/* Mobile Menu Toggle */}
        <div
          className={`lg:hidden cursor-pointer ${fontColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex gap-6 ${fontColor}`}>
          {['home', 'about', 'profile', 'project', 'contact'].map((item) => (
            <li
              key={item}
              className='relative cursor-pointer hover:scale-105 transition-all hover:text-purple-500 dark:hover:text-orange-400'
            >
              <p onClick={() => { setMenu(item); scrollToSection(item); }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
              {menu === item && <img src={underline} alt='Active underline' className='absolute left-0' />}
            </li>
          ))}
        </ul>

        {/* Right Section: Dark Mode Toggle & Button */}
        <div className='flex items-center gap-6'>
          <DarkLightToggle />
          <button
            onClick={() => { setMenu("contact"); scrollToSection("contact"); }}
            className='px-6 py-3 text-white rounded-full  bg-gradient-to-b from-purple-500 to-orange-500 hover:scale-105 transition-all'
          >
            Connect with Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`lg:hidden flex flex-col items-center ${fontColor} ${theme === "dark" ? "bg-gray-900" : "bg-gray-500"} py-4`}>
          {['home', 'about', 'profile', 'project', 'contact'].map((item) => (
            <li
              key={item}
              className='py-2 w-full text-center border-b border-gray-600'
            >
              <p
                onClick={() => {
                  setMenu(item);
                  scrollToSection(item);
                  setIsOpen(false);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
