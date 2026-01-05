import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    startDate: "Mar, 2024",
    endDate: "Present",
    title: "Orange Business Services",
    location: "Gurugram, India",
    role: "Full Stack GenAI Developer",
    description: "Developed AskDA, an enterprise-scale RAG chatbot using LangChain, Flask, pgvector, and Azure OpenAI. Built IT-OA, an intelligent ticket automation system integrating JIRA and Gynergy with LangGraph-based AI agents. Engineered cloud object storage platform using Next.js, FastAPI, PostgreSQL, Redis, and AWS S3.",
    type: "work",
  },
  {
    id: 2,
    startDate: "Feb, 2023",
    endDate: "Mar, 2024",
    title: "PureSoftware (A Happiest Minds Group)",
    location: "Noida, India",
    role: "Associate Software Engineer",
    description: "Developed a real-time sales analytics dashboard using React, Spring Boot, and Material-UI. Designed a PDF Question-Answering system using LangChain, Azure OpenAI, and Streamlit. Collaborated in Agile teams to deliver AI-powered features on schedule.",
    type: "work",
  },
  {
    id: 3,
    startDate: "2019",
    endDate: "2023",
    title: "Manipal University Jaipur",
    location: "Jaipur, India",
    role: "Bachelor of Technology in Computer Science and Engineering",
    description: "CGPA: 8.67/10.0",
    type: "education",
  },
];

const TimelineIcon = ({ type, isActive }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.2 }}
    className={`
      w-14 h-14 rounded-full flex items-center justify-center z-10
      ${isActive 
        ? 'bg-[#64ffda] shadow-lg shadow-[#64ffda]/50' 
        : 'bg-[#112240] border-2 border-[#64ffda]'
      }
    `}
  >
    {type === 'education' ? (
      <GraduationCap size={24} className={isActive ? 'text-[#0a192f]' : 'text-[#64ffda]'} />
    ) : (
      <Briefcase size={24} className={isActive ? 'text-[#0a192f]' : 'text-[#64ffda]'} />
    )}
  </motion.div>
);

const TimelineCard = ({ item, position, index }) => {
  const isLeft = position === 'left';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        w-full md:w-[calc(50%-40px)] 
        ${isLeft ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}
      `}
    >
      <div className="
        backdrop-blur-md bg-[#112240]/80 border border-[#1d3a5f]
        rounded-xl p-6 shadow-xl
        hover:bg-[#112240] transition-all duration-300
        hover:border-[#64ffda]/30
      ">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {item.title}
        </h3>
        <p className="text-[#64ffda] text-sm mb-3">
          {item.startDate} - {item.endDate}
        </p>
        <h4 className="text-[#64ffda] font-semibold mb-3">
          {item.role}
        </h4>
        <p className="text-[#b4bfd4] text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const EducationExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a192f]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-[#a8b2d1] max-w-2xl mx-auto text-lg">
            My professional journey has been shaped by valuable experiences in 
            software engineering and a strong educational foundation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#64ffda]/30 via-[#64ffda] to-[#64ffda]/30 hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-[#64ffda]/30 via-[#64ffda] to-[#64ffda]/30 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={item.id}
                  id={`timeline-item-${index}`}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    {isLeft ? (
                      <>
                        <TimelineCard item={item} position="left" index={index} />
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                          <TimelineIcon type={item.type} isActive={activeIndex === index} />
                        </div>
                        <div className="w-[calc(50%-40px)]" />
                      </>
                    ) : (
                      <>
                        <div className="w-[calc(50%-40px)]" />
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                          <TimelineIcon type={item.type} isActive={activeIndex === index} />
                        </div>
                        <TimelineCard item={item} position="right" index={index} />
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex md:hidden w-full items-start">
                    <div className="mr-4 mt-2">
                      <TimelineIcon type={item.type} isActive={activeIndex === index} />
                    </div>
                    <div className="flex-1">
                      <TimelineCard item={item} position="right" index={index} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperienceTimeline;