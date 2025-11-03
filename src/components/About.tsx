'use client';

import { motion } from 'framer-motion';
import { Code, Download } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [showRealImage, setShowRealImage] = useState(false);

  const handleImageClick = () => {
    setShowRealImage(!showRealImage);
  };
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div
              className="relative group cursor-pointer"
              onClick={handleImageClick}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border-4 border-white/20 dark:border-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Profile Image with Easter Egg */}
                <motion.img
                  src={showRealImage ? '/munnar.jpeg' : '/rayuga.jpeg'}
                  alt={showRealImage ? 'Shishir Shetty' : 'Rayuga'}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  key={showRealImage ? 'profile' : 'rayuga'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Click hint */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <motion.div
                    className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {showRealImage
                      ? 'Click to see Rayuga'
                      : 'Click to see real me'}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center mb-6"
              >
                <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              >
                Hey, I&apos;m Shishir — just a tech-savvy guy who loves building
                things that I Love.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              >
                I enjoy building systems that are reliable, automated, and scalable — where code moves smoothly from idea to deployment. DevOps, to me, is more than just tools; it’s a mindset of collaboration, continuous learning, and constant improvement.

Every day, I try to learn something new — be it a better CI/CD workflow, a cleaner infrastructure setup, or a smarter way to solve a problem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              >
                Still curious, still learning — and always building.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/18HrkA_pEJEOhqNaFsAsuC38xTU1R-DrJ/view?usp=drive_link'
                  )
                }
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <div className="relative flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
