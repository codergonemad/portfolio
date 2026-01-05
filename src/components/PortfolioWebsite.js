import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, ArrowUp, ChevronDown, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SkillsSection from './SkillsSection';
import EducationExperienceTimeline from './EducationExperienceTimeline';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import hackerImage from '../media/hacker.avif';

// In your main component's render method


const PortfolioWebsite = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'whatido', label: 'What I Do' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.pageYOffset > 300);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    return (
      <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] font-sans">
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0a192f;
          }
          ::-webkit-scrollbar-thumb {
            background: #4a5568;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #64ffda;
          }
          html {
            scroll-behavior: smooth;
            scroll-snap-type: y proximity;
          }
          .snap-section {
            scroll-snap-align: start;
            scroll-snap-stop: normal;
          }
        `}</style>
  
  <header className="fixed w-full bg-transparent z-20">
        <nav className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-end items-center">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#ccd6f6] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm hover:text-[#64ffda] transition-colors duration-300 ${
                    activeSection === section.id ? 'text-[#64ffda]' : 'text-[#ccd6f6]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a192f]/95 backdrop-blur-sm transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col py-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block px-6 py-3 text-sm hover:text-[#64ffda] hover:bg-[#112240] transition-colors duration-300 ${
                    activeSection === section.id ? 'text-[#64ffda] bg-[#112240]' : 'text-[#ccd6f6]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <nav id="dot-nav" className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id} className="dot-container group">
              <a
                href={`#${section.id}`}
                className={`flex items-center justify-end ${
                  activeSection === section.id ? 'text-[#64ffda]' : 'text-[#8892b0]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                <span className="dot-label text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 mr-2">
                  {section.label}
                </span>
                <span className={`dot w-3 h-3 rounded-full border-2 ${
                  activeSection === section.id ? 'bg-[#64ffda] border-[#64ffda]' : 'border-[#8892b0]'
                }`}></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
  
        <main>
        <section id="home" className="snap-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 via-[#0a192f]/60 to-[#0a192f]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">Saket Singh</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a8b2d1]">Full Stack GenAI Developer</p>
          </div>
          
          {/* Learn More */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
            <a
              href="#about"
              title="About section"
              className="flex flex-col items-center text-[#64ffda] hover:text-[#4fd1b5] transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              <span className="text-sm mb-2">Learn More</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </section>
  
          <section id="about" className="snap-section min-h-screen py-24 flex items-center relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="absolute inset-0 bg-[#0a192f]/90" />
            </div>
            <div className="relative z-10 container mx-auto px-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">About Me</h2>
              <p className="text-[#a8b2d1] text-center max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg px-2">Get to know me better</p>
              <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-[#64ffda]/20 to-[#0a192f] p-1 mx-auto overflow-hidden">
                      <img src={hackerImage} alt="Developer" className="rounded-2xl w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-12 text-center md:text-left">
                  <p className="mb-4 text-[#b4bfd4] leading-relaxed text-sm sm:text-base md:text-lg">I'm a Full Stack GenAI Engineer with 2+ years of experience designing and deploying production-grade AI systems, including RAG pipelines, AI agents, and intelligent automation platforms. My expertise spans across various technologies including Python, Java, JavaScript, and multiple frontend and backend frameworks.</p>
                  <p className="text-[#b4bfd4] leading-relaxed text-sm sm:text-base md:text-lg">I'm passionate about leveraging LangChain, LangGraph, Azure OpenAI, and cloud-native Linux environments to deliver scalable enterprise AI solutions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What I Do Section */}
          <section id="whatido" className="snap-section min-h-screen py-24 flex items-center relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="absolute inset-0 bg-[#0a192f]/90" />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">What I Do</h2>
              <p className="text-[#a8b2d1] text-center max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg px-2">
                I specialize in building intelligent systems and full-stack applications that solve real-world problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                {/* AI/ML Card */}
                <div className="group relative overflow-hidden bg-[#112240] rounded-2xl border border-[#1d3a5f] hover:border-[#64ffda]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#64ffda] transition-colors duration-300">AI/ML Development</h3>
                    <p className="text-[#8892b0] leading-relaxed mb-4">Building intelligent chatbots, RAG pipelines, and AI agents using cutting-edge technologies.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">LangChain</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">LangGraph</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">Azure OpenAI</span>
                    </div>
                  </div>
                </div>
                
                {/* Full Stack Card */}
                <div className="group relative overflow-hidden bg-[#112240] rounded-2xl border border-[#1d3a5f] hover:border-[#64ffda]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">💻</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#64ffda] transition-colors duration-300">Full Stack Development</h3>
                    <p className="text-[#8892b0] leading-relaxed mb-4">Creating responsive, scalable web applications from frontend to backend.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">React</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">Next.js</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">FastAPI</span>
                    </div>
                  </div>
                </div>
                
                {/* Cloud Card */}
                <div className="group relative overflow-hidden bg-[#112240] rounded-2xl border border-[#1d3a5f] hover:border-[#64ffda]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">☁️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#64ffda] transition-colors duration-300">Cloud Architecture</h3>
                    <p className="text-[#8892b0] leading-relaxed mb-4">Designing and deploying scalable, secure cloud infrastructure solutions.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">AWS</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">Docker</span>
                      <span className="px-2 py-1 text-xs bg-[#0a192f] text-[#64ffda] rounded">Kubernetes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="snap-section min-h-screen py-24 bg-[#0a192f] flex items-center">
          <SkillsSection />
          </section>
          <section id="experience" className="snap-section">
          <EducationExperienceTimeline />
      </section>
      
      {/* Resume CTA */}
      <div className="bg-[#0a192f] py-12">
        <div className="container mx-auto px-6 text-center">
          <a
            href="https://drive.google.com/file/d/1HYTiP2ilGiulB7IB9Nu-1cxHvOdcgYB4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-[#64ffda] w-48 py-3 rounded-lg group hover:bg-[#64ffda]/90 transition-all duration-300 overflow-hidden"
          >
            <span className="text-[#0a192f] font-semibold text-sm uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300">
              View my full résumé
            </span>
            <Download size={24} className="absolute text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
          <section id="work" className="snap-section">
            <ProjectsSection />
          </section>

          <section id="certifications" className="snap-section">
            <CertificationsSection />
          </section>
  
          <section id="contact" className="snap-section min-h-screen py-24 flex items-center relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="absolute inset-0 bg-[#0a192f]/90" />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-[#64ffda] font-mono mb-2 md:mb-4 text-sm md:text-base">What's Next?</p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">Get In Touch</h2>
                <p className="text-[#8892b0] mb-8 md:mb-12 text-base md:text-lg leading-relaxed px-2">
                  I'm currently open to new opportunities and exciting projects. Whether you want to discuss a potential collaboration, have a question, or just want to say hello — my inbox is always open!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
                  <a 
                    href="mailto:sakets542@gmail.com" 
                    className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#64ffda]/10 transition-all duration-300 text-sm md:text-base"
                  >
                    <Mail size={18} className="group-hover:animate-bounce" />
                    Say Hello
                  </a>
                  <a 
                    href="tel:+918303451036" 
                    className="group inline-flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 text-sm md:text-base"
                  >
                    <span className="text-base md:text-lg">📞</span>
                    +91 8303451036
                  </a>
                </div>

                <div className="flex justify-center gap-4 md:gap-6">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1d3a5f] flex items-center justify-center text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1d3a5f] flex items-center justify-center text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:sakets542@gmail.com"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1d3a5f] flex items-center justify-center text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-lg hover:bg-[#4fd1b5] transition-colors duration-300"
          aria-label="Go to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
    );
  };
  
export default PortfolioWebsite;