import {
  Box,
  Code,
  Cpu,
  Smartphone,
} from 'lucide-react';
import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  icon: ReactNode;
  gradient: string;
}

export const projectsData: Project[] = [
  {
    title: 'Find – Gig Platform',
    description:
      'A full-stack gig economy platform connecting local service providers with users in real-time, featuring OTP-based login, secure payments, and role-based dashboards.',
    technologies: [
      'Next.js',
      'Prisma',
      'React Native',
      'NeonDB',
      'TypeScript',
      'SecureStore',
      'Redis',
      'Socket.io',
    ],
    github: 'https://github.com/shishirshetty',
    demo: 'https://findonspot.com',
    featured: true,
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'E-COMMERCE DEVOPS IMPLEMENTATION',
    description:
      'Implemented DevOps practices for a demo e-commerce project including containerization, orchestration, Infrastructure as Code (Terraform), and CI/CD pipelines. Automated CI/CD for Java microservices using GitHub Actions and Argo CD. Configured AWS networking, VPCs, Load Balancers, and secured frontend exposure with Route 53 DNS.',
    technologies: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'AWS',
      'Argo CD',
      'Load Balancer',
    ],
    github: 'https://github.com/shishirshetty/ecommerce-devops',
    demo: 'https://demo.com/ecommerce',
    featured: false,
    icon: <Cpu className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    title: 'GITHUB JIRA Automation using Python',
    description:
      'Integrated GitHub webhooks with Python Flask applications to automate JIRA ticket creation. Reduced manual ticketing and improved workflow efficiency by triggering JIRA APIs directly from GitHub events.',
    technologies: ['Python', 'Flask', 'GitHub', 'JIRA', 'Webhooks'],
    github: 'https://github.com/shishirshetty/github-jira-automation',
    demo: 'https://demo.com/github-jira',
    featured: false,
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-green-400 to-teal-400',
  },
  {
    title: 'SUPACHAT – Real-time Chat App / Faculty Locator System',
    description:
      'Developed a real-time chat app with WebSockets, secure authentication, file sharing, presence and typing indicators. Also built a Next.js + Prisma platform to locate faculty cabins with session validation.',
    technologies: ['Next.js', 'Prisma', 'WebSockets', 'Authentication', 'File Sharing'],
    github: 'https://github.com/shishirshetty77/Supachat',
    demo: 'https://nittetrail.vercel.app/',
    featured: false,
    icon: <Box className="w-6 h-6" />,
    gradient: 'from-purple-400 to-pink-400',
  },
];
