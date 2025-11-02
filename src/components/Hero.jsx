import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Web Developer',
    'UX/UI Designer', 
    'Content Creator'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bekalu-Temesgen-2306', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Bekalu-Temesgen2306', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bekalutemesgen74@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="grid grid-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hero__title"
              >
                <span className="text-gradient"> hi, I'm bekalu </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-muted"
              >
                I'm a{' '}
                <span className="text-primary min-h-[3.5rem] inline-block">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-text-muted max-w-2xl"
            >
              A passionate developer focused on building user-friendly web experiences. 
              I specialize in creating accessible and visually appealing digital solutions 
              that solve real-world problems.
            </motion.p>


            
 {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-6"
            >
              <span className="text-text-muted">Follow me On:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="p-3 rounded-full bg-light dark:bg-dark-light hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >




              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight size={15} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={15} />
                Download CV
              </motion.button>
            </motion.div>

           
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src="/images/bekalu.jpg"
                alt="Bekalu Temesgen - Web Developer and UX Designer"
                className="relative rounded-full object-cover avatar-img"
                whileHover={{ rotate: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-bold">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-bold">💻</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 