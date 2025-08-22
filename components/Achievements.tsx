import React from 'react';
import type { Achievement } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


interface AchievementsProps {
  achievements: Achievement[];
}

const SectionTitle: React.FC<{ children: React.ReactNode, isVisible: boolean }> = ({ children, isVisible }) => (
    <h3
        className={`text-3xl font-bold text-white mb-8 border-b-2 border-teal-400 pb-2 inline-block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
        {children}
    </h3>
);

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" ref={ref}>
      <SectionTitle isVisible={isVisible}>Achievements & Certifications</SectionTitle>
      <div className="space-y-4">
        {achievements.map((ach, index) => (
          <div 
            key={index} 
            className={`bg-gray-800/50 p-4 rounded-lg border-l-4 border-teal-400 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <p className="font-semibold text-white">{ach.title}</p>
            <p className="text-sm text-gray-400">{ach.issuer} - {ach.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
