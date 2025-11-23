'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Use canonical contact email (keep consistent with visible link)
    const mailtoLink = `mailto:shishirshetty77@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.open(mailtoLink, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
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
              <span className="font-mono text-sm tracking-widest uppercase">Communication</span>
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
            &lt;GetInTouch /&gt;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Initialize communication sequence.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border border-gray-800 bg-black/40 backdrop-blur-sm p-8 relative group">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 border border-cyan-500/30 bg-cyan-900/10 mr-4">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    Connect_Nodes
                  </h3>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group/item"
                  >
                    <div className="p-3 border border-gray-700 bg-gray-900 group-hover/item:border-cyan-500 group-hover/item:text-cyan-400 transition-all duration-300">
                      <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-mono">
                        Email_Protocol
                      </p>
                      <a
                        href="mailto:shishirshetty217@gmail.com"
                        className="text-white font-medium hover:text-cyan-400 transition-colors font-mono"
                      >
                        shishirshetty77@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group/item"
                  >
                    <div className="p-3 border border-gray-700 bg-gray-900 group-hover/item:border-cyan-500 group-hover/item:text-cyan-400 transition-all duration-300">
                      <Phone className="w-5 h-5 text-gray-400 group-hover/item:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-mono">
                        Voice_Link
                      </p>
                      <a
                        href="tel:+919483243509"
                        className="text-white font-medium hover:text-cyan-400 transition-colors font-mono"
                      >
                        +91 9483243509
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group/item"
                  >
                    <div className="p-3 border border-gray-700 bg-gray-900 group-hover/item:border-cyan-500 group-hover/item:text-cyan-400 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-gray-400 group-hover/item:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-mono">
                        Geo_Coordinates
                      </p>
                      <span className="text-white font-medium font-mono">
                        Udupi, Karnataka
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    Social_Uplink
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        Icon: Github,
                        href: 'https://github.com/shishirshetty77',
                        label: 'GitHub',
                      },
                      {
                        Icon: Linkedin,
                        href: 'https://www.linkedin.com/in/shishir-shetty-715028230/',
                        label: 'LinkedIn',
                      },
                    ].map(({ Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 border border-gray-700 bg-gray-900 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 group-hover:border-cyan-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-cyan-500 transition-colors" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="border border-gray-800 bg-black/40 backdrop-blur-sm p-8 relative">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                Transmit_Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="ID_Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black/50 border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all duration-300 font-mono placeholder-gray-600"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Return_Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black/50 border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all duration-300 font-mono placeholder-gray-600"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    name="message"
                    placeholder="Data_Packet"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all duration-300 resize-none font-mono placeholder-gray-600"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 py-4 font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group font-mono uppercase tracking-wider"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Execute_Send</span>
                </motion.button>
              </form>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
