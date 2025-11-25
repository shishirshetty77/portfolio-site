import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = 'https://shishirshetty.vercel.app'; // update if you have a custom domain
const FULL_NAME = 'Shishir Shetty';
const DESC = 'DevOps Engineer in Bangalore — building scalable, cloud-native infrastructure, CI/CD automation, and production-grade systems on AWS & GCP.';

export const metadata: Metadata = {
  title: {
    default: `${FULL_NAME} — DevOps Engineer`,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESC,
  applicationName: "Shishir Shetty — Portfolio",
  authors: [
    {
      name: FULL_NAME,
      url: SITE_URL,
    },
  ],
  keywords: [
    'shishir shetty',
    'devops engineer portfolio',
    'cloud engineer portfolio',
    'shishir shetty devops',
    'aws gcp kubernetes engineer',
    'terraform ci/cd automation',
    'devops automation',
    'kubernetes engineer',
    'site:shishirshetty.vercel.app',
  ],
  openGraph: {
    title: `${FULL_NAME} — DevOps Engineer`,
    description: DESC,
    url: SITE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    images: [
      {
        url: `${SITE_URL}/munnar.jpeg`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME}`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} — DevOps Engineer`,
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
    "jobTitle": "DevOps Engineer / Cloud Engineer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "IN"
    },
    "description": DESC
  };

  return (
    <html lang="en" className="scroll-smooth">
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
