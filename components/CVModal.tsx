import React from 'react';
import type { PersonalData } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvContent: PersonalData['cv'];
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, cvContent }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col border border-gray-600">
        <header className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-800">
          <h2 className="text-2xl font-bold text-white">Curriculum Vitae</h2>
          <div className="flex items-center space-x-4">
             <button onClick={() => alert("This is a simulated download.")} className="text-gray-400 hover:text-teal-300 transition-colors p-2 rounded-full hover:bg-gray-700" aria-label="Download CV">
                <DownloadIcon className="w-6 h-6" />
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700" aria-label="Close CV">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
        </header>

        <div className="p-6 overflow-y-auto text-gray-300">
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-teal-300 border-b border-gray-600 pb-2 mb-3">Summary</h3>
            <p className="text-base">{cvContent.summary}</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-teal-300 border-b border-gray-600 pb-2 mb-3">Experience</h3>
            <div className="space-y-4">
              {cvContent.experience.map((job, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-white">{job.title}</h4>
                  <p className="font-medium text-gray-400">{job.company} | {job.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                    {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-teal-300 border-b border-gray-600 pb-2 mb-3">Education</h3>
            {cvContent.education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="font-medium text-gray-400">{edu.institution} | {edu.period}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
