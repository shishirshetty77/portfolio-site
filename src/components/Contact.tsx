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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        />
      </div>

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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Ready to start a conversation? I&apos;d love to hear from you.
            Whether you have a question, project idea, or just want to say
            hello.
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
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Let&apos;s Connect
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:shishirshetty217@gmail.com"
                      className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <a
                      href="tel:+919483243509"
                      className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <span className="text-gray-900 dark:text-white font-medium">
                      Udupi, Karnataka
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
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
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
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
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
