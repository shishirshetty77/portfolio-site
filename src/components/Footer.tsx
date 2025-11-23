'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-oswald font-bold text-xl uppercase tracking-wide text-foreground">
              © 2025 Shishir Shetty
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mt-1">
              Designed & Built with Precision & Passion
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold font-mono text-xs rounded-md border border-gray-200 dark:border-gray-700">NEXT.JS</span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold font-mono text-xs rounded-md border border-gray-200 dark:border-gray-700">TAILWIND</span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold font-mono text-xs rounded-md border border-gray-200 dark:border-gray-700">MOTION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
