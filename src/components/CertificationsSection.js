import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaMicrosoft, FaReact, FaBrain, FaRobot, FaExternalLinkAlt } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

const certificationsData = [
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    icon: FaMicrosoft,
    color: "#00a4ef",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/SaketSingh-2037/96A79DC65371C02E?sharingId=4C6EFED12926DD17",
  },
  {
    id: 2,
    title: "Next.js 15 and React - The Complete Guide",
    issuer: "Udemy",
    icon: FaReact,
    color: "#61dafb",
    url: "https://www.udemy.com/certificate/UC-53e99e2a-6ea8-45b0-a0d4-b8d4d367128d/",
  },
  {
    id: 3,
    title: "LangGraph - Develop LLM powered AI agents with LangGraph",
    issuer: "Udemy",
    icon: FaRobot,
    color: "#64ffda",
    url: "https://www.udemy.com/certificate/UC-8e82aefc-bf86-4784-a17b-de1838bb8ee2/",
  },
  {
    id: 4,
    title: "Complete Generative AI Course With Langchain and Huggingface",
    issuer: "Udemy",
    icon: FaBrain,
    color: "#ff6b6b",
    url: "https://www.udemy.com/certificate/UC-bc6d00d5-060b-4a83-9ef4-9b7f9da869d6/",
  },
];

const CertificationCard = ({ cert, index }) => (
  <motion.a
    href={cert.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group bg-[#112240]/50 rounded-xl p-6 border border-[#1d3a5f] hover:border-[#64ffda]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
  >
    <div className="flex items-start gap-4">
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${cert.color}20` }}
      >
        <cert.icon className="text-2xl" style={{ color: cert.color }} />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
            {cert.title}
          </h3>
          <FaExternalLinkAlt className="text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" size={14} />
        </div>
        <div className="flex items-center gap-2">
          {cert.issuer === "Udemy" ? (
            <SiUdemy className="text-[#a435f0]" />
          ) : (
            <FaAward className="text-[#64ffda]" />
          )}
          <span className="text-[#a8b2d1] text-sm">{cert.issuer}</span>
        </div>
      </div>
    </div>
  </motion.a>
);

const CertificationsSection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Certifications
          </h2>
          <p className="text-[#a8b2d1] max-w-2xl mx-auto text-lg">
            Professional certifications and courses that validate my expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
