import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import underline from "../assets/nav_underline.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const profiles = [
    {
      name: "LeetCode",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/LeetCode_logo_black.png/640px-LeetCode_logo_black.png",
      link: "https://leetcode.com/u/abhaygarg5684/",
      description: "Solved 500+ problems across various difficulty levels",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20"
    },
    {
      name: "Codeforces",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/640px-Codeforces_logo.svg.png",
      link: "https://codeforces.com/profile/abhaygarg354/",
      description: "Competitive programming with algorithmic problem solving",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      darkBgGradient: "from-blue-900/20 to-purple-900/20"
    },
    {
      name: "CodeChef",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CodeChef_Logo.svg/640px-CodeChef_Logo.svg.png",
      link: "https://www.codechef.com/users/abhaygarg354/",
      description: "Monthly contests and algorithmic challenges",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      darkBgGradient: "from-green-900/20 to-teal-900/20"
    },
    {
      name: "GeeksForGeeks",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/640px-GeeksForGeeks_logo.png",
      link: "https://www.geeksforgeeks.org/user/abhaygah33i/",
      description: "Data structures, algorithms, and interview preparation",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20"
    }
  ];

  return (
    <div>
      <Navbar />
      <motion.div
        id='profile'
        className={`min-h-screen transition-all duration-500 ${
          theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-purple-900/90 text-white' 
            : 'bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900'
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="px-4 md:px-8 lg:px-16 py-16">
          <motion.div 
            className="flex flex-col items-center justify-center mb-16"
            variants={itemVariants}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              My Coding
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Profiles
              </span>
            </h1>
            
            <motion.p 
              className={`text-xl md:text-2xl text-center max-w-3xl leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Explore my competitive programming journey across various platforms. 
              Each profile showcases my problem-solving skills and algorithmic thinking.
            </motion.p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                className={`relative group rounded-2xl p-8 shadow-2xl backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
                  theme === 'dark' 
                    ? `bg-gradient-to-br ${profile.darkBgGradient} border-gray-700/50 hover:border-gray-600` 
                    : `bg-gradient-to-br ${profile.bgGradient} border-gray-200/50 hover:border-gray-300`
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center h-full">
                  {/* Logo */}
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      width={60} 
                      height={60} 
                      src={profile.imgSrc} 
                      alt={profile.name}
                      className="object-contain filter drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className={`text-2xl font-bold mb-3 text-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {profile.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-center text-sm leading-relaxed mb-6 flex-grow ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {profile.description}
                  </p>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto w-full"
                  >
                    <Link
                      to={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r ${profile.gradient} text-white hover:scale-105 active:scale-95`}
                    >
                      View Profile
                      <span className="ml-2">→</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            className={`mt-20 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/70 border-gray-200'
            }`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                Competitive Programming Journey
              </h2>
              <p className={`text-lg leading-relaxed max-w-4xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Through consistent practice and participation in coding competitions, I've developed strong 
                problem-solving skills and algorithmic thinking. Each platform has contributed to my growth 
                as a programmer, from mastering data structures to optimizing complex algorithms.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: "🏆", title: "1000+", subtitle: "Problems Solved" },
                  { icon: "📊", title: "Multiple", subtitle: "Platforms Active" },
                  { icon: "🚀", title: "Continuous", subtitle: "Learning" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.title}
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {stat.subtitle}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Services;