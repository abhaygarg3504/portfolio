
import React, { useContext } from "react";
import { ThemeContext } from "../Context/DarkLightMode";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkLightToggle = () => {
  const { toggle, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="p-2 rounded-full focus:outline-none focus:ring"
    >
      {toggle ? (
        <FaSun size={20} className="text-yellow-400" />
      ) : (
        <FaMoon size={20} className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkLightToggle;
