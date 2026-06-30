import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI Software Engineer</p>
          <p>Generative AI • Full Stack Development</p>
          <p>Automation • Intelligent Applications</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>GenAI Intern @ Trigent Software</p>
          <p>AI & Data Science Student</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">Explore Projects</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for</p>
          <p>Internships & Full-Time Roles</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex flex-col justify-center items-center py-16 md:py-20 overflow-hidden gap-4">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter uppercase select-none text-[#f4f4f4] w-full text-center">
          SANKAR
        </h2>
        <p className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#a3a3a3] max-w-2xl text-center leading-relaxed">
          "Building intelligent AI-powered applications with Generative AI and Full Stack Development."
        </p>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="https://github.com/sankaraguru0107" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">GitHub</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; 2026 Sankaraguru.
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:sankaraguruv36@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">sankaraguruv36@gmail.com</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href="https://www.linkedin.com/in/sankaraguru-v-9a5891307/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
