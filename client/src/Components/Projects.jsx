// import React, { useContext } from 'react';
// import JobPortal from "../assets/job-poral.jpg";
// import TxtImg from "../assets/txt-img-conv.jpg";
// import { Link } from 'react-router-dom';
// import CodeCraft from "../assets/code_craft.jpg";
// import underline from "../assets/nav_underline.svg";
// import { motion } from 'framer-motion';
// import { ThemeContext } from '../Context/DarkLightMode';
// import UrlShortner from "../assets/url-shortner.jpg"
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Projects = () => {
//   const { theme } = useContext(ThemeContext);

//   const projects = [
//     { img: CodeCraft, github: "/", live: "/" },
//     { img: TxtImg, github: "/", live: "/" },
//     { img: JobPortal, github: "/", live: "/" },
//     { img: UrlShortner, github: "/", live: "/" },
//   ];

//   return (
//    <div>
//     <Navbar/>
//      <motion.div
//       id='project'
//       className={`px-4 py-10 ${theme === 'dark' ? ' bg-gradient-to-br from-black via-gray-900 to-purple-600 text-white' : 'bg-white text-black'}`}
//     >
//       <h1 className='flex flex-col items-center justify-center font-bold text-4xl mt-10'>
//         Projects
//         <img width={150} src={underline} alt="Underline" />
//       </h1>

//       <div className='flex flex-wrap justify-center gap-8 mt-12'>
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`drop-shadow-lg rounded-lg p-6 flex flex-col items-center border transition-all duration-300 hover:scale-105
//               w-full sm:w-[300px] md:w-[280px] lg:w-[260px]
//               ${theme === 'dark'
//                 ? 'bg-gray-800/70 text-gray-300 border-gray-700'
//                 : 'bg-gray-300 text-gray-900 border-gray-400'}
//             `}
//           >
//             <img
//               width={800}
//               src={project.img}
//               alt={`Project ${index + 1}`}
//               className="mb-4 w-full rounded-lg"
//             />

//             <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 w-full">
//               <Link
//                 to={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className='px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg text-white transition duration-300
//                   bg-purple-600 hover:bg-purple-500 dark:bg-orange-500 dark:hover:bg-orange-400'
//               >
//                 <img
//                   width={20}
//                   src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg"
//                   alt="GitHub"
//                 />
//                 GitHub
//               </Link>

//               <Link
//                 to={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className='px-4 py-2 w-full sm:w-auto rounded-lg text-white text-center transition duration-300
//                   bg-purple-600 hover:bg-purple-500 dark:bg-orange-500 dark:hover:bg-orange-400'
//               >
//                 Live
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//     <Footer/>
//    </div>
//   );
// };

// export default Projects;

import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';
import { ExternalLink, Github, X, Code, Zap, Database, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import JobPortal from "../assets/job-poral.jpg";
import TxtImg from "../assets/txt-img-conv.jpg";
import { Link } from 'react-router-dom';
import CodeCraft from "../assets/code_craft.jpg";
import underline from "../assets/nav_underline.svg";
import UrlShortner from "../assets/url-shortner.jpg"

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Multi Vendor Ecommerce Website",
      shortDescription: "A scalable multi-vendor ecommerce platform with optimized performance and secure payments.",
      fullDescription: "ETCAM is a Python-based software that automates event-related tasks, including certificate generation and participant communication. It integrates Google API for automated email notifications and has been successfully tested in a live event with 150+ participants.",
      image: JobPortal,
      techStack: ["TypeScript", "React", "Node.js"],
      features: [
        "Automated certificate generation for event participants",
        "Integrated Google API for personalized email notifications", 
        "Successfully tested in a live event, streamlining operations for 150+ attendees",
        "Improved event efficiency by reducing manual workload"
      ],
      achievements: [
        "Scalable architecture supporting multiple vendors",
        "Secure payment gateway integration",
        "Real-time inventory management",
        "Advanced search and filtering capabilities"
      ],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-site.com",
      status: "Live"
    },
    {
      id: 2,
      title: "ETCAM: Python-based Event Management Software",
      shortDescription: "An automated event management tool featuring certificate generation and ticket verification.",
      fullDescription: "ETCAM is a comprehensive event management solution built with Python that streamlines event operations from registration to post-event activities. The platform automates certificate generation, manages participant communication, and provides real-time analytics for event organizers.",
      image: CodeCraft,
      techStack: ["NestJS", "PostgreSQL", "Firebase"],
      features: [
        "Automated certificate generation with customizable templates",
        "Real-time participant tracking and management",
        "Email automation system with Google API integration",
        "QR code generation for event tickets and certificates"
      ],
      achievements: [
        "Successfully deployed for 150+ participant events",
        "Reduced manual certificate generation time by 90%",
        "Integrated with popular email services for seamless communication",
        "Responsive design for mobile and desktop platforms"
      ],
      github: "https://github.com/yourusername/etcam",
      live: "https://etcam-demo.com",
      status: "Live"
    },
    {
      id: 3,
      title: "RAG Astro Chat Bot",
      shortDescription: "An AI-powered chatbot for answering astronomy-related queries with retrieval-augmented generation.",
      fullDescription: "RAG Astro Chat Bot is an intelligent conversational AI system specifically designed for astronomy enthusiasts. It combines advanced natural language processing with a comprehensive astronomy knowledge base to provide accurate, contextual responses to user queries about celestial objects, space phenomena, and astronomical concepts.",
      image: "/api/placeholder/400/250",
      techStack: ["React Query", "Google AI", "Vercel Analytics"],
      features: [
        "Natural language processing for astronomy queries",
        "Real-time constellation and planet information",
        "Interactive star map integration",
        "Educational content delivery system"
      ],
      achievements: [
        "Integrated with multiple astronomy databases",
        "Supports over 10,000 astronomical objects",
        "Multi-language support for global accessibility",
        "Advanced search capabilities with semantic understanding"
      ],
      github: "https://github.com/yourusername/astro-bot",
      live: "https://astro-chatbot.com",
      status: "Live"
    },
    {
      id: 4,
      title: "Smart URL Shortener",
      shortDescription: "A modern URL shortening service with analytics and custom domain support.",
      fullDescription: "Smart URL Shortener is a comprehensive link management platform that goes beyond simple URL shortening. It provides detailed analytics, custom branding options, and advanced features for marketers and businesses to track and optimize their link performance.",
      image: "/api/placeholder/400/250",
      techStack: ["Next.js", "MongoDB", "Redis"],
      features: [
        "Custom short URL generation with branded domains",
        "Comprehensive click analytics and tracking",
        "QR code generation for shortened URLs",
        "Bulk URL processing capabilities"
      ],
      achievements: [
        "Handles 1M+ URL redirections per month",
        "Sub-100ms average response time",
        "99.9% uptime reliability",
        "Enterprise-grade security features"
      ],
      github: "https://github.com/yourusername/url-shortener",
      live: "https://smart-shortener.com",
      status: "Live"
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      "TypeScript": <Code className="w-4 h-4" />,
      "React": <Zap className="w-4 h-4" />,
      "Node.js": <Database className="w-4 h-4" />,
      "NestJS": <Database className="w-4 h-4" />,
      "PostgreSQL": <Database className="w-4 h-4" />,
      "Firebase": <Database className="w-4 h-4" />,
      "Next.js": <Globe className="w-4 h-4" />,
      "MongoDB": <Database className="w-4 h-4" />,
      "Redis": <Database className="w-4 h-4" />
    };
    return icons[tech] || <Code className="w-4 h-4" />;
  };

  return (
    <div>
      <Navbar/>
      <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-gray-900 to-purple-600 text-white' 
        : 'bg-white text-black'
    }`}>
      <div className="px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-lg mt-6 max-w-2xl mx-auto opacity-80">
            Explore my portfolio of innovative projects showcasing modern web development, 
            AI integration, and scalable solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl ${
                theme === 'dark' 
                  ? 'bg-gray-800/70 backdrop-blur-sm border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.shortDescription}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark' 
                          ? 'bg-purple-600/20 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-purple-600 hover:bg-purple-500 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    More Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-orange-600 hover:bg-orange-500 text-white'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-black'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 p-6 border-b border-gray-200 dark:border-gray-700 bg-inherit">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700 text-gray-400'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                          theme === 'dark' 
                            ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <span className="text-green-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <span className="text-orange-500 mt-1">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-orange-600 hover:bg-orange-500 text-white'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      <Footer/>
    </div>
  );
};

export default Projects;