import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false); 
  const theme = toggle ? "dark" : "light";
  const fontColor = toggle ? "text-white" : "text-black";

  const toggleTheme = () => {
    setToggle((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, fontColor, toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
