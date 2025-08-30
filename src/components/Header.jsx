import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header__inner">
          {/* Logo with Profile Photo */}
          <motion.div whileHover={{ scale: 1.05 }} className="header__logo">
            <Link to="/" className="logo-link">
              <div className="profile-photo">
                <img 
                  src="/images/bekalu.jpg" 
                  alt="Bekalu Temesgen" 
                  className="profile-photo__img"
                />
              </div>
              <span className="logo-text">Bekalu Temesgen</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2, scale: 1.02 }}>
                {item.href.startsWith('/#') ? (
                  <button onClick={() => scrollToSection(item.href)} className="nav-link">
                    {item.name}
                  </button>
                ) : (
                  <Link to={item.href} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="header__controls">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav--open' : ''}`} initial={false}>
          <div className="mobile-nav__list">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.href.startsWith('/#') ? (
                  <button onClick={() => scrollToSection(item.href)} className="mobile-nav__link">
                    {item.name}
                  </button>
                ) : (
                  <Link to={item.href} className="mobile-nav__link" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header; 