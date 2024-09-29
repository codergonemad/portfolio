import React from 'react';
import { Briefcase, GraduationCap, Search } from 'lucide-react';

const TimelineItem = ({ startDate, endDate, title, subtitle, description, type }) => (
  <div className="mb-12">
    <div className="flex items-center mb-2">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#112240] mr-4`}>
        {type === 'education' ? (
          <GraduationCap size={24} className="text-[#64ffda]" />
        ) : type === 'work' ? (
          <Briefcase size={24} className="text-[#64ffda]" />
        ) : (
          <Search size={24} className="text-[#64ffda]" />
        )}
      </div>
      <span className="text-[#64ffda] text-sm">{startDate} - {endDate}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <h4 className="text-lg text-[#8892b0] mb-2">{subtitle}</h4>
    <p className="text-[#8892b0]">{description}</p>
  </div>
);

const EducationExperienceTimeline = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Experience & Education</h2>
      <p className="text-[#8892b0] mb-12">
        My professional journey has given me the opportunity to work on diverse projects and technologies. Here's a timeline of my experience and education:
      </p>
      <div className="max-w-3xl mx-auto">
        <TimelineItem
          startDate="Feb 2023"
          endDate="Present"
          title="Associate Software Engineer"
          subtitle="PureSoftware (A Happiest Minds Company), Noida, India"
          description="Developed AskDA chatbot, CHAOS script execution system, and dynamic sales dashboard. Utilized various technologies including Python, Java, JavaScript, React, and more."
          type="work"
        />
        <TimelineItem
          startDate="2019"
          endDate="2023"
          title="Bachelor of Technology"
          subtitle="Manipal University Jaipur, India"
          description="Specialization: Computer Science and Engineering. CGPA: 8.67/10.0"
          type="education"
        />
        <TimelineItem
          startDate="2018"
          endDate="2018"
          title="Board of Intermediate Education"
          subtitle="Sri Chaitanya Junior College, Telangana, India"
          description="Percentage: 94.2%"
          type="education"
        />
        <TimelineItem
          startDate="2016"
          endDate="2016"
          title="Central Board of Secondary Education"
          subtitle="Krishna Public School, Chattisgarh, India"
          description="CGPA: 9/10"
          type="education"
        />
      </div>
    </div>
  );
};

export default EducationExperienceTimeline;