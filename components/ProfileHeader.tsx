import React, { useState, useEffect } from 'react';
import type { Profile } from '../types';
import { DownloadIcon } from './icons/DownloadIcon';

interface ProfileHeaderProps {
  data: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header id="home" className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
      <div 
        className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      >
        <img 
          src={data.avatarUrl} 
          alt={data.name} 
          className="w-32 h-32 rounded-full border-4 border-teal-400 object-cover shadow-lg"
        />
      </div>
      <div className="text-center sm:text-left">
        <h1 
          className={`text-4xl font-bold text-white transition-all duration-700 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {data.name}
        </h1>
        <h2 
          className={`text-xl font-light text-teal-300 mt-1 transition-all duration-700 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {data.title}
        </h2>
        <p 
          className={`mt-4 text-gray-300 max-w-2xl transition-all duration-700 ease-out delay-[450ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {data.bio}
        </p>
        <div 
          className={`mt-6 flex justify-center sm:justify-start transition-all duration-700 ease-out delay-[600ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <a 
                href="#" 
                onClick={() => alert('CV download link goes here!')}
                className="inline-flex items-center gap-2 bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
                <DownloadIcon className="w-5 h-5" />
                Download CV
            </a>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
