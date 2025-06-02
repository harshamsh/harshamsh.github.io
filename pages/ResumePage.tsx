
import React from 'react';
import { resumeData } from '../data/resumeData';
import { BriefcaseIcon, AcademicCapIcon, WrenchScrewdriverIcon, EnvelopeIcon, LinkIcon } from '../components/icons/HeroIcons';
import { GitHubIcon, LinkedInIcon } from '../components/icons/SocialIcons';

const ResumePage: React.FC = () => {
  const { name, title, summary, contact, experience, education, skills } = resumeData;

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-[#3E322B] shadow-2xl rounded-lg p-6 md:p-10">
      <header className="text-center mb-10 border-b pb-6 border-[#DCD0C7] dark:border-[#4A3F37]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B0784F] dark:text-[#E0B58A]">{name}</h1>
        <p className="text-xl text-[#574133] dark:text-[#EFEAE6] mt-2">{title}</p>
        <div className="mt-4 flex justify-center flex-wrap gap-x-4 gap-y-2 text-[#8A766A] dark:text-[#A39890]">
          <a href={`mailto:${contact.email}`} className="hover:text-[#C5895A] dark:hover:text-[#D4A373] flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-1" /> {contact.email}
          </a>
          <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] flex items-center">
            <LinkedInIcon className="h-5 w-5 mr-1" /> LinkedIn
          </a>
          <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] flex items-center">
            <GitHubIcon className="h-5 w-5 mr-1" /> GitHub
          </a>
           <a href={`https://${contact.portfolio}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] flex items-center">
            <LinkIcon className="h-5 w-5 mr-1" /> Portfolio
          </a>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-4 flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 mr-2" /> Summary
        </h2>
        <p className="text-[#574133] dark:text-[#EFEAE6] leading-relaxed">{summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-6 flex items-center">
          <BriefcaseIcon className="h-6 w-6 mr-2" /> Experience
        </h2>
        {experience.map((exp) => (
          <div key={exp.id} className="mb-6 pl-4 border-l-2 border-[#C5895A] dark:border-[#D4A373] relative">
             <div className="absolute w-3 h-3 bg-[#C5895A] dark:bg-[#D4A373] rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-semibold text-[#4A3B31] dark:text-[#F0EBE3]">{exp.title}</h3>
            <p className="text-md text-[#B0784F] dark:text-[#E0B58A] font-medium">{exp.company}</p>
            <p className="text-sm text-[#8A766A] dark:text-[#A39890] mb-2">{exp.dateRange}</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-[#574133] dark:text-[#EFEAE6] text-sm">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-3">
                <span className="text-xs font-semibold text-[#8A766A] dark:text-[#A39890]">Technologies: </span>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-[#F5EADD] dark:bg-[#4A3F37] text-[#B0784F] dark:text-[#D4A373] px-2 py-0.5 rounded-full mr-1 mb-1 inline-block">{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-6 flex items-center">
          <AcademicCapIcon className="h-6 w-6 mr-2" /> Education
        </h2>
        {education.map((edu) => (
          <div key={edu.id} className="mb-6 pl-4 border-l-2 border-[#C5895A] dark:border-[#D4A373] relative">
            <div className="absolute w-3 h-3 bg-[#C5895A] dark:bg-[#D4A373] rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-semibold text-[#4A3B31] dark:text-[#F0EBE3]">{edu.degree}</h3>
            <p className="text-md text-[#B0784F] dark:text-[#E0B58A] font-medium">{edu.institution}</p>
            <p className="text-sm text-[#8A766A] dark:text-[#A39890] mb-1">{edu.dateRange}</p>
            {edu.details && <p className="text-sm text-[#574133] dark:text-[#EFEAE6]">{edu.details}</p>}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-4 flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 mr-2" /> Skills
        </h2>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, skillList]) => (
            skillList && skillList.length > 0 && (
              <div key={category}>
                <h4 className="text-md font-semibold text-[#574133] dark:text-[#EFEAE6] capitalize mb-1">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#F5EADD] dark:bg-[#4A3F37] text-[#B0784F] dark:text-[#D4A373] rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
      
      {/* Optional: Add a button to download PDF resume */}
      {/* 
      <div className="mt-10 text-center">
        <a 
          href="/path-to-your-resume.pdf" 
          download 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#C5895A] hover:bg-[#B0784F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5895A] dark:text-[#2C231E] dark:bg-[#D4A373] dark:hover:bg-[#C5895A]"
        >
          Download PDF Resume
        </a>
      </div>
      */}
    </div>
  );
};

export default ResumePage;