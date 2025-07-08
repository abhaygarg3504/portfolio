import React, { useContext, useState, useEffect } from 'react';
import profileimg from "../assets/profile.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';
import Navbar from './Navbar';
import Footer from './Footer';
import about from "../assets/about.svg"
import cloud from "../assets/cloud.svg"
import intro from "../assets/intro.svg"
import devops from "../assets/devops.svg"
import { Link } from 'react-router-dom';
import linkdein from "../assets/linkdein.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twiter.svg";
import leetcode from "../assets/leetcode.svg";
import codeforces from "../assets/codeforces.svg";
import github from "../assets/github.svg";
import typescript from "../assets/typescript.svg"
import react from "../assets/react.svg"
import nextjs from "../assets/nextjs.svg"
import tailwind from "../assets/tailwind.svg"
import query from "../assets/react_query.svg"
import mongodb from "../assets/mongodb.svg"
import postgres from "../assets/postgres.svg"
import cloudinary from "../assets/cloudinary.svg"
import vercel from "../assets/vercel.svg"
import convex from "../assets/convex.svg"
import github_action from "../assets/github_actions.svg"
import thunder from "../assets/thunder.svg"
import postman from "../assets/postman.svg"

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-purple-500">|</span>
    </span>
  );
};

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div>
      <Navbar/>
      <motion.div 
        id='home' 
        className={`min-h-screen transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 text-white' 
            : 'bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900'
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 text-center px-4 md:px-12 lg:px-24 py-16">
          {/* Heading */}
          <motion.h1 
            className='text-3xl md:text-4xl lg:text-5xl font-bold'
            variants={itemVariants}
          >
            <span className='bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent'>
              I am Abhay Garg,
            </span>
            <span className={`block mt-2 text-2xl md:text-3xl lg:text-4xl font-medium ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Competitive Programmer and Web Developer
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div 
            className={`text-xl md:text-2xl font-light ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            variants={itemVariants}
          >
            <TypeWriter text="I am a Electrical Engineering student from MANIT Bhopal." speed={80} />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="px-4 md:px-12 lg:px-24 pb-16">
          
          {/* Introduction Section */}
          <motion.div 
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-2xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                : 'bg-white/70 backdrop-blur-sm border border-gray-200'
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={intro} alt="Introduction" className="w-48 h-48 object-contain" />
            </motion.div>
            <div className="flex-1">
              <p className={`text-lg leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Self-taught MERN stack developer passionate about building scalable, efficient applications. 
                Fascinated by technology from a young age, I've continuously expanded my expertise across 
                various tools and frameworks. Committed to improving my skills, writing better code, and 
                delivering impactful solutions.
              </p>
              
              {/* Social Links */}
              <motion.div 
                className='flex gap-4 mb-6'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: linkdein, url: "https://www.linkedin.com/in/abhay-garg-a49817257/", alt: "LinkedIn" },
                  { icon: instagram, url: "https://www.instagram.com/abhaygarg_354/", alt: "Instagram" },
                  { icon: twitter, url: "https://x.com/abhayga615785", alt: "Twitter" },
                  { icon: leetcode, url: "https://leetcode.com/u/abhaygarg5684", alt: "Leetcode" },
                  { icon: codeforces, url: "https://codeforces.com/profile/abhaygarg354", alt: "CodeForces" },
                  { icon: github, url: "https://github.com/abhaygarg3504", alt: "GitHub" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Link to={social.url} target="_blank" rel="noopener noreferrer">
                      <img src={social.icon} alt={social.alt} className={`w-10 h-10 p-2 rounded-full transition-all duration-300 ${
                        theme === 'dark' ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-200 hover:bg-purple-100'
                      }`} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button 
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ⭐ Star me on GitHub
              </motion.button>
            </div>
          </motion.div>

          {/* Web Development Section */}
          <motion.div 
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-2xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                : 'bg-white/70 backdrop-blur-sm border border-gray-200'
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={about} alt="Web Development" className="w-48 h-48 object-contain" />
            </motion.div>
            <div className="flex-1">
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                Web Development
              </h2>
              <motion.div 
                className='flex gap-4 mb-6 flex-wrap'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: react, name: "React" },
                  { icon: nextjs, name: "Next.js" },
                  { icon: query, name: "React Query" },
                  { icon: typescript, name: "TypeScript" },
                  { icon: tailwind, name: "Tailwind CSS" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariants}
                    whileHover="hover"
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    <img src={tech.icon} className='w-8 h-8' alt={tech.name} title={tech.name} />
                  </motion.div>
                ))}
              </motion.div>
              <div className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="mb-2">💻 Developing modern web applications with React, Next.js, and TypeScript</p>
                <p className="mb-2">⚙️ Building robust backend services with Node.js</p>
                <p>🔄 Implementing real-time features using Convex and state management</p>
              </div>
            </div>
          </motion.div>

          {/* Cloud Architecture Section */}
          <motion.div 
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-2xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                : 'bg-white/70 backdrop-blur-sm border border-gray-200'
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={cloud} alt="Cloud Architecture" className="w-48 h-48 object-contain" />
            </motion.div>
            <div className="flex-1">
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent`}>
                Cloud Architecture & Database Management
              </h2>
              <motion.div 
                className='flex gap-4 mb-6 flex-wrap'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: mongodb, name: "MongoDB" },
                  { icon: convex, name: "Convex" },
                  { icon: postgres, name: "PostgreSQL" },
                  { icon: vercel, name: "Vercel" },
                  { icon: cloudinary, name: "Cloudinary" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariants}
                    whileHover="hover"
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    <img src={tech.icon} className='w-8 h-8' alt={tech.name} title={tech.name} />
                  </motion.div>
                ))}
              </motion.div>
              <div className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="mb-2">☁️ Designing scalable cloud infrastructure and database architectures</p>
                <p>💾 Managing data storage solutions across SQL and NoSQL databases</p>
              </div>
            </div>
          </motion.div>

          {/* DevOps Section */}
          <motion.div 
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-2xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                : 'bg-white/70 backdrop-blur-sm border border-gray-200'
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={devops} alt="DevOps" className="w-48 h-48 object-contain" />
            </motion.div>
            <div className="flex-1">
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent`}>
                DevOps & Quality Assurance
              </h2>
              <motion.div 
                className='flex gap-4 mb-6 flex-wrap'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: thunder, name: "Thunder Client" },
                  { icon: postman, name: "Postman" },
                  { icon: github_action, name: "GitHub Actions" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariants}
                    whileHover="hover"
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    <img src={tech.icon} className='w-8 h-8' alt={tech.name} title={tech.name} />
                  </motion.div>
                ))}
              </motion.div>
              <div className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="mb-2">🔄 Implementing CI/CD pipelines with GitHub Actions</p>
                <p className="mb-2">✅ Writing comprehensive test suites using Jest and maintaining code quality</p>
                <p>📊 Managing application logging, monitoring, and deployment processes</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default Hero;