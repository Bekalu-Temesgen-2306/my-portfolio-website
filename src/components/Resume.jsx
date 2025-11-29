import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';

const tabs = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'achievements', label: 'Achievements', icon: Award },
];

const education = [
  {
    institution: 'Bahir Dar University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2023 - Present',
    location: 'Bahir Dar, Ethiopia',
    description: 'Focused on software engineering, algorithms, data structures, and web development. Graduated with honors.',
    courses: ['Web Development', 'Database Systems', 'Software Engineering', 'Computer Networks'],
  },
  {
    institution: 'Online Learning Platforms',
    degree: 'Self-Taught Developer',
    period: '2019 - Present',
    location: 'Remote',
    description: 'Continuous learning through platforms like Udemy, Coursera, and freeCodeCamp. Specialized in React, Node.js, and modern web technologies.',
    courses: ['React & Redux', 'Node.js & Express', 'TypeScript', 'UI/UX Design'],
  },
];

const experience = [
  {
    company: 'Alyah Software',
    position: 'Frontend Developer Intern',
    period: '2023 - 2024',
    location: 'Bahir Dar, Ethiopia',
    description: 'Developed and maintained responsive web applications using React and modern JavaScript. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    achievements: [
      'Built 3+ production-ready React applications',
      'Improved application performance by 40%',
      'Implemented responsive designs for mobile and desktop',
      'Collaborated with backend developers on API integration',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
  },
  {
    company: 'Freelance Developer',
    position: 'Web Developer',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Delivered custom web solutions for clients including hotel booking systems, portfolio websites, and e-commerce platforms.',
    achievements: [
      'Completed 10+ successful projects',
      'Achieved 100% client satisfaction rate',
      'Built scalable and maintainable codebases',
      'Delivered projects on time and within budget',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
  },
];

const resumeSkills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools & Others',
    items: ['Git & GitHub', 'Docker', 'VS Code', 'Figma', 'Vercel', 'Netlify', 'Postman'],
  },
];

const achievements = [
  {
    title: 'Outstanding Academic Performance',
    year: '2024',
    description: 'Graduated with honors in Computer Science, maintaining high GPA throughout the program.',
  },
  {
    title: '10+ Successful Projects',
    year: '2022 - 2024',
    description: 'Delivered multiple production-ready applications with positive client feedback and high user satisfaction.',
  },
  {
    title: 'Open Source Contributor',
    year: '2023 - Present',
    description: 'Active contributor to open-source projects, helping improve developer tools and libraries.',
  },
  {
    title: 'Continuous Learning',
    year: '2019 - Present',
    description: 'Completed 20+ online courses and certifications in web development, keeping up with latest technologies.',
  },
];

const LeafContainer = ({ children, rotation, offset }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const updateTransform = () => {
      if (containerRef.current) {
        if (window.innerWidth >= 768) {
          containerRef.current.style.transform = `rotate(${rotation}deg) translateY(${offset}px)`;
        } else {
          containerRef.current.style.transform = 'none';
        }
      }
    };
    
    updateTransform();
    window.addEventListener('resize', updateTransform);
    return () => window.removeEventListener('resize', updateTransform);
  }, [rotation, offset]);
  
  return (
    <div ref={containerRef} className="relative group transition-transform duration-300">
      {children}
    </div>
  );
};

const TimelineItem = ({ item, index, type, isLast = false }) => {
  const Icon = type === 'education' ? GraduationCap : Briefcase;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-8'} border-l-2 border-neon/30 dark:border-neon/20`}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon border-4 border-slate-50 dark:border-ink shadow-lg" />
      
      {/* Content Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-sm p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-300">
        <div className="flex items-start gap-4 mb-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-neon/20 to-cyan-400/20 border border-neon/30">
            <Icon className="w-5 h-5 text-neon" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold mb-1 text-slate-900 dark:text-white">
              {type === 'education' ? item.degree : item.position}
            </h3>
            <p className="text-neon font-medium text-sm mb-2">
              {type === 'education' ? item.institution : item.company}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {item.achievements && (
          <div className="space-y-2 mb-4">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Key Achievements:
            </p>
            <ul className="space-y-1.5">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-400">
                  <span className="text-neon mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.courses && (
          <div className="space-y-2 mb-4">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
              Key Courses:
            </p>
            <div className="flex flex-wrap gap-2">
              {item.courses.map((course, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs bg-neon/10 text-neon border border-neon/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-xs bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="resume" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-neon mb-2">Resume</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">
            Professional Journey
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mt-4 text-lg">
            A comprehensive overview of my education, experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-neon text-ink border-transparent shadow-lg'
                    : 'bg-white/90 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-neon -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'education' && (
              <div className="max-w-4xl mx-auto">
                {education.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    item={item} 
                    index={idx} 
                    type="education"
                    isLast={idx === education.length - 1}
                  />
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="max-w-4xl mx-auto">
                {experience.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    item={item} 
                    index={idx} 
                    type="experience"
                    isLast={idx === experience.length - 1}
                  />
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeSkills.map((skillGroup, idx) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-sm p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="font-display text-lg font-semibold mb-4 text-neon">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIdx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIdx * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-neon/10 to-cyan-400/10 text-slate-700 dark:text-slate-200 border border-neon/20"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="max-w-5xl mx-auto relative">
                {/* Central stem/branch line - desktop only */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon/30 via-cyan-400/30 to-teal-300/30 transform -translate-x-1/2 hidden md:block" />
                
                {/* Leaf-like achievements positioned organically */}
                <div className="relative space-y-6 md:space-y-12">
                  {achievements.map((achievement, idx) => {
                    // Alternate left and right positioning for organic flow
                    const isLeft = idx % 2 === 0;
                    const rotations = [-3, 2, -2, 3]; // Slight rotations for natural look
                    const offsets = [0, -20, 20, -15]; // Vertical offsets
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ 
                          delay: idx * 0.15, 
                          duration: 0.6,
                          type: 'spring',
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className={`relative ${isLeft ? 'md:pr-[55%]' : 'md:pl-[55%]'} ${idx > 0 ? 'md:mt-[-20px]' : ''}`}
                      >
                        {/* Leaf shape container with organic positioning on desktop */}
                        <LeafContainer rotation={rotations[idx]} offset={offsets[idx]}>
                          {/* Leaf-like card with organic shape */}
                          <motion.div
                            whileHover={{ 
                              scale: 1.05, 
                              rotate: rotations[idx] * 0.5,
                              y: -8
                            }}
                            className="relative rounded-3xl md:rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] border-2 border-slate-200 dark:border-white/10 bg-gradient-to-br from-white/95 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl p-6 md:p-8 shadow-lg dark:shadow-glass-dark transition-all duration-500 overflow-hidden"
                          >
                            {/* Leaf vein pattern - subtle background */}
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none">
                              <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                                <path
                                  d="M 100 20 Q 120 60, 140 100 T 100 180 Q 80 140, 60 100 T 100 20"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  fill="none"
                                />
                                <path
                                  d="M 100 20 L 100 180"
                                  stroke="currentColor"
                                  strokeWidth="0.8"
                                />
                                <path
                                  d="M 100 60 Q 110 80, 120 100"
                                  stroke="currentColor"
                                  strokeWidth="0.6"
                                />
                                <path
                                  d="M 100 60 Q 90 80, 80 100"
                                  stroke="currentColor"
                                  strokeWidth="0.6"
                                />
                              </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                                <motion.div
                                  whileHover={{ rotate: 15, scale: 1.1 }}
                                  className="p-3 rounded-2xl bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-rose-400/20 border border-amber-400/30 shadow-sm flex-shrink-0"
                                >
                                  <Award className="w-6 h-6 text-amber-400" />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
                                    <h3 className="font-display text-lg md:text-xl font-semibold text-slate-900 dark:text-white leading-tight">
                                      {achievement.title}
                                    </h3>
                                    <span className="text-xs text-neon font-bold px-3 py-1 rounded-full bg-gradient-to-r from-neon/10 to-cyan-400/10 border border-neon/20 whitespace-nowrap self-start sm:self-auto">
                                      {achievement.year}
                                    </span>
                                  </div>
                                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {achievement.description}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-amber-400/0 via-orange-400/0 to-rose-400/0 group-hover:from-amber-400/10 group-hover:via-orange-400/10 group-hover:to-rose-400/10 transition-all duration-500 pointer-events-none" />
                          </motion.div>

                          {/* Connection point to stem (desktop only) */}
                          {idx < achievements.length - 1 && (
                            <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} w-[45%] h-0.5 bg-gradient-to-r ${isLeft ? 'from-transparent via-neon/40 to-neon/40' : 'from-neon/40 via-neon/40 to-transparent'} transform translate-y-[-1px]`} />
                          )}
                        </LeafContainer>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Download Resume Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neon text-ink font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

