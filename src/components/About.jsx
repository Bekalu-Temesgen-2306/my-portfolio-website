import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative hidden lg:flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-x-10 -top-6 h-64 bg-gradient-to-br from-neon/20 to-amber-300/10 blur-[70px]" />
          <motion.div
            className="relative w-72 h-72 rounded-[40px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 shadow-lg dark:shadow-glass-dark overflow-hidden backdrop-blur-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <img
              src="/images/bekalu.jpg"
              alt="Bekalu Temesgen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm uppercase tracking-[0.3em]">Bekalu Temesgen</p>
              <p className="text-xs opacity-70 mt-1">Bahir Dar • Remote-ready</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="lg:pl-8"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-neon mb-4 font-medium">About me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-slate-900 dark:text-white mb-8 leading-tight">
            Frontend Developer &<br />
            <span className="bg-gradient-to-r from-neon via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              React Specialist
            </span>
          </h2>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-[1.8] max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-neon/30 dark:border-neon/20"
            >
              I'm a <strong className="text-slate-900 dark:text-white font-semibold">Frontend Developer</strong> specializing in React, building clean, performant interfaces that solve real problems. My approach combines thoughtful UI design with solid engineering—writing maintainable code, thinking through user flows, and shipping features that matter.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-neon/30 dark:border-neon/20"
            >
              I enjoy building responsive web applications, crafting smooth animations, and creating intuitive user experiences. I'm self-driven and learn best through hands-on projects, documentation, and experimenting with new technologies. Whether it's a complex state management challenge or a pixel-perfect design implementation, I focus on delivering quality work that teams can rely on.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-neon/30 dark:border-neon/20"
            >
              I bring clear communication, problem-solving skills, and a collaborative mindset to every project. Long-term, I'm focused on growing as a technical leader while contributing to products that make a meaningful impact.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

