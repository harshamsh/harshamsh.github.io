import React, { useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';
// Project type is implicitly used by projectData
// import { Project } from '../types'; 
import { LightBulbIcon } from '../components/icons/HeroIcons';

const ProjectsPage: React.FC = () => {
  // All projects are displayed by default now.
  // If filtering by manual tags is desired later, selectedTag and filtering logic can be re-added.
  const filteredProjects = useMemo(() => projectData, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#B0784F] dark:text-[#E0B58A] mb-4 flex items-center justify-center">
          <LightBulbIcon className="h-10 w-10 mr-3 text-[#C5895A] dark:text-[#D4A373]" />
          My Projects
        </h1>
        <p className="text-lg text-[#574133] dark:text-[#EFEAE6] max-w-2xl mx-auto">
          A showcase of my work, demonstrating my skills in developing diverse applications and solving complex problems.
        </p>
      </div>

      {/* AI Smart Filters section has been removed */}

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
         <p className="text-center text-[#8A766A] dark:text-[#A39890] py-10">
          No projects to display at the moment. Check back soon!
        </p>
      )}
    </div>
  );
};

export default ProjectsPage;