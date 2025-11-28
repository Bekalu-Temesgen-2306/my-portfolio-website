import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'classnames';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const tabs = ['All', 'Web', 'Fullstack'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-neon mb-2">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4">Featured Work</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-4 text-lg">
            A collection of projects showcasing modern web development and design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={clsx(
                'px-5 py-2 rounded-full border text-sm font-medium transition-colors',
                filter === tab
                  ? 'bg-neon text-ink border-transparent shadow-lg'
                  : 'bg-white/90 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-white/10'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-lg dark:shadow-glass-dark group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="h-64 sm:h-72 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                {/* Project Image */}
                {project.image ? (
                  <>
                    <motion.img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center px-6 z-10">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <p className="text-sm uppercase tracking-[0.4em] font-medium">View Project</p>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-neon text-ink font-semibold text-sm hover:bg-neon/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit Live Site
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </>
                ) : (
                  // Placeholder if no image is provided
                  <div className="w-full h-full bg-gradient-to-br from-neon/20 via-cyan-400/20 to-teal-300/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-700 dark:text-slate-300 text-lg font-semibold">{project.title}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Screenshot coming soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative p-6 flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-neon font-medium">{project.category}</p>
                  <h3 className="font-display text-2xl mt-2 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <div
                      key={tech}
                      className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-white/5"
                      title={tech}
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon/40 text-neon hover:bg-neon/10 transition-colors"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      <ExternalLink size={16} /> Live
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

