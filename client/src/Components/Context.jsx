
import React, { useContext, useState } from 'react';
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";
import underline from "../assets/nav_underline.svg";
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/DarkLightMode';

const Context = () => {
  const webform_id = import.meta.env.VITE_WEB_FORM;
  const [result, setResult] = useState("");
  const { theme } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", webform_id);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed. Please check your input.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div 
      id='contact'
      initial={{ opacity: 0.1, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center px-6 md:px-12 lg:px-24 py-16 
        ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <h1 className={`text-3xl md:text-4xl font-semibold text-center mb-6 
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Get in Touch
        <img width={150} className='mx-auto sm:w-34 mt-2' src={underline} alt="" />
      </h1>

      <motion.div className='flex flex-col md:flex-row gap-12 w-full max-w-5xl'>
        <div className={`flex flex-col gap-6 md:w-1/2 text-center md:text-left
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Let's Talk</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I am currently taking new projects. Contact me on the details below.
          </p>

          <div className={`flex flex-col gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className='flex items-center gap-3'>
              <img src={mail} alt="Email" className='w-6' />
              <p>abhaygarg5684@gmail.com</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={call} alt="Call" className='w-6' />
              <p>Kya karega Janeke</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={location} alt="Location" className='w-6' />
              <p>MANIT Bhopal, 462003</p>
            </div>
          </div>
        </div>

        <motion.form onSubmit={onSubmit} className='flex flex-col gap-4 md:w-1/2'>
          <label className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Your Name</label>
          <input 
            className={`w-full h-12 px-4 rounded-md text-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`} 
            type="text" placeholder='Enter Your Name' name="full_name" required 
          />

          <label className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</label>
          <input 
            type="email" name='email' placeholder='Enter Your Email Here' 
            className={`w-full h-12 px-4 rounded-md text-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`} 
            required 
          />

          <label className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Write Your Message Here</label>
          <textarea 
            className={`w-full h-32 px-4 rounded-md text-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`} 
            name="message" placeholder='Enter your text' required
          ></textarea>

          <button 
            className="w-full md:w-auto px-6 py-3 text-white rounded-full transition-all hover:scale-105 bg-gradient-to-b from-purple-500 to-orange-500" 
            type='submit'
          >
            Submit
          </button>

          {result && <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{result}</p>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Context;
