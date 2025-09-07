import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bekalu-Temesgen-2306', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Bekalu-Temesgen2306', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/bekalu_tem2123', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/bekalu_tom', label: 'Instagram' },
    { icon: Mail, href: 'mailto:bekalutemesgen74@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
     { name: 'Achievements', href: '/#achievements' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark text-white !important">
      <div className="container py-12">
        <div className="grid grid-2 md:grid-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Bekalu Temesgen</h3>
            <p className="text-text-muted mb-6 max-w-md">
              A passionate web developer and UX designer focused on creating 
              beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-text-muted">
              <p>bekalutemesgen74@gmail.com</p>
              <p>+251 (992) 721-492</p>
              <p>Bahir Dar, Ethiopia</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-dark-light my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted text-sm">
            © {currentYear} Bekalu Temesgen. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 