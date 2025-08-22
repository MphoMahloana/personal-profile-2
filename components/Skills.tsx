import React from 'react';
import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { CogIcon } from './icons/CogIcon';
import { StarIcon } from './icons/StarIcon';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';

interface SkillsProps {
  skills: Skill[];
}

const SectionTitle: React.FC<{ children: React.ReactNode, isVisible: boolean }> = ({ children, isVisible }) => (
    <h3 
        className={`text-3xl font-bold text-white mb-8 border-b-2 border-teal-400 pb-2 inline-block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
        {children}
    </h3>
);

const getSkillIcon = (skillName: string): React.FC<React.SVGProps<SVGSVGElement>> => {
  const lowerCaseName = skillName.toLowerCase();
  if (lowerCaseName.includes('ci/cd')) return CogIcon;
  if (lowerCaseName.includes('leadership')) return StarIcon;
  if (lowerCaseName.includes('communication')) return ChatBubbleIcon;
  if (lowerCaseName.includes('problem solving')) return LightBulbIcon;
  if (lowerCaseName.includes('teamwork')) return UserGroupIcon;
  // Default for technical skills
  return CodeBracketIcon;
};

const SkillItem: React.FC<{ skill: Skill; isVisible: boolean; delay: number }> = ({ skill, isVisible, delay }) => {
  const Icon = getSkillIcon(skill.name);
  return (
    <div 
      className={`flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 transform hover:-translate-y-1 hover:bg-gray-700/60 hover:border-teal-500 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-6 h-6 text-teal-400 flex-shrink-0" />
      <span className="text-base font-medium text-gray-200">{skill.name}</span>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });
  const technicalSkills = skills.filter(s => s.category === 'Technical');
  const softSkills = skills.filter(s => s.category === 'Soft');

  return (
    <section id="skills" ref={ref}>
      <SectionTitle isVisible={isVisible}>Skills</SectionTitle>
      <div>
        <h4 
            className={`text-xl font-semibold text-white mb-6 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            Technical Skills
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technicalSkills.map((skill, index) => <SkillItem key={skill.name} skill={skill} isVisible={isVisible} delay={300 + index * 75} />)}
        </div>
      </div>
      <div className="mt-12">
        <h4 
            className={`text-xl font-semibold text-white mb-6 transition-all duration-700 ease-out delay-[500ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            Soft Skills
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => <SkillItem key={skill.name} skill={skill} isVisible={isVisible} delay={600 + index * 75} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
