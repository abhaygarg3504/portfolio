
import React, { useContext } from 'react';
import FoodDel from "../assets/food-del.jpg";
import JobPortal from "../assets/job-poral.jpg";
import TxtImg from "../assets/txt-img-conv.jpg";
import { Link } from 'react-router-dom';
import underline from "../assets/nav_underline.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    { img: FoodDel, github: "/", live: "/" },
    { img: TxtImg, github: "/", live: "/" },
    { img: JobPortal, github: "/", live: "/" }
  ];

  return (
    <motion.div
      id='project'
      className={`px-4 py-10 ${theme === 'dark' ? ' bg-gradient-to-br from-black via-gray-900 to-purple-600 text-white' : 'bg-white text-black'}`}
    >
      <h1 className='flex flex-col items-center justify-center font-bold text-4xl mt-10'>
        Projects
        <img width={150} src={underline} alt="Underline" />
      </h1>

      <div className='flex flex-wrap justify-center gap-8 mt-12'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`drop-shadow-lg rounded-lg p-6 flex flex-col items-center border transition-all duration-300 hover:scale-105
              w-full sm:w-[300px] md:w-[280px] lg:w-[260px]
              ${theme === 'dark'
                ? 'bg-gray-800/70 text-gray-300 border-gray-700'
                : 'bg-gray-300 text-gray-900 border-gray-400'}
            `}
          >
            <img
              width={800}
              src={project.img}
              alt={`Project ${index + 1}`}
              className="mb-4 w-full rounded-lg"
            />

            <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 w-full">
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className='px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg text-white transition duration-300
                  bg-purple-600 hover:bg-purple-500 dark:bg-orange-500 dark:hover:bg-orange-400'
              >
                <img
                  width={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg"
                  alt="GitHub"
                />
                GitHub
              </Link>

              <Link
                to={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className='px-4 py-2 w-full sm:w-auto rounded-lg text-white text-center transition duration-300
                  bg-purple-600 hover:bg-purple-500 dark:bg-orange-500 dark:hover:bg-orange-400'
              >
                Live
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
