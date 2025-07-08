import React, { useContext, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Navbar from './Navbar';
import Footer from './Footer';
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";
import underline from "../assets/nav_underline.svg";
import { ThemeContext } from '../Context/DarkLightMode';
import Profile from "../assets/profile.svg"
import linkdein from "../assets/linkdein.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twiter.svg";
import leetcode from "../assets/leetcode.svg";
import codeforces from "../assets/codeforces.svg";
import github from "../assets/github.svg";
import { Link } from 'react-router-dom';

const Context = () => {
  const webform_id = import.meta.env.VITE_WEB_FORM; // Replace with your actual web form ID
  const [result, setResult] = useState("");
  const { theme } = useContext(ThemeContext);
  const globeRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!globeRef.current || isInitialized.current) return;
    
    isInitialized.current = true;

    while (globeRef.current.firstChild) {
      globeRef.current.removeChild(globeRef.current.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    globeRef.current.appendChild(renderer.domElement);

    // Create main globe sphere
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a1a,
      transparent: true,
      opacity: 0.8,
      wireframe: false
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Create 7 continents with realistic positioning
    const createContinents = () => {
      const continents = [
        { name: 'North America', lat: 45, lon: -100, color: 0x00ff88, points: 300 },
        { name: 'South America', lat: -15, lon: -60, color: 0x00ccff, points: 250 },
        { name: 'Europe', lat: 50, lon: 10, color: 0xff6600, points: 200 },
        { name: 'Africa', lat: 0, lon: 20, color: 0xff0066, points: 350 },
        { name: 'Asia', lat: 35, lon: 100, color: 0x66ff00, points: 400 },
        { name: 'Australia', lat: -25, lon: 135, color: 0xffff00, points: 150 },
        { name: 'Antarctica', lat: -80, lon: 0, color: 0x00ffff, points: 200 }
      ];

      const continentGroup = new THREE.Group();

      continents.forEach(continent => {
        const continentGeometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        for (let i = 0; i < continent.points; i++) {
          const latOffset = (Math.random() - 0.5) * 25;
          const lonOffset = (Math.random() - 0.5) * 40;
          
          const lat = (continent.lat + latOffset) * Math.PI / 180;
          const lon = (continent.lon + lonOffset) * Math.PI / 180;
          
          const radius = 1.005 + Math.random() * 0.015;
          
          const x = radius * Math.cos(lat) * Math.cos(lon);
          const y = radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.sin(lon);
          
          positions.push(x, y, z);
          
          const color = new THREE.Color(continent.color);
          const intensity = 0.7 + Math.random() * 0.3;
          colors.push(color.r * intensity, color.g * intensity, color.b * intensity);
        }

        continentGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        continentGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const continentMaterial = new THREE.PointsMaterial({
          size: 0.018,
          transparent: true,
          opacity: 0.9,
          vertexColors: true,
          blending: THREE.AdditiveBlending
        });

        const continentPoints = new THREE.Points(continentGeometry, continentMaterial);
        continentGroup.add(continentPoints);
      });

      return continentGroup;
    };

    const continentGroup = createContinents();
    scene.add(continentGroup);

    // Create flowing lines effect
    const createFlowingLines = () => {
      const lines = [];
      const lineCount = 12;
      
      for (let i = 0; i < lineCount; i++) {
        const curve = new THREE.EllipseCurve(
          0, 0, 1.2, 1.2, 0, 2 * Math.PI, false, 0
        );
        
        const points = curve.getPoints(100);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        const positions = geometry.attributes.position.array;
        for (let j = 0; j < positions.length; j += 3) {
          const angle = (j / 3) / 100 * Math.PI * 2;
          const lat = Math.sin(angle + i * 0.5) * 0.8;
          const lon = angle + i * Math.PI / 6;
          
          positions[j] = Math.cos(lat) * Math.cos(lon) * 1.05;
          positions[j + 1] = Math.sin(lat);
          positions[j + 2] = Math.cos(lat) * Math.sin(lon) * 1.05;
        }
        
        geometry.attributes.position.needsUpdate = true;
        
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(i / lineCount, 0.8, 0.6),
          transparent: true,
          opacity: 0.6
        });
        
        const line = new THREE.Line(geometry, material);
        line.userData = { 
          originalPositions: [...positions],
          phase: i * 0.3,
          speed: 0.01 + Math.random() * 0.02
        };
        
        scene.add(line);
        lines.push(line);
      }
      
      return lines;
    };

    const flowingLines = createFlowingLines();

    // Create pulsing connection points
    const createConnectionPoints = () => {
      const points = [];
      const pointCount = 25;
      
      for (let i = 0; i < pointCount; i++) {
        const pointGeometry = new THREE.SphereGeometry(0.015, 8, 8);
        const pointMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(Math.random(), 0.8, 0.7),
          transparent: true,
          opacity: 0.8
        });
        
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        
        const lat = (Math.random() - 0.5) * Math.PI;
        const lon = Math.random() * Math.PI * 2;
        
        point.position.set(
          1.02 * Math.cos(lat) * Math.cos(lon),
          1.02 * Math.sin(lat),
          1.02 * Math.cos(lat) * Math.sin(lon)
        );
        
        point.userData = { 
          originalScale: 1,
          pulseSpeed: 1 + Math.random() * 2,
          pulseOffset: Math.random() * Math.PI * 2
        };
        
        scene.add(point);
        points.push(point);
      }
      
      return points;
    };

    const connectionPoints = createConnectionPoints();

    // Create atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.15, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    camera.position.z = 3;

    // Enhanced mouse interaction for free rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let currentRotation = { x: 0, y: 0 };
    
    const handleMouseDown = (event) => {
      isDragging = true;
      const rect = renderer.domElement.getBoundingClientRect();
      previousMousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      renderer.domElement.style.cursor = 'grabbing';
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      const currentMousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      
      const deltaMove = {
        x: currentMousePosition.x - previousMousePosition.x,
        y: currentMousePosition.y - previousMousePosition.y
      };
      
      // Convert mouse movement to rotation
      const rotationSpeed = 0.005;
      rotationVelocity.x = deltaMove.y * rotationSpeed;
      rotationVelocity.y = deltaMove.x * rotationSpeed;
      
      // Apply rotation
      currentRotation.x += rotationVelocity.x;
      currentRotation.y += rotationVelocity.y;
      
      // Apply rotation to globe and continents
      globe.rotation.x = currentRotation.x;
      globe.rotation.y = currentRotation.y;
      continentGroup.rotation.x = currentRotation.x;
      continentGroup.rotation.y = currentRotation.y;
      
      previousMousePosition = currentMousePosition;
    };

    const handleMouseUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const handleMouseEnter = () => {
      renderer.domElement.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'default';
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseenter', handleMouseEnter);
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Auto rotation (only when not dragging)
      if (!isDragging) {
        currentRotation.y += 0.003;
        globe.rotation.y = currentRotation.y;
        continentGroup.rotation.y = currentRotation.y;
        
        // Apply damping to rotation velocity
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
      }
      
      atmosphere.rotation.y += 0.002;

      // Animate flowing lines with wave effect
      flowingLines.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array;
        const originalPositions = line.userData.originalPositions;
        
        for (let i = 0; i < positions.length; i += 3) {
          const waveOffset = Math.sin(time * line.userData.speed * 10 + (i / 3) * 0.1 + line.userData.phase) * 0.05;
          positions[i] = originalPositions[i] + waveOffset;
          positions[i + 1] = originalPositions[i + 1] + waveOffset * 0.5;
          positions[i + 2] = originalPositions[i + 2] + waveOffset;
        }
        
        line.geometry.attributes.position.needsUpdate = true;
        line.material.opacity = 0.4 + 0.4 * Math.sin(time + index * 0.5);
      });

      // Animate connection points
      connectionPoints.forEach((point, index) => {
        const userData = point.userData;
        const pulse = Math.sin(time * userData.pulseSpeed + userData.pulseOffset);
        
        point.material.opacity = 0.5 + 0.5 * pulse;
        point.scale.setScalar(userData.originalScale + pulse * 0.3);
      });

      // Animate atmosphere
      atmosphere.material.opacity = 0.1 + 0.1 * Math.sin(time * 0.5);

      renderer.render(scene, camera);
    };

    animate();

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Cleanup function
    return () => {
      isInitialized.current = false;
      
      // Remove event listeners
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', handleMouseDown);
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
        renderer.domElement.removeEventListener('mouseup', handleMouseUp);
        renderer.domElement.removeEventListener('mouseenter', handleMouseEnter);
        renderer.domElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (scene) {
        scene.traverse((child) => {
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
        scene.clear();
      }
      
      if (globeRef.current && renderer.domElement && globeRef.current.contains(renderer.domElement)) {
        globeRef.current.removeChild(renderer.domElement);
      }
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

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

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error messages when user starts typing
    if (result && !result.includes("Successfully")) {
      setResult("");
    }
  };

  const validateForm = () => {
    if (!formData.full_name.trim()) {
      setResult("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setResult("Please enter your email");
      return false;
    }
    if (!formData.message.trim()) {
      setResult("Please enter your message");
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResult("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!webform_id) {
      setResult("Configuration error: Web form ID is missing");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending your message...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", webform_id);
    formDataToSend.append("name", formData.full_name.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("message", formData.message.trim());
    formDataToSend.append("from_name", formData.full_name.trim());
    formDataToSend.append("subject", "New Contact Form Submission");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({ full_name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        console.error("Form submission error:", data);
        setResult(data.message || "❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social media data with your imported icons
  const socialMedia = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhay-garg-a49817257/", color: "#0077b5", icon: linkdein },
    { name: "Instagram", url: "https://www.instagram.com/abhaygarg_354/", color: "#e4405f", icon: instagram },
    { name: "Twitter", url: "https://x.com/abhayga615785", color: "#1da1f2", icon: twitter },
    { name: "LeetCode", url: "https://leetcode.com/u/abhaygarg5684", color: "#ffa116", icon: leetcode },
    { name: "CodeForces", url: "https://codeforces.com/profile/abhaygarg354", color: "#1f8acb", icon: codeforces },
    { name: "GitHub", url: "https://github.com/abhaygarg3504", color: "#333", icon: github },
  ];

  return (
     <div>
      <Navbar/>
      <motion.div 
        id='contact'
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col items-center px-6 md:px-12 lg:px-24 py-16 min-h-screen
          ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-purple-900/90 text-white' 
            : 'bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900'
        }`}
      >
        <motion.div className='flex flex-col md:flex-row gap-12 w-full max-w-6xl'>
          {/* Left side - Profile and Globe */}
          <div className={`flex flex-col gap-6 md:w-1/2 text-center md:text-left
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            {/* Profile Avatar */}
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div>
                <img className="w-20 h-20 rounded-full items-center justify-center text-2xl" src={Profile} alt="" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Connect with Me
              </h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm available on various social media platforms. Feel free to connect with me!
                I usually get back to you in 24 hours.
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
              className='flex gap-4 mb-8 justify-center md:justify-start flex-wrap'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  variants={iconVariants}
                  whileHover="hover"
                  style={{ borderColor: social.color }}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </motion.div>
            <motion.button
            className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
              <a target='_blank' href='https://drive.google.com/drive/folders/1_eppKRrxoJgKaV1D268VXbWhuStTY1Z1?usp=sharing'>View My Resume</a>
            </motion.button>

            {/* Enhanced Globe */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative">
                <div 
                  ref={globeRef} 
                  className="w-96 h-96 cursor-grab active:cursor-grabbing"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 136, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
                    borderRadius: '50%',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    boxShadow: '0 0 50px rgba(0, 255, 136, 0.2), inset 0 0 50px rgba(0, 255, 136, 0.1)',
                    userSelect: 'none'
                  }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-pulse pointer-events-none" />
                <div className="absolute inset-2 rounded-full border border-green-400/30 animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact Form */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <form onSubmit={onSubmit} className={`flex flex-col gap-6 rounded-xl p-8 border ${
              theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-200'
            } backdrop-blur-sm`}>
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </h3>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Your Name *
                </label>
                <input 
                  className={`w-full h-12 px-4 rounded-lg text-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`} 
                  type="text" 
                  placeholder='Enter Your Name' 
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Email *
                </label>
                <input 
                  type="email" 
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter Your Email Here' 
                  className={`w-full h-12 px-4 rounded-lg text-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`} 
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Write Your Message Here *
                </label>
                <textarea 
                  className={`w-full h-32 px-4 py-3 rounded-lg text-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Enter your message' 
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button 
                type="submit"
                className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700'
                }`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {result && (
                <motion.p 
                  className={`text-center py-2 px-4 rounded-lg ${
                    result.includes('Successfully') 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : result.includes('Sending') 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {result}
                </motion.p>
              )}
              </form>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer/>
     </div>
  );
};

export default Context;