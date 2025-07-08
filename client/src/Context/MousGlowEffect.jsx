import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../Context/DarkLightMode';

const MouseGlowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Set new timeout to hide glow after mouse stops
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 2000);
    };

    if (theme === 'dark') {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main glow effect */}
      <div
        className={`absolute w-96 h-96 rounded-full transition-all duration-300 ease-out ${
          isMoving ? 'opacity-40' : 'opacity-20'
        }`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, 
            rgba(236, 72, 153, 0.3) 0%, 
            rgba(219, 39, 119, 0.2) 25%, 
            rgba(190, 24, 93, 0.1) 50%, 
            transparent 70%
          )`,
          filter: 'blur(20px)',
          transform: `scale(${isMoving ? 1.2 : 1})`,
        }}
      />
      
      {/* Secondary smaller glow */}
      <div
        className={`absolute w-64 h-64 rounded-full transition-all duration-200 ease-out ${
          isMoving ? 'opacity-60' : 'opacity-30'
        }`}
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `radial-gradient(circle, 
            rgba(244, 114, 182, 0.4) 0%, 
            rgba(236, 72, 153, 0.3) 30%, 
            rgba(219, 39, 119, 0.2) 60%, 
            transparent 80%
          )`,
          filter: 'blur(15px)',
          transform: `scale(${isMoving ? 1.1 : 0.9})`,
        }}
      />
      
      {/* Inner bright core */}
      <div
        className={`absolute w-32 h-32 rounded-full transition-all duration-100 ease-out ${
          isMoving ? 'opacity-80' : 'opacity-40'
        }`}
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `radial-gradient(circle, 
            rgba(251, 146, 200, 0.5) 0%, 
            rgba(244, 114, 182, 0.4) 40%, 
            rgba(236, 72, 153, 0.3) 70%, 
            transparent 90%
          )`,
          filter: 'blur(8px)',
          transform: `scale(${isMoving ? 1.3 : 1})`,
        }}
      />
    </div>
  );
};

export default MouseGlowEffect;