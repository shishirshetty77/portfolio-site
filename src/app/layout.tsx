import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shishir's Portfolio",
  description: "Full-stack developer portfolio with AI features",
};

import { ThemeProvider } from '@/components/ThemeProvider'
import { CatModeProvider } from '@/context/CatModeContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CatModeProvider>
            {children}
          </CatModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
