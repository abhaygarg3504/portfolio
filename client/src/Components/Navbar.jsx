import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import underline from '../assets/nav_underline.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkLightToggle from './DarkLightToggle';
import { ThemeContext } from '../Context/DarkLightMode';
import { Logo } from './Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Profile', path: '/profile' },
  { name: 'Projects', path: '/project' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, fontColor } = useContext(ThemeContext);

  return (
    <nav className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'} shadow-md z-50`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        {/* Mobile Menu Toggle */}
        <div className={`lg:hidden cursor-pointer ${fontColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex gap-6 ${fontColor}`}>
          {navItems.map(({ name, path }) => (
            <li key={name} className="relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `cursor-pointer hover:scale-105 transition-all ${
                    isActive ? 'text-purple-500 dark:text-orange-400' : ''
                  }`
                }
              >
                {name}
              </NavLink>
              <NavLink to={path} end>
                {({ isActive }) =>
                  isActive && <img src={underline} alt="Active underline" className="absolute left-0" />
                }
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section: Dark Mode Toggle & Button */}
        <div className="flex items-center gap-6">
          <DarkLightToggle />
          <NavLink to="/contact">
            <button className="px-6 py-3 text-white rounded-full bg-gradient-to-b from-purple-500 to-orange-500 hover:scale-105 transition-all">
              Connect with Me
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`lg:hidden flex flex-col items-center ${fontColor} ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-500'} py-4`}>
          {navItems.map(({ name, path }) => (
            <li key={name} className="py-2 w-full text-center border-b border-gray-600">
              <NavLink
                to={path}
                className="w-full block"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
