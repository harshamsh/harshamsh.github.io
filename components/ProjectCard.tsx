
import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon, CodeBracketIcon } from './icons/HeroIcons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-[#3E322B] shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col">
      <img 
        src={project.imageUrl || `https://picsum.photos/seed/${project.id}/600/400`} 
        alt={project.title} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-[#B0784F] dark:text-[#E0B58A]">{project.title}</h3>
        <p className="text-[#8A766A] dark:text-[#A39890] text-sm mb-1">{project.year}</p>
        <p className="text-[#574133] dark:text-[#EFEAE6] mb-4 flex-grow text-sm">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#8A766A] dark:text-[#A39890] mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-[#F5EADD] dark:bg-[#4A3F37] text-[#B0784F] dark:text-[#D4A373] rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex space-x-3 pt-4 border-t border-[#DCD0C7] dark:border-[#4A3F37]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#C5895A] hover:bg-[#B0784F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5895A] dark:text-[#2C231E] dark:bg-[#D4A373] dark:hover:bg-[#C5895A] transition-colors"
            >
              <ExternalLinkIcon className="h-5 w-5 mr-2" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#DCD0C7] dark:border-[#5A4B40] text-sm font-medium rounded-md text-[#574133] dark:text-[#EFEAE6] bg-white dark:bg-[#4A3F37] hover:bg-[#F5EADD] dark:hover:bg-[#5A4B40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5895A] transition-colors"
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;