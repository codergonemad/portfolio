import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, ArrowUp, ChevronDown, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SkillsSection from './SkillsSection';
import EducationExperienceTimeline from './EducationExperienceTimeline';

// In your main component's render method


const PortfolioWebsite = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Portfolio' },
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
          }
        `}</style>
  
  <header className="fixed w-full bg-[#0a192f] bg-opacity-90 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#64ffda]">SS</a>
          <ul className="flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`hover:text-[#64ffda] transition-colors duration-300 ${
                    activeSection === section.id ? 'text-[#64ffda]' : ''
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
      </header>
      <nav id="dot-nav" className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
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
        <section id="home" className="h-screen flex flex-col items-center justify-center relative">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Saket Singh</h1>
            <p className="text-xl mb-8">Associate Software Engineer</p>
            <a href="#contact" className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300">Get In Touch</a>
          </div>
          <div className="scroll-down-wrapper absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              title="About section"
              className="scroll-down flex flex-col items-center text-[#64ffda] hover:text-[#4fd1b5] transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              <span className="scroll-down-text mb-2">Learn More</span>
              <ChevronDown size={24} className="animate-bounce" />
            </a>
          </div>
        </section>
  
          <section id="about" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">About Me</h2>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <img src="/api/placeholder/300/300" alt="Saket Singh" className="rounded-full w-64 h-64 object-cover mx-auto" />
                </div>
                <div className="md:w-1/2">
                  <p className="mb-4">I'm an Associate Software Engineer with experience in developing versatile chatbots, script execution systems, and dynamic sales dashboards. My expertise spans across various technologies including Python, Java, JavaScript, and multiple frontend and backend frameworks.</p>
                  <p>I'm passionate about leveraging machine learning and NLP capabilities to enhance project intelligence and create efficient, scalable solutions.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" className="py-20">
          <SkillsSection />
          </section>
          <section id="experience" className="py-20 bg-[#112240]">
          <EducationExperienceTimeline />
      </section>
      <a
      href=''
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full min-h-[100px] bg-[#00909c] text-[#f2f2f2] font-bold uppercase text-center relative overflow-hidden transition-colors duration-500 hover:bg-[#007a84] group"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
          View my full résumé
        </span>
        <Download 
          size={24} 
          className="absolute transform scale-150 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
        />
      </div>
    </a>
          <section id="work" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['AskDA: Chatbot', 'CHAOS: Script Execution System', 'Sales Dashboard'].map((project) => (
                  <div key={project} className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#64ffda] transition-colors duration-300">{project}</h3>
                    <p className="text-[#8892b0] mb-4">A brief description of the project and its key features.</p>
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="text-[#64ffda] hover:underline">GitHub</a>
                      <a href="#" className="text-[#64ffda] hover:underline">Live Demo</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section id="contact" className="py-20 bg-[#112240]">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Get In Touch</h2>
              <p className="mb-8 max-w-md mx-auto">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <a href="mailto:sakets542@gmail.com" className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300">Say Hello</a>
            </div>
          </section>
        </main>
  
        <footer className="bg-[#0a192f] py-6 border-t border-[#1d2d50]">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"><FaGithub size={24} /></a>
            <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"><Linkedin size={24} /></a>
            <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"><Mail size={24} /></a>
          </div>
        </div>
      </footer>

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