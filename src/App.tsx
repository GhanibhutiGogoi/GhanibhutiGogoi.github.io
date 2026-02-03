import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Award, Code, User, GraduationCap, Briefcase, Lightbulb, Instagram, X, Menu, Phone, Globe, Cpu, Gamepad2, Brain, Heart, Music } from 'lucide-react';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/50 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ghanibhuti Gogoi</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#about" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                <a href="#education" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Education</a>
                <a href="#experience" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
                <a href="#projects" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
                <a href="#skills" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
                <a href="#leadership" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Leadership</a>
                <a href="#contact" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/Background.jpg')", // Change to your image filename
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.0, // Adjust for desired darkness
          }}
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-50 z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-20 w-full">
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/profile.jpg"
                alt="Ghanibhuti Gogoi"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Ghanibhuti <span className="text-blue-600">Gogoi</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              AI Engineering Student & Research Intern
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Passionate about <span className="font-semibold text-blue-600">artificial intelligence</span>, <span className="font-semibold text-purple-600">3D development</span>, and creating innovative solutions.
              Currently pursuing B.Eng. in Artificial Intelligence at HKUST-GZ and working on cutting-edge
              research projects involving AI, computer vision, and interactive technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:ghanibhutigogoi@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 font-medium">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/"
                className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-1 font-medium">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="tel:+918486941868"
                className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-1 font-medium">
                <Phone size={20} />
                +91 84869 41868
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500 animate-bounce">
              <MapPin size={18} />
              <span>Guangzhou, China</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">B.Eng. (Artificial Intelligence)</h3>
                    <p className="text-lg text-blue-600 font-semibold">Hong Kong University of Science & Technology, Guangzhou</p>
                  </div>
                  <span className="px-4 py-1 bg-blue-100/50 text-blue-700 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">Graduation: July 2027</span>
                </div>
                <p className="text-slate-700">Nansha, Guangzhou, China</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">11th and 12th - 92.2%</h3>
                  <p className="text-blue-600 font-semibold mb-2">Delhi Public School, ONGC Nazira</p>
                  <p className="text-slate-600 mb-4">Central Board of Secondary Education, India</p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                    May 2023 • Sivsagar, Assam, India
                  </div>
                </div>
              </div>
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Until 10th - 93.3%</h3>
                  <p className="text-blue-600 font-semibold mb-2">The New Star School, Rajgarh</p>
                  <p className="text-slate-600 mb-4">Secondary Education Board of Assam, India</p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                    May 2021 • Dibrugarh, Assam, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Briefcase size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">LLM Full Stack Software Engineering Intern</h3>
                    <p className="text-lg text-blue-600 font-semibold">NOVO AI - HKSTP (heynovo.ai)</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">February 2026 – May 2026</span>
                </div>
                <p className="text-slate-500 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Remote, HK
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed full-stack features for an AI-driven insurance platform utilizing LLMs and Computer Vision to detect over-billing and fraud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Implemented automated analysis tools that cross-reference claim data with visual evidence to identify billing discrepancies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Built scalable backend APIs and frontend interfaces to streamline remote claim assessments and improve processing accuracy.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">X Program Researcher</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">September 2025 – March 2026</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Conducted research titled "Experimental evaluation of Deep Reinforcement Learning algorithms for HVAC control".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed models to predict HVAC cooling loads and trained Reinforcement Learning algorithms to optimize performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Implemented cost-saving strategies by optimizing energy consumption patterns based on real-time data.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Full Stack Web Development Intern</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">November 2025 – March 2026</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed a commercial website for a company specializing in homoepitaxial wafers and related services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Managed the complete infrastructure setup, including MongoDB integration and Google Cloud hosting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Built and deployed both frontend interfaces and backend services to ensure a seamless user experience.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Research Assistant</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">January 2024 – Present</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Contributed to the development and deployment of machine learning models in collaborative research projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Engaged in full-stack development, including backend services and frontend interfaces.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Integrated 3D components into webapps using Unity3D and C# for interactive system features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Worked on multiple industry-collaboration projects alongside cross-functional teams.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">UG Research Program, 2025</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">June 2025 – August 2025</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed a federated learning algorithm to predict electricity consumption.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Trained it on real data on multiple devices with a shared network.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed the final LSTM model through decentralized federated learning and deployed it in use.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Visiting Research Program, 2025</h3>
                    <p className="text-lg text-blue-600 font-semibold">Fujian Medical University</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">June 2025 – July 2025</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Worked in developing AI algorithm for medical imaging MRI imaging to denoise MRI image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Collected MRI data and cleared it for model use case.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">UG Research Program, 2024</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">June 2024 – August 2024</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Developed a computer vision-based detection system for identifying faulty manhole covers, designed for deployment on drones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Collected and annotated real-world data to custom-train a deep learning model for accurate detection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Built a lightweight application interface optimized for Jetson Nano to run the model in real-time onboard a drone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Lightbulb size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://huggingface.co/Ghanibhuti/Musician-Llama-3.2-1B-Instruct" target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Code size={28} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Musician-Llama</h3>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                    Fine-tuned the Llama-3.2-1B-Instruct Large Language Model to generate MIDI music files. Published the model and dataset on Hugging Face, including documentation for inference.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs font-semibold backdrop-blur-sm">GenAI</span>
                    <span className="px-3 py-1 bg-purple-100/50 text-purple-700 rounded-full text-xs font-semibold backdrop-blur-sm">LLM</span>
                    <span className="px-3 py-1 bg-yellow-100/50 text-yellow-700 rounded-full text-xs font-semibold backdrop-blur-sm">HuggingFace</span>
                  </div>
                </div>
              </div>
            </a>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">3D Campus Power Analysis</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Designed and developed a full 3D interactive model of the entire campus using Unity3D. Built and integrated a custom API to connect the model with real-time campus data.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs font-semibold backdrop-blur-sm">Unity3D</span>
                  <span className="px-3 py-1 bg-green-100/50 text-green-700 rounded-full text-xs font-semibold backdrop-blur-sm">API</span>
                  <span className="px-3 py-1 bg-teal-100/50 text-teal-700 rounded-full text-xs font-semibold backdrop-blur-sm">Data Viz</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Underwater Robot Project</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Developed a 3D visualization and control interface for an underwater cleaning robot. Built a real-time data-driven system to display the robot and water pump operations.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs font-semibold backdrop-blur-sm">Robotics</span>
                  <span className="px-3 py-1 bg-indigo-100/50 text-indigo-700 rounded-full text-xs font-semibold backdrop-blur-sm">3D Viz</span>
                  <span className="px-3 py-1 bg-gray-100/50 text-gray-700 rounded-full text-xs font-semibold backdrop-blur-sm">Backend</span>
                </div>
              </div>

            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Tanoxi Technology (Company Website)</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Developed a comprehensive commercial website allowing users to view products, place orders, and access company news. Designed and implemented a robust Admin Panel for managing products, tracking orders, and updating team/service information.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100/50 text-pink-700 rounded-full text-xs font-semibold backdrop-blur-sm">Full Stack</span>
                  <span className="px-3 py-1 bg-orange-100/50 text-orange-700 rounded-full text-xs font-semibold backdrop-blur-sm">React</span>
                  <span className="px-3 py-1 bg-red-100/50 text-red-700 rounded-full text-xs font-semibold backdrop-blur-sm">Admin Panel</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">Smart Pump AR App</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Developed a smart pump visualization app with an interactive 360° front-end view driven by real-time sensor data. Integrated backend services to stream and sync operational statistics with the 3D interface. Customized camera drivers for lightweight hardware.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100/50 text-cyan-700 rounded-full text-xs font-semibold backdrop-blur-sm">AR</span>
                  <span className="px-3 py-1 bg-lime-100/50 text-lime-700 rounded-full text-xs font-semibold backdrop-blur-sm">IoT</span>
                  <span className="px-3 py-1 bg-emerald-100/50 text-emerald-700 rounded-full text-xs font-semibold backdrop-blur-sm">Raspberry Pi</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl flex items-center justify-center text-violet-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-violet-600 transition-colors">Game Development</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Developed and published a game called Pokemon Gen on Gamejolt. Indie developer, worked on all aspects including coding, 3D modeling, animation, game design etc.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-100/50 text-violet-700 rounded-full text-xs font-semibold backdrop-blur-sm">Game Dev</span>
                  <span className="px-3 py-1 bg-fuchsia-100/50 text-fuchsia-700 rounded-full text-xs font-semibold backdrop-blur-sm">3D Modeling</span>
                  <span className="px-3 py-1 bg-rose-100/50 text-rose-700 rounded-full text-xs font-semibold backdrop-blur-sm">Animation</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Music size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors">Music Production</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                  Published music under the artist name "Ghanibhuti Gogoi", available on all platforms. Music production, Lyrics Writing, Playback Singing, Mix and Mastering.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/30 relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100/50 text-yellow-700 rounded-full text-xs font-semibold backdrop-blur-sm">Production</span>
                  <span className="px-3 py-1 bg-orange-100/50 text-orange-700 rounded-full text-xs font-semibold backdrop-blur-sm">Vocals</span>
                  <span className="px-3 py-1 bg-red-100/50 text-red-700 rounded-full text-xs font-semibold backdrop-blur-sm">Mixing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Code size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills & Interests</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Code size={18} className="text-blue-500" />
                      Languages & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['C++', 'C#', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'SQL', 'MongoDB'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:bg-blue-200/50 transition-colors cursor-default backdrop-blur-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Cpu size={18} className="text-green-500" />
                      Tools & Software
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Unity3D', 'Unreal Engine', 'Blender', 'FL Studio', 'VS Code', 'MS Office', 'Photoshop', 'Premiere Pro', 'Git'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100/50 text-green-700 rounded-full text-sm font-medium border border-green-200/50 hover:bg-green-200/50 transition-colors cursor-default backdrop-blur-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Brain size={18} className="text-purple-500" />
                      AI & ML
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Stable Diffusion', 'Computer Vision', 'Reinforcement Learning', 'Deep Learning', 'LLMs', 'Data Mining'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100/50 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 hover:bg-purple-200/50 transition-colors cursor-default backdrop-blur-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                  Languages & Interests
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Globe size={18} className="text-indigo-500" />
                    Languages
                  </h4>
                  <div className="space-y-3">
                    {[
                      { lang: 'English', level: 'Advanced', width: '90%' },
                      { lang: 'Assamese', level: 'Native', width: '100%' },
                      { lang: 'Hindi', level: 'Advanced', width: '90%' },
                      { lang: 'Chinese', level: 'Basic', width: '30%' },
                      { lang: 'Bengali', level: 'Intermediate', width: '60%' }
                    ].map((item) => (
                      <div key={item.lang} className="relative">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700">{item.lang}</span>
                          <span className="text-slate-500">{item.level}</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-500 rounded-full"
                            style={{ width: item.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Heart size={18} className="text-rose-500" />
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Singing', 'Gaming', 'Writing Songs', 'Making Music', 'Partying', 'Chatting', 'Pop Culture', 'Movies'].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-rose-100/50 text-rose-700 rounded-full text-sm font-medium border border-rose-200/50 hover:bg-rose-200/50 transition-colors cursor-default backdrop-blur-sm">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Award size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Achievements</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-yellow-100/50 text-yellow-600 rounded-xl group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Outstanding International Student Scholarship</h3>
                  <p className="text-slate-600 font-medium">Guangdong Government (10,000 RMB)</p>
                  <p className="text-slate-500 text-sm mt-1">2023 & 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-green-100/50 text-green-600 rounded-xl group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Excellence Admission Scholarship</h3>
                  <p className="text-slate-600 font-medium">Fully paid tuition fee</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-blue-100/50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Best Volunteer Teacher Award</h3>
                  <p className="text-slate-600 font-medium">2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-purple-100/50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Dean's List</h3>
                  <p className="text-slate-600 font-medium">Fall Term 2023-24</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-red-100/50 text-red-600 rounded-xl group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Third Prize, Provincial Level</h3>
                  <p className="text-slate-600 font-medium">4th University Electrical and Electronic Engineering Innovation Competition, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section id="leadership" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <User size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Leadership & Activities</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Volunteer Teacher</h3>
                    <p className="text-lg text-blue-600 font-semibold">Communist Youth League + HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">May 2025 – July 2025</span>
                </div>
                <p className="text-slate-500 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Shaoguan, Guangzhou, China
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Prepared lesson plans and conducted interactive English and musical drama sessions for middle school students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Contributed to educational development and community service as part of a volunteering initiative.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Volunteer Teacher</h3>
                    <p className="text-lg text-blue-600 font-semibold">Communist Youth League + HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">May 2024 – June 2024</span>
                </div>
                <p className="text-slate-500 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Tongren, China
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Prepared lesson plans and conducted interactive English and English drama sessions for middle school students in remote areas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Contributed to educational development and community service as part of a volunteering initiative.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Co-founder Choir Club</h3>
                    <p className="text-lg text-blue-600 font-semibold">HKUST-GZ</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100/50 text-slate-600 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit backdrop-blur-sm">December 2023 – May 2024</span>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Organized rehearsals, coordinated practice schedules, and led event planning activities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>Created promotional videos and content. Actively performed in choir events.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl text-blue-600 mb-6">
            <Mail size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>
      
          <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
            <a href="mailto:ghanibhutigogoi@gmail.com"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-1">
              <Mail size={20} />
              <span className="font-semibold">Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-slate-700 rounded-full hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Linkedin size={20} />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/ghanibhuti_gogoi/"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-slate-700 rounded-full hover:bg-white hover:text-pink-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Instagram size={20} />
              <span className="font-semibold">Instagram</span>
            </a>
            <a href="https://wa.me/918486941868"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-slate-700 rounded-full hover:bg-white hover:text-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              {/* WhatsApp SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.004 2.003a9.994 9.994 0 0 0-8.48 15.47l-1.12 4.1a1 1 0 0 0 1.22 1.22l4.1-1.12a9.994 9.994 0 1 0 4.28-19.67Zm0 18.001a7.98 7.98 0 0 1-4.09-1.17l-.29-.17-2.43.66.65-2.42-.18-.29A7.99 7.99 0 1 1 12.004 20.004Zm4.36-5.42c-.24-.12-1.41-.7-1.62-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.36.11-.48.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33 1 2.49.14.16 1.7 2.6 4.13 3.54.58.2 1.03.32 1.38.41.58.14 1.1.12 1.52.07.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
              </svg>
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">&copy; 2025 Ghanibhuti Gogoi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
