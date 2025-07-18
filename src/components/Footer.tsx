'use client';

import { useCatMode } from '@/context/CatModeContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { toggleCatMode } = useCatMode();

  return (
    <footer className="w-full py-6 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Shishir Shetty. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Made with ❤️
            </div>

            <motion.button
              onClick={toggleCatMode}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm opacity-60 hover:opacity-100 transition-all duration-300 hover:underline cursor-pointer select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Don&apos;t click here 🐾
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
