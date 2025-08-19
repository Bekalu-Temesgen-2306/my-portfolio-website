import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, BookOpen, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, number: '20+', label: 'Projects Completed' },
    { icon: BookOpen, number: '100+', label: 'Hours of Learning' },
    { icon: GraduationCap, number: '3+', label: 'Years Experience' },
    { icon: Award, number: '5+', label: 'Certifications' },
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Computer Science Student',
      institution: 'Bahir Dar University',
      description: 'Pursuing degree in Computer Science with focus on web development and UX design.'
    },
    {
      year: '2023',
      title: 'Web Programming Certificate',
      institution: 'Udacity',
      description: 'Completed intensive 2-month course in web programming fundamentals.'
    },
    {
      year: '2022',
      title: 'SSS Training Certification',
      institution: 'Bahir Dar University',
      description: 'Certified in SSS training program.'
    },
    {
      year: '2021',
      title: 'Started Programming Journey',
      institution: 'Self-Learning',
      description: 'Began learning programming through online courses and documentation.'
    }
  ];

  return (
    <section id="about" className="section bg-light dark:bg-dark-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            I'm a passionate Computer Science student at Bahir Dar University, specializing in web development 
            and UX design. I'm dedicated to creating accessible and visually appealing digital solutions 
            that solve real-world problems.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-2 gap-8 items-start">
          {/* Left Column - Detailed About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-text-muted leading-relaxed">
              I'm passionate about coding and mastering different programming languages and skills. 
              I concentrate on taking online courses and have completed a non-degree program from 
              Udacity on programming fundamentals. I exploit different documentation, YouTube videos, 
              and any accessible reliable information to continuously improve my skills.
            </p>
            <p className="text-text-muted leading-relaxed">
              I've built different projects that handle feasible problems, such as the EthioTour website 
              that provides comprehensive information about Ethiopian tourism destinations. My approach 
              combines technical expertise with creative problem-solving to deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
            <div className="timeline space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="timeline-item relative pl-6 border-l-2 border-primary"
                >
                  <div className="timeline-marker"></div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-secondary font-medium mb-2">{item.institution}</p>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">What I Do Best</h3>
          <div className="grid grid-3 gap-6">
            {[
              {
                title: 'Web Development',
                description: 'Building responsive and modern web applications using the latest technologies.',
                icon: '🌐'
              },
              {
                title: 'UI/UX Design',
                description: 'Creating intuitive and beautiful user interfaces with focus on user experience.',
                icon: '🎨'
              },
              {
                title: 'Problem Solving',
                description: 'Analyzing complex problems and developing efficient, scalable solutions.',
                icon: '💡'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="font-bold text-lg mb-3">{skill.title}</h4>
                <p className="text-text-muted">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 