import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/hero video/hero-bg.png';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden bg-black flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0">
      
      {/* Background Graphic Accent (subtle gold glitter glow) */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>
      
      {/* Left Side: Content Container */}
      <div className="w-full md:w-[50%] lg:w-[55%] z-20 px-6 md:pl-16 lg:pl-24 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        {/* Main Heading */}
        <h1 
          data-aos="fade-up"
          className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter uppercase"
        >
          Madhumitha V
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-transparent [-webkit-text-stroke:1px_white] text-xl md:text-2xl lg:text-3xl font-extrabold mb-8 tracking-widest uppercase"
        >
          AI SOFTWARE ENGINEER
        </h2>

        {/* Subheading */}
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white/80 text-sm md:text-base lg:text-lg font-bold mb-10 max-w-xl leading-relaxed"
        >
          Building intelligent AI-powered applications using Python, React, Node.js, Generative AI, LLMs, Supabase, and Workflow Automation.
        </p>

        {/* Buttons */}
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 w-full"
        >
          {/* Primary Button */}
          <a 
            href="#projects"
            className="px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md inline-block"
          >
            View Projects
          </a>
          
          {/* Secondary Button - Glassmorphism style */}
          <a 
            href="/m.pdf"
            download="Madhumitha_V_Resume.pdf"
            className="px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image Container */}
      <div className="w-full md:w-[50%] lg:w-[45%] h-[50vh] md:h-full relative z-10 flex items-center justify-center md:justify-end mt-12 md:mt-0">
        <div className="w-full h-full md:h-[90%] md:w-[95%] md:rounded-l-[3rem] overflow-hidden bg-gray-900 border-l border-white/10 relative">
          <img
            src={heroImage}
            alt="Developer Portrait"
            className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
          {/* Overlay to blend the left side of the image with the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none md:hidden"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-[25%] transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Hero;
