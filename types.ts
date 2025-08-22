export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
  category: 'Technical' | 'Soft';
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  year: number;
}

export interface PersonalData {
  profile: Profile;
  cv: {
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      responsibilities: string[];
    }>;
    education: Array<{
      degree: string;
      institution: string;
      period: string;
    }>;
  };
  skills: Skill[];
  projects: Project[];
  achievements: Achievement[];
}

export interface ChatMessage {
  sender: 'user' | 'ai' | 'system';
  text: string;
}
