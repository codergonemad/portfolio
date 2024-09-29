import React from 'react';
import { FaCode, FaBrain, FaChartBar, FaLayerGroup, FaServer, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = {
    languages: ['Python', 'Java', 'SQL', 'JavaScript'],
    machineLearning: ['AzureOpenAI', 'Huggingface', 'OpenAI', 'CNN'],
    // dataScienceLibraries: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    frontendFrameworks: ['Webpack', 'React', 'Streamlit'],
    backendFrameworks: ['Flask', 'SpringBoot', 'Django'],
    cloudDatabases: ['PgVector', 'ChromaDB', 'SQLite', 'MySQL', 'PostgreSQL']
  };

  const SkillIcon = ({ name }) => {
    const iconStyle = "w-24 h-24 flex flex-col items-center justify-center text-[#64ffda] font-bold transition-all duration-300 group-hover:scale-110";
    return (
      <motion.div 
        className={iconStyle}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-[#112240] to-[#1D3461] rounded-2xl flex items-center justify-center shadow-lg mb-2">
          <span className="text-2xl">{name.substring(0, 2).toUpperCase()}</span>
        </div>
        <span className="text-sm text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">{name}</span>
      </motion.div>
    );
  };

  const SkillList = ({ title, items, icon: Icon }) => (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="flex items-center text-xl font-bold mb-4 text-[#ccd6f6]">
        <Icon className="mr-2 text-[#64ffda]" />
        {title}
      </h3>
      <ul className="list-none text-[#8892b0] grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-center group"
            whileHover={{ x: 5 }}
          >
            <span className="mr-2 text-[#64ffda]">✓</span>
            <span className="group-hover:text-[#64ffda] transition-colors duration-300">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-6 py-12 bg-[#0a192f]">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-center text-[#64ffda]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="flex items-center text-2xl font-bold mb-6 text-[#ccd6f6]">
              <FaCode className="mr-3 text-[#64ffda]" /> Programming Languages
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.languages.map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <SkillIcon name={skill} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          <SkillList
            title="Frontend Frameworks"
            items={skills.frontendFrameworks}
            icon={FaLayerGroup}
          />
          <SkillList
            title="Backend Frameworks"
            items={skills.backendFrameworks}
            icon={FaServer}
          />
          <SkillList
            title="Machine Learning"
            items={skills.machineLearning}
            icon={FaBrain}
          />
          {/* <SkillList
            title="Data Science Libraries"
            items={skills.dataScienceLibraries}
            icon={FaChartBar}
          /> */}
          <SkillList
            title="Cloud & Databases"
            items={skills.cloudDatabases}
            icon={FaCloud}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;