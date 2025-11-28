import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const links = [
  { label: 'Home', to: '#hero' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Resume', to: '#resume' },
  { label: 'Contact', to: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleScroll = selector => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <div className="max-w-6xl w-full backdrop-blur-xl bg-white/70 dark:bg-glass-dark border border-white/20 dark:border-white/5 rounded-3xl shadow-glass-light dark:shadow-glass-dark px-6 py-3 flex items-center justify-between">
        <motion.button whileHover={{ scale: 1.02 }} className="font-display text-lg tracking-wide" onClick={() => handleScroll('#hero')}>
          <span className="text-neon font-semibold">Bekalu</span> Temesgen
        </motion.button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-slate-700 dark:text-slate-300 hover:text-neon transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/30 dark:bg-white/10 border border-white/30"
            whileTap={{ rotate: 360, scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ type: 'spring', stiffness: 150, damping: 12 }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>

          <button className="md:hidden p-2 rounded-full bg-white/20 dark:bg-white/10" onClick={() => setOpen(prev => !prev)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            {/* Mobile menu */}
            <motion.nav
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-20 left-4 right-4 max-w-6xl mx-auto backdrop-blur-lg bg-white/95 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-glass-dark overflow-hidden z-50"
            >
              <div className="flex flex-col divide-y divide-slate-200 dark:divide-white/10">
                {links.map(link => (
                  <motion.button
                    key={link.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.to);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-6 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-neon hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-left w-full"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

