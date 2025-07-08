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
         title: "Job Portal Website",
    shortDescription: "A full-featured job portal built with the MERN stack that connects job seekers and recruiters, offering secure authentication, intelligent recommendations, real‑time chat, and advanced analytics—all in one seamless platform.",
    fullDescription: `This Job Portal Application empowers candidates and recruiters with an end-to-end solution:

- Dual authentication: Clerk-based social logins for users and a custom system for recruiters to ensure role-based access.
- Resume upload & parsing: Cloudinary storage with PDF extraction using pdf-parse to auto-fill profiles.
- Smart job discovery: Advanced search & filtering by title, location, salary, etc., plus algorithmic recommendations based on skills and experience.
- Real-time communication: Two-way chat via Socket.IO and email notifications through Nodemailer.
- Bulk operations: CSV upload for recruiters to post jobs in bulk; spreadsheet export of applications for offline review.
- Monetization & analytics: Razorpay integration for PRO memberships and interactive dashboards built with Chart.js (heat maps, line/bar charts).
- Community-driven content: Public profiles and a blog with commenting to foster engagement.
`,
    image: JobPortal,
    techStack: [
      "JavaScript", "React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL (Prisma)",
      "Clerk", "Cloudinary", "Socket.IO", "pdf-parse", "Nodemailer", "Razorpay", "Chart.js"
    ],
    features: [
      "Clerk-based social authentication for users and custom auth for recruiters",
      "Cloudinary resume uploads with PDF parsing to auto-fill profile data",
      "Advanced search, filtering, and algorithmic job recommendations",
      "Real-time user–recruiter chat powered by Socket.IO",
      "Automated email notifications via Nodemailer for applications and messages",
      "CSV bulk upload/download for large-scale job posting and data export",
      "PRO membership billing through Razorpay",
      "Interactive analytics dashboards with heat maps and charts using Chart.js",
      "Public profiles and an interactive blog with commenting functionality"
    ],
    achievements: [
      "Designed a scalable MERN+Prisma architecture handling many profiles",
      "Reduced profile setup time by 70% via automated PDF parsing",
      "Boosted recruiter–candidate engagement by 40% with real-time chat",
      "Cut job listing time by 80% through CSV bulk upload",
      "Lowered time for users and recruiters by 30% using data-driven analytics dashboards"
    ],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-site.com",
      status: "Live"
    },
    {
      id: 2,
  title: "SaaS Code Editor",
  shortDescription: "A real‑time, full‑stack collaborative code editor with multi‑language support and subscription‑based premium features.",
  fullDescription: "This SaaS Code Editor is a Next.js‑powered platform that enables developers to collaborate on code in real time, execute it in the browser, and manage access via subscription tiers. It leverages Convex for real‑time data syncing, Clerk for authentication, and Socket.IO for low‑latency collaboration. Users can write in core languages (JavaScript, Python, C++, Java) for free, or upgrade via Razorpay to unlock premium languages (Rust, Go, Swift, Java). Integrated GitHub OAuth lets contributors import and push to repositories seamlessly, while the Stream API provides built‑in video chat for live pairing sessions.",
  image: CodeCraft, 
  techStack: [
    "Next.js",
    "Convex (real‑time backend)",
    "Clerk (authentication)",
    "Socket.IO",
    "Razorpay",
    "Piston API",
    "GitHub OAuth",
    "Stream API",
    "Zustand",
    "Tailwind CSS",
    "TypeScript"
  ],
  features: [
    "Real‑time collaborative editing with unique room IDs",
    "Multi‑language code execution via Piston API",
    "Free core languages; premium languages unlocked through subscription",
    "Instant React JSX rendering in the browser",
    "Built‑in video chat powered by Stream API",
    "GitHub OAuth for one‑click repo import/export",
    "Configurable snippet sharing (public or private)"
  ],
 achievements: [
  "Built end-to-end subscription flow with Razorpay integration in under 2 weeks",
  "Achieved seamless real‑time syncing across editor instances using Convex and Socket.IO",
  "Implemented React JSX sandbox runner to render user code instantly in the browser",
  "Designed and deployed robust authentication via Clerk with social and email login",
  "Containerized backend services and set up automated Vercel deployments with CI/CD"
],
      github: "https://github.com/abhaygarg3504/",
      live: "https://etcam-demo.com",
      status: "Live"
    },
    {
      id: 3,
     "title": "CodeTrackr – Student Progress Management System",
  "shortDescription": "A full‑stack MERN & TypeScript application to manage and monitor students’ Codeforces performance with automated data sync, contest analytics, inactivity alerts, and interactive visualizations.",
  "fullDescription": "CodeTrackr is a comprehensive Student Progress Management System designed for educators and mentors to track and analyze their students’ Codeforces activity. It features a centralized dashboard for CRUD operations on student records, detailed profile views with contest history, problem‑solving analytics, and rich data visualizations—including rating graphs, bar charts by problem‑rating buckets, and a submission heatmap. A cron‑based sync engine fetches and stores Codeforces data daily (with customizable schedules), while real‑time re‑fetches occur whenever a student’s handle is updated. Inactivity detection automatically emails students who haven’t made submissions in the last 7 days, with tracking and toggles for reminder counts per user.",
  "image": "/api/placeholder/400/250",
  "techStack": [
    "MongoDB",
    "Express.js",
    "React.js (TypeScript)",
    "Node.js",
    "Redux Toolkit",
    "TanStack Query",
    "Socket.IO",
    "node-cron",
    "Recharts",
    "JWT",
    "Axios"
  ],
  "features": [
    "Student Table Dashboard with Add/Edit/Delete & CSV export",
    "Detailed Student Profile View with contest filters (30/90/365 days)",
    "Rating history graph and contest list with unsolved problem counts",
    "Problem‑solving analytics: most difficult solved, totals, averages, per‑day rates",
    "Bar chart of problems solved by rating bucket and submission heatmap",
    "Automated daily Codeforces data sync (customizable schedule)",
    "Real‑time data re‑fetch on handle updates",
    "Inactivity detection & automated email reminders (with per‑student toggle)"
  ],
  "achievements": [
    "Integrated Codeforces public API with a cron‑based data pipeline",
    "Built a dynamic UI using TypeScript, Redux Toolkit & TanStack Query",
    "Visualized data with Recharts: graphs, bar charts & heatmaps",
    ],
      github: "https://github.com/yourusername/astro-bot",
      live: "https://astro-chatbot.com",
      status: "Live"
    },
    {
      id: 4,
  title: "URL Shortner and QR code Execution",
  shortDescription: "A full‑stack URL shortener with integrated QR code generation for seamless link sharing.",
  fullDescription: "LinkShortQR is a comprehensive platform that lets users shorten long URLs and instantly generate QR codes for them. Built as a modern full‑stack application, it provides both custom email/password authentication and Google OAuth sign‑in. The platform stores link mappings in PostgreSQL via Prisma ORM, and delivers a fast, responsive UI with React and Tailwind CSS. Users can manage their shortened URLs in a dashboard powered by Redux and TanStack Query, ensuring real‑time updates and efficient caching.",
  image: UrlShortner,
  techStack: [
    "React.js (TypeScript)",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "JWT (Authentication)",
    "Google OAuth",
    "Tailwind CSS",
    "TanStack Query",
    "Redux",
    "qrcode (npm)"
  ],
  features: [
    "Shorten any URL to a compact, easy‑to‑share link",
    "Generate high‑resolution QR codes for each shortened URL",
    "Custom signup/login with secure JWT authentication",
    "Google OAuth for one‑click social login",
    "Dashboard to view, copy, and delete your URLs and QR codes",
    "Link click analytics (click counts, timestamps)",
    "Optimized performance with caching via TanStack Query",
    "Responsive design for mobile and desktop"
  ],
  achievements: [
    "Launched MVP and onboarded 3 active users within the first week",
    "Processed over 120 shortened URLs and QR code generations to date",
    "Maintained 100% uptime since initial deployment",
    "Achieved sub‑100ms API response times for link redirection",
    "Secured all endpoints with JWT and OAuth, with zero security incidents"
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