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
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="bg-tertiary/10 text-tertiary px-4 py-1 font-mono font-bold text-sm uppercase tracking-widest rounded-full">
              Communication
            </div>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto text-lg"
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
            <div className="neo-card p-8 relative h-full">
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 text-primary">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-oswald font-bold text-foreground uppercase">
                    Connect
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
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover/item:bg-primary/10 group-hover/item:text-primary transition-all duration-300">
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/item:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono font-bold uppercase">
                        Email
                      </p>
                      <a
                        href="mailto:shishirshetty217@gmail.com"
                        className="text-foreground font-bold hover:text-primary transition-colors font-mono"
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
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover/item:bg-primary/10 group-hover/item:text-primary transition-all duration-300">
                      <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/item:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono font-bold uppercase">
                        Phone
                      </p>
                      <a
                        href="tel:+919483243509"
                        className="text-foreground font-bold hover:text-primary transition-colors font-mono"
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
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover/item:bg-primary/10 group-hover/item:text-primary transition-all duration-300">
                      <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/item:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono font-bold uppercase">
                        Location
                      </p>
                      <span className="text-foreground font-bold font-mono">
                        Udupi, Karnataka
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <h4 className="text-lg font-bold text-foreground mb-4 font-oswald uppercase">
                    Social Links
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
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
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
            <div className="neo-card p-8 relative">
              <h3 className="text-3xl font-oswald font-bold text-foreground mb-6 uppercase">
                Send Message
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
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-300 font-mono font-bold placeholder-gray-400"
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
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-300 font-mono font-bold placeholder-gray-400"
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
                    placeholder="YOUR MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-300 resize-none font-mono font-bold placeholder-gray-400"
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
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-oswald uppercase tracking-wider text-lg"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>SEND IT</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
