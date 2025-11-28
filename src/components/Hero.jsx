import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'classnames';
import { socials } from '../data';

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail };

const roles = [
  'Web Developer',
  'UX/UI Designer',
  'Content Creator',
  'Problem Solver',
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-14 sm:h-16 lg:h-20 mt-2 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute inset-0 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-neon via-cyan-400 to-teal-300 bg-clip-text text-transparent font-semibold"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mt-6">
              <p>Hi, I'm</p>
              <span className="text-gradient">Bekalu Temesgen</span>
            </h1>
            <RotatingText />
            {/* <p className="uppercase tracking-[0.4em] text-sm text-neon/90 mt-2">🇪🇹 Ethiopian web development Specialist</p> */}

            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
              Building soulful, performant experiences for the web. I blend Ethiopian storytelling with precise engineering,
              React mastery, and motion craft.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 25px 60px rgba(8,145,178,0.45)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-neon text-ink font-semibold shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full border border-neon/40 dark:border-white/40 text-neon dark:text-white/90 bg-white/80 dark:bg-white/10 backdrop-blur hover:bg-neon/10 dark:hover:bg-white/20 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        <div className="relative space-y-6">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-neon/20 to-amber-400/10 blur-3xl absolute -top-12 left-10" />
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[32px] bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl mx-auto flex items-center justify-center shadow-glass-light dark:shadow-glass-dark">
            <motion.img
              src="/images/bekalu.jpg"
              alt="Bekalu Temesgen"
              className="rounded-[28px] w-44 h-44 sm:w-56 sm:h-56 object-cover shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
          </div>

          <motion.div
            className="glass-panel rounded-3xl p-6 flex flex-wrap gap-3 justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {socials.map((social, idx) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group"
                  whileHover={{ y: -6 }}
                >
                  <div className="p-3 rounded-2xl bg-white/80 dark:bg-white/10 border border-white/40 text-slate-700 dark:text-slate-200 shadow-lg">
                    <Icon size={18} />
                  </div>
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

