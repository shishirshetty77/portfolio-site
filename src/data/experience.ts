export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Cloud Associate',
    company: 'Niveus Solutions (Part of NTT DATA)',
    period: 'Feb 2026 - Present',
    location: 'Remote / India',
    type: 'Full-time',
    description: [
      'Architecting and implementing scalable Google Cloud Platform (GCP) infrastructure for enterprise clients.',
      'Designing robust cloud-native modernization workflows utilizing Kubernetes, Docker, and Terraform.',
      'Automating deployment pipelines using CI/CD best practices to ensure highly resilient, zero-downtime application delivery.',
      'Collaborating with teams to deliver specialized data and cloud solutions in alignment with NTT DATA\'s cloud portfolio.'
    ],
    technologies: [
      'GCP',
      'Kubernetes',
      'Terraform',
      'Docker',
      'CI/CD',
      'GitOps'
    ],

  },
  {
    title: 'Cloud Engineer',
    company: 'Cloud Cover',
    period: 'Jun 2025 - Dec 2025',
    location: 'Remote',
    type: 'Full-time',
    description: [
      'Engineered multi-cloud solutions and automated infrastructure workflows using Terraform and Kubernetes.',
      'Managed and optimized CI/CD pipelines utilizing GitHub Actions and ArgoCD for reliable GitOps deployments.',
      'Implemented robust monitoring, logging, and observability practices for highly available systems.',
    ],
    technologies: [
      'AWS',
      'Kubernetes',
      'ArgoCD',
      'Terraform',
      'Prometheus',
      'Grafana',
      'Docker',
    ],

  },
  {
    title: 'Software Developer',
    company: 'Headway',
    period: 'Jan 2025 - May 2025',
    location: 'Mangalore',
    type: 'Full-time',
    description: [
      'Developed responsive web features using Next.js, improving navigation speed and reducing bounce rate.',
      'Implemented secure REST APIs with token-based authentication and Redis caching, achieving 35% faster response times.',
      'Automated deployments via CI/CD pipelines (GitHub Actions + ArgoCD), reducing deployment errors by 25%.',
      'Integrated Razorpay payment gateway with encrypted workflows, enabling secure transactions and boosting customer trust.',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'Redis',
      'Razorpay',
      'AWS',
      'Docker',
      'Kubernetes',
    ],

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

  },
];