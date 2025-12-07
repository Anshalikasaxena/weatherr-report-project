import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Download } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const profileImg =
    "https://media.licdn.com/dms/image/v2/D4D03AQGfyoH2HOg5hA/profile-displayphoto-shrink_800_800/B4DZSXOwndGkAc-/0/1737704017337?e=1765411200&v=beta&t=9anqv1uzbIv8SRk_yOCKh8tJx_022Rg7jaeEAu5hXEE";

  const resumeLink =
    "https://drive.google.com/file/d/1rUVAgiXblNmXt1i7jvsgx2jUQHveZtL1/view?usp=sharing";

  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for data visualization and analysis using Excel and statistical methods",
      tech: ["MS Excel", "Data Visualization", "Statistics"],
      link: "#"
    },
    {
      title: "Network Management System",
      description: "System administration and network optimization project",
      tech: ["Network Systems", "Server Management"],
      link: "#"
    },
    {
      title: "C Programming Projects",
      description: "Collection of programming solutions and algorithms",
      tech: ["C Language", "Algorithms", "Problem Solving"],
      link: "#"
    }
  ];

  const skills = [
    "C Language", "MS Excel", "Data Analysis", "Network Systems",
    "Server Management", "System Administration", "Hindi", "English"
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">

      <div className="fixed inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#000" />
              <rect x="0" y="0" width="60" height="60" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        
        {/* NAVBAR */}
        <nav className="bg-white shadow-sm fixed w-full z-20">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Image Logo */}
            <a href="#about">
              <img
                src={profileImg}
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover shadow"
              />
            </a>

            <div className="hidden md:flex gap-8 text-sm">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="flex flex-col px-6 py-3">
                <a href="#about" className="py-2 text-gray-600">About</a>
                <a href="#projects" className="py-2 text-gray-600">Projects</a>
                <a href="#skills" className="py-2 text-gray-600">Skills</a>
                <a href="#contact" className="py-2 text-gray-600">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* PROFILE IMAGE */}
              <a href="#about">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover shadow-xl"
                />
              </a>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Anshalika Saxena
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  Data Analyst | Network Systems Analyst
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  MCA Student at K.R. Mangalam University (2022-2027)
                </p>

                <div className="flex flex-col gap-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin size={16} />
                    <span>Gwalior, India</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail size={16} />
                    <a href="mailto:anshalika.saxena@example.com" className="hover:text-gray-900">
                      anshalika.saxena@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone size={16} />
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                </div>

                {/* SOCIALS + RESUME BUTTON */}
                <div className="flex justify-center md:justify-start gap-3">
                  <a href="https://github.com" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                    <Github size={20} />
                  </a>

                  <a href="https://www.linkedin.com/in/anshalika-saxena-69293a273/" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                    <Linkedin size={20} />
                  </a>

                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2 text-sm"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-white px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a student at K.R. Mangalam University pursuing MCA...
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a highly skilled and dynamic Network Systems Analyst...
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am resourceful and committed to advancing my knowledge...
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Singing", "Dancing", "Reading"].map((interest, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition bg-white">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-gray-900 hover:text-gray-700 flex items-center gap-1 text-sm font-medium">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center hover:border-gray-900 transition">
                  <span className="text-sm font-medium text-gray-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-white px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects...
            </p>
            <a
              href="mailto:anshalika.saxena@gmail.com"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
            <a
  href="https://api.whatsapp.com/send/?phone=%2B918959824311&text&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
>
  Contact Me
</a>

            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-6 px-6">
          <div className="max-w-5xl mx-auto text-center text-sm">
            <p>&copy; 2024 Anshalika Saxena. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
