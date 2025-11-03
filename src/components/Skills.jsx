import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Cloud, Zap  } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'tools', name: 'Tools', icon: Cloud },
  ];

  const skills = {
    frontend: [
      { name: 'HTML', level: 99, color: '#E34F26' },
      { name: 'CSS', level: 95, color: '#1572B6' },
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { name: 'React', level: 85, color: '#61DAFB' },
      { name: 'TypeScript', level: 80, color: '#3178C6' },
      { name: 'Next.js', level: 75, color: '#000000' },
    ],
    design: [
      { name: 'UI/UX Design', level: 90, color: '#FF6B6B' },
      { name: 'Figma', level: 85, color: '#F24E1E' },
      { name: 'Adobe XD', level: 80, color: '#FF61F6' },
      { name: 'Photoshop', level: 75, color: '#31A8FF' },
      { name: 'Illustrator', level: 70, color: '#FF9A00' },
    ],
    backend: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Express.js', level: 75, color: '#000000' },
      { name: 'MongoDB', level: 70, color: '#47A248' },
      { name: 'PostgreSQL', level: 65, color: '#336791' },
      { name: 'Firebase', level: 75, color: '#FFCA28' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 99, color: '#F05032' },
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'AWS', level: 65, color: '#FF9900' },
      { name: 'Vercel', level: 80, color: '#000000' },
    ],
  };

  const currentSkills = skills[activeCategory] || [];

  const whatIDoItems = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern web applications using the latest technologies and best practices.',
      icon: Code,
      color: '#61DAFB'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.',
      icon: Palette,
      color: '#FF6B6B'
    },
    {
      title: 'Problem Solving',
      description: 'Analyzing complex problems and developing efficient, scalable solutions with clean code.',
      icon: Zap,
      color: '#FFD54F'
    }
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-dark">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">My technical skills and areas of expertise</p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="skill-categories mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`pill ${activeCategory === category.id ? 'pill--active' : ''}`}
            >
              <category.icon size={18} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-2 gap-8"
        >
          {/* Skills List */}
          <div className="space-y-6">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="skill-item"
              >
                <div className="skill-header">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar-fill"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-12 text-center section-title">
            What I Do Best
          </h2>

          <div className="grid grid-3 gap-8">
            {whatIDoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="what-i-do-card"
              >
                <div className="what-i-do-icon" style={{ backgroundColor: item.color + '20' }}>
                  <item.icon size={32} style={{ color: item.color }} />
                </div>
                <h4 className="what-i-do-title">{item.title}</h4>
                <p className="what-i-do-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See My Work in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 