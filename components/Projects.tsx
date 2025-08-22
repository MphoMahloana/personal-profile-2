import React from 'react';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { LinkIcon } from './icons/LinkIcon';

interface ProjectsProps {
  projects: Project[];
}

const SectionTitle: React.FC<{ children: React.ReactNode, isVisible: boolean }> = ({ children, isVisible }) => (
    <h3
        className={`text-3xl font-bold text-white mb-8 border-b-2 border-teal-400 pb-2 inline-block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
        {children}
    </h3>
);


const ProjectCard: React.FC<{ project: Project; isVisible: boolean; delay: number }> = ({ project, isVisible, delay }) => (
  <div 
    className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-teal-400/20 transform hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-gray-700 hover:border-teal-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <h4 className="text-xl font-bold text-white">{project.title}</h4>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">
            <LinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
      <p className="text-gray-300 mt-2 mb-4 text-sm">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.techStack.map(tech => (
        <span key={tech} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
      ))}
    </div>
  </div>
);


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref}>
      <SectionTitle isVisible={isVisible}>Projects & Portfolio</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} isVisible={isVisible} delay={200 + index * 150} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
