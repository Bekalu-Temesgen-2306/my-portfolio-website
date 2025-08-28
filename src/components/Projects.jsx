import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Eye, Code, Palette, Database } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'EthioTour Website',
      description: 'A comprehensive tourism website showcasing Ethiopian destinations with booking functionality, interactive maps, and cultural information.',
      image: '/images/projects/ethiotour.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://ethiotour.com',
      githubUrl: 'https://github.com/bekalu/ethiotour',
      features: ['Responsive Design', 'Booking System', 'Interactive Maps', 'Admin Dashboard'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with payment integration, user authentication, and inventory management.',
      image: '/images/projects/ecommerce.jpg',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/bekalu/ecommerce',
      features: ['Payment Processing', 'User Authentication', 'Admin Panel', 'Real-time Updates'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/images/projects/taskapp.jpg',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveUrl: 'https://taskapp-demo.com',
      githubUrl: 'https://github.com/bekalu/taskapp',
      features: ['Real-time Collaboration', 'Drag & Drop', 'Progress Tracking', 'Team Management'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive charts, and weather alerts.',
      image: '/images/projects/weather.jpg',
      category: 'web',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://weather-dashboard.com',
      githubUrl: 'https://github.com/bekalu/weather-app',
      features: ['Location Detection', 'Interactive Charts', 'Weather Alerts', 'Responsive Design'],
      status: 'completed'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations.',
      image: '/images/projects/portfolio.jpg',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://bekalu-portfolio.com',
      githubUrl: 'https://github.com/bekalu/portfolio',
      features: ['Smooth Animations', 'Dark Mode', 'Responsive Design', 'SEO Optimized'],
      status: 'completed'
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'A mobile banking application with secure authentication, transaction history, and bill payments.',
      image: '/images/projects/banking.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      liveUrl: null,
      githubUrl: 'https://github.com/bekalu/banking-app',
      features: ['Secure Authentication', 'Transaction History', 'Bill Payments', 'Push Notifications'],
      status: 'in-progress'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Code;
      case 'mobile': return Database;
      case 'design': return Palette;
      case 'fullstack': return Code;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="section bg-light dark:bg-dark-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>

        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="filter-bar mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`pill ${activeFilter === filter.id ? 'pill--active' : ''}`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group overflow-hidden"
              >
                  {project.status === 'in-progress' && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      In Progress
                    </div>
                  )}
                  
                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    {React.createElement(getCategoryIcon(project.category), { size: 20, className: 'text-primary' })}
                    <span className="text-sm text-text-muted capitalize">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary flex-1 text-center text-sm"
                      >
                        <Eye size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary flex-1 text-center text-sm"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-muted mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 