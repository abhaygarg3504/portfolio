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
    <nav className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' : 'bg-white/90 backdrop-blur-lg border-b border-gray-200'} shadow-lg z-50 transition-all duration-300`}>
      <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`lg:hidden cursor-pointer ${fontColor} p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex items-center gap-8 ${fontColor}`}>
          {navItems.map(({ name, path }) => (
            <li key={name} className="relative group">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative font-medium text-base py-2 px-1 transition-all duration-300 hover:scale-105 ${
                    isActive 
                      ? 'text-purple-600 dark:text-orange-400' 
                      : 'hover:text-purple-600 dark:hover:text-orange-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {name}
                    {isActive && (
                      <img 
                        src={underline} 
                        alt="Active underline" 
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-[60px] transition-all duration-300" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section: Dark Mode Toggle & Button */}
        <div className="hidden lg:flex items-center gap-4">
          <DarkLightToggle />
          <NavLink to="/contact">
            <button className="px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 hover:from-purple-700 hover:via-purple-600 hover:to-orange-600 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              Connect with Me
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`${theme === 'dark' ? 'bg-gray-900/95 border-t border-gray-800' : 'bg-gray-50/95 border-t border-gray-200'} backdrop-blur-lg`}>
          <ul className={`flex flex-col ${fontColor} py-4`}>
            {navItems.map(({ name, path }) => (
              <li key={name} className="relative">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block w-full py-3 px-6 text-center font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-purple-600 dark:text-orange-400 bg-purple-50 dark:bg-gray-800' 
                        : 'hover:text-purple-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            
            {/* Mobile Dark Mode Toggle and Contact Button */}
            <li className="flex flex-col items-center gap-4 py-4 px-6 border-t border-gray-200 dark:border-gray-700 mt-2">
              <DarkLightToggle />
              <NavLink to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                <button className="w-full px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 hover:from-purple-700 hover:via-purple-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
                  Connect with Me
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;