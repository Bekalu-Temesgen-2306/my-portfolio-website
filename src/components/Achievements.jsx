import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, FileText, Trophy, Star, Calendar, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      title: 'Web Programming Certificate',
      issuer: 'Udacity',
      date: '2023',
      description: 'Completed a 2-month intensive course in web programming fundamentals, covering HTML, CSS, JavaScript, and modern web development practices.',
      icon: FileText,
      image: '/images/UdacityCerteficate.jpg',
      category: 'certification',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'SSS Training Certification',
      issuer: 'Bahir Dar University',
      date: '2022',
      description: 'Successfully completed SSS training program, demonstrating commitment to professional development and skill enhancement.',
      icon: Trophy,
      image: null,
      category: 'training',
      skills: ['Professional Development', 'Leadership', 'Teamwork']
    },
    {
      id: 3,
      title: 'Academic Excellence',
      issuer: 'Bahir Dar University',
      date: '2023',
      description: 'Maintained high academic performance in Computer Science program, consistently achieving top grades in programming and design courses.',
      icon: Star,
      image: null,
      category: 'academic',
      skills: ['Computer Science', 'Programming', 'Problem Solving']
    },

  ];

  const stats = [
    { number: '5+', label: 'Certifications', icon: FileText },
    { number: '20+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Learning', icon: Calendar },
    { number: '100+', label: 'Hours of Study', icon: Star },
  ];

  return (
    <section id="achievements" className="section bg-white dark:bg-dark">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            My journey in technology has been marked by continuous learning and recognition. 
            Here are some of my key achievements and certifications.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white">
                    <achievement.icon size={32} />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">{achievement.date}</span>
                  </div>
                  
                  <p className="text-secondary font-medium">{achievement.issuer}</p>
                  
                  <p className="text-text-muted text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary text-sm mt-4"
                    onClick={() => {
                      if (achievement.image) {
                        window.open("/images/udacity.jpg", '_blank');
                      }
                    }}
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Continuous Learning</h3>
          <div className="grid grid-3 gap-6">
            {[
              {
                title: 'Online Courses',
                description: 'Completed 20+ online courses on platforms like Udemy, Coursera, and freeCodeCamp.',
                icon: '📚',
                count: '20+'
              },
              {
                title: 'Hackathons',
                description: 'Participated in various hackathons and coding competitions.',
                icon: '🏆',
                count: '5+'
              },
              {
                title: 'Open Source',
                description: 'Contributed to open source projects and community development.',
                icon: '🌟',
                count: '10+'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm mb-3">{item.description}</p>
                <div className="text-2xl font-bold text-primary">{item.count}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

          <p className="text-lg text-text-muted mb-6">
            Always striving to learn new technologies and improve my skills.
          </p>


      </div>
    </section>
  );
};

export default Achievements; 