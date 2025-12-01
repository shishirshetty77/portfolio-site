import {
  CheckCircle,
  Database,
  Server,
  Zap,
  Layers,
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
    title: 'EventFlow Platform',
    description:
      'A production-ready event-driven architecture platform featuring Apache Kafka for real-time message streaming, event sourcing patterns, and CQRS implementation. Built with microservices design, featuring automated scaling, dead letter queues, and comprehensive observability.',
    technologies: [
      'Apache Kafka',
      'Node.js',
      'Python',
      'Redis',
      'PostgreSQL',
      'Kubernetes',
      'Docker',
      'Prometheus',
    ],
    github: 'https://github.com/shishirshetty77/eventflow-platform-for-event-driven-architecture.git',
    demo: 'https://github.com/shishirshetty77/eventflow-platform-for-event-driven-architecture.git',
    featured: true,
    Icon: Zap,
    gradient: 'from-amber-400 to-orange-500',
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
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Two-Tier Flask App',
    description:
      'A containerized Flask-PostgreSQL web application with complete CI/CD pipeline using Jenkins. Features Infrastructure as Code with Docker Compose, automated build and deployment pipelines, and clean two-tier client-server architecture.',
    technologies: [
      'Flask',
      'Python',
      'PostgreSQL',
      'Docker',
      'Jenkins',
      'Docker Compose',
      'CI/CD',
    ],
    github: 'https://github.com/shishirshetty77/DevOps-Project-Two-Tier-Flask-App.git',
    demo: 'https://github.com/shishirshetty77/DevOps-Project-Two-Tier-Flask-App.git',
    featured: false,
    Icon: Layers,
    gradient: 'from-rose-400 to-pink-500',
  },
];
