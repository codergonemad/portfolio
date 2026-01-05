import React from 'react';
import { FaCode, FaBrain, FaLayerGroup, FaServer, FaCloud, FaDocker, FaLock, FaLinux } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: ['Python', 'Java', 'SQL', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
      title: "Frontend Technologies",
      icon: FaLayerGroup,
      skills: ['React', 'Next.js', 'Vite', 'Webpack', 'HTML5', 'CSS3']
    },
    {
      title: "Backend Technologies",
      icon: FaServer,
      skills: ['FastAPI', 'Flask', 'Django', 'Spring Boot']
    },
    {
      title: "AI/ML & GenAI",
      icon: FaBrain,
      skills: ['LangChain', 'LangGraph', 'Vector Embeddings', 'Azure OpenAI', 'Autogen']
    },
    {
      title: "Database Systems",
      icon: FaCloud,
      skills: ['PostgreSQL', 'ElasticSearch', 'pgvector', 'ChromaDB', 'Redis']
    },
    {
      title: "Cloud & DevOps",
      icon: FaDocker,
      skills: ['Azure Cloud', 'AWS S3', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Git']
    },
    {
      title: "Authentication & Security",
      icon: FaLock,
      skills: ['Orange Connect SSO', 'JWT Tokens', 'OAuth']
    },
    {
      title: "Operating Systems",
      icon: FaLinux,
      skills: ['Linux (Debian/Ubuntu)', 'Arch Linux', 'Windows']
    }
  ];

  const SkillCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-[#112240]/50 rounded-xl p-5 border border-[#1d3a5f] hover:border-[#64ffda]/30 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#64ffda]/20 transition-colors duration-300">
          <category.icon className="text-[#64ffda] text-lg" />
        </div>
        <h3 className="text-white font-semibold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs bg-[#0a192f] text-[#8892b0] rounded-full border border-[#1d3a5f] hover:border-[#64ffda]/50 hover:text-[#64ffda] transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Technical Skills
        </h2>
        <p className="text-[#a8b2d1] max-w-2xl mx-auto text-base md:text-lg px-2">
          Technologies and tools I work with
        </p>
        </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SkillsSection;