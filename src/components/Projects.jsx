import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Legal Chatbot",
      tagline: "Legal AI Assistant",
      description: "Developed an AI-powered Legal Voice & Chat Assistant using NLP and OpenAI, with a React frontend and Supabase backend for secure real-time interaction.",
      tech: ["React", "NLP", "OpenAI", "Supabase"],
      featured: false,
      icon: "⚖️"
    },
    {
      id: 2,
      title: "Rockfall Prediction",
      tagline: "Mining AI Safety",
      description: "Built a machine learning-based Rockfall Prediction System to analyze geological and sensor data, enabling early risk detection and automated safety alerts for mining and slope monitoring.",
      tech: ["Python", "Machine Learning", "Predictive Analytics"],
      featured: false,
      icon: "⛰️"
    },
    {
      id: 3,
      title: "AI Voice-Based Medical Scheduling",
      tagline: "Voice AI & Automation",
      description: "Built a voice-enabled AI medical appointment scheduling system integrating VAPI, n8n, Google Calendar API, and Supabase for real-time availability checking and automated booking during live calls.",
      tech: ["VAPI", "n8n", "Google Calendar API", "Supabase"],
      featured: false,
      icon: "📞"
    },
    {
      id: 4,
      title: "Brain Tumor Detection",
      tagline: "Featured Project",
      description: "Developed an AI-powered Brain Tumor Detection and Classification System using Python, Deep Learning, U-Net, and Fuzzy Logic to enhance MRI image processing, achieve accurate tumor segmentation and classification, and presented the research at the IEEE-sponsored International Conference (ICSES 2026).",
      tech: ["Python", "Deep Learning", "U-Net", "Fuzzy Logic"],
      featured: true,
      icon: "🧠"
    }
  ];

  return (
    <section id="projects" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Projects I've Built
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            A selection of my work spanning Generative AI, Machine Learning, Automation, and Full-Stack Development.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map(project => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="mb-12 bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 hover:border-[#e5c060] transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-glitter text-white text-xs font-black uppercase tracking-wider mb-6">
                <span>⭐</span> {project.tagline}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div className="text-9xl p-10 bg-white/5 rounded-full border border-white/10 shadow-inner select-none animate-pulse">
                {project.icon}
              </div>
            </div>
          </div>
        ))}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-[#f4f4f4] rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-[#e5c060] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl p-3 bg-white rounded-xl shadow-sm border border-gray-200">{project.icon}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">{project.tagline}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-gray-300 text-gray-600 text-[10px] font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
