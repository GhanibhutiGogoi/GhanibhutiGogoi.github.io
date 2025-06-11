import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Award, Code, User, GraduationCap, Briefcase, Lightbulb, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900">Ghanibhuti Gogoi</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#education" className="text-slate-600 hover:text-slate-900 transition-colors">Education</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
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
                <a href="#contact" onClick={closeMenu} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8">
              <img
                src="/profile.jpg"
                alt="Ghanibhuti Gogoi"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Ghanibhuti Gogoi
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              AI Engineering Student & Research Intern
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
              Passionate about artificial intelligence, 3D development, and creating innovative solutions.
              Currently pursuing B.Eng. in Artificial Intelligence at HKUST-GZ and working on cutting-edge
              research projects involving AI, computer vision, and interactive technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:ghanibhutigogoi@gmail.com"
                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/"
                 className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <MapPin size={18} />
              <span>Guangzhou, Guangdong, China</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="text-blue-600" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">B.Eng. (Artificial Intelligence)</h3>
                  <p className="text-lg text-blue-600 font-semibold">Hong Kong University of Science & Technology, Guangzhou</p>
                </div>
                <span className="text-slate-600 font-medium">September 2023 - Present</span>
              </div>
              <p className="text-slate-700">Currently pursuing a Bachelor's degree in Artificial Intelligence, focusing on machine learning, computer vision, and AI applications.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Higher Secondary - 92.2%</h3>
                <p className="text-blue-600 font-semibold mb-2">Central Board of Secondary Education</p>
                <span className="text-slate-600">2023</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Secondary - 93.3%</h3>
                <p className="text-blue-600 font-semibold mb-2">Secondary Board of Education, Assam</p>
                <span className="text-slate-600">2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="text-blue-600" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Research Intern</h3>
                  <p className="text-lg text-blue-600 font-semibold">HKUST-GZ - Green Campus SAAS Development</p>
                </div>
                <span className="text-slate-600 font-medium">January 2024 - Present</span>
              </div>
              <ul className="text-slate-700 space-y-2">
                <li>• Development and deployment of AI algorithms for analysis of various campus data</li>
                <li>• Developing a 3D virtual environment of the campus which is interactive and driven by real-time data</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">HKUST Undergraduate Research Program</h3>
                  <p className="text-lg text-blue-600 font-semibold">Manhole Cover Detection Using Drone and AI</p>
                </div>
                <span className="text-slate-600 font-medium">June 2024 - August 2024</span>
              </div>
              <p className="text-slate-700">Trained AI and deployed it to automatically detect faulty manhole covers using drone technology.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Volunteer Teaching</h3>
                  <p className="text-lg text-blue-600 font-semibold">Teaching Middle School Kids English</p>
                </div>
                <span className="text-slate-600 font-medium">May 2024 - July 2024</span>
              </div>
              <p className="text-slate-700">Prepared study materials, courses and taught kids from relatively underdeveloped and poor areas in Guizhou, China.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="text-blue-600" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3D Campus Project Development</h3>
              <p className="text-slate-700 mb-4">
                Developed a 3D model of the campus with an API to connect it to real-time data including electricity, WiFi, and temperature. The virtual campus can interact with and control the real environment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Unity3D</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">IoT</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">SAAS</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manhole Cover Detection</h3>
              <p className="text-slate-700 mb-4">
                Constructed a dataset and trained an AI model for manhole cover detection. Deployed on a drone for edge computing to automatically detect faulty covers and map them.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Drone Tech</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Pump AR Project</h3>
              <p className="text-slate-700 mb-4">
                Worked on a Smart Water Pump Project showing water pumps in 360-degree view using 360 cameras. Wrote camera drivers and incorporated AR components for interactive visualization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">AR</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">360 Cameras</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Real-time Data</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Under Water Robot</h3>
              <p className="text-slate-700 mb-4">
                Created a Windows application to remotely control an underwater cleaning robot, mapping its movements in a virtual environment and translating sensor data into 3D position data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Robotics</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">3D Mapping</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Sensor Data</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">ML Classification Project</h3>
              <p className="text-slate-700 mb-4">
                Developed AI models in PyTorch for classifying MFCC audio data, as well as categorizing image, video, and text data. Applied NLP for text categorization and sentiment analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="text-blue-600" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Development Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Unity3D', 'Unreal Engine', 'Blender', 'FL Studio', 'VSCode', 'Visual Studio'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'C++', 'C#', 'Python', 'SQL', 'JavaScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">AI & ML</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'Computer Vision', 'OpenCV', 'Keras', 'Sklearn', 'Unity ML Agents'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Personal Skills</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Highly interactive and co-operative
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Quick learner, can work under huge pressure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Punctual, sincere, always speaks up new ideas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Problem solver with great social skills
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Good communicator
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-8">Hobbies</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  Playing badminton and video games
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  Music production and writing songs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  Going out with people
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="text-blue-600" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Achievements</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-yellow-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Best Volunteer Teacher Award</h3>
              </div>
              <p className="text-slate-700">2024</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Co-Founder of Choir Club</h3>
              </div>
              <p className="text-slate-700">HKUST-GZ, 2023</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-green-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Excellence Admission Scholarship</h3>
              </div>
              <p className="text-slate-700">HKUST-GZ, 2023</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-purple-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Outstanding International Student Scholarship</h3>
              </div>
              <p className="text-slate-700">HKUST-GZ, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-700 mb-12">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:ghanibhutigogoi@gmail.com"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={24} />
              <span className="font-semibold">ghanibhutigogoi@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/"
               className="flex items-center justify-center gap-3 px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              <Linkedin size={24} />
              <span className="font-semibold">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Ghanibhuti Gogoi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
