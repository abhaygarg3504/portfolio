import React, { useContext } from 'react'
import { Code, Database, Cloud, TestTube, Server, CreditCard } from 'lucide-react'
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
import axios from "../assets/axios.svg"
import bootstrap from "../assets/bootstrap.svg"
import chart from "../assets/chart.svg"
import clerk from "../assets/clerk.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import framer_motion from "../assets/framer_motion.svg"
import git from "../assets/git.svg"
import javascript from "../assets/javascript.svg"
import jwt from "../assets/jwt.svg"
import material_ui from "../assets/material_ui.svg"
import nodejs from "../assets/nodejs.svg"
import oauth from "../assets/oauth.svg"
import passport from "../assets/passport.svg"
import prisma from "../assets/prisma.svg"
import razorpay from "../assets/razorpay.svg"
import react_form from "../assets/react_form.svg"
import render from "../assets/render.svg"
import socket_io from "../assets/socket.svg"
import { ThemeContext } from '../Context/DarkLightMode';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
     const { theme } = useContext(ThemeContext);

    // Tech stack categories with custom icons
    const techCategories = [
        {
            title: "Frontend",
            subtitle: "Intuitive UIs",
            icon: Code,
            techs: [
                { name: "TypeScript", color: "from-blue-500 to-blue-600", icon: typescript },
                { name: "JavaScript", color: "from-yellow-400 to-yellow-500", icon: javascript },
                { name: "ReactJS", color: "from-cyan-400 to-cyan-500", icon: react },
                { name: "Next.js", color: "from-gray-700 to-gray-800", icon: nextjs },
                { name: "HTML5", color: "from-orange-500 to-orange-600", icon: html },
                { name: "CSS3", color: "from-blue-600 to-blue-700", icon: css },
                { name: "Tailwind CSS", color: "from-teal-400 to-teal-500", icon: tailwind },
                { name: "Bootstrap", color: "from-purple-500 to-purple-600", icon: bootstrap },
                { name: "Material UI", color: "from-blue-700 to-blue-800", icon: material_ui },
                { name: "Framer Motion", color: "from-pink-500 to-pink-600", icon: framer_motion },
                { name: "React Query", color: "from-red-500 to-red-600", icon: query },
                { name: "React Hook Form", color: "from-pink-600 to-pink-700", icon: react_form }
            ]
        },
        {
            title: "Backend",
            subtitle: "Robust systems",
            icon: Server,
            techs: [
                { name: "Node.js", color: "from-green-500 to-green-600", icon: nodejs },
                { name: "JWT", color: "from-purple-500 to-purple-600", icon: jwt },
                { name: "OAuth", color: "from-red-600 to-red-700", icon: oauth },
                { name: "Passport.js", color: "from-green-700 to-green-800", icon: passport },
                { name: "Socket.io", color: "from-gray-800 to-black", icon: socket_io },
                { name: "Prisma", color: "from-indigo-500 to-indigo-600", icon: prisma },
                { name: "Clerk", color: "from-indigo-600 to-indigo-700", icon: clerk }
            ]
        },
        {
            title: "DevOps",
            subtitle: "Seamless deployment",
            icon: Cloud,
            techs: [
                { name: "Git", color: "from-orange-500 to-orange-600", icon: git },
                { name: "GitHub", color: "from-gray-800 to-black", icon: github },
                { name: "GitHub Actions", color: "from-gray-800 to-black", icon: github_action },
                { name: "Vercel", color: "from-black to-gray-900", icon: vercel },
                { name: "Render", color: "from-green-500 to-green-600", icon: render },
                { name: "Cloudinary", color: "from-blue-400 to-blue-500", icon: cloudinary }
            ]
        },
        {
            title: "Testing",
            subtitle: "Quality assurance",
            icon: TestTube,
            techs: [
                { name: "Postman", color: "from-orange-500 to-orange-600", icon: postman },
                { name: "Thunder Client", color: "from-purple-600 to-purple-700", icon: thunder },
                { name: "Axios", color: "from-blue-600 to-blue-700", icon: axios }
            ]
        },
        {
            title: "Database",
            subtitle: "Reliable infrastructure",
            icon: Database,
            techs: [
                { name: "MongoDB", color: "from-green-500 to-green-600", icon: mongodb },
                { name: "PostgreSQL", color: "from-blue-600 to-blue-700", icon: postgres },
                { name: "Convex", color: "from-orange-500 to-orange-600", icon: convex }
            ]
        },
        {
            title: "Payment & Analytics",
            subtitle: "Business solutions",
            icon: CreditCard,
            techs: [
                { name: "Razorpay", color: "from-blue-800 to-blue-900", icon: razorpay },
                { name: "Chart.js", color: "from-pink-400 to-pink-500", icon: chart }
            ]
        }
    ];

    const featuredTechs = [
        { name: "TypeScript", color: "from-blue-500 to-blue-600", icon: typescript },
        { name: "JavaScript", color: "from-yellow-400 to-yellow-500", icon: javascript },
        { name: "Node.js", color: "from-green-500 to-green-600", icon: nodejs },
        { name: "React", color: "from-cyan-400 to-cyan-500", icon: react },
        { name: "Next.js", color: "from-gray-700 to-gray-800", icon: nextjs },
        { name: "MongoDB", color: "from-green-500 to-green-600", icon: mongodb },
        { name: "PostgreSQL", color: "from-blue-600 to-blue-700", icon: postgres },
        { name: "Tailwind", color: "from-teal-400 to-teal-500", icon: tailwind },
        { name: "Prisma", color: "from-indigo-500 to-indigo-600", icon: prisma },
        { name: "Vercel", color: "from-gray-800 to-black", icon: vercel },
        { name: "Socket.io", color: "from-gray-700 to-gray-800", icon: socket_io },
        { name: "Framer Motion", color: "from-pink-500 to-pink-600", icon: framer_motion }
    ];

    return (
        <div>
          <Navbar/>
          <div className={`min-h-screen transition-all duration-300 ${
            theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-purple-900/90 text-white' 
            : 'bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900'
        }`}
        >
            <div className="py-16 px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        My Tech 
                    </h1>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
                        Explore the cutting-edge technologies I leverage to craft powerful, efficient, and scalable solutions.
                        <br />
                        From concept to deployment, I bring expertise in every aspect of the development lifecycle.
                    </p>
                </div>

                {/* Tech Categories Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {techCategories.map((category, categoryIndex) => {
                            const IconComponent = category.icon;
                            return (
                                <div
                                    key={category.title}
                                    className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' 
                                            : 'bg-white/80 border-gray-200 hover:bg-white/90 shadow-lg'
                                    }`}
                                    style={{
                                        animationDelay: `${categoryIndex * 0.1}s`
                                    }}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {category.subtitle}
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.techs.map((tech, techIndex) => (
                                            <div
                                                key={tech.name}
                                                className={`p-4 rounded-xl text-center transition-all duration-300 cursor-pointer transform hover:scale-105 hover:rotate-2 ${
                                                    theme === 'dark' 
                                                        ? 'bg-gray-700/70 hover:bg-gray-600/70' 
                                                        : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                                style={{
                                                    animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s`
                                                }}
                                            >
                                                <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-gradient-to-br ${tech.color} shadow-lg p-2`}>
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-sm font-medium">{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Featured Technologies Grid */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Technologies
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {featuredTechs.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`p-6 rounded-2xl bg-gradient-to-br ${tech.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-6`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm p-2">
                                        <img 
                                            src={tech.icon} 
                                            alt={tech.name} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-center">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className={`mt-20 p-8 rounded-2xl backdrop-blur-sm border ${
                        theme === 'dark' 
                            ? 'bg-gray-800/50 border-gray-700' 
                            : 'bg-white/80 border-gray-200 shadow-lg'
                    }`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    {techCategories.reduce((acc, cat) => acc + cat.techs.length, 0)}+
                                </div>
                                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Technologies Mastered
                                </p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                                    {techCategories.length}
                                </div>
                                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Core Categories
                                </p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                    100%
                                </div>
                                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Passion Driven
                                </p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                                    24/7
                                </div>
                                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Learning & Building
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <Footer/>
        </div>
    )
}

export default About