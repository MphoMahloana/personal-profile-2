import React from 'react';
import { personalData } from './data';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import LiveBackground from './components/LiveBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-200 font-sans leading-relaxed">
      <LiveBackground />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader data={personalData.profile} />
          
          <div className="space-y-20 mt-20">
            <Skills skills={personalData.skills} />
            <Projects projects={personalData.projects} />
            <Achievements achievements={personalData.achievements} />
            <Contact contact={personalData.profile.contact} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;