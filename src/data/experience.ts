export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  color: string;
}

export const experienceData: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Headway',
    period: 'Jan 2025 - Jul 2025',
    location: 'Mangalore',
    type: 'Full-time',
    description: [
      'Developed responsive web features using Next.js, improving navigation speed and reducing bounce rate.',
      'Implemented secure REST APIs with token-based authentication and Redis caching, achieving 35% faster response times during peak traffic Automated deployments via CI/CD pipelines (GitHub Actions + ArgoCD), reducing deployment errors by 25%',
      'Integrated Razorpay payment gateway with encrypted workflows, enabling secure transactions and boosting customer trust.',
    ],
    technologies: [
      'Next.js',
      'ArgoCD',
      'Node.js',
      'Redis',
      'Razorpay',
      'AWS',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Project Intern – Frontend Developer',
    company: 'Plego Technologies',
    period: '2024',
    location: 'remote, India',
    type: 'Internship',
    description: [
      'Optimized UI for logistics platform using React.js, reducing page load time.',
      'Migrated database from MySQL → PostgreSQL, improving scalability and query performance by 20%.',
      'Enhanced validation & input handling, cutting user errors.',
    ],
    technologies: ['React', 'JavaScript', 'PostgreSQL', 'HTML5', 'Git'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Software Developer Intern',
    company: 'NMAMIT, Nitte',
    period: '2023',
    location: 'Nitte, India',
    type: 'Internship',
    description: [
      'Assisted in developing web applications using modern JavaScript frameworks',
      'Learned software development best practices and methodologies',
      'Contributed to team projects and gained valuable hands-on experience',
      'Participated in daily standups and project planning sessions',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git', 'React'],
    color: 'from-purple-500 to-pink-500',
  },
];
