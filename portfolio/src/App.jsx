import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Sparkles, ArrowRight } from "lucide-react";
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Sacooo",
      description: "A full-stack web app that helps Kenyan SACCOs & Chamas manage contributions, loans, and approvals digitally instead of using WhatsApp and Excel.",
      tech: ["React", "NodeJs", "Mysql", "tailwind"],
      github: ["https://github.com/Bilal-ahmed-mohamed/Sacco-Chama-Management-System."],
      link: ["https://sacooo.netlify.app/"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Shika Grao",
      description: "Shika Grao is a web app where players can book turfs and owners can showcase their venues.",
      tech: ["React", "NodeJs", "Mysql", "tailwind"],
      github: ["https://github.com/Bilal-ahmed-mohamed/shika-Grao"],
      link: ["https://shika-grao.vercel.app/"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Habibullah Agency",
      description: "A website for an agency that offers Umrah and Hajj packages to Makah — making pilgrimage planning easy and stress-free.",
      tech: ["React", "Tailwind"],
      github: [" https://github.com/Bilal-ahmed-mohamed/umrah-agency-website"],
      link: ["https://umrah-agency-website.vercel.app/"],
      color: "from-orange-500 to-red-500"

    }
  ];

  const skills = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Javascript", icon: "📘", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MySql", icon: "🎨", category: "Database" },
    { name: "PHP", icon: "🐍", category: "Language" },
    { name: "MongoDb", icon: "🐍", category: "Database" },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Bilal
          </div>
          <div className="flex gap-6">
            {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                // onClick={() => setActiveSection(item.toLowerCase())}
                className={`transition-all duration-300 ${activeSection === item.toLowerCase()
                  ? 'text-cyan-400 scale-110'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center space-y-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full blur-2xl opacity-75 animate-pulse" />
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center text-6xl">
              👋
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Bilal Ahmed Mohamed
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer
          </p>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful digital experiences with clean code and innovative design.
            Specializing in modern web technologies and user-centric solutions.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/yourusername" className="hover:text-cyan-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code2 className="text-cyan-400" />
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl">Building solutions that make a difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Sparkles className="text-cyan-400" size={24} />

                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-evenly gap-4 mt-3">
                    <a
                      href={project.github[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Github size={24} />
                    </a>

                    <a
                      href={project.link[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Palette className="text-emerald-400" />
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-xl">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

          <div className="space-y-6">

            <div className="border border-gray-700 p-6 rounded-xl bg-[#131416] hover:border-cyan-400 transition">
              <h3 className="text-xl font-semibold">Bachelor Of Science In Computer Science</h3>
              <p className="text-gray-400">Zetech University — Kenya</p>
              <p className="text-sm text-gray-500 mt-1">2023 — 2024</p>
            </div>

            <div className="border border-gray-700 p-6 rounded-xl bg-[#131416] hover:border-cyan-400 transition">
              <h3 className="text-xl font-semibold">Diploma In Computer Science</h3>
              <p className="text-gray-400">Zetech University — Kenya</p>
              <p className="text-sm text-gray-500 mt-1">2021 — 2022</p>
            </div>





          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-xl mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="text-left mb-8">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors h-32"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2025 Bilal Ahmed Mohamed</p>
      </footer>
    </div>
  );

}

export default App
