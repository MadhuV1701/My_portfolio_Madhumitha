import React from 'react';
import profileImage from '../assets/about/image.png';

const About = () => {
  const quickInfo = [
    { label: 'B.Tech (Current)', value: 'AI & Data Science (Final Year)' },
    { label: 'GenAI Intern', value: 'Trigent Software' },
    { label: 'Location', value: 'Tamil Nadu, India' },
    { label: 'Role', value: 'AI Software Engineer' }
  ];

  const skillGroups = [
    {
      category: "AI & Machine Learning",
      skills: ["Generative AI", "Large Language Models (LLMs)", "OpenAI API", "Google Gemini", "Hugging Face", "Prompt Engineering", "LangChain", "NLP", "Machine Learning"]
    },
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Vite", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST API Development"]
    },
    {
      category: "Database & Cloud",
      skills: ["Supabase", "MongoDB", "Firebase"]
    },
    {
      category: "Automation & Tools",
      skills: ["n8n", "Workflow Automation", "API Integration", "Git", "GitHub", "VS Code", "Postman", "Streamlit", "Docker (Basics)"]
    }
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">

          {/* Left Side: ID Badge */}
          <div className="flex flex-col items-center w-full lg:w-[350px] shrink-0 mt-12 lg:mt-0">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full">
              {/* Lanyard string */}
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
              {/* Lanyard clip */}
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

              {/* Badge Card */}
              <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Cutout Hole */}
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                </div>
                {/* Image Container */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                  <img
                    src={profileImage}
                    alt="Sankaraguru Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Info Content */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
            <div className="inline-block border border-white/30 rounded-full px-5 py-1.5 text-xs font-bold mb-6 tracking-widest uppercase bg-white/10 backdrop-blur-sm">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
              Sankaraguru
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 leading-relaxed text-red-50">
              I am an AI Software Engineer and final-year Artificial Intelligence & Data Science student passionate about building intelligent, scalable, and user-centric software.
            </p>
            <p className="text-base font-semibold mb-12 leading-relaxed text-red-100 opacity-90">
              My expertise spans Generative AI, Full Stack Development, Workflow Automation, and Machine Learning. During my internship at Trigent Software, I developed AI-powered solutions, automated workflows, and built production-ready applications using modern technologies. I enjoy transforming complex problems into practical AI solutions that improve productivity and user experience.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              {quickInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-red-200">{info.label}</h4>
                    <p className="text-sm font-bold text-white mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <div className="inline-block border border-white/30 rounded-full px-5 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase bg-white/10 backdrop-blur-sm text-white">
              My Toolbox
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-black uppercase">
              Skills & Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                data-aos="fade-up"
                data-aos-delay={groupIdx * 100}
                className="bg-gray-900/90 rounded-2xl p-6 shadow-xl border border-white/10 hover:border-[#ff2a2a] transition-all duration-300 group"
              >
                <h4 className="text-lg font-black text-white mb-4 border-b border-white/10 pb-2 group-hover:text-red-400 transition-colors duration-300">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
