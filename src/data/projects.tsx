import {
  Box,
  Calculator,
  CheckCircle,
  Code,
  Cpu,
  Server,
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
    demo: 'https://github.com/shishirshetty77/microservices-multistack-app', // No live demo listed, pointing to repo
    featured: true,
    icon: <Server className="w-6 h-6" />,
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
    demo: 'https://github.com/shishirshetty77/microvoting-platform', // No live demo listed
    featured: true,
    icon: <CheckCircle className="w-6 h-6" />,
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
    icon: <Calculator className="w-6 h-6" />,
    gradient: 'from-purple-400 to-pink-400',
  },
];
