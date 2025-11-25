'use client';

import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="bg-primary/10 text-primary px-4 py-1 font-mono font-bold text-sm uppercase tracking-widest rounded-full">
              Identity
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHO IS THIS GUY?
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
            <div className="relative group">
              {/* Background Offset */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Image Container */}
              <div className="relative w-80 h-80 rounded-2xl bg-white dark:bg-gray-800 p-2 z-10 shadow-xl transition-transform group-hover:-translate-y-2">
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-xl"
                >
                  {/* Profile Image */}
                  <Image
                    src="/munnar.jpeg"
                    alt="Shishir Shetty"
                    fill
                    className="object-cover transition-all duration-300"
                  />
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
            <div className="neo-card relative">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center mb-6"
              >
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-oswald font-bold text-foreground uppercase">
                  The Developer
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-600 dark:text-gray-300 font-medium text-lg leading-relaxed"
              >
                <p className="font-mono text-sm bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <span className="font-bold text-primary">User:</span> Shishir Shetty<br/>
                  <span className="font-bold text-secondary">Status:</span> Online<br/>
                  <span className="font-bold text-tertiary">Mission:</span> Building things I love.
                </p>

                <p>
                  I enjoy building systems that are reliable, automated, and scalable — where code moves smoothly from idea to deployment. DevOps, to me, is more than just tools; it’s a mindset of collaboration, continuous learning, and constant improvement.
                </p>
                
                <p>
                  Every day, I try to learn something new — be it a better CI/CD workflow, a cleaner infrastructure setup, or a smarter way to solve a problem.
                </p>

                <p className="font-bold text-primary inline-block">
                  Still curious, still learning — and always building.
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
                className="mt-8 w-full md:w-auto neo-button"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
