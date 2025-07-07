import React, { useContext } from 'react'
import { ThemeContext } from '../Context/DarkLightMode';

export const Logo = () => {
  const { theme } = useContext(ThemeContext);
  
  const handleLogoClick = () => {
    window.location.href = window.location.origin;
  };
  
  return (
    <div 
      onClick={handleLogoClick}
      className="cursor-pointer group transition-all duration-300 hover:scale-105"
    >
      <h1 className={`
        font-mono text-2xl font-bold transition-all duration-300
        ${theme === 'dark' 
          ? 'text-cyan-400 group-hover:text-cyan-300' 
          : 'text-purple-600 group-hover:text-purple-700'
        }
        ${theme === 'dark' 
          ? 'drop-shadow-[0_0_8px_rgba(0,255,231,0.5)]' 
          : 'drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]'
        }
        group-hover:drop-shadow-[0_0_12px_rgba(0,255,231,0.8)]
      `}>
        &lt;Abhay /&gt;
      </h1>
    </div>
  );
};
