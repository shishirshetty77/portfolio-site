import type { Metadata, Viewport } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = 'https://shishirshetty.vercel.app'; // update if you have a custom domain
const FULL_NAME = 'Shishir Shetty';
const DESC = 'Senior DevOps Engineer & Cloud Architect specializing in Kubernetes, AWS, GCP, Terraform, CI/CD automation, and building production-grade cloud-native infrastructure. Expert in Docker, GitOps, ArgoCD, Jenkins, and Infrastructure as Code.';

export const metadata: Metadata = {
  title: {
    default: `${FULL_NAME} — Senior DevOps Engineer & Cloud Architect`,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESC,
  applicationName: "Shishir Shetty — DevOps Portfolio",
  authors: [
    {
      name: FULL_NAME,
      url: SITE_URL,
    },
  ],
  keywords: [
    // Primary Keywords
    'shishir shetty devops engineer',
    'shishir shetty cloud architect',
    'senior devops engineer india',
    'kubernetes expert engineer',
    'aws cloud engineer india',
    
    // Technical Skills
    'kubernetes devops engineer',
    'terraform infrastructure as code',
    'docker container orchestration',
    'aws gcp cloud engineer',
    'ci cd automation engineer',
    'gitops argocd specialist',
    'jenkins pipeline automation',
    'ansible configuration management',
    
    // Location Based
    'devops engineer bangalore',
    'cloud architect udupi',
    'devops engineer karnataka india',
    
    // Service Keywords
    'cloud migration specialist',
    'infrastructure automation',
    'microservices architecture',
    'production infrastructure design',
    'scalable cloud solutions',
    'site reliability engineering',
    
    // Platform Specific
    'aws eks kubernetes',
    'gcp gke deployment',
    'azure devops engineer',
    'multi cloud architecture',
    
    // Portfolio Keywords
    'devops portfolio projects',
    'cloud engineer resume',
    'infrastructure engineer portfolio',
    
    // Brand
    'shishir shetty portfolio',
    'site:shishirshetty.vercel.app',
  ],
  openGraph: {
    title: `${FULL_NAME} — Senior DevOps Engineer & Cloud Architect | Kubernetes, AWS, Terraform`,
    description: DESC,
    url: SITE_URL,
    siteName: `${FULL_NAME} — DevOps & Cloud Engineering Portfolio`,
    images: [
      {
        url: `${SITE_URL}/munnar.jpeg`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - DevOps Engineer & Cloud Architect`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} — Senior DevOps Engineer & Cloud Architect`,
    description: DESC,
    images: [`${SITE_URL}/munnar.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F8FA' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0D0E' },
  ],
  width: 'device-width',
  initialScale: 1,
};

import { ThemeProvider } from '@/components/ThemeProvider'
import { KonamiCode } from '@/components/KonamiCode'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": FULL_NAME,
    "alternateName": "Shishir C Shetty",
    "url": SITE_URL,
    "image": `${SITE_URL}/munnar.jpeg`,
    "sameAs": [
      "https://github.com/shishirshetty77",
      "https://www.linkedin.com/in/shishir-shetty-715028230/",
      SITE_URL
    ],
    "jobTitle": "Senior DevOps Engineer & Cloud Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Cloud Infrastructure Specialist"
    },
    "knowsAbout": [
      "DevOps Engineering",
      "Cloud Architecture",
      "Kubernetes",
      "Docker",
      "AWS",
      "GCP",
      "Terraform",
      "CI/CD Automation",
      "Infrastructure as Code",
      "GitOps",
      "ArgoCD",
      "Jenkins",
      "Ansible",
      "Site Reliability Engineering",
      "Microservices Architecture",
      "Container Orchestration"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Udupi",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "description": DESC,
    "email": "shishirshetty77@gmail.com",
    "telephone": "+91-9483243509"
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // JSON-LD for personal branding / knowledge graph
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <KonamiCode />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
