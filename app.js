import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ChevronDown, Code, Database, TestTube, Wrench, Award, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    programming: ['Java', 'Python'],
    databases: ['MySQL', 'PostgreSQL'],
    testing: ['Manual Testing', 'Automation Testing', 'API Testing', 'Performance Testing'],
    tools: ['JMeter', 'Burp Suite', 'Postman', 'Selenium', 'Git', 'GitHub', 'GitLab', 'IntelliJ IDEA'],
    other: ['Linux/Unix', 'CI/CD Pipelines', 'LaTeX', 'Test Documentation']
  };

  const experience = [
    {
      company: 'TigerIT Bangladesh Ltd.',
      role: 'Software Engineer QA',
      period: 'Mar 2024 - Present',
      location: 'Dhaka',
      highlights: [
        'Developed and executed comprehensive test plans for web, desktop, and mobile applications',
        'Conducted API testing using Postman and Swagger for functionality and security validation',
        'Performed database testing with MySQL and PostgreSQL ensuring data integrity',
        'Utilized JMeter for performance testing and bottleneck identification',
        'Managed defects using GitLab and Redmine with cross-team coordination'
      ]
    },
    {
      company: 'Battery Low Interactive Limited',
      role: 'SQA Intern',
      period: 'Feb 2022 - Apr 2022',
      location: 'Dhaka',
      highlights: [
        'Reviewed Software Requirement Specifications and created test plans',
        'Developed comprehensive test cases and conducted manual testing',
        'Performed security testing and vulnerability assessments',
        'Managed issues using Jira and Trello bug-tracking systems'
      ]
    }
  ];

  const projects = [
    {
      name: 'Bashabari',
      type: 'Mobile Application',
      description: 'A comprehensive mobile app connecting homeowners and tenants for seamless property management',
      tech: ['Java', 'XML', 'Google Firebase'],
      features: ['Profile Management', 'Billing System', 'Notice Board', 'Payment Integration']
    },
    {
      name: 'Mask Detection & Distance Maintainer',
      type: 'AI Project',
      description: 'AI-powered system for Covid-19 safety compliance using computer vision',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi 4'],
      features: ['Face Detection', 'Distance Measurement', 'Real-time Processing', 'Edge Deployment']
    },
    {
      name: 'E-Commerce Testing Suite',
      type: 'QA Automation Project',
      description: 'Comprehensive automated testing framework for e-commerce platforms',
      tech: ['Selenium', 'Java', 'TestNG', 'JMeter'],
      features: ['UI Automation', 'API Testing', 'Performance Testing', 'CI/CD Integration']
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(id);
  };

  const isInView = (offset) => {
    return scrollY > offset - 400;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MRS
            </h1>
            <div className="flex gap-6">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur border border-cyan-500/20 rounded-full">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Mahfuzur Shakil
                  </span>
                </h2>
                
                <div className="flex items-center gap-3 text-2xl lg:text-3xl text-slate-300">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></span>
                  <span>Software QA Engineer</span>
                </div>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Transforming quality assurance through innovative testing strategies, automation excellence, 
                and a relentless commitment to delivering bulletproof software solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:shakil.mahfuzur@gmail.com"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300"
                >
                  View My Work
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <span className="text-slate-500 text-sm">Connect with me</span>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/mohammad-shakil1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin size={20} className="group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a 
                    href="https://github.com/MdShakil14" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110 group"
                  >
                    <Github size={20} className="group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Stats & Highlights */}
            <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    2+
                  </div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-slate-400 text-sm">Projects Tested</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-slate-400 text-sm">Quality Focus</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    8+
                  </div>
                  <div className="text-slate-400 text-sm">Tools Mastered</div>
                </div>
              </div>

              {/* Key Expertise */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
                  <TestTube size={20} />
                  Core Expertise
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'API Testing', level: 95 },
                    { name: 'Automation', level: 90 },
                    { name: 'Performance Testing', level: 85 },
                    { name: 'Manual Testing', level: 95 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Fixed position */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn" style={{ animationDelay: '1s' }}>
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown size={24} className="animate-bounce group-hover:text-cyan-400" />
            </button>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-700 ${isInView(800) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">About Me</h3>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I'm a dedicated Software QA Engineer with expertise in manual and automated testing, API validation, 
              and performance analysis. Currently pursuing my Master's in Computer Science at North South University 
              while working at TigerIT Bangladesh Ltd., I bring a strong foundation in software testing methodologies 
              and a commitment to quality assurance excellence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-cyan-400" /> Education
                </h4>
                <div className="space-y-3 text-slate-300">
                  <div>
                    <p className="font-semibold text-white">MSc in Computer Science & Engineering</p>
                    <p className="text-sm">North South University (2024 - Present)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">BSc in Computer Science & Engineering</p>
                    <p className="text-sm">North South University (2018 - 2022) • GPA: 3.28/4.00</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-cyan-400" /> Certifications & Activities
                </h4>
                <div className="space-y-3 text-slate-300">
                  <div>
                    <p className="font-semibold text-white">IEEE NSU Student Branch</p>
                    <p className="text-sm">Member - Technical & Professional Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 bg-slate-800/30 transition-all duration-700 ${isInView(1400) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Programming', skills: skills.programming },
              { icon: Database, title: 'Databases', skills: skills.databases },
              { icon: TestTube, title: 'Testing', skills: skills.testing }
            ].map((category, idx) => (
              <div 
                key={category.title}
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                style={{ 
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <category.icon className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-cyan-600 transition-colors cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2">
              <Wrench className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-cyan-600 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <Award className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-cyan-600 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-700 ${isInView(2200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                style={{ 
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyan-600 rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-cyan-400">{job.role}</h4>
                    <p className="text-lg text-white">{job.company}</p>
                    <p className="text-slate-400">{job.period} • {job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen flex items-center px-6 py-20 bg-slate-800/30 transition-all duration-700 ${isInView(3000) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                style={{ 
                  transitionDelay: `${idx * 150}ms`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FolderOpen className="text-cyan-400" size={28} />
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                </div>
                <p className="text-sm text-cyan-400 mb-3">{project.type}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-slate-400">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-700 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-slate-400">Key Features:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-700 ${isInView(3800) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: 'Email', link: 'mailto:shakil.mahfuzur@gmail.com', text: 'shakil.mahfuzur@gmail.com' },
              { icon: Linkedin, title: 'LinkedIn', link: 'https://linkedin.com/in/mohammad-shakil1', text: 'mohammad-shakil1' },
              { icon: Github, title: 'GitHub', link: 'https://github.com/MdShakil14', text: 'MdShakil14' }
            ].map((contact, idx) => (
              <div 
                key={contact.title}
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                style={{ 
                  transitionDelay: `${idx * 150}ms`
                }}
              >
                <contact.icon className="mx-auto mb-4 text-cyan-400" size={32} />
                <h4 className="font-semibold mb-2">{contact.title}</h4>
                <a 
                  href={contact.link} 
                  target={contact.title !== 'Email' ? '_blank' : undefined}
                  rel={contact.title !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="text-cyan-400 hover:underline break-all"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
          <a 
            href="mailto:shakil.mahfuzur@gmail.com" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>© 2024 Md. Mahfuzur Rahaman Shakil. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}