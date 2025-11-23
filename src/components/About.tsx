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
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 text-cyan-500 mb-2">
              <span className="h-px w-8 bg-cyan-500"></span>
              <span className="font-mono text-sm tracking-widest uppercase">Identity</span>
              <span className="h-px w-8 bg-cyan-500"></span>
            </div>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            &lt;SystemProfile /&gt;
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
              {/* Holographic Effect */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-none blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Tech Border Container */}
              <div className="relative w-80 h-80 border border-gray-800 p-2 bg-black/50 backdrop-blur-sm">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500 z-20" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500 z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500 z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500 z-20" />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-50" />

                <motion.div
                  className="relative w-full h-full overflow-hidden bg-gray-900"
                  whileHover={{ scale: 1.0 }}
                >
                  {/* Profile Image with Easter Egg */}
                  <motion.img
                    src={showRealImage ? '/munnar.jpeg' : '/rayuga.jpeg'}
                    alt={showRealImage ? 'Shishir Shetty' : 'Rayuga'}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    key={showRealImage ? 'profile' : 'rayuga'}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Click hint */}
                  <div className="absolute bottom-4 left-4 right-4 text-center z-20">
                    <motion.div
                      className="bg-black/80 border border-cyan-500/50 backdrop-blur-sm px-3 py-1 text-cyan-400 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {showRealImage
                        ? '[ ACCESS_AVATAR: RAYUGA ]'
                        : '[ DECRYPT_IDENTITY: REAL_ME ]'}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
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
            <div className="border border-gray-800 bg-black/40 p-8 relative group backdrop-blur-sm">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center mb-6 relative z-10"
              >
                <div className="p-3 border border-cyan-500/30 bg-cyan-900/10 mr-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  DevOps_Protocol
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed"
              >
                <p>
                  <span className="text-cyan-500">&gt;</span> User: Shishir Shetty<br/>
                  <span className="text-cyan-500">&gt;</span> Status: Online<br/>
                  <span className="text-cyan-500">&gt;</span> Mission: Building and learning things that I Love.
                </p>

                <p>
                  I enjoy building systems that are reliable, automated, and scalable — where code moves smoothly from idea to deployment. DevOps, to me, is more than just tools; it’s a mindset of collaboration, continuous learning, and constant improvement.
                </p>
                
                <p>
                  Every day, I try to learn something new — be it a better CI/CD workflow, a cleaner infrastructure setup, or a smarter way to solve a problem.
                </p>

                <p className="text-cyan-400/80 pt-2">
                  &gt; Current_State: Still curious, still learning — and always building.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/18HrkA_pEJEOhqNaFsAsuC38xTU1R-DrJ/view?usp=drive_link'
                  )
                }
                className="mt-8 group relative px-8 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold overflow-hidden transition-all duration-300 hover:bg-cyan-500/10 font-mono uppercase tracking-wider w-full md:w-auto"
              >
                <div className="absolute inset-0 w-0 bg-cyan-500/10 transition-all duration-[250ms] ease-out group-hover:w-full" />
                <div className="relative flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download_Data</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
