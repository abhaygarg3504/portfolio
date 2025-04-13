
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import underline from "../assets/nav_underline.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';

const Services = () => {
  const { theme } = useContext(ThemeContext);  // Get the current theme

  return (
    <motion.div
      id='profile'
      initial={{ opacity: 0.1, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`px-4 md:px-8 lg:px-16 py-10 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}  // Conditional background and text color
    >
      <h1 className={`flex flex-col items-center justify-center font-bold text-3xl md:text-4xl mt-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        My Coding Profiles
        <img width={200} src={underline} alt="underline" />
      </h1>

      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-8 mt-12'
      >
        {[{
          name: "Leetcode",
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/LeetCode_logo_black.png/640px-LeetCode_logo_black.png",
          link: "https://leetcode.com/u/abhaygarg5684/"
        },
        {
          name: "Codeforces",
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/640px-Codeforces_logo.svg.png",
          link: "https://codeforces.com/profile/abhaygarg354/"
        },
        {
          name: "CodeChef",
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CodeChef_Logo.svg/640px-CodeChef_Logo.svg.png",
          link: "https://www.codechef.com/users/abhaygarg354/"
        },
        {
          name: "GeeksForGeeks",
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/640px-GeeksForGeeks_logo.png",
          link: "https://www.geeksforgeeks.org/user/abhaygah33i/"
        }].map((profile, index) => (
          <div
            key={index}
            className={`drop-shadow-lg rounded-lg p-6 flex flex-col items-center border transition-all duration-300 hover:scale-105
              w-full sm:w-[300px] md:w-[280px] lg:w-[260px]
              ${theme === 'dark' ? 'bg-gray-800/70 text-gray-300 border-gray-700' : 'bg-gray-200 text-gray-900 border-gray-300'}`} // Conditional background and text color
          >
            <img width={50} src={profile.imgSrc} alt={profile.name} className="mb-4" />
            <p className="text-lg font-semibold">{profile.name}</p>

            <div className="mt-auto pt-4 w-full text-center">
              <Link
                to={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-white transition
                  ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-600 hover:bg-purple-500'}`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
