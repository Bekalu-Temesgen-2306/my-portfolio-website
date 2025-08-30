import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Eye, Code, Palette, Database, Image } from 'lucide-react';

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
      placeholder: true,
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
      placeholder: true,
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
      placeholder: true,
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
      placeholder: true,
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
      placeholder: true,
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
      placeholder: true,
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
          <p className="section-subtitle">Showcasing my best work and technical expertise</p>
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
              whileHover={{ y: -2, scale: 1.05 }}
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="project-card"
              >
                {/* Project Image Placeholder */}
                <div className="project-image-container">
                  {project.placeholder ? (
                    <div className="project-image-placeholder">
                      <Image size={48} className="placeholder-icon" />
                      <p className="placeholder-text">Project Image</p>
                      <p className="placeholder-subtext">Coming Soon</p>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  
                  {project.status === 'in-progress' && (
                    <div className="project-status">
                      <span className="status-badge">In Progress</span>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-category">
                      {React.createElement(getCategoryIcon(project.category), { size: 18, className: 'category-icon' })}
                      <span className="category-text">{project.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more-tag">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary btn-sm"
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
                      className="btn btn-secondary btn-sm"
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