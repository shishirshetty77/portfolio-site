'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background border-t-2 border-border-color">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-8 bg-tertiary" />
            <span className="text-sm font-mono font-bold tracking-widest text-tertiary uppercase">Connect</span>
            <div className="h-3 w-8 bg-tertiary" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black mb-4 sm:mb-6 tracking-tight uppercase">
            GET IN <span className="text-tertiary" style={{ textShadow: '4px 4px 0px rgba(163,230,53,0.2)' }}>TOUCH</span>
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg md:text-xl font-mono leading-relaxed bg-black/40 p-4 border border-white/10 mt-6 inline-block">
            <span className="text-tertiary font-bold mr-2">{'>_'}</span>
            Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Email Card - Span full width to accommodate full address */}
          <div className="md:col-span-2">
            <ContactCard 
              href="mailto:shishirshetty77@gmail.com"
              icon={Mail}
              title="Email"
              detail="shishirshetty77@gmail.com"
              colorClass="primary"
              shadowColor="rgba(255,69,0,1)"
            />
          </div>

          {/* Phone Card */}
          <ContactCard 
            href="tel:+919483243509"
            icon={Phone}
            title="Phone"
            detail="+91 9483243509"
            colorClass="secondary"
            shadowColor="rgba(234,179,8,1)"
          />

          {/* Location Card */}
          <ContactCard 
            icon={MapPin}
            title="Location"
            detail="Mangalore, Karnataka"
            colorClass="tertiary"
            shadowColor="rgba(163,230,53,1)"
          />

          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-8 bg-background border-2 border-border-color hover:border-foreground transition-all duration-200 flex flex-col justify-between"
            style={{
              boxShadow: '4px 4px 0px rgba(255,255,255,0.1)'
            }}
          >
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/shishirshetty77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border-2 border-border-color bg-background text-foreground hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shishir-shetty-715028230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border-2 border-border-color bg-background text-foreground hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold text-gray-400 mb-2 uppercase tracking-widest">Social Profiles</h3>
              <p className="text-2xl font-black font-oswald text-foreground uppercase tracking-wide">Connect with me</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  href, 
  icon: Icon, 
  title, 
  detail, 
  colorClass, 
  shadowColor 
}: { 
  href?: string; 
  icon: any; 
  title: string; 
  detail: string; 
  colorClass: string; 
  shadowColor: string 
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  const CardWrapper = href ? motion.a : motion.div;
  
  return (
    <CardWrapper
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-8 bg-background border-2 transition-all duration-200 block ${isHovered ? `border-${colorClass}` : 'border-border-color'}`}
      style={{
        boxShadow: isHovered ? `8px 8px 0px ${shadowColor}` : '4px 4px 0px rgba(255,255,255,0.1)',
        transform: isHovered ? 'translate(-4px, -4px)' : 'none'
      }}
    >
      <div className="flex justify-between items-start mb-8">
        <div className={`p-4 border-2 transition-colors duration-200 ${isHovered ? `bg-${colorClass} text-background border-${colorClass}` : 'bg-transparent text-foreground border-border-color'}`}>
          <Icon className="w-6 h-6" />
        </div>
        {href && (
          <ArrowUpRight className={`w-8 h-8 transition-transform duration-200 ${isHovered ? `text-${colorClass} translate-x-1 -translate-y-1` : 'text-gray-500'}`} />
        )}
      </div>
      <div>
        <h3 className="text-lg font-mono font-bold text-gray-400 mb-2 uppercase tracking-widest">{title}</h3>
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black font-oswald text-foreground uppercase tracking-wide whitespace-nowrap overflow-hidden">{detail}</p>
      </div>
    </CardWrapper>
  );
}
