import React from 'react';
import type { Profile } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { EmailIcon } from './icons/EmailIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';

interface ContactProps {
  contact: Profile['contact'];
}

const SectionTitle: React.FC<{ children: React.ReactNode, isVisible: boolean }> = ({ children, isVisible }) => (
    <h3
        className={`text-3xl font-bold text-white mb-8 border-b-2 border-teal-400 pb-2 inline-block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
        {children}
    </h3>
);

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="contact" className="text-center" ref={ref}>
      <SectionTitle isVisible={isVisible}>Get In Touch</SectionTitle>
      <p 
        className={`text-gray-300 mb-8 max-w-md mx-auto transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        I'm currently open to new opportunities. Feel free to reach out!
      </p>
      <div 
        className={`flex justify-center items-center space-x-8 transition-all duration-700 ease-out delay-[400ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(77,182,172,0.7)]" aria-label="Email">
          <EmailIcon className="w-9 h-9" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(77,182,172,0.7)]" aria-label="LinkedIn">
          <LinkedInIcon className="w-9 h-9" />
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(77,182,172,0.7)]" aria-label="GitHub">
          <GitHubIcon className="w-9 h-9" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
