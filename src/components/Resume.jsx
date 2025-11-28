import { useState } from 'react';
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
    institution: 'Addis Ababa University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2020 - 2024',
    location: 'Addis Ababa, Ethiopia',
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
    location: 'Addis Ababa, Ethiopia',
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
              <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-xs text-neon font-semibold px-2 py-1 rounded-full bg-neon/10">
                            {achievement.year}
                          </span>
                        </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {achievement.description}
                          </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
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

