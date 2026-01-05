import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import downloadImage from '../media/download.jpeg';

const projectsData = [
  {
    id: 1,
    title: "Enterprise RAG AI Assistant (AskDA)",
    description: "Built a scalable RAG architecture using Flask, LangChain, pgvector, and Azure OpenAI for enterprise-scale information retrieval. Developed an embeddable JavaScript widget using Webpack for seamless website integration. Implemented automated document ingestion from SharePoint APIs, converting PDFs, DOCX, XLSX into indexed knowledge bases.",
    technologies: ["Python", "Flask", "LangChain", "Azure OpenAI", "PostgreSQL", "pgvector", "Webpack", "SharePoint API"],
    image: downloadImage,
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "IT-Operations Automation (IT-OA)",
    description: "Architected an AI-driven ticket resolution system using LangGraph agents and historical ticket embeddings. Integrates with JIRA and Gynergy to generate automated resolutions. Implemented human-in-the-loop workflows to balance automation with expert oversight for reliable ticket handling.",
    technologies: ["Python", "LangGraph", "Azure OpenAI", "FastAPI", "Redis", "JIRA", "Vector Embeddings"],
    image: downloadImage,
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Cloud Object Storage Platform",
    description: "Engineered a cloud object storage platform supporting secure uploads, previews, and shareable links. Built with Next.js frontend and FastAPI backend, utilizing PostgreSQL for metadata, Redis for caching, and AWS S3 for object storage. Integrated enterprise SSO (Orange Connect) and JWT-based authorization for secure, role-based access control.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "AWS S3", "JWT", "OAuth", "Docker"],
    image: downloadImage,
    github: "#",
    live: "#",
  },
];

// Placeholder SVG component for project images
const ProjectPlaceholder = ({ isReversed }) => (
  <div className="w-full h-full min-h-[300px] bg-[#1a1a2e] rounded-lg flex items-center justify-center overflow-hidden">
    <svg 
      viewBox="0 0 200 150" 
      className="w-full h-full max-w-[400px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background bars */}
      <rect x="30" y="30" width="80" height="20" rx="10" fill="#64ffda" />
      <rect x="30" y="60" width="100" height="20" rx="10" fill="#c792ea" />
      <rect x="30" y="90" width="90" height="20" rx="10" fill="#ff79c6" />
      
      {/* X mark decoration */}
      <g transform={`translate(${isReversed ? 130 : 120}, 50)`}>
        <line x1="0" y1="0" x2="40" y2="60" stroke="#64ffda" strokeWidth="12" strokeLinecap="round" />
        <line x1="40" y1="0" x2="0" y2="60" stroke="#64ffda" strokeWidth="12" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

const TechTag = ({ tech }) => (
  <span className="px-4 py-1.5 text-sm border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300">
    {tech}
  </span>
);

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-24"
    >
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
        {/* Project Image */}
        <motion.div 
          className="w-full lg:w-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#64ffda]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Project Content */}
        <div className={`w-full lg:w-1/2 ${isReversed ? 'lg:text-left' : 'lg:text-left'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-[#64ffda] mb-4">
            {project.title}
          </h3>
          
          {/* Description Card */}
          <div className="bg-[#112240] border border-[#1d3a5f] rounded-lg p-6 mb-6 shadow-xl">
            <p className="text-[#b4bfd4] leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <TechTag key={techIndex} tech={tech} />
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && project.github !== "#" && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/95" />
      </div>

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
            Featured Projects
          </h2>
          <p className="text-[#a8b2d1] max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my expertise in full-stack development, cloud 
            architecture, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;