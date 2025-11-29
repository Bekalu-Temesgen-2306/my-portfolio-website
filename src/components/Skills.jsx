import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Server, 
  Palette, 
  Wrench, 
  Users,
  Sparkles
} from 'lucide-react';
import { skills } from '../data';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      gradient: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
      borderGradient: 'from-blue-400/40 via-cyan-400/40 to-teal-400/40',
      iconColor: 'text-blue-400',
      skills: skills.find(s => s.title === 'Frontend')?.items || [],
    },
    {
      title: 'Backend',
      icon: Server,
      gradient: 'from-emerald-500/10 via-green-500/10 to-lime-500/10',
      borderGradient: 'from-emerald-400/40 via-green-400/40 to-lime-400/40',
      iconColor: 'text-emerald-400',
      skills: skills.find(s => s.title === 'Backend')?.items || [],
    },
    {
      title: 'Design',
      icon: Palette,
      gradient: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
      borderGradient: 'from-purple-400/40 via-pink-400/40 to-rose-400/40',
      iconColor: 'text-purple-400',
      skills: skills.find(s => s.title === 'Design')?.items || [],
    },
    {
      title: 'Tools',
      icon: Wrench,
      gradient: 'from-amber-500/10 via-orange-500/10 to-red-500/10',
      borderGradient: 'from-amber-400/40 via-orange-400/40 to-red-400/40',
      iconColor: 'text-amber-400',
      skills: skills.find(s => s.title === 'Tools')?.items || [],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      gradient: 'from-indigo-500/10 via-violet-500/10 to-purple-500/10',
      borderGradient: 'from-indigo-400/40 via-violet-400/40 to-purple-400/40',
      iconColor: 'text-indigo-400',
      skills:skills.find(s => s.title === 'Soft Skills')?.items || [],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-neon mb-2">Skillset</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 text-slate-900 dark:text-white">Professional Expertise</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-4 text-lg">
            Comprehensive skill set across modern web technologies, design principles, and collaborative tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isHovered = hoveredSkill === idx;
            const isActive = activeSkill === idx;
            const showDetails = isHovered || isActive;
            
            return (
              <motion.div
                key={category.title}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredSkill(idx)}
                onHoverEnd={() => setHoveredSkill(null)}
                onTap={() => setActiveSkill(isActive ? null : idx)}
              >
                <motion.div
                  className={`relative rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-300 ${
                    showDetails 
                      ? 'border-slate-300 dark:border-white/30 bg-white dark:bg-white/15 shadow-2xl' 
                      : 'border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 shadow-lg'
                  }`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.borderGradient} opacity-0 group-hover:opacity-100 dark:group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} border border-white/20 backdrop-blur-sm`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className={`w-7 h-7 ${category.iconColor}`} />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: showDetails ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sparkles className={`w-5 h-5 ${showDetails ? category.iconColor : 'text-slate-400'}`} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-semibold mb-2 text-slate-900 dark:text-white">{category.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                      {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                    </p>

                    {/* Skills List */}
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="space-y-3 overflow-hidden"
                        >
                          {category.skills.map((skill, skillIdx) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIdx * 0.08, duration: 0.3 }}
                              className="rounded-xl border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/10 p-4 backdrop-blur-sm"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                  {skill.name}
                                </p>
                                <span className="text-xs font-bold text-neon">{skill.level}%</span>
                              </div>
                              {skill.description && (
                                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                                  {skill.description}
                                </p>
                              )}
                              <div className="h-2 rounded-full bg-slate-200 dark:bg-white/20 overflow-hidden">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${
                                    category.title === 'Frontend' 
                                      ? 'from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300'
                                      : category.title === 'Backend'
                                      ? 'from-emerald-500 to-green-400 dark:from-emerald-400 dark:to-green-300'
                                      : category.title === 'Design'
                                      ? 'from-purple-500 to-pink-400 dark:from-purple-400 dark:to-pink-300'
                                      : category.title === 'Tools'
                                      ? 'from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300'
                                      : 'from-indigo-500 to-violet-400 dark:from-indigo-400 dark:to-violet-300'
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.8, delay: skillIdx * 0.1, ease: 'easeOut' }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hint */}
                    {!showDetails && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Hover or tap to explore</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

