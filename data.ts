import { PersonalData } from './types';

export const personalData: PersonalData = {
  profile: {
    name: "Mpho Mahloana",
    title: "Data Analyst & Software Developer",
    bio: "I am a driven Data Analyst and Software Developer with a passion for uncovering insights from data and building efficient, user-friendly applications. I specialize in Python for data analysis and frontend technologies like React, allowing me to bridge the gap between raw data and impactful data-driven products. I thrive in collaborative environments and enjoy solving complex problems.",
    avatarUrl: "public/assets/WhatsApp Image 2025-08-17 at 00.58.07.jpeg",
    contact: {
      email: "mabby.mpho01@gmail.com",
      linkedin: "https://www.linkedin.com/in/mpho-mahloana/",
      github: "https://github.com/MphoMahloana"
    }
  },
  cv: {
    summary: "A results-driven Data Analyst and Software Developer with experience in the full software development lifecycle. Proven ability to translate data into actionable insights and build high-quality applications. Expert in modern JavaScript frameworks, the Python data stack, and cloud technologies.",
    downloadUrl: "public/assets/Updated_Mpho_Mahloana_CV (3) - Copy.docx",
    experience: [
      {
        title: "Data Analyst & Developer",
        company: "Innovatech Solutions",
        period: "2018 - Present",
        responsibilities: [
          "Developed and maintained data visualization dashboards for the flagship SaaS product using React, TypeScript, and D3.js.",
          "Engineered data processing pipelines in Python and built RESTful APIs to serve cleaned data to frontend applications.",
          "Collaborated with cross-functional teams to define data requirements, perform analysis, and deliver actionable insights.",
          "Translated business requirements into technical specifications for both data analysis tasks and software features."
        ]
      },
      {
        title: "Software Engineer",
        company: "Digital Creations Inc.",
        period: "2014 - 2018",
        responsibilities: [
          "Developed client-side features for a high-traffic e-commerce platform, including a product recommendation engine.",
          "Optimized application performance by implementing efficient data fetching strategies and lazy loading, reducing load times by 25%.",
          "Wrote unit and integration tests to ensure code quality and stability."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Techville",
        period: "2010 - 2014"
      }
    ]
  },
  skills: [
    { name: "Python", level: 90, category: "Technical" },
    { name: "SQL", level: 85, category: "Technical" },
    { name: "Software & Hardware Engineering", level: 80, category: "Technical" },
    { name: "React", level: 95, category: "Technical" },
    { name: "Javascript", level: 95, category: "Technical" },
    { name: "Typescript", level: 85, category: "Technical" },
    { name: "HTML & CSS", level: 90, category: "Technical" },
    { name: "Leadership", level: 90, category: "Soft" },
    { name: "Communication", level: 95, category: "Soft" },
    { name: "Problem Solving", level: 95, category: "Soft" },
    { name: "Teamwork", level: 98, category: "Soft" }
  ],
  projects: [
    {
      title: "AI-Resume-Builder",
      description: "The AI Resume Builder is an intelligent tool that helps users create professional resumes quickly and efficiently by extracting key information such as personal details, education, work experience, skills, and achievements. It formats this information into a polished, industry-ready layout, optimizes it for Applicant Tracking Systems, and provides recommendations to enhance readability and impact. The tool is interactive and user-friendly, allowing users to review, edit, and customize their resumes in real time, ultimately saving time and ensuring a professional output ready for download.",
      techStack: ["HTML", "TypeScript", "Node.js", "Gemini", "Tailwind CSS"],
      link: "https://ai-resume-builder-2-0.vercel.app/"
    },
    {
      title: "Sentiment-Analysis-Dashboard",
      description: "The Sentiment Analysis Dashboard is an interactive tool designed to analyze and visualize the sentiment of text data from various sources such as social media, reviews, or surveys. It processes text to classify it into positive, negative, or neutral sentiments, providing insights into public opinion, customer feedback, or brand perception. The dashboard presents results through clear visualizations like charts and graphs, allowing users to track trends, compare data, and make informed decisions. It is user-friendly, real-time, and helps organizations or individuals quickly understand and act on sentiment data.",
      techStack: ["React", "HTML", "Tailwind CSS"],
      link: "https://sentiment-analysis-dashboard-rho.vercel.app/"
    },
  ],
  achievements: [
    { title: "Information Technology: System Development & System Support Engineer", issuer: "Think360 iStudent Academy", year: 2025 },
    { title: "Microsoft: Azure Fundamentals", issuer: "Microsoft", year: 2024 },
    { title: "Microsoft: Azure Developer Associate", issuer: "Microsoft", year: 2024 }
  ]
};