import { PersonalInfo, Skill, WorkExperience, Project, Education, Certification } from '@/types';
import DigitalMarketingCertificate from '@/assets/certs/DigitalMarketing.png';
import FrontEndWebDevCertificate from '@/assets/certs/Front-End-Web-Development.jpg';
import IntegratedDigitalMediaCertificate from '@/assets/certs/DigitalMedia.jpg';
import FrontLineLeadersCertificate from '@/assets/certs/Front-Line-Leaders.jpg';
import MarketingFundamentalsCertificate from '@/assets/certs/Marketing-Fundamentals.png';

export const personalInfo: PersonalInfo = {
  name: 'Youssef Ghaly',
  title: 'Full Stack Web Developer',
  tagline: 'Building modern web experiences with passion and precision',
  bio: [
    'I am a passionate web developer with a strong foundation in both frontend and backend technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.',
    'With experience in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through clean code and intuitive user interfaces. I am always eager to learn new technologies and take on challenging projects.',
    'When I\'m not coding, you can find me contributing to open-source projects, reading tech blogs, or exploring the latest web development trends.'
  ],
  email: 'youssefadly47@yahoo.com',
  location: 'Calgary, Canada',
  socialLinks: {
    github: 'https://github.com/ysghaly',
    linkedin: 'https://www.linkedin.com/in/youssef-ghaly-0ab15b111',
    // twitter: 'https://twitter.com/yourusername',
    portfolio: 'https://yourportfolio.com'
  },
  resumeUrl: '/resume.pdf'
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 90 },
  { name: 'Next.js', category: 'frontend', proficiency: 85 },
  { name: 'TypeScript', category: 'frontend', proficiency: 88 },
  { name: 'JavaScript', category: 'frontend', proficiency: 92 },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 95 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90 },
  { name: 'Vue.js', category: 'frontend', proficiency: 75 },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 85 },
  { name: 'Python', category: 'backend', proficiency: 70 },
  { name: 'Python FastAPI', category: 'backend', proficiency: 70 },
  { name: 'PostgreSQL', category: 'backend', proficiency: 75 },
  { name: 'MongoDB', category: 'backend', proficiency: 80 },
  { name: 'REST APIs', category: 'backend', proficiency: 85 },
  { name: 'GraphQL', category: 'backend', proficiency: 60 },
  
  // Tools
  { name: 'VS Code', category: 'tools', proficiency: 90 },
  { name: 'Cursor', category: 'tools', proficiency: 90 },
  { name: 'Git', category: 'tools', proficiency: 90 },
  { name: 'CI/CD', category: 'tools', proficiency: 80 },
  { name: 'GitHub Actions', category: 'tools', proficiency: 80 },
  { name: 'Docker', category: 'tools', proficiency: 70 },

  // Other
  { name: 'Vercel Deployment', category: 'other', proficiency: 80 },
  { name: 'Render Deployment', category: 'other', proficiency: 80 },
  { name: 'Azure DevOps', category: 'other', proficiency: 80 },
  { name: 'Microsoft Office', category: 'other', proficiency: 90 },
  { name: 'Adobe Photoshop', category: 'other', proficiency: 50 },
  { name: 'Adobe Illustrator', category: 'other', proficiency: 50 },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'YGDev',
    position: 'Freelance Web Developer',
    location: 'Calgary, Canada',
    startDate: '2024-01',
    endDate: 'Present',
    description: [
      'Manage and troubleshoot hosting services',
      'Build out fully functional and responsive web pages, using provided mockups and templates',
      'Develop custom software solutions to clients\' business needs'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'WordPress']
  },
  {
    company: 'Fairlane.AI',
    position: 'Full-Stack Developer',
    location: 'Calgary, Canada',
    startDate: '2025-06',
    endDate: '2025-09',
    description: [
      'Built out a fully functional and responsive web app front-end using Next.js and Tailwind CSS',
      'Helped develop, test and troubleshoot Python FastAPI backend',
      'Helped develop CI/CD pipeline using GitHub Actions, GitHub Container Registry and Azure Web Apps',
      'Implemented authentication and authorization using JSON Web Tokens'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Python', 'GitHub', 'Azure', 'Cursor']
  },
  {
    company: 'Venture Communications',
    position: 'Junior Web Developer',
    location: 'Remote',
    startDate: '2021-01',
    endDate: '2022-08',
    description: [
      'HTML Email creation and update',
      'Shopify theme development',
      'Asgard/CMS content creation and management',
      'WordPress theme development',
      'WordPress content creation and management',
      'Quality assurance',
      'Analytics reporting'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Shopify', 'WordPress']
  },
  {
    company: 'About Staffing',
    position: 'Contract Web Developer',
    location: 'Remote',
    startDate: '2020-01',
    endDate: '2020-06',
    description: [
      'Providing technical assistance',
      'Data entry into proprietary databases',
      'Analytics reporting',
      'Website support',
      'Software programming and coding',
      'Managing backups, updates and security',
      'Assisting with the development of technical tools'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Database Management']
  }
];

export const projects: Project[] = [
  // {
  //   id: '1',
  //   title: 'E-Commerce Platform',
  //   description: 'A full-featured e-commerce platform with payment integration and admin dashboard',
  //   longDescription: 'Built a complete e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration. Features include real-time inventory management and order tracking.',
  //   technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  //   projectUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/yourusername/ecommerce',
  //   featured: true
  // },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'This portfolio website.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git'],
    // projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/ysghaly/Personal-Site'
  },
  {
    id: '6',
    title: 'SDC Website',
    description: 'Website for the Software Developers Collective. Built with Next.js and TypeScript in collaboration with the SDC team.',
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'Git'],
    projectUrl: 'https://sdc.fyi',
    githubUrl: 'https://github.com/softwaredeveloperscollective/sdc-v3'
  },
  // {
  //   id: '7',
  //   title: 'Weather App',
  //   description: 'A weather app built with React.',
  //   technologies: ['Next.js', 'TypeScript'],
  //   projectUrl: 'https://react-weather-app-af1o.onrender.com/',
  //   githubUrl: 'https://github.com/ysghaly/react-weather-app'
  // },
  {
    id: '8',
    title: 'MicroProject - CRA Tax Terms Translator',
    description: 'A tax terms translator built with Next.js and TypeScript. This was a group project for Cohor 5 of the Data for Good Micro-Project program.',
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'Git'],
    projectUrl: 'https://microproject-nu.vercel.app/',
    githubUrl: 'https://github.com/CRA-MicroProject/frontend'
  }
];

export const education: Education[] = [
  {
    institution: 'University of Calgary',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'Calgary, Canada',
    startDate: '2013-09',
    endDate: '2019-06',
    // gpa: '3.8/4.0',
    // honors: ['Summa Cum Laude', 'Dean\'s List']
  },
  {
    institution: 'University of Calgary',
    degree: 'Bechelor of Commerce',
    field: 'Business Technology Management',
    location: 'Calgary, Canada',
    startDate: '2013-09',
    endDate: '2019-06'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Marketing Fundamentals Certificate',
    issuer: 'University of Calgary',
    issueDate: '2023-08',
    logoUrl: '/certificates/marketing-fundamentals.jpg',
    credentialUrl: MarketingFundamentalsCertificate.src
  },
  {
    name: 'Digital Marketing Certificate',
    issuer: 'University of Calgary',
    issueDate: '2023-08',
    logoUrl: '/certificates/digital-marketing.jpg',
    credentialUrl: DigitalMarketingCertificate.src
  },
  {
    name: 'Certificate in Front-End Web Development',
    issuer: 'University of Calgary',
    issueDate: '2023-10',
    logoUrl: '/certificates/front-end-web-dev.jpg',
    credentialUrl: FrontEndWebDevCertificate.src
  },
  {
    name: 'Certificate in Integrated Digital Media',
    issuer: 'University of Calgary',
    issueDate: '2024-02',
    logoUrl: '/certificates/integrated-digital-media.jpg',
    credentialUrl: IntegratedDigitalMediaCertificate.src
  },
  {
    name: 'Certificate for Front Line Leaders',
    issuer: 'University of Calgary',
    issueDate: '2023-10',
    logoUrl: '/certificates/front-line-leaders.jpg',
    credentialUrl: FrontLineLeadersCertificate.src
  }
];

