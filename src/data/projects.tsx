import {
  Calculator,
  CheckCircle,
  Database,
  Server,
  LucideIcon,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  Icon: LucideIcon;
  gradient: string;
}

export const projectsData: Project[] = [
  {
    title: 'Three-Tier App – GKE DevOps',
    description:
      'A full-stack React, Node.js, and MongoDB application engineered with complete DevOps implementation. Features containerization, Kubernetes orchestration on GKE, Ingress load balancing, and automated CI/CD pipelines.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'GKE',
      'Docker',
      'Ingress',
      'CI/CD',
    ],
    github: 'https://github.com/shishirshetty77/ThreeTierAppDevOpsified',
    demo: 'https://github.com/shishirshetty77/ThreeTierAppDevOpsified',
    featured: true,
    Icon: Database,
    gradient: 'from-orange-400 to-red-400',
  },
  {
    title: 'Microservices Multistack App',
    description:
      'A comprehensive, polyglot microservices architecture integrating Go, Python, Java, Node.js, and Rust. Features a modern React frontend and a complete DevOps pipeline with Docker, Kubernetes, Terraform, Helm, and ArgoCD.',
    technologies: [
      'React',
      'Go',
      'Python',
      'Java',
      'Rust',
      'Kubernetes',
      'ArgoCD',
      'Terraform',
    ],
    github: 'https://github.com/shishirshetty77/microservices-multistack-app',
    demo: 'https://github.com/shishirshetty77/microservices-multistack-app',
    featured: true,
    Icon: Server,
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    title: 'Microvoting Platform',
    description:
      'A cloud-native, production-grade voting platform built with Python (FastAPI) and React. Implements asynchronous processing with Redis queues, PostgreSQL storage, and automated GKE deployment via GitHub Actions.',
    technologies: [
      'React',
      'Python',
      'FastAPI',
      'Redis',
      'PostgreSQL',
      'Kubernetes',
      'Terraform',
      'Prometheus',
    ],
    github: 'https://github.com/shishirshetty77/microvoting-platform',
    demo: 'https://github.com/shishirshetty77/microvoting-platform',
    featured: true,
    Icon: CheckCircle,
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'CIDR Calculator',
    description:
      'Production-ready network utility for IP range conversions, subnet calculations, and conflict resolution. Built with Next.js 15 and TypeScript, featuring auto-scaling deployment on Google Kubernetes Engine.',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'GCP',
      'Kubernetes',
      'Terraform',
    ],
    github: 'https://github.com/shishirshetty77/cidr-calculator',
    demo: 'https://cidr-calculator.vercel.app/',
    featured: true,
    Icon: Calculator,
    gradient: 'from-purple-400 to-pink-400',
  },
];
