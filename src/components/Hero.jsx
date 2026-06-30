import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/hero video/hero-bg.jpg';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Developer Portrait"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:px-12 max-w-4xl mx-auto flex flex-col justify-center items-center text-center w-full">
        
        {/* Centered Content: Text and Buttons */}
        <div className="flex flex-col items-center text-center max-w-3xl w-full mt-12">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-5xl md:text-7xl font-black mb-3 tracking-tighter uppercase"
          >
            SANKARAGURU
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-transparent [-webkit-text-stroke:1px_white] text-xl md:text-3xl font-extrabold mb-8 tracking-widest uppercase"
          >
            AI SOFTWARE ENGINEER
          </h2>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-base md:text-xl font-bold mb-12 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Building intelligent AI-powered applications using Python, React, Node.js, Generative AI, LLMs, Supabase, and Workflow Automation.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap justify-center items-center gap-4 w-full"
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
              download="Sankaraguru_V_Resume.pdf"
              className="px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
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
